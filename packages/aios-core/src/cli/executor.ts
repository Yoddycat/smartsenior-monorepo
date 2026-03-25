/**
 * AIOS CLI Executor
 *
 * Execute parsed commands through the Skills System
 */

import { getRegistry, initializeSkillSystem } from '../skills'
import type { SkillContext, SkillResult } from '../skills/types'
import type { AgentRole } from '../agents'
import type { CLIContext, CLIResult, ParsedCommand } from './types'
import { parseCommand, extractStoryId, extractEpicId } from './parser'

/**
 * Initialize the CLI executor
 */
export function initializeCLI(): { skills: number; handlers: number } {
  const result = initializeSkillSystem()
  return {
    skills: result.skills,
    handlers: result.handlers.registered,
  }
}

/**
 * Execute a skill command
 */
export async function executeCommand(
  input: string,
  context: CLIContext
): Promise<CLIResult> {
  const parsed = parseCommand(input)

  if (!parsed) {
    return {
      success: false,
      error: `Invalid command: ${input}`,
      exitCode: 1,
    }
  }

  return executeSkill(parsed, context)
}

/**
 * Execute a parsed skill command
 */
export async function executeSkill(
  parsed: ParsedCommand,
  context: CLIContext
): Promise<CLIResult> {
  const registry = getRegistry()

  // Find the skill by command
  const skill = registry.getByCommand(parsed.fullCommand)

  if (!skill) {
    // Try to find similar commands
    const allCommands = registry.listCommands().map(c => c.command)
    const suggestions = findSimilarCommands(parsed.command, allCommands)

    let error = `Unknown command: ${parsed.fullCommand}`
    if (suggestions.length > 0) {
      error += `\n\nDid you mean?\n${suggestions.map(s => `  ${s}`).join('\n')}`
    }

    return {
      success: false,
      error,
      exitCode: 1,
    }
  }

  // Validate authority
  const validationError = registry.validateExecution(
    skill.id,
    context.agent as AgentRole,
    buildSkillContext(context, parsed)
  )

  if (validationError) {
    return {
      success: false,
      error: `Authority denied: ${validationError.message}`,
      output: validationError.requiredAgents
        ? `Required agents: ${validationError.requiredAgents.join(', ')}`
        : undefined,
      exitCode: 2,
    }
  }

  // Execute the skill
  try {
    const skillContext = buildSkillContext(context, parsed)
    const args = buildArgs(parsed)

    const result = await registry.execute(skill.id, skillContext, args)

    return formatResult(result, context)
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      exitCode: 3,
    }
  }
}

/**
 * Build skill context from CLI context
 */
function buildSkillContext(
  context: CLIContext,
  parsed: ParsedCommand
): SkillContext {
  const storyId = extractStoryId(parsed)
  const epicId = extractEpicId(parsed)

  return {
    sessionId: context.sessionId,
    executingAgent: context.agent as AgentRole,
    storyId,
    epicId,
  }
}

/**
 * Build args from parsed command
 */
function buildArgs(parsed: ParsedCommand): Record<string, unknown> {
  const args: Record<string, unknown> = { ...parsed.options }

  // Add positional args
  if (parsed.args.length > 0) {
    args._positional = parsed.args
  }

  return args
}

/**
 * Format skill result for CLI output
 */
function formatResult(
  result: SkillResult,
  context: CLIContext
): CLIResult {
  if (!result.success) {
    return {
      success: false,
      error: result.error ?? 'Unknown error',
      exitCode: 1,
    }
  }

  let output = ''

  // Format data
  if (result.data) {
    if (context.verbose) {
      output = JSON.stringify(result.data, null, 2)
    } else {
      output = formatDataSummary(result.data)
    }
  }

  // Add warnings
  if (result.warnings && result.warnings.length > 0) {
    output += '\n\nWarnings:\n'
    output += result.warnings.map(w => `  - ${w}`).join('\n')
  }

  // Add triggered skills
  if (result.triggeredSkills && result.triggeredSkills.length > 0) {
    output += '\n\nTriggered skills:\n'
    output += result.triggeredSkills.map(s => `  → ${s}`).join('\n')
  }

  return {
    success: true,
    output,
    exitCode: 0,
  }
}

/**
 * Format data object as summary
 */
function formatDataSummary(data: unknown): string {
  if (typeof data !== 'object' || data === null) {
    return String(data)
  }

  const obj = data as Record<string, unknown>
  const lines: string[] = []

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      lines.push(`${key}: ${value.length} items`)
    } else if (typeof value === 'object' && value !== null) {
      lines.push(`${key}: [object]`)
    } else {
      lines.push(`${key}: ${value}`)
    }
  }

  return lines.join('\n')
}

/**
 * Find similar commands using Levenshtein distance
 */
function findSimilarCommands(input: string, commands: string[]): string[] {
  const results: Array<{ command: string; distance: number }> = []

  for (const cmd of commands) {
    const cmdName = cmd.replace('*', '')
    const distance = levenshteinDistance(input.toLowerCase(), cmdName.toLowerCase())

    if (distance <= 3) {
      results.push({ command: cmd, distance })
    }
  }

  return results
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3)
    .map(r => r.command)
}

/**
 * Calculate Levenshtein distance between two strings
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = []

  for (let i = 0; i <= a.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      )
    }
  }

  return matrix[a.length][b.length]
}

/**
 * List all available commands
 */
export function listCommands(agent?: AgentRole): string[] {
  const registry = getRegistry()

  if (agent) {
    const skills = registry.getAllowedFor(agent)
    return skills.map(s => s.command)
  }

  return registry.listCommands().map(c => c.command)
}

/**
 * Get help for a command
 */
export function getCommandHelp(command: string): string | null {
  const registry = getRegistry()
  const skill = registry.getByCommand(command)

  if (!skill) {
    return null
  }

  let help = `${skill.command} - ${skill.name}\n\n`
  help += `${skill.description}\n\n`
  help += `Owner: @${skill.owner}\n`
  help += `Category: ${skill.category}\n`

  if (skill.aliases && skill.aliases.length > 0) {
    help += `Aliases: ${skill.aliases.join(', ')}\n`
  }

  if (skill.dependsOn && skill.dependsOn.length > 0) {
    help += `Depends on: ${skill.dependsOn.join(', ')}\n`
  }

  if (skill.canTrigger && skill.canTrigger.length > 0) {
    help += `Can trigger: ${skill.canTrigger.join(', ')}\n`
  }

  if (skill.requiresConfirmation) {
    help += `Requires confirmation: yes\n`
  }

  return help
}

/**
 * Get list of agents with their commands
 */
export function getAgentCommands(): Record<string, string[]> {
  const registry = getRegistry()
  const agents: AgentRole[] = [
    'sm', 'po', 'dev', 'qa', 'devops',
    'pm', 'architect', 'analyst',
    'data-engineer', 'ux-design-expert', 'aios-master',
  ]

  const result: Record<string, string[]> = {}

  for (const agent of agents) {
    const skills = registry.getByOwner(agent)
    result[agent] = skills.map(s => s.command)
  }

  return result
}
