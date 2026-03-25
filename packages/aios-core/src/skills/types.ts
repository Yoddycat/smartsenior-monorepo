/**
 * AIOS Skills Module - Type Definitions
 *
 * Core interfaces for the Agent Skills System
 */

import type { AgentRole } from '../agents'

/**
 * Skill categories for organization and filtering
 */
export type SkillCategory =
  | 'story'       // Story-related operations
  | 'development' // Code implementation
  | 'quality'     // QA and testing
  | 'deployment'  // Git, PR, releases
  | 'planning'    // PRD, epics, specs
  | 'research'    // Analysis and investigation
  | 'database'    // Schema and data operations
  | 'framework'   // AIOS framework operations

/**
 * Authority levels for skill execution
 * - exclusive: Only the owner agent can execute
 * - shared: Multiple specified agents can execute
 * - delegated: Agent can delegate to another with explicit permission
 */
export type AuthorityLevel = 'exclusive' | 'shared' | 'delegated'

/**
 * Skill authority configuration
 */
export interface SkillAuthority {
  /** Agents allowed to execute this skill */
  allowedAgents: AgentRole[]
  /** Authority level determining execution rules */
  level: AuthorityLevel
  /** If delegated, the source agent that delegates */
  delegatedFrom?: AgentRole
  /** Reason for delegation (for audit) */
  delegationReason?: string
}

/**
 * Skill execution context
 */
export interface SkillContext {
  /** Current session ID */
  sessionId: string
  /** Agent attempting to execute the skill */
  executingAgent: AgentRole
  /** Story ID if within story context */
  storyId?: string
  /** Epic ID if within epic context */
  epicId?: string
  /** Workflow ID if part of a workflow */
  workflowId?: string
  /** Additional metadata */
  metadata?: Record<string, unknown>
}

/**
 * Skill execution result
 */
export interface SkillResult<T = unknown> {
  /** Whether execution was successful */
  success: boolean
  /** Result data if successful */
  data?: T
  /** Error message if failed */
  error?: string
  /** Warnings that don't block execution */
  warnings?: string[]
  /** Skills triggered as a result */
  triggeredSkills?: string[]
}

/**
 * Skill definition
 */
export interface Skill {
  /** Unique identifier in format 'agent:action' (e.g., 'dev:develop') */
  id: string
  /** Command syntax (e.g., '*develop') */
  command: string
  /** Human-readable name */
  name: string
  /** Description of what the skill does */
  description: string
  /** Owner agent (primary responsibility) */
  owner: AgentRole
  /** Authority configuration */
  authority: SkillAuthority
  /** Skill category */
  category: SkillCategory
  /** Skills that must complete before this one */
  dependsOn?: string[]
  /** Skills that this skill can trigger */
  canTrigger?: string[]
  /** Aliases for the command */
  aliases?: string[]
  /** Whether this skill requires user confirmation */
  requiresConfirmation?: boolean
  /** Tags for filtering and search */
  tags?: string[]
}

/**
 * Skill handler function signature
 */
export type SkillHandler<T = unknown> = (
  context: SkillContext,
  args?: Record<string, unknown>
) => Promise<SkillResult<T>>

/**
 * Registered skill with handler
 */
export interface RegisteredSkill extends Skill {
  /** Handler function for execution */
  handler?: SkillHandler
}

/**
 * Skill validation error
 */
export interface SkillValidationError {
  /** Error code */
  code: 'UNAUTHORIZED' | 'BLOCKED' | 'DEPENDENCY_MISSING' | 'INVALID_CONTEXT' | 'NOT_FOUND'
  /** Human-readable message */
  message: string
  /** The skill that failed validation */
  skillId: string
  /** Agent that attempted execution */
  attemptedBy: AgentRole
  /** Required agent(s) if unauthorized */
  requiredAgents?: AgentRole[]
  /** Blocking skills if blocked */
  blockingSkills?: string[]
}

/**
 * Authority validation result
 */
export interface AuthorityValidation {
  /** Whether the agent has authority */
  authorized: boolean
  /** Reason for denial if not authorized */
  reason?: string
  /** Suggested agent to delegate to */
  suggestDelegateTo?: AgentRole
}

/**
 * Skill filter options for querying
 */
export interface SkillFilter {
  /** Filter by owner agent */
  owner?: AgentRole
  /** Filter by category */
  category?: SkillCategory
  /** Filter by authority level */
  authorityLevel?: AuthorityLevel
  /** Filter by allowed agent */
  allowedFor?: AgentRole
  /** Filter by tags */
  tags?: string[]
  /** Search term for command or name */
  search?: string
}
