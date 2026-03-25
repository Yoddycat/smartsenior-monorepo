/**
 * Architect Skills - System Design
 *
 * Skills for architecture decisions and system design
 */

import { defineArchitectSkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *assess-complexity - Assess complexity of a feature/epic
 */
export const assessComplexitySkill: Skill = defineArchitectSkill({
  command: '*assess-complexity',
  name: 'Assess Complexity',
  description: 'Assess complexity across 5 dimensions (scope, integration, infrastructure, knowledge, risk). Returns SIMPLE/STANDARD/COMPLEX classification.',
  canTrigger: ['analyst:research-prompt'],
  aliases: ['*complexity'],
  tags: ['complexity', 'assessment', 'spec-pipeline'],
})

/**
 * *design-system - Create system design document
 */
export const designSystemSkill: Skill = defineArchitectSkill({
  command: '*design-system',
  name: 'Design System',
  description: 'Create comprehensive system design including components, interfaces, data flow, and integration points.',
  canTrigger: ['data-engineer:create-schema'],
  aliases: ['*system-design'],
  tags: ['design', 'architecture', 'documentation'],
})

/**
 * *create-architecture - Create architecture documentation
 */
export const createArchitectureSkill: Skill = defineArchitectSkill({
  command: '*create-architecture',
  name: 'Create Architecture',
  description: 'Create architecture documentation for a project or feature. Includes diagrams, decisions, and trade-offs.',
  aliases: ['*architecture', '*arch'],
  tags: ['architecture', 'documentation', 'design'],
})

/**
 * *review-architecture - Review existing architecture
 */
export const reviewArchitectureSkill: Skill = defineArchitectSkill({
  command: '*review-architecture',
  name: 'Review Architecture',
  description: 'Review and assess existing architecture. Identifies technical debt, risks, and improvement opportunities.',
  canTrigger: ['architect:plan-implementation'],
  aliases: ['*arch-review'],
  tags: ['review', 'assessment', 'brownfield'],
})

/**
 * *plan-implementation - Create implementation plan
 */
export const planImplementationSkill: Skill = defineArchitectSkill({
  command: '*plan-implementation',
  name: 'Plan Implementation',
  description: 'Create detailed implementation plan from approved spec. Phase 6 of spec pipeline.',
  dependsOn: ['qa:critique-spec'],
  aliases: ['*impl-plan'],
  tags: ['planning', 'implementation', 'spec-pipeline'],
})

/**
 * All Architect skills
 */
export const architectSkills: Skill[] = [
  assessComplexitySkill,
  designSystemSkill,
  createArchitectureSkill,
  reviewArchitectureSkill,
  planImplementationSkill,
]
