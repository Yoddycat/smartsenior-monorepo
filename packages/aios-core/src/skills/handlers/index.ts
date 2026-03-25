/**
 * AIOS Skills - Handlers Module
 *
 * Execution handlers for skills
 */

// Types
export type {
  HandlerOptions,
  StoryContext,
  GitContext,
  QAContext,
  QAIssue,
  SpecContext,
  HandlerDependencies,
  ExtendedSkillContext,
  ExtendedSkillHandler,
  HandlerRegistration,
} from './types'

// Base utilities
export {
  success,
  failure,
  successWithTriggers,
  defaultDependencies,
  defaultOptions,
  withErrorHandling,
  withTimeout,
  withDryRun,
  withConfirmation,
  composeHandlers,
  delegateHandler,
  noopHandler,
  validateContext,
} from './base'

// SDC handlers
export {
  sdcHandlers,
  // SM
  handleDraft,
  handleStoryChecklist,
  // PO
  handleValidateStoryDraft,
  handleAcceptStory,
  // DEV
  handleDevelop,
  handleCommit,
  handleRunTests,
  handleLint,
  handleTypecheck,
  // QA
  handleGate,
  handleReview,
  handleQALoop,
  // DevOps
  handlePush,
  handleCreatePR,
  handleMergePR,
  handleRelease,
} from './sdc'

// Result types
export type {
  DraftResult,
  ChecklistResult,
  ValidationResult,
  DevelopResult,
  CommitResult,
  TestResult,
  LintResult,
  TypecheckResult,
  GateResult,
  ReviewResult,
  QALoopResult,
  PushResult,
  PRResult,
  MergeResult,
  ReleaseResult,
} from './sdc'

import { sdcHandlers } from './sdc'
import type { ExtendedSkillHandler } from './types'

/**
 * All registered handlers
 */
export const allHandlers: Record<string, ExtendedSkillHandler> = {
  ...sdcHandlers,
}

/**
 * Get handler for a skill
 */
export function getHandler(skillId: string): ExtendedSkillHandler | undefined {
  return allHandlers[skillId]
}

/**
 * Check if a skill has a handler
 */
export function hasHandler(skillId: string): boolean {
  return skillId in allHandlers
}

/**
 * List all skills with handlers
 */
export function listHandledSkills(): string[] {
  return Object.keys(allHandlers)
}
