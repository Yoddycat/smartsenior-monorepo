/**
 * PO Skills - Story Validation
 *
 * Skills for validating stories and managing backlog
 */

import { definePOSkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *validate-story-draft - Validate a story against 10-point checklist
 */
export const validateStoryDraftSkill: Skill = definePOSkill({
  command: '*validate-story-draft',
  name: 'Validate Story Draft',
  description: 'Validate a story draft against the 10-point checklist. Returns GO (>=7/10) or NO-GO with required fixes. Updates story status from Draft to Ready on GO.',
  dependsOn: ['sm:draft'],
  canTrigger: ['dev:develop'],
  aliases: ['*validate-story', '*validate'],
  tags: ['story', 'validation', 'sdc', 'gate'],
})

/**
 * *close-story - Mark story as completed
 */
export const closeStorySkill: Skill = definePOSkill({
  command: '*close-story',
  name: 'Close Story',
  description: 'Mark a story as Done after all acceptance criteria are met and QA has passed.',
  dependsOn: ['qa:gate'],
  requiresConfirmation: true,
  tags: ['story', 'completion', 'sdc'],
})

/**
 * *prioritize-backlog - Reorder backlog priorities
 */
export const prioritizeBacklogSkill: Skill = definePOSkill({
  command: '*prioritize-backlog',
  name: 'Prioritize Backlog',
  description: 'Reorder and prioritize the product backlog based on business value and dependencies.',
  aliases: ['*backlog-priority'],
  tags: ['backlog', 'planning'],
})

/**
 * *accept-story - Accept completed story
 */
export const acceptStorySkill: Skill = definePOSkill({
  command: '*accept-story',
  name: 'Accept Story',
  description: 'Formally accept a story as meeting all acceptance criteria after QA approval.',
  dependsOn: ['qa:gate'],
  canTrigger: ['devops:push'],
  requiresConfirmation: true,
  tags: ['story', 'acceptance', 'sdc'],
})

/**
 * All PO skills
 */
export const poSkills: Skill[] = [
  validateStoryDraftSkill,
  closeStorySkill,
  prioritizeBacklogSkill,
  acceptStorySkill,
]
