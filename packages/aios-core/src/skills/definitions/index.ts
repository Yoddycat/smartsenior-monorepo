/**
 * AIOS Skills - Definitions Index
 *
 * Auto-registration of all skill definitions with handlers
 */

import { getRegistry } from '../registry'
import type { Skill } from '../types'
import type { ExtendedSkillHandler } from '../handlers/types'

// Import all skill definitions
import { smSkills } from './sm'
import { poSkills } from './po'
import { devSkills } from './dev'
import { qaSkills } from './qa'
import { devopsSkills } from './devops'
import { pmSkills } from './pm'
import { architectSkills } from './architect'
import { analystSkills } from './analyst'
import { dataEngineerSkills } from './data-engineer'
import { aiosMasterSkills } from './aios-master'
import { uxDesignExpertSkills } from './ux-design-expert'

// Re-export individual skill collections
export { smSkills } from './sm'
export { poSkills } from './po'
export { devSkills } from './dev'
export { qaSkills } from './qa'
export { devopsSkills } from './devops'
export { pmSkills } from './pm'
export { architectSkills } from './architect'
export { analystSkills } from './analyst'
export { dataEngineerSkills } from './data-engineer'
export { aiosMasterSkills } from './aios-master'
export { uxDesignExpertSkills } from './ux-design-expert'

// Re-export factory functions
export {
  defineSkill,
  defineSkillWithHandler,
  defineDevOpsSkill,
  defineDevSkill,
  defineQASkill,
  defineSMSkill,
  definePOSkill,
  definePMSkill,
  defineArchitectSkill,
  defineDataEngineerSkill,
  defineAnalystSkill,
  defineAIOSMasterSkill,
  defineSkillGroup,
} from './factory'

/**
 * All skill definitions grouped by agent
 */
export const ALL_SKILLS: Skill[] = [
  ...smSkills,
  ...poSkills,
  ...devSkills,
  ...qaSkills,
  ...devopsSkills,
  ...pmSkills,
  ...architectSkills,
  ...analystSkills,
  ...dataEngineerSkills,
  ...aiosMasterSkills,
  ...uxDesignExpertSkills,
]

/**
 * Register all skills to the default registry
 *
 * Call this function to auto-register all defined skills.
 * This is typically called during application initialization.
 */
export function registerAllSkills(): void {
  const registry = getRegistry()

  for (const skill of ALL_SKILLS) {
    registry.register(skill)
  }
}

/**
 * Register all skills with their handlers
 *
 * This function registers both skills and their handlers in one call.
 * Handlers are looked up from the provided handler map.
 */
export function registerAllSkillsWithHandlers(
  handlers: Record<string, ExtendedSkillHandler>
): {
  skills: number
  handlers: { registered: number; notFound: number }
} {
  const registry = getRegistry()

  // First register all skills
  for (const skill of ALL_SKILLS) {
    registry.register(skill)
  }

  // Then register handlers
  const result = registry.registerHandlers(handlers as Record<string, never>)

  return {
    skills: ALL_SKILLS.length,
    handlers: {
      registered: result.registered.length,
      notFound: result.notFound.length,
    },
  }
}

/**
 * Get all skills without registering
 *
 * Useful for testing or inspection
 */
export function getAllSkillDefinitions(): Skill[] {
  return [...ALL_SKILLS]
}

/**
 * Get skills by agent role
 */
export function getSkillsByAgent(agent: string): Skill[] {
  switch (agent) {
    case 'sm':
      return smSkills
    case 'po':
      return poSkills
    case 'dev':
      return devSkills
    case 'qa':
      return qaSkills
    case 'devops':
      return devopsSkills
    case 'pm':
      return pmSkills
    case 'architect':
      return architectSkills
    case 'analyst':
      return analystSkills
    case 'data-engineer':
      return dataEngineerSkills
    case 'aios-master':
      return aiosMasterSkills
    case 'ux-design-expert':
      return uxDesignExpertSkills
    default:
      return []
  }
}
