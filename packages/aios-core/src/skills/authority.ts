/**
 * AIOS Skills Module - Authority System
 *
 * Authority matrix and validation for skill execution
 */

import type { AgentRole } from '../agents'
import type {
  SkillAuthority,
  SkillContext,
  AuthorityLevel,
  AuthorityValidation,
  SkillCategory,
} from './types'

/**
 * Predefined authority configurations for common patterns
 */
export const AUTHORITY_PRESETS = {
  /**
   * DevOps-exclusive operations (git push, PR creation)
   */
  DEVOPS_EXCLUSIVE: {
    allowedAgents: ['devops'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * SM-exclusive story creation
   */
  SM_EXCLUSIVE: {
    allowedAgents: ['sm'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * PO-exclusive validation
   */
  PO_EXCLUSIVE: {
    allowedAgents: ['po'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * Dev-exclusive implementation
   */
  DEV_EXCLUSIVE: {
    allowedAgents: ['dev'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * QA-exclusive quality gates
   */
  QA_EXCLUSIVE: {
    allowedAgents: ['qa'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * PM-exclusive epic operations
   */
  PM_EXCLUSIVE: {
    allowedAgents: ['pm'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * Architect-exclusive design decisions
   */
  ARCHITECT_EXCLUSIVE: {
    allowedAgents: ['architect'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * Data Engineer-exclusive schema operations
   */
  DATA_ENGINEER_EXCLUSIVE: {
    allowedAgents: ['data-engineer'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * Analyst-exclusive research operations
   */
  ANALYST_EXCLUSIVE: {
    allowedAgents: ['analyst'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * AIOS Master - can execute anything
   */
  AIOS_MASTER: {
    allowedAgents: ['aios-master'] as AgentRole[],
    level: 'exclusive' as AuthorityLevel,
  },

  /**
   * Shared between dev and qa (testing)
   */
  DEV_QA_SHARED: {
    allowedAgents: ['dev', 'qa'] as AgentRole[],
    level: 'shared' as AuthorityLevel,
  },

  /**
   * Shared between pm and po (requirements)
   */
  PM_PO_SHARED: {
    allowedAgents: ['pm', 'po'] as AgentRole[],
    level: 'shared' as AuthorityLevel,
  },

  /**
   * All agents can execute (universal)
   */
  ALL_AGENTS: {
    allowedAgents: [
      'dev',
      'qa',
      'architect',
      'pm',
      'po',
      'sm',
      'analyst',
      'devops',
      'data-engineer',
      'ux-design-expert',
      'aios-master',
    ] as AgentRole[],
    level: 'shared' as AuthorityLevel,
  },

  /**
   * Delegated from architect to data-engineer
   */
  DELEGATED_ARCHITECT_TO_DATA: {
    allowedAgents: ['data-engineer'] as AgentRole[],
    level: 'delegated' as AuthorityLevel,
    delegatedFrom: 'architect' as AgentRole,
    delegationReason: 'Schema implementation delegated from architect',
  },
} as const

/**
 * Operations that are blocked for specific agents
 */
export const BLOCKED_OPERATIONS: Record<string, AgentRole[]> = {
  'git push': ['dev', 'qa', 'architect', 'pm', 'po', 'sm', 'analyst', 'data-engineer', 'ux-design-expert'],
  'gh pr create': ['dev', 'qa', 'architect', 'pm', 'po', 'sm', 'analyst', 'data-engineer', 'ux-design-expert'],
  'gh pr merge': ['dev', 'qa', 'architect', 'pm', 'po', 'sm', 'analyst', 'data-engineer', 'ux-design-expert'],
}

/**
 * Category to default authority mapping
 */
export const CATEGORY_DEFAULT_AUTHORITY: Record<SkillCategory, SkillAuthority> = {
  story: AUTHORITY_PRESETS.SM_EXCLUSIVE,
  development: AUTHORITY_PRESETS.DEV_EXCLUSIVE,
  quality: AUTHORITY_PRESETS.QA_EXCLUSIVE,
  deployment: AUTHORITY_PRESETS.DEVOPS_EXCLUSIVE,
  planning: AUTHORITY_PRESETS.PM_EXCLUSIVE,
  research: AUTHORITY_PRESETS.ANALYST_EXCLUSIVE,
  database: AUTHORITY_PRESETS.DATA_ENGINEER_EXCLUSIVE,
  framework: AUTHORITY_PRESETS.AIOS_MASTER,
}

/**
 * Validate if an agent has authority to execute a skill
 */
export function validateSkillAuthority(
  authority: SkillAuthority,
  executingAgent: AgentRole,
  _context?: SkillContext
): AuthorityValidation {
  // AIOS Master can always execute
  if (executingAgent === 'aios-master') {
    return { authorized: true }
  }

  // Check if agent is in allowed list
  const isAllowed = authority.allowedAgents.includes(executingAgent)

  if (isAllowed) {
    return { authorized: true }
  }

  // Determine suggestion for delegation
  const suggestDelegateTo = authority.allowedAgents[0]

  // Build reason based on authority level
  let reason: string
  switch (authority.level) {
    case 'exclusive':
      reason = `This skill is exclusive to ${authority.allowedAgents.join(' or ')}. Agent '${executingAgent}' cannot execute it.`
      break
    case 'delegated':
      reason = `This skill is delegated from ${authority.delegatedFrom} to ${authority.allowedAgents.join(' or ')}. Agent '${executingAgent}' cannot execute it.`
      break
    case 'shared':
      reason = `This skill is shared between ${authority.allowedAgents.join(', ')}. Agent '${executingAgent}' is not in the allowed list.`
      break
    default:
      reason = `Agent '${executingAgent}' is not authorized to execute this skill.`
  }

  return {
    authorized: false,
    reason,
    suggestDelegateTo,
  }
}

/**
 * Check if an operation is blocked for an agent
 */
export function isOperationBlocked(operation: string, agent: AgentRole): boolean {
  const blockedAgents = BLOCKED_OPERATIONS[operation]
  if (!blockedAgents) {
    return false
  }
  return blockedAgents.includes(agent)
}

/**
 * Get the required agent for a blocked operation
 */
export function getRequiredAgentForOperation(operation: string): AgentRole | undefined {
  const blockedAgents = BLOCKED_OPERATIONS[operation]
  if (!blockedAgents) {
    return undefined
  }

  // The agent NOT in the blocked list is the required one
  const allAgents: AgentRole[] = [
    'dev', 'qa', 'architect', 'pm', 'po', 'sm',
    'analyst', 'devops', 'data-engineer', 'ux-design-expert', 'aios-master',
  ]

  return allAgents.find(agent => !blockedAgents.includes(agent))
}

/**
 * Create a custom authority configuration
 */
export function createAuthority(
  allowedAgents: AgentRole[],
  level: AuthorityLevel = 'shared',
  options?: {
    delegatedFrom?: AgentRole
    delegationReason?: string
  }
): SkillAuthority {
  return {
    allowedAgents,
    level,
    ...options,
  }
}

/**
 * Create exclusive authority for a single agent
 */
export function exclusiveAuthority(agent: AgentRole): SkillAuthority {
  return {
    allowedAgents: [agent],
    level: 'exclusive',
  }
}

/**
 * Create shared authority for multiple agents
 */
export function sharedAuthority(...agents: AgentRole[]): SkillAuthority {
  return {
    allowedAgents: agents,
    level: 'shared',
  }
}

/**
 * Create delegated authority
 */
export function delegatedAuthority(
  toAgent: AgentRole,
  fromAgent: AgentRole,
  reason: string
): SkillAuthority {
  return {
    allowedAgents: [toAgent],
    level: 'delegated',
    delegatedFrom: fromAgent,
    delegationReason: reason,
  }
}
