/**
 * AIOS CLI Module - Tests
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  parseCommand,
  parseAgentActivation,
  formatCommand,
  isSkillCommand,
  isAgentActivation,
  extractStoryId,
  extractEpicId,
} from './parser'
import {
  initializeCLI,
  executeCommand,
  listCommands,
  getCommandHelp,
  getAgentCommands,
} from './executor'
import type { CLIContext } from './types'
import { DEFAULT_CLI_CONFIG } from './types'

describe('CLI Parser', () => {
  describe('parseCommand', () => {
    it('should parse simple command', () => {
      const result = parseCommand('*develop')

      expect(result).not.toBeNull()
      expect(result?.command).toBe('develop')
      expect(result?.fullCommand).toBe('*develop')
      expect(result?.args).toEqual([])
      expect(result?.options).toEqual({})
    })

    it('should parse command with long options', () => {
      const result = parseCommand('*develop --story 1.1 --mode interactive')

      expect(result).not.toBeNull()
      expect(result?.command).toBe('develop')
      expect(result?.options).toEqual({
        story: '1.1',
        mode: 'interactive',
      })
    })

    it('should parse command with short options', () => {
      const result = parseCommand('*commit -m "feat: add feature"')

      expect(result).not.toBeNull()
      expect(result?.command).toBe('commit')
      expect(result?.options).toEqual({
        m: 'feat: add feature',
      })
    })

    it('should parse boolean flags', () => {
      const result = parseCommand('*push --force --verbose')

      expect(result).not.toBeNull()
      expect(result?.options).toEqual({
        force: true,
        verbose: true,
      })
    })

    it('should parse positional arguments', () => {
      const result = parseCommand('*develop 1.1 src/index.ts')

      expect(result).not.toBeNull()
      expect(result?.args).toEqual(['1.1', 'src/index.ts'])
    })

    it('should handle quoted strings', () => {
      const result = parseCommand('*commit -m "fix: handle edge case"')

      expect(result).not.toBeNull()
      expect(result?.options.m).toBe('fix: handle edge case')
    })

    it('should return null for non-skill commands', () => {
      expect(parseCommand('develop')).toBeNull()
      expect(parseCommand('git status')).toBeNull()
      expect(parseCommand('')).toBeNull()
    })

    it('should handle mixed options and args', () => {
      const result = parseCommand('*gate --story 1.1 src/file.ts --verbose')

      expect(result).not.toBeNull()
      expect(result?.command).toBe('gate')
      expect(result?.args).toEqual(['src/file.ts'])
      expect(result?.options).toEqual({
        story: '1.1',
        verbose: true,
      })
    })
  })

  describe('parseAgentActivation', () => {
    it('should parse agent activation', () => {
      const result = parseAgentActivation('@dev')

      expect(result.agent).toBe('dev')
      expect(result.remaining).toBe('')
    })

    it('should parse agent with command', () => {
      const result = parseAgentActivation('@qa *gate --story 1.1')

      expect(result.agent).toBe('qa')
      expect(result.remaining).toBe('*gate --story 1.1')
    })

    it('should handle hyphenated agents', () => {
      const result = parseAgentActivation('@data-engineer *create-schema')

      expect(result.agent).toBe('data-engineer')
      expect(result.remaining).toBe('*create-schema')
    })

    it('should return null for non-agent input', () => {
      const result = parseAgentActivation('*develop')

      expect(result.agent).toBeNull()
      expect(result.remaining).toBe('*develop')
    })
  })

  describe('formatCommand', () => {
    it('should format parsed command back to string', () => {
      const parsed = parseCommand('*develop --story 1.1')!
      const formatted = formatCommand(parsed)

      expect(formatted).toBe('*develop --story 1.1')
    })

    it('should quote args with spaces', () => {
      const parsed = {
        command: 'commit',
        fullCommand: '*commit',
        args: ['my file.ts'],
        options: { m: 'message' },
      }
      const formatted = formatCommand(parsed)

      expect(formatted).toBe('*commit "my file.ts" --m message')
    })
  })

  describe('isSkillCommand', () => {
    it('should identify skill commands', () => {
      expect(isSkillCommand('*develop')).toBe(true)
      expect(isSkillCommand('  *gate  ')).toBe(true)
    })

    it('should reject non-skill commands', () => {
      expect(isSkillCommand('develop')).toBe(false)
      expect(isSkillCommand('@dev')).toBe(false)
      expect(isSkillCommand('')).toBe(false)
    })
  })

  describe('isAgentActivation', () => {
    it('should identify agent activations', () => {
      expect(isAgentActivation('@dev')).toBe(true)
      expect(isAgentActivation('  @qa  ')).toBe(true)
    })

    it('should reject non-agent activations', () => {
      expect(isAgentActivation('*develop')).toBe(false)
      expect(isAgentActivation('dev')).toBe(false)
    })
  })

  describe('extractStoryId', () => {
    it('should extract from --story option', () => {
      const parsed = parseCommand('*develop --story 1.1')!
      expect(extractStoryId(parsed)).toBe('1.1')
    })

    it('should extract from --storyId option', () => {
      const parsed = parseCommand('*develop --storyId 2.3')!
      expect(extractStoryId(parsed)).toBe('2.3')
    })

    it('should extract from -s option', () => {
      const parsed = parseCommand('*develop -s 1.5')!
      expect(extractStoryId(parsed)).toBe('1.5')
    })

    it('should extract from positional args', () => {
      const parsed = parseCommand('*develop 1.1')!
      expect(extractStoryId(parsed)).toBe('1.1')
    })

    it('should return undefined if not found', () => {
      const parsed = parseCommand('*develop --verbose')!
      expect(extractStoryId(parsed)).toBeUndefined()
    })
  })

  describe('extractEpicId', () => {
    it('should extract from --epic option', () => {
      const parsed = parseCommand('*draft --epic epic-1')!
      expect(extractEpicId(parsed)).toBe('epic-1')
    })

    it('should extract from positional args', () => {
      const parsed = parseCommand('*draft epic-ids')!
      expect(extractEpicId(parsed)).toBe('epic-ids')
    })

    it('should return undefined if not found', () => {
      const parsed = parseCommand('*draft --story 1.1')!
      expect(extractEpicId(parsed)).toBeUndefined()
    })
  })
})

describe('CLI Executor', () => {
  let context: CLIContext

  beforeEach(() => {
    context = {
      cwd: '/test',
      agent: 'dev',
      sessionId: 'test-session',
      verbose: false,
      dryRun: false,
      interactive: true,
    }

    // Initialize the skill system
    initializeCLI()
  })

  describe('initializeCLI', () => {
    it('should initialize and return stats', () => {
      const result = initializeCLI()

      // Should have 50+ skills and handlers
      expect(result.skills).toBeGreaterThanOrEqual(50)
      expect(result.handlers).toBeGreaterThanOrEqual(50)
      // Handlers should match skills (100% coverage)
      expect(result.handlers).toBe(result.skills)
    })
  })

  describe('executeCommand', () => {
    it('should return error for invalid command', async () => {
      const result = await executeCommand('invalid', context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Invalid command')
      expect(result.exitCode).toBe(1)
    })

    it('should return error for unknown command', async () => {
      const result = await executeCommand('*unknown-command', context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Unknown command')
      expect(result.exitCode).toBe(1)
    })

    it('should suggest similar commands', async () => {
      const result = await executeCommand('*devlop', context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Did you mean')
      expect(result.error).toContain('*develop')
    })

    it('should return error for unauthorized agent', async () => {
      context.agent = 'dev'
      const result = await executeCommand('*push', context)

      expect(result.success).toBe(false)
      expect(result.error).toContain('Authority denied')
      expect(result.exitCode).toBe(2)
    })
  })

  describe('listCommands', () => {
    it('should list all commands', () => {
      const commands = listCommands()

      expect(commands.length).toBeGreaterThan(40)
      expect(commands).toContain('*develop')
      expect(commands).toContain('*push')
      expect(commands).toContain('*gate')
    })

    it('should list commands for specific agent', () => {
      const commands = listCommands('dev')

      expect(commands).toContain('*develop')
      expect(commands).toContain('*commit')
      // Dev can also use some shared commands
    })

    it('should list exclusive commands for devops', () => {
      const commands = listCommands('devops')

      expect(commands).toContain('*push')
      expect(commands).toContain('*create-pr')
      expect(commands).toContain('*release')
    })
  })

  describe('getCommandHelp', () => {
    it('should return help for valid command', () => {
      const help = getCommandHelp('*develop')

      expect(help).not.toBeNull()
      expect(help).toContain('*develop')
      expect(help).toContain('Develop Story')
      expect(help).toContain('Owner: @dev')
    })

    it('should return null for unknown command', () => {
      const help = getCommandHelp('*unknown')

      expect(help).toBeNull()
    })

    it('should include aliases', () => {
      const help = getCommandHelp('*develop')

      expect(help).toContain('Aliases')
    })

    it('should include dependencies', () => {
      const help = getCommandHelp('*develop')

      expect(help).toContain('Depends on')
    })
  })

  describe('getAgentCommands', () => {
    it('should return commands grouped by agent', () => {
      const agentCommands = getAgentCommands()

      expect(agentCommands.dev).toContain('*develop')
      expect(agentCommands.qa).toContain('*gate')
      expect(agentCommands.devops).toContain('*push')
      expect(agentCommands.sm).toContain('*draft')
      expect(agentCommands.po).toContain('*validate-story-draft')
    })

    it('should have all 11 agents', () => {
      const agentCommands = getAgentCommands()
      const agents = Object.keys(agentCommands)

      expect(agents).toContain('sm')
      expect(agents).toContain('po')
      expect(agents).toContain('dev')
      expect(agents).toContain('qa')
      expect(agents).toContain('devops')
      expect(agents).toContain('pm')
      expect(agents).toContain('architect')
      expect(agents).toContain('analyst')
      expect(agents).toContain('data-engineer')
      expect(agents).toContain('ux-design-expert')
      expect(agents).toContain('aios-master')
    })
  })
})

describe('CLI Types', () => {
  describe('DEFAULT_CLI_CONFIG', () => {
    it('should have default values', () => {
      expect(DEFAULT_CLI_CONFIG.defaultAgent).toBe('dev')
      expect(DEFAULT_CLI_CONFIG.colors).toBe(true)
      expect(DEFAULT_CLI_CONFIG.format).toBe('text')
      expect(DEFAULT_CLI_CONFIG.autoConfirm).toBe(false)
    })
  })
})
