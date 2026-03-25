/**
 * SM Skills - Story Draft and Creation
 *
 * Skills for creating and managing stories
 */

import { defineSMSkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *draft - Create a new story draft
 */
export const draftSkill: Skill = defineSMSkill({
  command: '*draft',
  name: 'Draft Story',
  description: 'Create a new story draft from PRD or epic context. Applies story template and generates initial acceptance criteria.',
  canTrigger: ['po:validate-story-draft'],
  aliases: ['*create-story-draft'],
  tags: ['story', 'creation', 'sdc'],
})

/**
 * *story-checklist - Validate story against checklist
 */
export const storyChecklistSkill: Skill = defineSMSkill({
  command: '*story-checklist',
  name: 'Story Checklist',
  description: 'Run the 10-point story validation checklist before handing off to PO for validation.',
  dependsOn: ['sm:draft'],
  tags: ['story', 'validation', 'checklist'],
})

/**
 * *create-next-story - Create the next story in sequence
 */
export const createNextStorySkill: Skill = defineSMSkill({
  command: '*create-next-story',
  name: 'Create Next Story',
  description: 'Create the next story in the epic sequence, auto-numbering and linking dependencies.',
  canTrigger: ['po:validate-story-draft'],
  aliases: ['*next-story'],
  tags: ['story', 'creation', 'epic', 'sdc'],
})

/**
 * All SM skills
 */
export const smSkills: Skill[] = [
  draftSkill,
  storyChecklistSkill,
  createNextStorySkill,
]
