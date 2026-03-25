/**
 * AIOS CLI Module
 *
 * Command-line interface for the AIOS Skills System
 */

// Types
export type {
  CLIContext,
  CLIResult,
  CLIConfig,
  ParsedCommand,
} from './types'

export { DEFAULT_CLI_CONFIG } from './types'

// Parser
export {
  parseCommand,
  parseAgentActivation,
  formatCommand,
  isSkillCommand,
  isAgentActivation,
  extractStoryId,
  extractEpicId,
} from './parser'

// Executor
export {
  initializeCLI,
  executeCommand,
  executeSkill,
  listCommands,
  getCommandHelp,
  getAgentCommands,
} from './executor'

/**
 * Quick start helper for CLI integration
 *
 * @example
 * ```typescript
 * import { createCLI } from '@smartsenior/aios-core/cli'
 *
 * const cli = createCLI({ agent: 'dev' })
 *
 * // Execute a command
 * const result = await cli.execute('*develop --story 1.1')
 *
 * // List available commands
 * const commands = cli.listCommands()
 *
 * // Get help
 * const help = cli.help('*develop')
 * ```
 */
export function createCLI(options: Partial<CLIContext> = {}) {
  const { initializeCLI, executeCommand, listCommands, getCommandHelp } = require('./executor')
  const { DEFAULT_CLI_CONFIG } = require('./types')

  // Initialize the skills system
  const initResult = initializeCLI()

  // Create default context
  const context: CLIContext = {
    cwd: options.cwd ?? process.cwd(),
    agent: options.agent ?? DEFAULT_CLI_CONFIG.defaultAgent,
    sessionId: options.sessionId ?? `cli-${Date.now()}`,
    verbose: options.verbose ?? false,
    dryRun: options.dryRun ?? false,
    interactive: options.interactive ?? true,
  }

  return {
    /** Initialization result */
    initialized: initResult,

    /** Current context */
    context,

    /**
     * Execute a skill command
     */
    async execute(input: string): Promise<CLIResult> {
      return executeCommand(input, context)
    },

    /**
     * List available commands
     */
    listCommands(): string[] {
      return listCommands(context.agent)
    },

    /**
     * Get help for a command
     */
    help(command: string): string | null {
      return getCommandHelp(command)
    },

    /**
     * Switch active agent
     */
    switchAgent(agent: AgentRole): void {
      context.agent = agent
    },

    /**
     * Set verbose mode
     */
    setVerbose(verbose: boolean): void {
      context.verbose = verbose
    },

    /**
     * Set dry-run mode
     */
    setDryRun(dryRun: boolean): void {
      context.dryRun = dryRun
    },
  }
}

// Import for type
import type { CLIContext, CLIResult } from './types'
import type { AgentRole } from '../agents'
