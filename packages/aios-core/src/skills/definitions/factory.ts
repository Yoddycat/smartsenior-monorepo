/**
 * AIOS Skills - Definition Factory
 *
 * Helper functions for defining skills with consistent patterns
 */

import type { AgentRole } from '../../agents'
import type {
  Skill,
  SkillAuthority,
  SkillCategory,
  SkillHandler,
  RegisteredSkill,
} from '../types'
import { AUTHORITY_PRESETS, exclusiveAuthority } from '../authority'

/**
 * Options for defining a skill
 */
export interface DefineSkillOptions {
  /** Unique identifier (auto-generated as 'owner:action' if not provided) */
  id?: string
  /** Command syntax (e.g., '*develop') */
  command: string
  /** Human-readable name */
  name: string
  /** Description of what the skill does */
  description: string
  /** Owner agent */
  owner: AgentRole
  /** Skill category */
  category: SkillCategory
  /** Authority configuration (defaults to exclusive for owner) */
  authority?: SkillAuthority
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
 * Define a skill with sensible defaults
 */
export function defineSkill(options: DefineSkillOptions): Skill {
  const action = options.command.replace(/^\*/, '')
  const id = options.id || `${options.owner}:${action}`

  return {
    id,
    command: options.command,
    name: options.name,
    description: options.description,
    owner: options.owner,
    authority: options.authority || exclusiveAuthority(options.owner),
    category: options.category,
    dependsOn: options.dependsOn,
    canTrigger: options.canTrigger,
    aliases: options.aliases,
    requiresConfirmation: options.requiresConfirmation,
    tags: options.tags,
  }
}

/**
 * Define a skill with a handler
 */
export function defineSkillWithHandler<T = unknown>(
  options: DefineSkillOptions,
  handler: SkillHandler<T>
): { skill: Skill; handler: SkillHandler<T> } {
  return {
    skill: defineSkill(options),
    handler,
  }
}

/**
 * Create a DevOps skill (exclusive to devops)
 */
export function defineDevOpsSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'devops',
    category: 'deployment',
    authority: AUTHORITY_PRESETS.DEVOPS_EXCLUSIVE,
  })
}

/**
 * Create a Dev skill (exclusive to dev)
 */
export function defineDevSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'dev',
    category: 'development',
    authority: AUTHORITY_PRESETS.DEV_EXCLUSIVE,
  })
}

/**
 * Create a QA skill (exclusive to qa)
 */
export function defineQASkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'qa',
    category: 'quality',
    authority: AUTHORITY_PRESETS.QA_EXCLUSIVE,
  })
}

/**
 * Create an SM skill (exclusive to sm)
 */
export function defineSMSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'sm',
    category: 'story',
    authority: AUTHORITY_PRESETS.SM_EXCLUSIVE,
  })
}

/**
 * Create a PO skill (exclusive to po)
 */
export function definePOSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'po',
    category: 'story',
    authority: AUTHORITY_PRESETS.PO_EXCLUSIVE,
  })
}

/**
 * Create a PM skill (exclusive to pm)
 */
export function definePMSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'pm',
    category: 'planning',
    authority: AUTHORITY_PRESETS.PM_EXCLUSIVE,
  })
}

/**
 * Create an Architect skill (exclusive to architect)
 */
export function defineArchitectSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'architect',
    category: 'planning',
    authority: AUTHORITY_PRESETS.ARCHITECT_EXCLUSIVE,
  })
}

/**
 * Create a Data Engineer skill (exclusive to data-engineer)
 */
export function defineDataEngineerSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'data-engineer',
    category: 'database',
    authority: AUTHORITY_PRESETS.DATA_ENGINEER_EXCLUSIVE,
  })
}

/**
 * Create an Analyst skill (exclusive to analyst)
 */
export function defineAnalystSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'analyst',
    category: 'research',
    authority: AUTHORITY_PRESETS.ANALYST_EXCLUSIVE,
  })
}

/**
 * Create an AIOS Master skill (framework operations)
 */
export function defineAIOSMasterSkill(
  options: Omit<DefineSkillOptions, 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'aios-master',
    category: 'framework',
    authority: AUTHORITY_PRESETS.AIOS_MASTER,
  })
}

/**
 * Batch skill definition with common defaults
 */
export function defineSkillGroup(
  owner: AgentRole,
  category: SkillCategory,
  skills: Array<Omit<DefineSkillOptions, 'owner' | 'category'>>
): Skill[] {
  return skills.map(skillOptions =>
    defineSkill({
      ...skillOptions,
      owner,
      category,
    })
  )
}
