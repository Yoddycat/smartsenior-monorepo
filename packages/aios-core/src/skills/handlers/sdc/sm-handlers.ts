/**
 * SM (Scrum Master) Handlers
 *
 * Handlers for story creation and management
 */

import type { SkillResult } from '../../types'
import type { ExtendedSkillContext, StoryContext } from '../types'
import { success, failure, successWithTriggers, validateContext } from '../base'

/**
 * Story draft result
 */
export interface DraftResult {
  storyId: string
  storyPath: string
  title: string
  status: 'Draft'
}

/**
 * *draft handler - Create a new story draft
 */
export async function handleDraft(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<DraftResult>> {
  const { deps, epicId } = context
  const { fs, logger } = deps

  logger.info('Creating story draft...')

  // Get epic context
  const targetEpicId = (args?.epicId as string) ?? epicId
  if (!targetEpicId) {
    return failure('Epic ID is required. Provide epicId in context or args.')
  }

  // Find existing stories to determine next number
  const storiesDir = `docs/stories/epics/${targetEpicId}`
  const existingStories = await fs.glob(`${storiesDir}/*.story.md`)

  // Calculate next story number
  const storyNumbers = existingStories
    .map(path => {
      const match = path.match(/(\d+)\.(\d+)\.story\.md$/)
      return match ? parseInt(match[2], 10) : 0
    })
    .filter(n => n > 0)

  const nextNumber = storyNumbers.length > 0 ? Math.max(...storyNumbers) + 1 : 1
  const epicNumber = targetEpicId.replace('epic-', '').split('-')[0] || '1'
  const storyId = `${epicNumber}.${nextNumber}`

  // Get story title from args or generate placeholder
  const title = (args?.title as string) ?? `Story ${storyId}`

  // Generate story content from template
  const storyContent = generateStoryTemplate(storyId, title, targetEpicId)

  // Write story file
  const storyPath = `${storiesDir}/${storyId}.story.md`

  if (context.options.dryRun) {
    logger.info(`[DRY RUN] Would create story at: ${storyPath}`)
    return success({
      storyId,
      storyPath,
      title,
      status: 'Draft' as const,
    }, ['Executed in dry-run mode'])
  }

  await fs.write(storyPath, storyContent)
  logger.info(`Created story draft: ${storyPath}`)

  // Trigger validation by PO
  return successWithTriggers(
    {
      storyId,
      storyPath,
      title,
      status: 'Draft' as const,
    },
    ['po:validate-story-draft']
  )
}

/**
 * *story-checklist handler - Validate story against checklist
 */
export async function handleStoryChecklist(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ChecklistResult>> {
  const { deps, story } = context
  const { fs, logger } = deps

  // Validate context
  const error = validateContext(context, ['story'])
  if (error) {
    return failure(error)
  }

  const storyPath = story?.storyPath ?? (args?.storyPath as string)
  if (!storyPath) {
    return failure('Story path is required')
  }

  logger.info(`Running 10-point checklist on: ${storyPath}`)

  // Read story content
  const content = await fs.read(storyPath)

  // Run checklist validation
  const checklistResults = runChecklist(content)
  const passedCount = checklistResults.filter(r => r.passed).length
  const verdict = passedCount >= 7 ? 'GO' : 'NO-GO'

  logger.info(`Checklist result: ${passedCount}/10 - ${verdict}`)

  return success({
    storyId: story?.storyId ?? '',
    checklist: checklistResults,
    passedCount,
    totalCount: 10,
    verdict,
  })
}

/**
 * Checklist result
 */
export interface ChecklistResult {
  storyId: string
  checklist: ChecklistItem[]
  passedCount: number
  totalCount: number
  verdict: 'GO' | 'NO-GO'
}

interface ChecklistItem {
  id: number
  name: string
  passed: boolean
  notes?: string
}

/**
 * Run the 10-point story checklist
 */
function runChecklist(content: string): ChecklistItem[] {
  const checks: ChecklistItem[] = [
    {
      id: 1,
      name: 'Clear and objective title',
      passed: /^#\s+.{10,}/.test(content),
    },
    {
      id: 2,
      name: 'Complete description',
      passed: /## Description[\s\S]{50,}?##/.test(content) || /## Descrição[\s\S]{50,}?##/.test(content),
    },
    {
      id: 3,
      name: 'Testable acceptance criteria',
      passed: /## Acceptance Criteria[\s\S]*?(Given|When|Then|\[[\sx]\])/i.test(content),
    },
    {
      id: 4,
      name: 'Well-defined scope',
      passed: /## Scope[\s\S]*?(IN|OUT|Inclui|Exclui)/i.test(content),
    },
    {
      id: 5,
      name: 'Dependencies mapped',
      passed: /## Dependencies/i.test(content) || /Dependências/i.test(content),
    },
    {
      id: 6,
      name: 'Complexity estimate',
      passed: /Complexity|Points|Complexidade|Pontos/i.test(content),
    },
    {
      id: 7,
      name: 'Business value clear',
      passed: /Value|Benefit|Valor|Benefício/i.test(content),
    },
    {
      id: 8,
      name: 'Risks documented',
      passed: /## Risks|Riscos/i.test(content),
    },
    {
      id: 9,
      name: 'Definition of Done',
      passed: /## (Definition of Done|DoD|Critérios de Pronto)/i.test(content),
    },
    {
      id: 10,
      name: 'Alignment with PRD/Epic',
      passed: /PRD|Epic|FR-|NFR-/i.test(content),
    },
  ]

  return checks
}

/**
 * Generate story template
 */
function generateStoryTemplate(storyId: string, title: string, epicId: string): string {
  return `# ${storyId} - ${title}

## Metadata
- **Status:** Draft
- **Epic:** ${epicId}
- **Created:** ${new Date().toISOString().split('T')[0]}
- **Complexity:** TBD

## Description

[Describe the problem or need this story addresses]

## Acceptance Criteria

- [ ] Given [precondition], When [action], Then [expected result]
- [ ] Given [precondition], When [action], Then [expected result]

## Scope

### IN
- [What is included]

### OUT
- [What is explicitly excluded]

## Dependencies

- [List prerequisite stories or resources]

## Risks

- [Potential problems or blockers]

## Definition of Done

- [ ] Code implemented and reviewed
- [ ] Tests passing
- [ ] Documentation updated
- [ ] QA approved

## File List

[Files created/modified during implementation]

## Change Log

| Date | Author | Change |
|------|--------|--------|
| ${new Date().toISOString().split('T')[0]} | @sm | Story created |
`
}
