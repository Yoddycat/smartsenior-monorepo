/**
 * AIOS Skills Module
 *
 * Agent Skills System for executing commands with authority validation
 */

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
export { registerAllSkills } from './definitions'

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
