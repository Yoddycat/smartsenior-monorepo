/**
 * AIOS Skills - Base Handler Utilities
 *
 * Common utilities and base implementations for handlers
 */

import type { SkillResult } from '../types'
import type {
  ExtendedSkillContext,
  ExtendedSkillHandler,
  HandlerDependencies,
  HandlerOptions,
} from './types'

/**
 * Create a successful result
 */
export function success<T>(data: T, warnings?: string[]): SkillResult<T> {
  return {
    success: true,
    data,
    warnings,
  }
}

/**
 * Create a failed result
 */
export function failure(error: string, warnings?: string[]): SkillResult<never> {
  return {
    success: false,
    error,
    warnings,
  }
}

/**
 * Create a result with triggered skills
 */
export function successWithTriggers<T>(
  data: T,
  triggeredSkills: string[],
  warnings?: string[]
): SkillResult<T> {
  return {
    success: true,
    data,
    triggeredSkills,
    warnings,
  }
}

/**
 * Default handler dependencies (no-op implementations)
 */
export const defaultDependencies: HandlerDependencies = {
  fs: {
    read: async () => '',
    write: async () => {},
    exists: async () => false,
    glob: async () => [],
  },
  git: {
    status: async () => ({}),
    add: async () => {},
    commit: async () => '',
    push: async () => {},
    branch: async () => 'main',
  },
  logger: {
    info: () => {},
    warn: () => {},
    error: () => {},
    debug: () => {},
  },
  prompt: {
    confirm: async () => true,
    input: async () => '',
    select: async (_msg, opts) => opts[0],
  },
}

/**
 * Default handler options
 */
export const defaultOptions: HandlerOptions = {
  mode: 'interactive',
  dryRun: false,
  verbose: false,
  timeout: 30000,
}

/**
 * Wrap a simple handler with error handling
 */
export function withErrorHandling<T>(
  handler: ExtendedSkillHandler<T>
): ExtendedSkillHandler<T> {
  return async (context, args) => {
    try {
      return await handler(context, args)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      context.deps.logger.error(`Handler error: ${message}`)
      return failure(message)
    }
  }
}

/**
 * Wrap a handler with timeout
 */
export function withTimeout<T>(
  handler: ExtendedSkillHandler<T>,
  timeoutMs?: number
): ExtendedSkillHandler<T> {
  return async (context, args) => {
    const timeout = timeoutMs ?? context.options.timeout ?? 30000

    const timeoutPromise = new Promise<SkillResult<T>>((_, reject) => {
      setTimeout(() => reject(new Error(`Handler timed out after ${timeout}ms`)), timeout)
    })

    return Promise.race([handler(context, args), timeoutPromise])
  }
}

/**
 * Wrap a handler with dry-run support
 */
export function withDryRun<T>(
  handler: ExtendedSkillHandler<T>,
  dryRunResult: T
): ExtendedSkillHandler<T> {
  return async (context, args) => {
    if (context.options.dryRun) {
      context.deps.logger.info('[DRY RUN] Would execute handler')
      return success(dryRunResult, ['Executed in dry-run mode'])
    }
    return handler(context, args)
  }
}

/**
 * Wrap a handler with confirmation prompt
 */
export function withConfirmation<T>(
  handler: ExtendedSkillHandler<T>,
  message: string
): ExtendedSkillHandler<T> {
  return async (context, args) => {
    const confirmed = await context.deps.prompt.confirm(message)
    if (!confirmed) {
      return failure('Operation cancelled by user')
    }
    return handler(context, args)
  }
}

/**
 * Compose multiple handler wrappers
 */
export function composeHandlers<T>(
  handler: ExtendedSkillHandler<T>,
  ...wrappers: Array<(h: ExtendedSkillHandler<T>) => ExtendedSkillHandler<T>>
): ExtendedSkillHandler<T> {
  return wrappers.reduce((h, wrapper) => wrapper(h), handler)
}

/**
 * Create a handler that delegates to another skill
 */
export function delegateHandler(targetSkillId: string): ExtendedSkillHandler<void> {
  return async (context) => {
    context.deps.logger.info(`Delegating to skill: ${targetSkillId}`)
    return successWithTriggers(undefined, [targetSkillId])
  }
}

/**
 * Create a no-op handler (placeholder)
 */
export function noopHandler(message?: string): ExtendedSkillHandler<void> {
  return async (context) => {
    const msg = message ?? 'Handler not implemented'
    context.deps.logger.warn(msg)
    return success(undefined, [msg])
  }
}

/**
 * Validate required context fields
 */
export function validateContext(
  context: ExtendedSkillContext,
  required: Array<'story' | 'git' | 'qa' | 'spec'>
): string | null {
  for (const field of required) {
    if (!context[field]) {
      return `Missing required context: ${field}`
    }
  }
  return null
}
