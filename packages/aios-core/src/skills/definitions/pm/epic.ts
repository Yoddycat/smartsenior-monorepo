/**
 * PM Skills - Epic and Requirements Management
 *
 * Skills for managing epics, PRDs, and requirements
 */

import { definePMSkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *create-prd - Create a Product Requirements Document
 */
export const createPrdSkill: Skill = definePMSkill({
  command: '*create-prd',
  name: 'Create PRD',
  description: 'Create a Product Requirements Document from gathered requirements. Structures functional requirements, NFRs, and constraints.',
  canTrigger: ['pm:create-epic'],
  aliases: ['*prd'],
  tags: ['planning', 'requirements', 'prd'],
})

/**
 * *execute-epic - Execute an epic workflow
 */
export const executeEpicSkill: Skill = definePMSkill({
  command: '*execute-epic',
  name: 'Execute Epic',
  description: 'Orchestrate the execution of an epic, managing story creation and tracking progress through EPIC-{ID}-EXECUTION.yaml.',
  dependsOn: ['pm:create-epic'],
  canTrigger: ['sm:draft'],
  aliases: ['*run-epic'],
  tags: ['epic', 'orchestration', 'execution'],
})

/**
 * *create-epic - Create a new epic
 */
export const createEpicSkill: Skill = definePMSkill({
  command: '*create-epic',
  name: 'Create Epic',
  description: 'Create a new epic from PRD, defining scope, stories outline, and success criteria.',
  dependsOn: ['pm:create-prd'],
  canTrigger: ['pm:execute-epic'],
  aliases: ['*epic'],
  tags: ['epic', 'planning', 'creation'],
})

/**
 * *gather-requirements - Gather requirements from stakeholders
 */
export const gatherRequirementsSkill: Skill = definePMSkill({
  command: '*gather-requirements',
  name: 'Gather Requirements',
  description: 'Interactive requirements gathering session. Produces requirements.json for spec pipeline.',
  canTrigger: ['pm:write-spec', 'architect:assess-complexity'],
  aliases: ['*requirements', '*gather'],
  tags: ['requirements', 'discovery', 'spec-pipeline'],
})

/**
 * *write-spec - Write specification document
 */
export const writeSpecSkill: Skill = definePMSkill({
  command: '*write-spec',
  name: 'Write Specification',
  description: 'Write detailed specification document from requirements and research. Part of spec pipeline phase 4.',
  dependsOn: ['pm:gather-requirements'],
  canTrigger: ['qa:critique-spec'],
  aliases: ['*spec'],
  tags: ['specification', 'documentation', 'spec-pipeline'],
})

/**
 * All PM skills
 */
export const pmSkills: Skill[] = [
  createPrdSkill,
  executeEpicSkill,
  createEpicSkill,
  gatherRequirementsSkill,
  writeSpecSkill,
]
