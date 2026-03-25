/**
 * DEV Skills - Development and Implementation
 *
 * Skills for implementing stories and managing code
 */

import { defineDevSkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *develop - Implement a story
 */
export const developSkill: Skill = defineDevSkill({
  command: '*develop',
  name: 'Develop Story',
  description: 'Implement a story following the acceptance criteria. Supports Interactive, YOLO, and Pre-Flight execution modes.',
  dependsOn: ['po:validate-story-draft'],
  canTrigger: ['dev:run-tests', 'qa:gate'],
  aliases: ['*implement', '*dev'],
  tags: ['development', 'implementation', 'sdc'],
})

/**
 * *run-tests - Execute test suite
 */
export const runTestsSkill: Skill = defineDevSkill({
  command: '*run-tests',
  name: 'Run Tests',
  description: 'Execute the test suite (unit, integration, e2e as configured). Reports coverage and failures.',
  aliases: ['*test', '*tests'],
  tags: ['testing', 'quality', 'verification'],
})

/**
 * *commit - Create a git commit
 */
export const commitSkill: Skill = defineDevSkill({
  command: '*commit',
  name: 'Git Commit',
  description: 'Create a git commit with conventional commit message. Runs pre-commit hooks automatically.',
  aliases: ['*git-commit'],
  tags: ['git', 'version-control'],
})

/**
 * *lint - Run linting
 */
export const lintSkill: Skill = defineDevSkill({
  command: '*lint',
  name: 'Run Linter',
  description: 'Execute linting checks on the codebase. Auto-fixes simple issues when possible.',
  aliases: ['*eslint'],
  tags: ['quality', 'code-style'],
})

/**
 * *typecheck - Run TypeScript type checking
 */
export const typecheckSkill: Skill = defineDevSkill({
  command: '*typecheck',
  name: 'Type Check',
  description: 'Run TypeScript type checking (tsc --noEmit). Reports type errors without building.',
  aliases: ['*tsc', '*types'],
  tags: ['typescript', 'quality', 'verification'],
})

/**
 * *refactor - Refactor code
 */
export const refactorSkill: Skill = defineDevSkill({
  command: '*refactor',
  name: 'Refactor Code',
  description: 'Perform code refactoring with safety checks. Ensures tests pass before and after changes.',
  requiresConfirmation: true,
  tags: ['refactoring', 'code-quality'],
})

/**
 * All DEV skills
 */
export const devSkills: Skill[] = [
  developSkill,
  runTestsSkill,
  commitSkill,
  lintSkill,
  typecheckSkill,
  refactorSkill,
]
