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

// Definition helpers (will be added in Phase 2)
export { defineSkill, defineSkillWithHandler } from './definitions/factory'

// Auto-register all skill definitions
export { registerAllSkills } from './definitions'
