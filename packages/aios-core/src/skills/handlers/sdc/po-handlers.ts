/**
 * PO (Product Owner) Handlers
 *
 * Handlers for story validation and backlog management
 */

import type { SkillResult } from '../../types'
import type { ExtendedSkillContext } from '../types'
import { success, failure, successWithTriggers, validateContext } from '../base'

/**
 * Validation result
 */
export interface ValidationResult {
  storyId: string
  verdict: 'GO' | 'NO-GO'
  score: number
  maxScore: number
  checks: ValidationCheck[]
  requiredFixes?: string[]
  newStatus?: 'Ready' | 'Draft'
}

interface ValidationCheck {
  id: number
  name: string
  score: number
  maxScore: number
  notes?: string
}

/**
 * *validate-story-draft handler - Validate story against 10-point checklist
 */
export async function handleValidateStoryDraft(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ValidationResult>> {
  const { deps, story } = context
  const { fs, logger } = deps

  const storyPath = story?.storyPath ?? (args?.storyPath as string)
  const storyId = story?.storyId ?? (args?.storyId as string)

  if (!storyPath) {
    return failure('Story path is required')
  }

  logger.info(`Validating story draft: ${storyPath}`)

  // Check if file exists
  const exists = await fs.exists(storyPath)
  if (!exists) {
    return failure(`Story file not found: ${storyPath}`)
  }

  // Read story content
  const content = await fs.read(storyPath)

  // Run 10-point validation
  const checks = runValidationChecks(content)
  const totalScore = checks.reduce((sum, c) => sum + c.score, 0)
  const maxScore = checks.reduce((sum, c) => sum + c.maxScore, 0)
  const normalizedScore = Math.round((totalScore / maxScore) * 10)

  // Determine verdict: GO if score >= 7/10
  const verdict = normalizedScore >= 7 ? 'GO' : 'NO-GO'

  // Collect required fixes for NO-GO
  const requiredFixes = checks
    .filter(c => c.score < c.maxScore)
    .map(c => `${c.name}: ${c.notes ?? 'Needs improvement'}`)

  logger.info(`Validation result: ${normalizedScore}/10 - ${verdict}`)

  // If GO, update story status to Ready
  if (verdict === 'GO' && !context.options.dryRun) {
    const updatedContent = content.replace(
      /\*\*Status:\*\*\s*Draft/i,
      '**Status:** Ready'
    )
    await fs.write(storyPath, updatedContent)
    logger.info('Updated story status to Ready')
  }

  const result: ValidationResult = {
    storyId: storyId ?? '',
    verdict,
    score: normalizedScore,
    maxScore: 10,
    checks,
    requiredFixes: verdict === 'NO-GO' ? requiredFixes : undefined,
    newStatus: verdict === 'GO' ? 'Ready' : 'Draft',
  }

  // If GO, trigger dev:develop
  if (verdict === 'GO') {
    return successWithTriggers(result, ['dev:develop'])
  }

  return success(result)
}

/**
 * *accept-story handler - Accept completed story
 */
export async function handleAcceptStory(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<AcceptResult>> {
  const { deps, story } = context
  const { fs, logger, prompt } = deps

  const error = validateContext(context, ['story'])
  if (error && !args?.storyPath) {
    return failure(error)
  }

  const storyPath = story?.storyPath ?? (args?.storyPath as string)
  const storyId = story?.storyId ?? (args?.storyId as string)

  if (!storyPath) {
    return failure('Story path is required')
  }

  // Confirm acceptance
  const confirmed = await prompt.confirm(
    `Accept story ${storyId} as meeting all acceptance criteria?`
  )
  if (!confirmed) {
    return failure('Story acceptance cancelled by user')
  }

  logger.info(`Accepting story: ${storyId}`)

  // Read and update story
  const content = await fs.read(storyPath)
  const updatedContent = content
    .replace(/\*\*Status:\*\*\s*\w+/i, '**Status:** Done')

  if (!context.options.dryRun) {
    await fs.write(storyPath, updatedContent)
  }

  logger.info(`Story ${storyId} accepted and marked as Done`)

  return successWithTriggers(
    {
      storyId: storyId ?? '',
      accepted: true,
      status: 'Done' as const,
    },
    ['devops:push']
  )
}

interface AcceptResult {
  storyId: string
  accepted: boolean
  status: 'Done'
}

/**
 * Run the 10-point validation checks
 */
function runValidationChecks(content: string): ValidationCheck[] {
  return [
    {
      id: 1,
      name: 'Clear and objective title',
      score: evaluateTitle(content),
      maxScore: 1,
      notes: 'Title should be descriptive and concise',
    },
    {
      id: 2,
      name: 'Complete description',
      score: evaluateDescription(content),
      maxScore: 1,
      notes: 'Description should explain the problem/need',
    },
    {
      id: 3,
      name: 'Testable acceptance criteria',
      score: evaluateAcceptanceCriteria(content),
      maxScore: 1,
      notes: 'AC should use Given/When/Then format',
    },
    {
      id: 4,
      name: 'Well-defined scope',
      score: evaluateScope(content),
      maxScore: 1,
      notes: 'IN and OUT should be clearly listed',
    },
    {
      id: 5,
      name: 'Dependencies mapped',
      score: evaluateDependencies(content),
      maxScore: 1,
      notes: 'Prerequisites should be identified',
    },
    {
      id: 6,
      name: 'Complexity estimate',
      score: evaluateComplexity(content),
      maxScore: 1,
      notes: 'Story points or T-shirt sizing required',
    },
    {
      id: 7,
      name: 'Business value',
      score: evaluateBusinessValue(content),
      maxScore: 1,
      notes: 'Benefit to user/business should be clear',
    },
    {
      id: 8,
      name: 'Risks documented',
      score: evaluateRisks(content),
      maxScore: 1,
      notes: 'Potential problems should be identified',
    },
    {
      id: 9,
      name: 'Definition of Done',
      score: evaluateDoD(content),
      maxScore: 1,
      notes: 'Clear completion criteria required',
    },
    {
      id: 10,
      name: 'PRD/Epic alignment',
      score: evaluateAlignment(content),
      maxScore: 1,
      notes: 'Should reference source requirements',
    },
  ]
}

// Evaluation helpers
function evaluateTitle(content: string): number {
  const titleMatch = content.match(/^#\s+[\d.]+\s*-\s*(.+)/m)
  if (!titleMatch) return 0
  const title = titleMatch[1]
  return title.length >= 10 && title.length <= 80 ? 1 : 0
}

function evaluateDescription(content: string): number {
  const descMatch = content.match(/## Description[\s\S]*?(?=##|$)/i)
  if (!descMatch) return 0
  const desc = descMatch[0].replace(/## Description/i, '').trim()
  return desc.length >= 50 ? 1 : 0
}

function evaluateAcceptanceCriteria(content: string): number {
  const hasGWT = /Given[\s\S]*?When[\s\S]*?Then/i.test(content)
  const hasCheckboxes = /\[[\sx]\]/.test(content)
  return hasGWT || hasCheckboxes ? 1 : 0
}

function evaluateScope(content: string): number {
  const hasIn = /### IN[\s\S]*?-/i.test(content)
  const hasOut = /### OUT[\s\S]*?-/i.test(content)
  return hasIn && hasOut ? 1 : 0
}

function evaluateDependencies(content: string): number {
  return /## Dependencies[\s\S]*?-/i.test(content) ? 1 : 0
}

function evaluateComplexity(content: string): number {
  return /Complexity.*?(XS|S|M|L|XL|\d+)/i.test(content) ? 1 : 0
}

function evaluateBusinessValue(content: string): number {
  return /(value|benefit|valor|benefício).*?:/i.test(content) ||
    /## (Value|Business Value)/i.test(content)
    ? 1
    : 0
}

function evaluateRisks(content: string): number {
  return /## Risks[\s\S]*?-/i.test(content) ? 1 : 0
}

function evaluateDoD(content: string): number {
  return /## (Definition of Done|DoD)[\s\S]*?\[[\sx]\]/i.test(content) ? 1 : 0
}

function evaluateAlignment(content: string): number {
  return /(PRD|Epic|FR-|NFR-|REQ-)/i.test(content) ? 1 : 0
}

/**
 * Close story result
 */
export interface CloseStoryResult {
  storyId: string
  closed: boolean
  status: 'Done'
  closedAt: string
}

/**
 * *close-story handler - Mark story as completed
 */
export async function handleCloseStory(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<CloseStoryResult>> {
  const { deps, story } = context
  const { fs, logger, prompt } = deps

  const storyPath = story?.storyPath ?? (args?.storyPath as string)
  const storyId = story?.storyId ?? (args?.storyId as string)

  if (!storyPath) {
    return failure('Story path is required')
  }

  // Check file exists
  const exists = await fs.exists(storyPath)
  if (!exists) {
    return failure(`Story file not found: ${storyPath}`)
  }

  // Confirm closure
  const confirmed = await prompt.confirm(
    `Close story ${storyId} as Done? This should only be done after QA approval.`
  )
  if (!confirmed) {
    return failure('Story closure cancelled by user')
  }

  logger.info(`Closing story: ${storyId}`)

  // Read and update story
  const content = await fs.read(storyPath)

  // Check if QA has passed
  if (!/\*\*Status:\*\*\s*(InReview|Ready)/i.test(content)) {
    const forceClose = await prompt.confirm(
      'Story is not in InReview status. Force close anyway?'
    )
    if (!forceClose) {
      return failure('Story must be in InReview status to close')
    }
  }

  const closedAt = new Date().toISOString()
  const updatedContent = content
    .replace(/\*\*Status:\*\*\s*\w+/i, '**Status:** Done')
    .replace(
      /## Change Log/i,
      `## Change Log\n\n| ${closedAt.split('T')[0]} | @po | Story closed |`
    )

  if (!context.options.dryRun) {
    await fs.write(storyPath, updatedContent)
  }

  logger.info(`Story ${storyId} closed successfully`)

  return success({
    storyId: storyId ?? '',
    closed: true,
    status: 'Done' as const,
    closedAt,
  })
}

/**
 * Prioritize backlog result
 */
export interface PrioritizeBacklogResult {
  epicId: string
  stories: BacklogItem[]
  reordered: boolean
}

interface BacklogItem {
  storyId: string
  title: string
  priority: number
  status: string
}

/**
 * *prioritize-backlog handler - Reorder backlog priorities
 */
export async function handlePrioritizeBacklog(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<PrioritizeBacklogResult>> {
  const { deps, epicId } = context
  const { fs, logger } = deps

  const targetEpicId = (args?.epicId as string) ?? epicId
  if (!targetEpicId) {
    return failure('Epic ID is required')
  }

  logger.info(`Prioritizing backlog for epic: ${targetEpicId}`)

  // Find all stories in the epic
  const storiesDir = `docs/stories/epics/${targetEpicId}`
  const storyFiles = await fs.glob(`${storiesDir}/*.story.md`)

  if (storyFiles.length === 0) {
    return failure(`No stories found for epic: ${targetEpicId}`)
  }

  // Read and parse stories
  const stories: BacklogItem[] = []
  for (const file of storyFiles) {
    const content = await fs.read(file)
    const titleMatch = content.match(/^#\s+([\d.]+)\s*-\s*(.+)/m)
    const statusMatch = content.match(/\*\*Status:\*\*\s*(\w+)/i)

    if (titleMatch) {
      stories.push({
        storyId: titleMatch[1],
        title: titleMatch[2],
        priority: stories.length + 1,
        status: statusMatch?.[1] ?? 'Draft',
      })
    }
  }

  // Sort by status priority (Draft/Ready first, then InProgress, then Done)
  const statusPriority: Record<string, number> = {
    'Draft': 1,
    'Ready': 2,
    'InProgress': 3,
    'InReview': 4,
    'Done': 5,
  }

  stories.sort((a, b) => {
    const aPriority = statusPriority[a.status] ?? 10
    const bPriority = statusPriority[b.status] ?? 10
    return aPriority - bPriority
  })

  // Update priorities
  stories.forEach((s, i) => {
    s.priority = i + 1
  })

  logger.info(`Backlog prioritized: ${stories.length} stories`)

  return success({
    epicId: targetEpicId,
    stories,
    reordered: true,
  })
}
