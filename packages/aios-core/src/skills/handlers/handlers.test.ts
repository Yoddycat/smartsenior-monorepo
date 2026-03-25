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
  getHandlerCounts,
  // New SDC handlers
  handleCreateNextStory,
  handleCloseStory,
  handlePrioritizeBacklog,
  handleRefactor,
  handleCodeRabbitReview,
  handleSecurityAudit,
  handleCritiqueSpec,
  handleSetupMcp,
  // Data Engineer handlers
  handleCreateSchema,
  handleOptimizeQuery,
  handleCreateMigration,
  handleAuditDatabase,
  handleImplementRls,
  dataEngineerHandlers,
  // UX Design Expert handlers
  handleCreatePrototype,
  handleReviewUx,
  handleCreateWireframe,
  handleAuditAccessibility,
  handleCreateDesignSystem,
  handleUserFlowAnalysis,
  uxDesignExpertHandlers,
  // AIOS Master handlers
  handleConfig,
  aiosMasterHandlers,
  // Architect handlers
  handleCreateArchitecture,
  handleReviewArchitecture,
  handleAssessComplexity,
  architectHandlers,
  // Analyst handlers
  handleCompetitorAnalysis,
  analystHandlers,
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

  it('should include Data Engineer handlers', () => {
    expect(allHandlers['data-engineer:create-schema']).toBeDefined()
    expect(allHandlers['data-engineer:optimize-query']).toBeDefined()
    expect(allHandlers['data-engineer:create-migration']).toBeDefined()
    expect(allHandlers['data-engineer:audit-database']).toBeDefined()
    expect(allHandlers['data-engineer:implement-rls']).toBeDefined()
  })

  it('should include UX Design Expert handlers', () => {
    expect(allHandlers['ux-design-expert:create-prototype']).toBeDefined()
    expect(allHandlers['ux-design-expert:review-ux']).toBeDefined()
    expect(allHandlers['ux-design-expert:create-wireframe']).toBeDefined()
    expect(allHandlers['ux-design-expert:audit-accessibility']).toBeDefined()
    expect(allHandlers['ux-design-expert:create-design-system']).toBeDefined()
    expect(allHandlers['ux-design-expert:user-flow-analysis']).toBeDefined()
  })

  it('should return handler counts by category', () => {
    const counts = getHandlerCounts()
    expect(counts.total).toBeGreaterThan(40)
    expect(counts.byCategory['data-engineer']).toBe(5)
    expect(counts.byCategory['ux-design-expert']).toBe(6)
  })
})

describe('Data Engineer Handlers', () => {
  describe('handleCreateSchema', () => {
    it('should create schema with default tables', async () => {
      const context = createTestContext()
      const result = await handleCreateSchema(context)

      expect(result.success).toBe(true)
      expect(result.data?.schemaPath).toContain('database/schemas/')
      expect(result.data?.tables).toHaveLength(2)
      expect(result.data?.indexes).toBeDefined()
    })

    it('should create schema with custom tables', async () => {
      const context = createTestContext()
      const result = await handleCreateSchema(context, {
        projectName: 'test-project',
        tables: ['orders', 'products', 'customers'],
      })

      expect(result.success).toBe(true)
      expect(result.data?.tables).toHaveLength(3)
      expect(result.triggeredSkills).toContain('data-engineer:create-migration')
    })

    it('should respect dryRun option', async () => {
      const context = createTestContext({
        options: { ...defaultOptions, dryRun: true },
      })

      const result = await handleCreateSchema(context)

      expect(result.success).toBe(true)
      expect(context.deps.fs.write).not.toHaveBeenCalled()
    })
  })

  describe('handleOptimizeQuery', () => {
    it('should require query input', async () => {
      const context = createTestContext()
      const result = await handleOptimizeQuery(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Query is required')
    })

    it('should suggest avoiding SELECT *', async () => {
      const context = createTestContext()
      const result = await handleOptimizeQuery(context, {
        query: 'SELECT * FROM users WHERE id = 1',
      })

      expect(result.success).toBe(true)
      expect(result.data?.suggestions).toBeDefined()
      expect(result.data?.suggestions.some(s => s.description.includes('SELECT *'))).toBe(true)
    })

    it('should suggest index for WHERE clause', async () => {
      const context = createTestContext()
      const result = await handleOptimizeQuery(context, {
        query: 'SELECT name FROM users WHERE email = "test@test.com"',
      })

      expect(result.success).toBe(true)
      expect(result.data?.suggestions.some(s => s.type === 'index')).toBe(true)
    })
  })

  describe('handleCreateMigration', () => {
    it('should create migration with confirmation', async () => {
      const context = createTestContext()
      const result = await handleCreateMigration(context, {
        name: 'add_users_table',
        description: 'Add users table',
      })

      expect(result.success).toBe(true)
      expect(result.data?.migrationPath).toContain('database/migrations/')
      expect(result.data?.rollbackSupported).toBe(true)
    })

    it('should fail if user cancels', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.prompt.confirm).mockResolvedValue(false)

      const result = await handleCreateMigration(context, {
        name: 'test_migration',
      })

      expect(result.success).toBe(false)
      expect(result.error).toContain('cancelled')
    })
  })

  describe('handleAuditDatabase', () => {
    it('should return audit results with score', async () => {
      const context = createTestContext()
      const result = await handleAuditDatabase(context)

      expect(result.success).toBe(true)
      expect(result.data?.score).toBeGreaterThanOrEqual(0)
      expect(result.data?.score).toBeLessThanOrEqual(100)
      expect(result.data?.issues).toBeDefined()
      expect(result.data?.recommendations).toBeDefined()
    })
  })

  describe('handleImplementRls', () => {
    it('should create RLS policies for tables', async () => {
      const context = createTestContext()
      const result = await handleImplementRls(context, {
        tables: ['users', 'orders'],
        tenantColumn: 'org_id',
      })

      expect(result.success).toBe(true)
      expect(result.data?.policies).toHaveLength(2)
      expect(result.data?.tablesProtected).toContain('users')
      expect(result.data?.tablesProtected).toContain('orders')
    })
  })

  it('should have all handlers in dataEngineerHandlers map', () => {
    expect(Object.keys(dataEngineerHandlers)).toHaveLength(5)
    expect(dataEngineerHandlers['data-engineer:create-schema']).toBe(handleCreateSchema)
    expect(dataEngineerHandlers['data-engineer:optimize-query']).toBe(handleOptimizeQuery)
  })
})

describe('UX Design Expert Handlers', () => {
  describe('handleCreatePrototype', () => {
    it('should create prototype with default screens', async () => {
      const context = createTestContext()
      const result = await handleCreatePrototype(context)

      expect(result.success).toBe(true)
      expect(result.data?.prototypePath).toContain('docs/prototypes/')
      expect(result.data?.screens).toHaveLength(3)
      expect(result.data?.fidelity).toBe('medium')
    })

    it('should create prototype with custom fidelity', async () => {
      const context = createTestContext()
      const result = await handleCreatePrototype(context, {
        name: 'mobile-app',
        fidelity: 'high',
        screens: ['Login', 'Home', 'Profile', 'Settings'],
      })

      expect(result.success).toBe(true)
      expect(result.data?.fidelity).toBe('high')
      expect(result.data?.screens).toHaveLength(4)
      expect(result.triggeredSkills).toContain('ux-design-expert:review-ux')
    })
  })

  describe('handleReviewUx', () => {
    it('should review UX and return score', async () => {
      const context = createTestContext()
      const result = await handleReviewUx(context, {
        path: 'src/components',
      })

      expect(result.success).toBe(true)
      expect(result.data?.score).toBeGreaterThanOrEqual(0)
      expect(result.data?.score).toBeLessThanOrEqual(100)
      expect(result.data?.findings).toBeDefined()
      expect(result.data?.recommendations).toBeDefined()
    })
  })

  describe('handleCreateWireframe', () => {
    it('should create wireframe with screens', async () => {
      const context = createTestContext()
      const result = await handleCreateWireframe(context, {
        name: 'dashboard',
        screens: ['Overview', 'Analytics', 'Reports'],
      })

      expect(result.success).toBe(true)
      expect(result.data?.wireframePath).toContain('docs/wireframes/')
      expect(result.data?.screens).toHaveLength(3)
      expect(result.triggeredSkills).toContain('ux-design-expert:create-prototype')
    })
  })

  describe('handleAuditAccessibility', () => {
    it('should audit for WCAG AA by default', async () => {
      const context = createTestContext()
      const result = await handleAuditAccessibility(context)

      expect(result.success).toBe(true)
      expect(result.data?.wcagLevel).toBe('AA')
      expect(result.data?.violations).toBeDefined()
      expect(result.data?.passed).toBeGreaterThanOrEqual(0)
      expect(result.data?.score).toBeGreaterThanOrEqual(0)
    })

    it('should audit for custom WCAG level', async () => {
      const context = createTestContext()
      const result = await handleAuditAccessibility(context, {
        level: 'AAA',
        path: 'src/ui',
      })

      expect(result.success).toBe(true)
      expect(result.data?.wcagLevel).toBe('AAA')
    })
  })

  describe('handleCreateDesignSystem', () => {
    it('should create design system documentation', async () => {
      const context = createTestContext()
      const result = await handleCreateDesignSystem(context, {
        name: 'brand-system',
      })

      expect(result.success).toBe(true)
      expect(result.data?.designSystemPath).toContain('docs/design-system/')
      expect(result.data?.tokens).toBeDefined()
      expect(result.data?.components).toBeDefined()
      expect(result.data?.patterns).toBeDefined()
    })
  })

  describe('handleUserFlowAnalysis', () => {
    it('should analyze user flows', async () => {
      const context = createTestContext()
      const result = await handleUserFlowAnalysis(context, {
        flows: ['Signup', 'Checkout', 'Return'],
      })

      expect(result.success).toBe(true)
      expect(result.data?.flows).toHaveLength(3)
      expect(result.data?.painPoints).toBeDefined()
      expect(result.data?.opportunities).toBeDefined()
    })
  })

  it('should have all handlers in uxDesignExpertHandlers map', () => {
    expect(Object.keys(uxDesignExpertHandlers)).toHaveLength(6)
    expect(uxDesignExpertHandlers['ux-design-expert:create-prototype']).toBe(handleCreatePrototype)
    expect(uxDesignExpertHandlers['ux-design-expert:audit-accessibility']).toBe(handleAuditAccessibility)
  })
})

describe('New SDC Handlers', () => {
  describe('handleCreateNextStory (SM)', () => {
    it('should require epic ID', async () => {
      const context = createTestContext()
      const result = await handleCreateNextStory(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Epic ID is required')
    })

    it('should create next story in sequence', async () => {
      const context = createTestContext({
        epicId: 'epic-1',
      })
      vi.mocked(context.deps.fs.glob).mockResolvedValue([])
      vi.mocked(context.deps.prompt.input).mockResolvedValue('New Feature')

      const result = await handleCreateNextStory(context)

      expect(result.success).toBe(true)
      expect(result.data?.storyId).toBeDefined()
      expect(result.data?.sequenceNumber).toBe(1)
      expect(result.triggeredSkills).toContain('po:validate-story-draft')
    })

    it('should increment sequence number', async () => {
      const context = createTestContext({
        epicId: 'epic-1',
      })
      vi.mocked(context.deps.fs.glob).mockResolvedValue([
        'docs/stories/epics/epic-1/1.1.story.md',
        'docs/stories/epics/epic-1/1.2.story.md',
      ])
      vi.mocked(context.deps.prompt.input).mockResolvedValue('Third Story')

      const result = await handleCreateNextStory(context)

      expect(result.success).toBe(true)
      expect(result.data?.sequenceNumber).toBe(3)
    })
  })

  describe('handleCloseStory (PO)', () => {
    it('should require story path', async () => {
      const context = createTestContext()
      const result = await handleCloseStory(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Story path is required')
    })

    it('should close story with confirmation', async () => {
      const context = createTestContext({
        story: { storyId: '1.1', storyPath: 'docs/stories/1.1.story.md' },
      })
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.fs.read).mockResolvedValue('**Status:** InReview')

      const result = await handleCloseStory(context)

      expect(result.success).toBe(true)
      expect(result.data?.closed).toBe(true)
      expect(result.data?.status).toBe('Done')
    })

    it('should fail if user cancels', async () => {
      const context = createTestContext({
        story: { storyId: '1.1', storyPath: 'docs/stories/1.1.story.md' },
      })
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.prompt.confirm).mockResolvedValue(false)

      const result = await handleCloseStory(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('cancelled')
    })
  })

  describe('handlePrioritizeBacklog (PO)', () => {
    it('should require epic ID', async () => {
      const context = createTestContext()
      const result = await handlePrioritizeBacklog(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Epic ID is required')
    })

    it('should prioritize stories by status', async () => {
      const context = createTestContext({
        epicId: 'epic-1',
      })
      vi.mocked(context.deps.fs.glob).mockResolvedValue([
        'docs/stories/epics/epic-1/1.1.story.md',
        'docs/stories/epics/epic-1/1.2.story.md',
      ])
      vi.mocked(context.deps.fs.read)
        .mockResolvedValueOnce('# 1.1 - Story One\n**Status:** Done')
        .mockResolvedValueOnce('# 1.2 - Story Two\n**Status:** Draft')

      const result = await handlePrioritizeBacklog(context)

      expect(result.success).toBe(true)
      expect(result.data?.stories).toHaveLength(2)
      expect(result.data?.reordered).toBe(true)
    })
  })

  describe('handleRefactor (DEV)', () => {
    it('should require target path', async () => {
      const context = createTestContext()
      const result = await handleRefactor(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Target path is required')
    })

    it('should refactor with confirmation', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.fs.read).mockResolvedValue('var x = 1; function foo() {}')

      const result = await handleRefactor(context, {
        path: 'src/utils.ts',
        type: 'general',
      })

      expect(result.success).toBe(true)
      expect(result.data?.testsPassedBefore).toBe(true)
      expect(result.data?.testsPassedAfter).toBe(true)
    })

    it('should fail if user cancels', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.prompt.confirm).mockResolvedValue(false)

      const result = await handleRefactor(context, { path: 'src/utils.ts' })

      expect(result.success).toBe(false)
      expect(result.error).toContain('cancelled')
    })
  })

  describe('handleCodeRabbitReview (QA)', () => {
    it('should run review and return findings', async () => {
      const context = createTestContext()
      const result = await handleCodeRabbitReview(context, {
        path: 'src',
        severity: ['critical', 'high'],
      })

      expect(result.success).toBe(true)
      expect(result.data?.findings).toBeDefined()
      expect(result.data?.iterations).toBeGreaterThanOrEqual(0)
      expect(['clean', 'issues_found', 'issues_fixed']).toContain(result.data?.status)
    })

    it('should respect dryRun option', async () => {
      const context = createTestContext({
        options: { ...defaultOptions, dryRun: true },
      })

      const result = await handleCodeRabbitReview(context)

      expect(result.success).toBe(true)
      expect(context.deps.fs.write).not.toHaveBeenCalled()
    })
  })

  describe('handleSecurityAudit (QA)', () => {
    it('should return security score and vulnerabilities', async () => {
      const context = createTestContext()
      const result = await handleSecurityAudit(context, { path: 'src' })

      expect(result.success).toBe(true)
      expect(result.data?.score).toBeGreaterThanOrEqual(0)
      expect(result.data?.score).toBeLessThanOrEqual(100)
      expect(result.data?.vulnerabilities).toBeDefined()
      expect(typeof result.data?.passed).toBe('boolean')
    })
  })

  describe('handleCritiqueSpec (QA)', () => {
    it('should require spec path', async () => {
      const context = createTestContext()
      const result = await handleCritiqueSpec(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Spec path is required')
    })

    it('should critique spec and return verdict', async () => {
      const context = createTestContext({
        spec: { specPath: 'docs/specs/feature.md' },
      })
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.fs.read).mockResolvedValue(`
## Overview
This is a comprehensive specification.

## Requirements
FR-001: The system shall do something.

## Non-Functional
NFR-001: Performance requirements.

## Constraints
System limitations.

## References
PRD-001
`)

      const result = await handleCritiqueSpec(context)

      expect(result.success).toBe(true)
      expect(['APPROVED', 'NEEDS_REVISION', 'BLOCKED']).toContain(result.data?.verdict)
      expect(result.data?.dimensions).toHaveLength(5)
      expect(result.data?.averageScore).toBeGreaterThanOrEqual(0)
    })

    it('should trigger plan-implementation on APPROVED', async () => {
      const context = createTestContext({
        spec: { specPath: 'docs/specs/feature.md' },
      })
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.fs.read).mockResolvedValue(`
## Overview
Complete spec with all sections.

## Requirements
FR-001: Must do this. FR-002: Must do that.

## Non-Functional
NFR-001: Performance. NFR-002: Security.

## Constraints
CON-001: Budget limits.

## References
PRD-001, Epic-1

Given precondition When action Then result.
`)

      const result = await handleCritiqueSpec(context)

      expect(result.success).toBe(true)
      if (result.data?.verdict === 'APPROVED') {
        expect(result.triggeredSkills).toContain('architect:plan-implementation')
      }
    })
  })

  describe('handleSetupMcp (DevOps)', () => {
    it('should require MCP name', async () => {
      const context = createTestContext()
      const result = await handleSetupMcp(context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('MCP name is required')
    })

    it('should setup MCP with confirmation', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)

      const result = await handleSetupMcp(context, {
        name: 'playwright',
        type: 'docker',
      })

      expect(result.success).toBe(true)
      expect(result.data?.name).toBe('playwright')
      expect(result.data?.configured).toBe(true)
    })

    it('should fail if user cancels', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.prompt.confirm).mockResolvedValue(false)

      const result = await handleSetupMcp(context, { name: 'test-mcp' })

      expect(result.success).toBe(false)
      expect(result.error).toContain('cancelled')
    })
  })
})

describe('AIOS Master Handlers', () => {
  describe('handleConfig', () => {
    it('should view config by default', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.fs.read).mockResolvedValue('debug: false')

      const result = await handleConfig(context)

      expect(result.success).toBe(true)
      expect(result.data?.action).toBe('view')
      expect(result.data?.modified).toBe(false)
    })

    it('should set config with confirmation', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.fs.read).mockResolvedValue('')

      const result = await handleConfig(context, {
        action: 'set',
        key: 'debug',
        value: true,
      })

      expect(result.success).toBe(true)
      expect(result.data?.action).toBe('set')
      expect(result.data?.modified).toBe(true)
    })

    it('should require key for set action', async () => {
      const context = createTestContext()
      const result = await handleConfig(context, { action: 'set' })

      expect(result.success).toBe(false)
      expect(result.error).toContain('key is required')
    })

    it('should reset config with confirmation', async () => {
      const context = createTestContext()

      const result = await handleConfig(context, { action: 'reset' })

      expect(result.success).toBe(true)
      expect(result.data?.action).toBe('reset')
      expect(result.data?.modified).toBe(true)
    })

    it('should fail reset if user cancels', async () => {
      const context = createTestContext()
      vi.mocked(context.deps.prompt.confirm).mockResolvedValue(false)

      const result = await handleConfig(context, { action: 'reset' })

      expect(result.success).toBe(false)
      expect(result.error).toContain('cancelled')
    })
  })

  it('should have all handlers in aiosMasterHandlers map', () => {
    expect(Object.keys(aiosMasterHandlers)).toHaveLength(5)
    expect(aiosMasterHandlers['aios-master:config']).toBe(handleConfig)
  })
})

describe('Architect Handlers', () => {
  describe('handleCreateArchitecture', () => {
    it('should create architecture documentation', async () => {
      const context = createTestContext()
      const result = await handleCreateArchitecture(context, {
        projectName: 'test-project',
      })

      expect(result.success).toBe(true)
      expect(result.data?.architecturePath).toContain('docs/architecture/')
      expect(result.data?.components).toBeDefined()
      expect(result.data?.components.length).toBeGreaterThan(0)
      expect(result.data?.decisions).toBeDefined()
    })

    it('should use default project name', async () => {
      const context = createTestContext()
      const result = await handleCreateArchitecture(context)

      expect(result.success).toBe(true)
      expect(result.data?.architecturePath).toContain('project-architecture.md')
    })

    it('should respect dryRun option', async () => {
      const context = createTestContext({
        options: { ...defaultOptions, dryRun: true },
      })

      const result = await handleCreateArchitecture(context)

      expect(result.success).toBe(true)
      expect(context.deps.fs.write).not.toHaveBeenCalled()
    })

    it('should include architecture decisions', async () => {
      const context = createTestContext()
      const result = await handleCreateArchitecture(context, {
        projectName: 'my-app',
      })

      expect(result.success).toBe(true)
      expect(result.data?.decisions).toHaveLength(1)
      expect(result.data?.decisions[0].title).toBe('Technology Stack')
    })
  })

  describe('handleReviewArchitecture', () => {
    it('should review architecture and return score', async () => {
      const context = createTestContext()
      const result = await handleReviewArchitecture(context, {
        targetPath: 'src',
      })

      expect(result.success).toBe(true)
      expect(result.data?.score).toBeGreaterThanOrEqual(0)
      expect(result.data?.score).toBeLessThanOrEqual(100)
      expect(result.data?.strengths).toBeDefined()
      expect(result.data?.weaknesses).toBeDefined()
    })

    it('should identify technical debt', async () => {
      const context = createTestContext()
      const result = await handleReviewArchitecture(context)

      expect(result.success).toBe(true)
      expect(result.data?.technicalDebt).toBeDefined()
      expect(result.data?.technicalDebt.length).toBeGreaterThan(0)
      expect(result.data?.technicalDebt[0]).toHaveProperty('severity')
      expect(result.data?.technicalDebt[0]).toHaveProperty('effort')
    })

    it('should provide recommendations', async () => {
      const context = createTestContext()
      const result = await handleReviewArchitecture(context)

      expect(result.success).toBe(true)
      expect(result.data?.recommendations).toBeDefined()
      expect(result.data?.recommendations.length).toBeGreaterThan(0)
    })

    it('should trigger plan-implementation', async () => {
      const context = createTestContext()
      const result = await handleReviewArchitecture(context)

      expect(result.success).toBe(true)
      expect(result.triggeredSkills).toContain('architect:plan-implementation')
    })

    it('should respect dryRun option', async () => {
      const context = createTestContext({
        options: { ...defaultOptions, dryRun: true },
      })

      const result = await handleReviewArchitecture(context)

      expect(result.success).toBe(true)
      expect(context.deps.fs.write).not.toHaveBeenCalled()
    })
  })

  describe('handleAssessComplexity', () => {
    it('should assess complexity and return classification', async () => {
      const context = createTestContext()
      const result = await handleAssessComplexity(context)

      expect(result.success).toBe(true)
      expect(['SIMPLE', 'STANDARD', 'COMPLEX']).toContain(result.data?.classification)
      expect(result.data?.score).toBeGreaterThanOrEqual(0)
      expect(result.data?.dimensions).toHaveLength(5)
    })

    it('should return SIMPLE for low complexity', async () => {
      const context = createTestContext({
        spec: { specPath: 'docs/spec.md' },
      })
      vi.mocked(context.deps.fs.exists).mockResolvedValue(true)
      vi.mocked(context.deps.fs.read).mockResolvedValue('Simple feature')

      const result = await handleAssessComplexity(context)

      expect(result.success).toBe(true)
      expect(result.data?.classification).toBe('SIMPLE')
      expect(result.data?.recommendedPhases).toBe(3)
    })
  })

  it('should have all handlers in architectHandlers map', () => {
    expect(Object.keys(architectHandlers)).toHaveLength(5)
    expect(architectHandlers['architect:create-architecture']).toBe(handleCreateArchitecture)
    expect(architectHandlers['architect:review-architecture']).toBe(handleReviewArchitecture)
    expect(architectHandlers['architect:assess-complexity']).toBe(handleAssessComplexity)
  })
})

describe('Analyst Handlers', () => {
  describe('handleCompetitorAnalysis', () => {
    it('should analyze competitors and return results', async () => {
      const context = createTestContext()
      const result = await handleCompetitorAnalysis(context, {
        industry: 'tech',
      })

      expect(result.success).toBe(true)
      expect(result.data?.analysisPath).toContain('docs/research/competitor-analysis')
      expect(result.data?.competitors).toBeDefined()
      expect(result.data?.competitors.length).toBeGreaterThan(0)
    })

    it('should use default industry', async () => {
      const context = createTestContext()
      const result = await handleCompetitorAnalysis(context)

      expect(result.success).toBe(true)
      expect(result.data?.analysisPath).toBeDefined()
    })

    it('should analyze provided competitors', async () => {
      const context = createTestContext()
      const result = await handleCompetitorAnalysis(context, {
        competitors: ['Company A', 'Company B', 'Company C'],
      })

      expect(result.success).toBe(true)
      expect(result.data?.competitors).toHaveLength(3)
      expect(result.data?.competitors[0].name).toBe('Company A')
    })

    it('should identify opportunities and threats', async () => {
      const context = createTestContext()
      const result = await handleCompetitorAnalysis(context)

      expect(result.success).toBe(true)
      expect(result.data?.opportunities).toBeDefined()
      expect(result.data?.opportunities.length).toBeGreaterThan(0)
      expect(result.data?.threats).toBeDefined()
      expect(result.data?.threats.length).toBeGreaterThan(0)
    })

    it('should return market position', async () => {
      const context = createTestContext()
      const result = await handleCompetitorAnalysis(context)

      expect(result.success).toBe(true)
      expect(result.data?.marketPosition).toBeDefined()
    })

    it('should respect dryRun option', async () => {
      const context = createTestContext({
        options: { ...defaultOptions, dryRun: true },
      })

      const result = await handleCompetitorAnalysis(context)

      expect(result.success).toBe(true)
      expect(context.deps.fs.write).not.toHaveBeenCalled()
    })

    it('should include competitor strengths and weaknesses', async () => {
      const context = createTestContext()
      const result = await handleCompetitorAnalysis(context)

      expect(result.success).toBe(true)
      const firstCompetitor = result.data?.competitors[0]
      expect(firstCompetitor?.strengths).toBeDefined()
      expect(firstCompetitor?.weaknesses).toBeDefined()
    })
  })

  it('should have all handlers in analystHandlers map', () => {
    expect(Object.keys(analystHandlers)).toHaveLength(4)
    expect(analystHandlers['analyst:competitor-analysis']).toBe(handleCompetitorAnalysis)
  })
})
