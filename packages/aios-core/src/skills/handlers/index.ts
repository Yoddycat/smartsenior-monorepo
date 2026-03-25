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
  handleCreateNextStory,
  // PO
  handleValidateStoryDraft,
  handleAcceptStory,
  handleCloseStory,
  handlePrioritizeBacklog,
  // DEV
  handleDevelop,
  handleCommit,
  handleRunTests,
  handleLint,
  handleTypecheck,
  handleRefactor,
  // QA
  handleGate,
  handleReview,
  handleQALoop,
  handleCodeRabbitReview,
  handleSecurityAudit,
  handleCritiqueSpec,
  // DevOps
  handlePush,
  handleCreatePR,
  handleMergePR,
  handleRelease,
  handleSetupMcp,
} from './sdc'

// PM handlers
export {
  pmHandlers,
  handleCreatePrd,
  handleCreateEpic,
  handleExecuteEpic,
  handleGatherRequirements,
  handleWriteSpec,
} from './pm'

// Architect handlers
export {
  architectHandlers,
  handleAssessComplexity,
  handleDesignSystem,
  handlePlanImplementation,
} from './architect'

// Analyst handlers
export {
  analystHandlers,
  handleResearchPrompt,
  handleAnalyzeData,
  handleCreateReport,
} from './analyst'

// AIOS Master handlers
export {
  aiosMasterHandlers,
  handleRunWorkflow,
  handleHelp,
  handleStatus,
  handleDelegate,
  handleConfig,
} from './aios-master'

// Data Engineer handlers
export {
  dataEngineerHandlers,
  handleCreateSchema,
  handleOptimizeQuery,
  handleCreateMigration,
  handleAuditDatabase,
  handleImplementRls,
} from './data-engineer'

// UX Design Expert handlers
export {
  uxDesignExpertHandlers,
  handleCreatePrototype,
  handleReviewUx,
  handleCreateWireframe,
  handleAuditAccessibility,
  handleCreateDesignSystem,
  handleUserFlowAnalysis,
} from './ux-design-expert'

// SDC Result types
export type {
  DraftResult,
  ChecklistResult,
  CreateNextStoryResult,
  ValidationResult,
  CloseStoryResult,
  PrioritizeBacklogResult,
  DevelopResult,
  CommitResult,
  TestResult,
  LintResult,
  TypecheckResult,
  RefactorResult,
  GateResult,
  ReviewResult,
  QALoopResult,
  CodeRabbitResult,
  SecurityAuditResult,
  CritiqueSpecResult,
  PushResult,
  PRResult,
  MergeResult,
  ReleaseResult,
  McpSetupResult,
} from './sdc'

// PM Result types
export type {
  PrdResult,
  EpicResult,
  RequirementsResult,
  SpecResult,
} from './pm'

// Architect Result types
export type {
  ComplexityResult,
  DesignResult,
  ImplementationPlanResult,
} from './architect'

// Analyst Result types
export type {
  ResearchResult,
  AnalysisResult,
  ReportResult,
} from './analyst'

// AIOS Master Result types
export type {
  WorkflowRunResult,
  HelpResult,
  StatusResult,
  DelegateResult,
  ConfigResult,
} from './aios-master'

// Data Engineer Result types
export type {
  SchemaResult,
  QueryOptimizationResult,
  MigrationResult,
  DatabaseAuditResult,
  RlsResult,
} from './data-engineer'

// UX Design Expert Result types
export type {
  PrototypeResult,
  UxReviewResult,
  WireframeResult,
  AccessibilityAuditResult,
  DesignSystemResult,
  UserFlowResult,
} from './ux-design-expert'

import { sdcHandlers } from './sdc'
import { pmHandlers } from './pm'
import { architectHandlers } from './architect'
import { analystHandlers } from './analyst'
import { aiosMasterHandlers } from './aios-master'
import { dataEngineerHandlers } from './data-engineer'
import { uxDesignExpertHandlers } from './ux-design-expert'
import type { ExtendedSkillHandler } from './types'

/**
 * All registered handlers
 */
export const allHandlers: Record<string, ExtendedSkillHandler> = {
  ...sdcHandlers,
  ...pmHandlers,
  ...architectHandlers,
  ...analystHandlers,
  ...aiosMasterHandlers,
  ...dataEngineerHandlers,
  ...uxDesignExpertHandlers,
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

/**
 * Get handler count by category
 */
export function getHandlerCounts(): {
  total: number
  byCategory: Record<string, number>
} {
  const byCategory: Record<string, number> = {
    sdc: Object.keys(sdcHandlers).length,
    pm: Object.keys(pmHandlers).length,
    architect: Object.keys(architectHandlers).length,
    analyst: Object.keys(analystHandlers).length,
    'aios-master': Object.keys(aiosMasterHandlers).length,
    'data-engineer': Object.keys(dataEngineerHandlers).length,
    'ux-design-expert': Object.keys(uxDesignExpertHandlers).length,
  }

  return {
    total: Object.keys(allHandlers).length,
    byCategory,
  }
}
