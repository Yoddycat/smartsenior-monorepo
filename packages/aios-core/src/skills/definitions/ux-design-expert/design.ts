/**
 * UX Design Expert Skills - Design and Prototyping
 *
 * Skills for UX design, prototyping, and accessibility
 */

import { defineSkill } from '../factory'
import { exclusiveAuthority } from '../../authority'
import type { Skill } from '../../types'

/**
 * Helper to create UX Design Expert skills
 */
function defineUXSkill(
  options: Omit<Parameters<typeof defineSkill>[0], 'owner' | 'category' | 'authority'>
): Skill {
  return defineSkill({
    ...options,
    owner: 'ux-design-expert',
    category: 'planning', // UX is part of planning phase
    authority: exclusiveAuthority('ux-design-expert'),
  })
}

/**
 * *create-prototype - Create interactive prototype
 */
export const createPrototypeSkill: Skill = defineUXSkill({
  command: '*create-prototype',
  name: 'Create Prototype',
  description: 'Create interactive prototype or mockup for user flows. Supports low-fi wireframes to high-fi prototypes.',
  canTrigger: ['ux-design-expert:review-ux'],
  aliases: ['*prototype', '*mockup'],
  tags: ['design', 'prototype', 'ui'],
})

/**
 * *review-ux - Review UX/UI implementation
 */
export const reviewUxSkill: Skill = defineUXSkill({
  command: '*review-ux',
  name: 'Review UX',
  description: 'Review UX/UI implementation against design specs. Checks consistency, usability, and accessibility.',
  dependsOn: ['dev:develop'],
  aliases: ['*ux-review', '*ui-review'],
  tags: ['review', 'ux', 'quality'],
})

/**
 * *create-wireframe - Create wireframe
 */
export const createWireframeSkill: Skill = defineUXSkill({
  command: '*create-wireframe',
  name: 'Create Wireframe',
  description: 'Create low-fidelity wireframe for layout and structure planning.',
  canTrigger: ['ux-design-expert:create-prototype'],
  aliases: ['*wireframe'],
  tags: ['design', 'wireframe', 'planning'],
})

/**
 * *audit-accessibility - Audit for accessibility compliance
 */
export const auditAccessibilitySkill: Skill = defineUXSkill({
  command: '*audit-accessibility',
  name: 'Audit Accessibility',
  description: 'Audit UI for WCAG 2.1 accessibility compliance. Checks color contrast, keyboard navigation, screen reader support.',
  aliases: ['*a11y-audit', '*wcag-audit'],
  tags: ['accessibility', 'audit', 'wcag', 'a11y'],
})

/**
 * *create-design-system - Create or update design system
 */
export const createDesignSystemSkill: Skill = defineUXSkill({
  command: '*create-design-system',
  name: 'Create Design System',
  description: 'Create or update design system documentation including tokens, components, and patterns.',
  aliases: ['*design-system', '*ds'],
  tags: ['design-system', 'documentation', 'tokens'],
})

/**
 * *user-flow-analysis - Analyze user flows
 */
export const userFlowAnalysisSkill: Skill = defineUXSkill({
  command: '*user-flow-analysis',
  name: 'User Flow Analysis',
  description: 'Analyze and document user flows, identifying pain points and optimization opportunities.',
  aliases: ['*user-flow', '*flow-analysis'],
  tags: ['analysis', 'user-flow', 'ux-research'],
})

/**
 * All UX Design Expert skills
 */
export const uxDesignExpertSkills: Skill[] = [
  createPrototypeSkill,
  reviewUxSkill,
  createWireframeSkill,
  auditAccessibilitySkill,
  createDesignSystemSkill,
  userFlowAnalysisSkill,
]
