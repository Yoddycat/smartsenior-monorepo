/**
 * AIOS CLI Types
 *
 * Type definitions for the CLI interface
 */

import type { AgentRole } from '../agents'

/**
 * CLI execution context
 */
export interface CLIContext {
  /** Current working directory */
  cwd: string
  /** Active agent role */
  agent: AgentRole
  /** Session identifier */
  sessionId: string
  /** Verbose output */
  verbose: boolean
  /** Dry run mode */
  dryRun: boolean
  /** Interactive mode */
  interactive: boolean
}

/**
 * CLI command parsed result
 */
export interface ParsedCommand {
  /** Command name (without *) */
  command: string
  /** Full command (with *) */
  fullCommand: string
  /** Positional arguments */
  args: string[]
  /** Named options */
  options: Record<string, string | boolean>
}

/**
 * CLI execution result
 */
export interface CLIResult {
  success: boolean
  output?: string
  error?: string
  exitCode: number
}

/**
 * CLI configuration
 */
export interface CLIConfig {
  /** Default agent */
  defaultAgent: AgentRole
  /** Enable colors */
  colors: boolean
  /** Output format */
  format: 'text' | 'json' | 'minimal'
  /** Auto-confirm prompts */
  autoConfirm: boolean
}

/**
 * Default CLI configuration
 */
export const DEFAULT_CLI_CONFIG: CLIConfig = {
  defaultAgent: 'dev',
  colors: true,
  format: 'text',
  autoConfirm: false,
}
