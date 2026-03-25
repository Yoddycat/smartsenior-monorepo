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
  handleCreateNextStory,
} from './sm-handlers'

// Import PO handlers
import {
  handleValidateStoryDraft,
  handleAcceptStory,
  handleCloseStory,
  handlePrioritizeBacklog,
} from './po-handlers'

// Import DEV handlers
import {
  handleDevelop,
  handleCommit,
  handleRunTests,
  handleLint,
  handleTypecheck,
  handleRefactor,
} from './dev-handlers'

// Import QA handlers
import {
  handleGate,
  handleReview,
  handleQALoop,
  handleCodeRabbitReview,
  handleSecurityAudit,
  handleCritiqueSpec,
} from './qa-handlers'

// Import DevOps handlers
import {
  handlePush,
  handleCreatePR,
  handleMergePR,
  handleRelease,
  handleSetupMcp,
} from './devops-handlers'

// Re-export SM handlers
export {
  handleDraft,
  handleStoryChecklist,
  handleCreateNextStory,
  type DraftResult,
  type ChecklistResult,
  type CreateNextStoryResult,
} from './sm-handlers'

// Re-export PO handlers
export {
  handleValidateStoryDraft,
  handleAcceptStory,
  handleCloseStory,
  handlePrioritizeBacklog,
  type ValidationResult,
  type CloseStoryResult,
  type PrioritizeBacklogResult,
} from './po-handlers'

// Re-export DEV handlers
export {
  handleDevelop,
  handleCommit,
  handleRunTests,
  handleLint,
  handleTypecheck,
  handleRefactor,
  type DevelopResult,
  type CommitResult,
  type TestResult,
  type LintResult,
  type TypecheckResult,
  type RefactorResult,
} from './dev-handlers'

// Re-export QA handlers
export {
  handleGate,
  handleReview,
  handleQALoop,
  handleCodeRabbitReview,
  handleSecurityAudit,
  handleCritiqueSpec,
  type GateResult,
  type ReviewResult,
  type QALoopResult,
  type CodeRabbitResult,
  type SecurityAuditResult,
  type CritiqueSpecResult,
} from './qa-handlers'

// Re-export DevOps handlers
export {
  handlePush,
  handleCreatePR,
  handleMergePR,
  handleRelease,
  handleSetupMcp,
  type PushResult,
  type PRResult,
  type MergeResult,
  type ReleaseResult,
  type McpSetupResult,
} from './devops-handlers'

// Handler map for SDC skills
export const sdcHandlers: Record<string, ExtendedSkillHandler> = {
  // SM
  'sm:draft': handleDraft,
  'sm:story-checklist': handleStoryChecklist,
  'sm:create-next-story': handleCreateNextStory,

  // PO
  'po:validate-story-draft': handleValidateStoryDraft,
  'po:accept-story': handleAcceptStory,
  'po:close-story': handleCloseStory,
  'po:prioritize-backlog': handlePrioritizeBacklog,

  // DEV
  'dev:develop': handleDevelop,
  'dev:commit': handleCommit,
  'dev:run-tests': handleRunTests,
  'dev:lint': handleLint,
  'dev:typecheck': handleTypecheck,
  'dev:refactor': handleRefactor,

  // QA
  'qa:gate': handleGate,
  'qa:review': handleReview,
  'qa:qa-loop': handleQALoop,
  'qa:coderabbit-review': handleCodeRabbitReview,
  'qa:security-audit': handleSecurityAudit,
  'qa:critique-spec': handleCritiqueSpec,

  // DevOps
  'devops:push': handlePush,
  'devops:create-pr': handleCreatePR,
  'devops:merge-pr': handleMergePR,
  'devops:release': handleRelease,
  'devops:setup-mcp': handleSetupMcp,
}
