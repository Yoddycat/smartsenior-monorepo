/**
 * AIOS Skills Module
 *
 * Agent Skills System for executing commands with authority validation
 */

// Re-export AgentRole from agents for convenience
export type { AgentRole } from '../agents'

// Type exports
export type {
  SkillCategory,
  AuthorityLevel,
  SkillAuthority,
  SkillContext,
  SkillResult,
  Skill,
  SkillHandler,
  RegisteredSkill,
  SkillValidationError,
  AuthorityValidation,
  SkillFilter,
} from './types'

// Authority exports
export {
  AUTHORITY_PRESETS,
  BLOCKED_OPERATIONS,
  CATEGORY_DEFAULT_AUTHORITY,
  validateSkillAuthority,
  isOperationBlocked,
  getRequiredAgentForOperation,
  createAuthority,
  exclusiveAuthority,
  sharedAuthority,
  delegatedAuthority,
} from './authority'

// Registry exports
export {
  SkillRegistry,
  getRegistry,
  registerSkill,
  registerSkills,
} from './registry'

// Definition helpers
export { defineSkill, defineSkillWithHandler } from './definitions/factory'

// Auto-register all skill definitions
export { registerAllSkills, registerAllSkillsWithHandlers } from './definitions'

// Handler exports
export {
  // Types
  type HandlerOptions,
  type StoryContext,
  type GitContext,
  type QAContext,
  type QAIssue,
  type SpecContext,
  type HandlerDependencies,
  type ExtendedSkillContext,
  type ExtendedSkillHandler,
  type HandlerRegistration,
  // Base utilities
  success,
  failure,
  successWithTriggers,
  defaultDependencies,
  defaultOptions,
  withErrorHandling,
  withTimeout,
  withDryRun,
  withConfirmation,
  composeHandlers,
  delegateHandler,
  noopHandler,
  validateContext,
  // All handlers
  allHandlers,
  sdcHandlers,
  getHandler,
  hasHandler,
  listHandledSkills,
} from './handlers'

import { getRegistry } from './registry'
import { registerAllSkillsWithHandlers } from './definitions'
import { allHandlers } from './handlers'

/**
 * Initialize the complete skill system with all skills and handlers
 *
 * This is a convenience function that:
 * 1. Registers all 51 skills for 11 agents
 * 2. Attaches all available handlers (16 SDC handlers)
 *
 * Call this once during application startup.
 *
 * @returns Statistics about what was registered
 */
export function initializeSkillSystem(): {
  skills: number
  handlers: { registered: number; notFound: number }
  coverage: number
} {
  const result = registerAllSkillsWithHandlers(allHandlers)
  const registry = getRegistry()
  const stats = registry.getHandlerStats()

  return {
    skills: result.skills,
    handlers: result.handlers,
    coverage: stats.coveragePercent,
  }
}

/**
 * Get a summary of the skill system status
 */
export function getSkillSystemStatus(): {
  initialized: boolean
  skills: {
    total: number
    byOwner: Record<string, number>
    byCategory: Record<string, number>
  }
  handlers: {
    total: number
    coverage: number
    withHandlers: string[]
    withoutHandlers: string[]
  }
} {
  const registry = getRegistry()
  const skills = registry.getStats()
  const handlerStats = registry.getHandlerStats()

  return {
    initialized: skills.total > 0,
    skills: {
      total: skills.total,
      byOwner: skills.byOwner,
      byCategory: skills.byCategory,
    },
    handlers: {
      total: handlerStats.withHandlers,
      coverage: handlerStats.coveragePercent,
      withHandlers: registry.getSkillsWithHandlers().map(s => s.id),
      withoutHandlers: registry.getSkillsWithoutHandlers().map(s => s.id),
    },
  }
}
