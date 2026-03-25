/**
 * AIOS Skills Handlers - Tests
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  success,
  failure,
  successWithTriggers,
  defaultDependencies,
  defaultOptions,
  withErrorHandling,
  withDryRun,
  noopHandler,
  validateContext,
} from './base'
import type { ExtendedSkillContext, HandlerDependencies } from './types'
import {
  handleDraft,
  handleValidateStoryDraft,
  handleCommit,
  handleGate,
  handlePush,
  sdcHandlers,
  allHandlers,
  getHandler,
  hasHandler,
  listHandledSkills,
} from './index'

// Helper to create test context
function createTestContext(overrides?: Partial<ExtendedSkillContext>): ExtendedSkillContext {
  return {
    sessionId: 'test-session',
    executingAgent: 'dev',
    deps: createMockDeps(),
    options: { ...defaultOptions },
    ...overrides,
  }
}

// Helper to create mock dependencies
function createMockDeps(): HandlerDependencies {
  return {
    fs: {
      read: vi.fn().mockResolvedValue(''),
      write: vi.fn().mockResolvedValue(undefined),
      exists: vi.fn().mockResolvedValue(true),
      glob: vi.fn().mockResolvedValue([]),
    },
    git: {
      status: vi.fn().mockResolvedValue({ hasChanges: true }),
      add: vi.fn().mockResolvedValue(undefined),
      commit: vi.fn().mockResolvedValue('abc123'),
      push: vi.fn().mockResolvedValue(undefined),
      branch: vi.fn().mockResolvedValue('main'),
    },
    logger: {
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      debug: vi.fn(),
    },
    prompt: {
      confirm: vi.fn().mockResolvedValue(true),
      input: vi.fn().mockResolvedValue(''),
      select: vi.fn().mockImplementation((_msg, opts) => Promise.resolve(opts[0])),
    },
  }
}

describe('Base Handler Utilities', () => {
  it('should create success result', () => {
    const result = success({ value: 42 })
    expect(result.success).toBe(true)
    expect(result.data).toEqual({ value: 42 })
  })

  it('should create success result with warnings', () => {
    const result = success('data', ['warning1', 'warning2'])
    expect(result.success).toBe(true)
    expect(result.warnings).toEqual(['warning1', 'warning2'])
  })

  it('should create failure result', () => {
    const result = failure('Something went wrong')
    expect(result.success).toBe(false)
    expect(result.error).toBe('Something went wrong')
  })

  it('should create success with triggered skills', () => {
    const result = successWithTriggers('data', ['skill:a', 'skill:b'])
    expect(result.success).toBe(true)
    expect(result.triggeredSkills).toEqual(['skill:a', 'skill:b'])
  })

  it('should validate required context fields', () => {
    const context = createTestContext()

    // Missing story context
    const error = validateContext(context, ['story'])
    expect(error).toBe('Missing required context: story')

    // With story context
    const contextWithStory = createTestContext({
      story: { storyId: '1.1' },
    })
    const noError = validateContext(contextWithStory, ['story'])
    expect(noError).toBeNull()
  })
})

describe('Handler Wrappers', () => {
  it('withErrorHandling should catch errors', async () => {
    const failingHandler = async () => {
      throw new Error('Test error')
    }

    const wrapped = withErrorHandling(failingHandler)
    const context = createTestContext()
    const result = await wrapped(context)

    expect(result.success).toBe(false)
    expect(result.error).toBe('Test error')
  })

  it('withDryRun should return dry run result', async () => {
    const handler = async () => success('real result')
    const wrapped = withDryRun(handler, 'dry run result')

    const context = createTestContext({
      options: { ...defaultOptions, dryRun: true },
    })
    const result = await wrapped(context)

    expect(result.success).toBe(true)
    expect(result.data).toBe('dry run result')
    expect(result.warnings).toContain('Executed in dry-run mode')
  })

  it('noopHandler should return warning', async () => {
    const handler = noopHandler('Not implemented yet')
    const context = createTestContext()
    const result = await handler(context)

    expect(result.success).toBe(true)
    expect(result.warnings).toContain('Not implemented yet')
  })
})

describe('SDC Handlers', () => {
  describe('handleDraft', () => {
    it('should require epicId', async () => {
      const context = createTestContext()
      const result = await handleDraft(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Epic ID is required')
    })

    it('should create story draft with epicId', async () => {
      const context = createTestContext({
        epicId: 'epic-1',
      })

      const result = await handleDraft(context, { title: 'Test Story' })

      expect(result.success).toBe(true)
      expect(result.data?.storyId).toBeDefined()
      expect(result.data?.status).toBe('Draft')
      expect(result.triggeredSkills).toContain('po:validate-story-draft')
    })

    it('should respect dryRun option', async () => {
      const context = createTestContext({
        epicId: 'epic-1',
        options: { ...defaultOptions, dryRun: true },
      })

      const result = await handleDraft(context)

      expect(result.success).toBe(true)
      expect(result.warnings).toContain('Executed in dry-run mode')
      expect(context.deps.fs.write).not.toHaveBeenCalled()
    })
  })

  describe('handleValidateStoryDraft', () => {
    it('should require story path', async () => {
      const context = createTestContext()
      const result = await handleValidateStoryDraft(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Story path is required')
    })

    it('should validate story and return verdict', async () => {
      const mockContent = `# 1.1 - Test Story

## Metadata
- **Status:** Draft
- **Complexity:** M

## Description
This is a test story that describes the problem we're solving.

## Acceptance Criteria
- [ ] Given something, When action, Then result

## Scope
### IN
- Feature A
### OUT
- Feature B

## Dependencies
- Story 1.0

## Risks
- Risk A

## Definition of Done
- [ ] Tests passing

## References
- PRD-001
`
      const context = createTestContext({
        story: { storyId: '1.1', storyPath: 'docs/stories/1.1.story.md' },
      })
      vi.mocked(context.deps.fs.read).mockResolvedValue(mockContent)

      const result = await handleValidateStoryDraft(context)

      expect(result.success).toBe(true)
      expect(result.data?.verdict).toBeDefined()
      expect(['GO', 'NO-GO']).toContain(result.data?.verdict)
    })
  })

  describe('handleCommit', () => {
    it('should require commit message', async () => {
      const context = createTestContext()
      const result = await handleCommit(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Commit message is required')
    })

    it('should create commit with message', async () => {
      const context = createTestContext({
        story: { storyId: '1.1' },
      })

      const result = await handleCommit(context, {
        message: 'feat: add feature',
        files: ['src/index.ts'],
      })

      expect(result.success).toBe(true)
      expect(result.data?.hash).toBeDefined()
      expect(result.data?.message).toContain('feat: add feature')
    })
  })

  describe('handleGate', () => {
    it('should require story ID', async () => {
      const context = createTestContext()
      const result = await handleGate(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Story ID is required')
    })

    it('should run gate checks and return verdict', async () => {
      const context = createTestContext({
        story: { storyId: '1.1' },
      })

      const result = await handleGate(context)

      expect(result.success).toBe(true)
      expect(result.data?.verdict).toBeDefined()
      expect(['PASS', 'CONCERNS', 'FAIL', 'WAIVED']).toContain(result.data?.verdict)
      expect(result.data?.checks).toHaveLength(7)
    })
  })

  describe('handlePush', () => {
    it('should fail if there are uncommitted changes', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.git.status).mockResolvedValue({ hasChanges: true })

      const result = await handlePush(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('uncommitted changes')
    })

    it('should push changes successfully', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.git.status).mockResolvedValue({ hasChanges: false })

      const result = await handlePush(context)

      expect(result.success).toBe(true)
      expect(result.data?.success).toBe(true)
    })

    it('should respect user cancellation', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.git.status).mockResolvedValue({ hasChanges: false })
      vi.mocked(context.deps.prompt.confirm).mockResolvedValue(false)

      const result = await handlePush(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('cancelled by user')
    })
  })
})

describe('Handler Registry', () => {
  it('should have all SDC handlers registered', () => {
    expect(sdcHandlers['sm:draft']).toBeDefined()
    expect(sdcHandlers['po:validate-story-draft']).toBeDefined()
    expect(sdcHandlers['dev:develop']).toBeDefined()
    expect(sdcHandlers['qa:gate']).toBeDefined()
    expect(sdcHandlers['devops:push']).toBeDefined()
  })

  it('should get handler by skill ID', () => {
    const handler = getHandler('dev:develop')
    expect(handler).toBeDefined()
  })

  it('should check if handler exists', () => {
    expect(hasHandler('dev:develop')).toBe(true)
    expect(hasHandler('unknown:skill')).toBe(false)
  })

  it('should list all handled skills', () => {
    const skills = listHandledSkills()
    expect(skills).toContain('sm:draft')
    expect(skills).toContain('dev:develop')
    expect(skills).toContain('devops:push')
    expect(skills.length).toBeGreaterThan(10)
  })

  it('allHandlers should include SDC handlers', () => {
    expect(allHandlers['sm:draft']).toBe(sdcHandlers['sm:draft'])
    expect(allHandlers['dev:develop']).toBe(sdcHandlers['dev:develop'])
  })
})
