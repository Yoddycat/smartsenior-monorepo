/**
 * AIOS Skills - Handler Types
 *
 * Types and interfaces for skill execution handlers
 */

import type { SkillContext, SkillResult } from '../types'

/**
 * Handler execution options
 */
export interface HandlerOptions {
  /** Execution mode for interactive skills */
  mode?: 'interactive' | 'yolo' | 'pre-flight'
  /** Whether to run in dry-run mode (no side effects) */
  dryRun?: boolean
  /** Verbose output */
  verbose?: boolean
  /** Timeout in milliseconds */
  timeout?: number
}

/**
 * Story context for story-related handlers
 */
export interface StoryContext {
  /** Story ID (e.g., "1.2") */
  storyId: string
  /** Story file path */
  storyPath?: string
  /** Epic ID */
  epicId?: string
  /** Story status */
  status?: 'Draft' | 'Ready' | 'InProgress' | 'InReview' | 'Done'
}

/**
 * Git context for git-related handlers
 */
export interface GitContext {
  /** Current branch */
  branch?: string
  /** Whether there are uncommitted changes */
  hasChanges?: boolean
  /** Remote repository */
  remote?: string
  /** Last commit hash */
  lastCommit?: string
}

/**
 * QA context for quality-related handlers
 */
export interface QAContext {
  /** QA loop iteration number */
  iteration?: number
  /** Max iterations allowed */
  maxIterations?: number
  /** Previous verdict if in loop */
  previousVerdict?: 'PASS' | 'CONCERNS' | 'FAIL' | 'WAIVED'
  /** Issues found */
  issues?: QAIssue[]
}

/**
 * QA Issue structure
 */
export interface QAIssue {
  /** Severity level */
  severity: 'low' | 'medium' | 'high' | 'critical'
  /** Issue category */
  category: 'code' | 'tests' | 'requirements' | 'performance' | 'security' | 'docs'
  /** Description of the issue */
  description: string
  /** File path if applicable */
  file?: string
  /** Line number if applicable */
  line?: number
  /** Recommendation to fix */
  recommendation?: string
}

/**
 * Spec pipeline context
 */
export interface SpecContext {
  /** Complexity classification */
  complexity?: 'SIMPLE' | 'STANDARD' | 'COMPLEX'
  /** Complexity score (1-25) */
  complexityScore?: number
  /** Current phase in spec pipeline */
  phase?: number
  /** Requirements file path */
  requirementsPath?: string
  /** Spec file path */
  specPath?: string
}

/**
 * Handler dependencies - services available to handlers
 */
export interface HandlerDependencies {
  /** File system operations */
  fs: {
    read: (path: string) => Promise<string>
    write: (path: string, content: string) => Promise<void>
    exists: (path: string) => Promise<boolean>
    glob: (pattern: string) => Promise<string[]>
  }
  /** Git operations */
  git: {
    status: () => Promise<GitContext>
    add: (files: string[]) => Promise<void>
    commit: (message: string) => Promise<string>
    push: () => Promise<void>
    branch: () => Promise<string>
  }
  /** Logger */
  logger: {
    info: (message: string) => void
    warn: (message: string) => void
    error: (message: string) => void
    debug: (message: string) => void
  }
  /** User interaction */
  prompt: {
    confirm: (message: string) => Promise<boolean>
    input: (message: string) => Promise<string>
    select: <T>(message: string, options: T[]) => Promise<T>
  }
}

/**
 * Extended skill context with dependencies
 */
export interface ExtendedSkillContext extends SkillContext {
  /** Handler dependencies */
  deps: HandlerDependencies
  /** Handler options */
  options: HandlerOptions
  /** Story context if applicable */
  story?: StoryContext
  /** Git context if applicable */
  git?: GitContext
  /** QA context if applicable */
  qa?: QAContext
  /** Spec context if applicable */
  spec?: SpecContext
}

/**
 * Handler function with extended context
 */
export type ExtendedSkillHandler<T = unknown> = (
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
) => Promise<SkillResult<T>>

/**
 * Handler registration entry
 */
export interface HandlerRegistration<T = unknown> {
  /** Skill ID this handler is for */
  skillId: string
  /** The handler function */
  handler: ExtendedSkillHandler<T>
  /** Description of what the handler does */
  description?: string
}
