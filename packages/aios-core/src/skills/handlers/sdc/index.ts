/**
 * SDC (Story Development Cycle) Handlers
 *
 * All handlers for the Story Development Cycle workflow
 */

import type { ExtendedSkillHandler } from '../types'

// Import SM handlers
import {
  handleDraft,
  handleStoryChecklist,
} from './sm-handlers'

// Import PO handlers
import {
  handleValidateStoryDraft,
  handleAcceptStory,
} from './po-handlers'

// Import DEV handlers
import {
  handleDevelop,
  handleCommit,
  handleRunTests,
  handleLint,
  handleTypecheck,
} from './dev-handlers'

// Import QA handlers
import {
  handleGate,
  handleReview,
  handleQALoop,
} from './qa-handlers'

// Import DevOps handlers
import {
  handlePush,
  handleCreatePR,
  handleMergePR,
  handleRelease,
} from './devops-handlers'

// Re-export SM handlers
export {
  handleDraft,
  handleStoryChecklist,
  type DraftResult,
  type ChecklistResult,
} from './sm-handlers'

// Re-export PO handlers
export {
  handleValidateStoryDraft,
  handleAcceptStory,
  type ValidationResult,
} from './po-handlers'

// Re-export DEV handlers
export {
  handleDevelop,
  handleCommit,
  handleRunTests,
  handleLint,
  handleTypecheck,
  type DevelopResult,
  type CommitResult,
  type TestResult,
  type LintResult,
  type TypecheckResult,
} from './dev-handlers'

// Re-export QA handlers
export {
  handleGate,
  handleReview,
  handleQALoop,
  type GateResult,
  type ReviewResult,
  type QALoopResult,
} from './qa-handlers'

// Re-export DevOps handlers
export {
  handlePush,
  handleCreatePR,
  handleMergePR,
  handleRelease,
  type PushResult,
  type PRResult,
  type MergeResult,
  type ReleaseResult,
} from './devops-handlers'

// Handler map for SDC skills
export const sdcHandlers: Record<string, ExtendedSkillHandler> = {
  // SM
  'sm:draft': handleDraft,
  'sm:story-checklist': handleStoryChecklist,

  // PO
  'po:validate-story-draft': handleValidateStoryDraft,
  'po:accept-story': handleAcceptStory,

  // DEV
  'dev:develop': handleDevelop,
  'dev:commit': handleCommit,
  'dev:run-tests': handleRunTests,
  'dev:lint': handleLint,
  'dev:typecheck': handleTypecheck,

  // QA
  'qa:gate': handleGate,
  'qa:review': handleReview,
  'qa:qa-loop': handleQALoop,

  // DevOps
  'devops:push': handlePush,
  'devops:create-pr': handleCreatePR,
  'devops:merge-pr': handleMergePR,
  'devops:release': handleRelease,
}
