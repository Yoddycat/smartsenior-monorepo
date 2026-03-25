/**
 * AIOS CLI Parser
 *
 * Parse command line arguments into structured commands
 */

import type { ParsedCommand } from './types'

/**
 * Parse a command string into structured command object
 *
 * @example
 * parseCommand('*develop --story 1.1 --mode interactive')
 * // { command: 'develop', fullCommand: '*develop', args: [], options: { story: '1.1', mode: 'interactive' } }
 */
export function parseCommand(input: string): ParsedCommand | null {
  const trimmed = input.trim()

  if (!trimmed) {
    return null
  }

  // Split by whitespace, respecting quotes
  const tokens = tokenize(trimmed)

  if (tokens.length === 0) {
    return null
  }

  const firstToken = tokens[0]

  // Check if it's a skill command (starts with *)
  if (!firstToken.startsWith('*')) {
    return null
  }

  const command = firstToken.slice(1) // Remove *
  const fullCommand = firstToken

  const args: string[] = []
  const options: Record<string, string | boolean> = {}

  let i = 1
  while (i < tokens.length) {
    const token = tokens[i]

    if (token.startsWith('--')) {
      // Long option
      const optName = token.slice(2)
      const nextToken = tokens[i + 1]

      if (nextToken && !nextToken.startsWith('-')) {
        options[optName] = nextToken
        i += 2
      } else {
        options[optName] = true
        i++
      }
    } else if (token.startsWith('-') && token.length === 2) {
      // Short option
      const optName = token.slice(1)
      const nextToken = tokens[i + 1]

      if (nextToken && !nextToken.startsWith('-')) {
        options[optName] = nextToken
        i += 2
      } else {
        options[optName] = true
        i++
      }
    } else {
      // Positional argument
      args.push(token)
      i++
    }
  }

  return {
    command,
    fullCommand,
    args,
    options,
  }
}

/**
 * Tokenize input string, respecting quoted strings
 */
function tokenize(input: string): string[] {
  const tokens: string[] = []
  let current = ''
  let inQuote: string | null = null

  for (let i = 0; i < input.length; i++) {
    const char = input[i]

    if (inQuote) {
      if (char === inQuote) {
        inQuote = null
      } else {
        current += char
      }
    } else if (char === '"' || char === "'") {
      inQuote = char
    } else if (char === ' ' || char === '\t') {
      if (current) {
        tokens.push(current)
        current = ''
      }
    } else {
      current += char
    }
  }

  if (current) {
    tokens.push(current)
  }

  return tokens
}

/**
 * Parse agent activation from input
 *
 * @example
 * parseAgentActivation('@dev')
 * // { agent: 'dev', remaining: '' }
 *
 * parseAgentActivation('@qa *gate --story 1.1')
 * // { agent: 'qa', remaining: '*gate --story 1.1' }
 */
export function parseAgentActivation(input: string): {
  agent: string | null
  remaining: string
} {
  const trimmed = input.trim()

  if (!trimmed.startsWith('@')) {
    return { agent: null, remaining: trimmed }
  }

  const match = trimmed.match(/^@([a-z-]+)(\s+(.*))?$/i)

  if (!match) {
    return { agent: null, remaining: trimmed }
  }

  return {
    agent: match[1].toLowerCase(),
    remaining: match[3] ?? '',
  }
}

/**
 * Format command for display
 */
export function formatCommand(parsed: ParsedCommand): string {
  const parts = [parsed.fullCommand]

  for (const arg of parsed.args) {
    parts.push(arg.includes(' ') ? `"${arg}"` : arg)
  }

  for (const [key, value] of Object.entries(parsed.options)) {
    if (value === true) {
      parts.push(`--${key}`)
    } else {
      parts.push(`--${key}`, String(value))
    }
  }

  return parts.join(' ')
}

/**
 * Check if input is a skill command
 */
export function isSkillCommand(input: string): boolean {
  return input.trim().startsWith('*')
}

/**
 * Check if input is an agent activation
 */
export function isAgentActivation(input: string): boolean {
  return input.trim().startsWith('@')
}

/**
 * Extract story ID from options or args
 */
export function extractStoryId(parsed: ParsedCommand): string | undefined {
  // Check options
  if (parsed.options.story) {
    return String(parsed.options.story)
  }
  if (parsed.options.storyId) {
    return String(parsed.options.storyId)
  }
  if (parsed.options.s) {
    return String(parsed.options.s)
  }

  // Check args for story ID pattern (e.g., 1.1, 2.3)
  for (const arg of parsed.args) {
    if (/^\d+\.\d+$/.test(arg)) {
      return arg
    }
  }

  return undefined
}

/**
 * Extract epic ID from options or args
 */
export function extractEpicId(parsed: ParsedCommand): string | undefined {
  // Check options
  if (parsed.options.epic) {
    return String(parsed.options.epic)
  }
  if (parsed.options.epicId) {
    return String(parsed.options.epicId)
  }
  if (parsed.options.e) {
    return String(parsed.options.e)
  }

  // Check args for epic ID pattern (e.g., epic-1, epic-ids)
  for (const arg of parsed.args) {
    if (arg.startsWith('epic-')) {
      return arg
    }
  }

  return undefined
}
