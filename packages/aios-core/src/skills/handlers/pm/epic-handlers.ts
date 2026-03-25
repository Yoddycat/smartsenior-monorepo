/**
 * PM Handlers - Epic and Requirements Management
 *
 * Handlers for PRD creation, epic management, and spec pipeline
 */

import type { SkillResult } from '../../types'
import type { ExtendedSkillContext } from '../types'
import { success, failure, successWithTriggers } from '../base'

/**
 * PRD result
 */
export interface PrdResult {
  prdId: string
  prdPath: string
  title: string
  sections: string[]
}

/**
 * *create-prd handler - Create Product Requirements Document
 */
export async function handleCreatePrd(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<PrdResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const title = (args?.title as string) ?? 'Untitled PRD'
  const description = (args?.description as string) ?? ''

  logger.info(`Creating PRD: ${title}`)

  // Generate PRD ID
  const prdId = `PRD-${Date.now().toString(36).toUpperCase()}`
  const prdPath = `docs/prd/${prdId}.md`

  // Generate PRD content
  const content = generatePrdTemplate(prdId, title, description)

  if (context.options.dryRun) {
    logger.info(`[DRY RUN] Would create PRD at: ${prdPath}`)
    return success({
      prdId,
      prdPath,
      title,
      sections: ['Overview', 'Functional Requirements', 'Non-Functional Requirements', 'Constraints'],
    }, ['Executed in dry-run mode'])
  }

  await fs.write(prdPath, content)
  logger.info(`Created PRD: ${prdPath}`)

  return successWithTriggers(
    {
      prdId,
      prdPath,
      title,
      sections: ['Overview', 'Functional Requirements', 'Non-Functional Requirements', 'Constraints'],
    },
    ['pm:create-epic']
  )
}

/**
 * Epic result
 */
export interface EpicResult {
  epicId: string
  epicPath: string
  title: string
  storiesPlanned: number
  status: 'Draft' | 'Ready' | 'InProgress' | 'Done'
}

/**
 * *create-epic handler - Create a new epic
 */
export async function handleCreateEpic(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<EpicResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const title = (args?.title as string) ?? 'Untitled Epic'
  const prdId = args?.prdId as string

  logger.info(`Creating Epic: ${title}`)

  // Generate Epic ID
  const epicNumber = Date.now() % 1000
  const epicId = `epic-${epicNumber}`
  const epicPath = `docs/stories/epics/${epicId}/EPIC.md`

  // Generate Epic content
  const content = generateEpicTemplate(epicId, title, prdId)

  if (context.options.dryRun) {
    logger.info(`[DRY RUN] Would create Epic at: ${epicPath}`)
    return success({
      epicId,
      epicPath,
      title,
      storiesPlanned: 0,
      status: 'Draft' as const,
    }, ['Executed in dry-run mode'])
  }

  await fs.write(epicPath, content)
  logger.info(`Created Epic: ${epicPath}`)

  return successWithTriggers(
    {
      epicId,
      epicPath,
      title,
      storiesPlanned: 0,
      status: 'Draft' as const,
    },
    ['pm:execute-epic']
  )
}

/**
 * Execute Epic result
 */
export interface ExecuteEpicResult {
  epicId: string
  storiesCreated: number
  storiesCompleted: number
  currentStory?: string
  status: 'InProgress' | 'Done' | 'Blocked'
}

/**
 * *execute-epic handler - Orchestrate epic execution
 */
export async function handleExecuteEpic(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ExecuteEpicResult>> {
  const { deps, epicId } = context
  const { fs, logger } = deps

  const targetEpicId = (args?.epicId as string) ?? epicId

  if (!targetEpicId) {
    return failure('Epic ID is required')
  }

  logger.info(`Executing Epic: ${targetEpicId}`)

  // Check for existing stories
  const storiesDir = `docs/stories/epics/${targetEpicId}`
  const existingStories = await fs.glob(`${storiesDir}/*.story.md`)

  const result: ExecuteEpicResult = {
    epicId: targetEpicId,
    storiesCreated: existingStories.length,
    storiesCompleted: 0, // Would be calculated from story status
    status: 'InProgress',
  }

  // Trigger story creation if no stories exist
  if (existingStories.length === 0) {
    return successWithTriggers(result, ['sm:draft'])
  }

  return success(result)
}

/**
 * Requirements result
 */
export interface RequirementsResult {
  requirementsPath: string
  functionalRequirements: number
  nonFunctionalRequirements: number
  constraints: number
}

/**
 * *gather-requirements handler - Gather requirements from stakeholders
 */
export async function handleGatherRequirements(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<RequirementsResult>> {
  const { deps } = context
  const { fs, logger, prompt } = deps

  logger.info('Starting requirements gathering...')

  // Interactive mode - gather requirements
  const projectName = await prompt.input('Project/Feature name:')
  const problemStatement = await prompt.input('What problem does this solve?')

  // Generate requirements JSON
  const requirements = {
    projectName,
    problemStatement,
    functionalRequirements: [],
    nonFunctionalRequirements: [],
    constraints: [],
    gatheredAt: new Date().toISOString(),
  }

  const requirementsPath = `docs/requirements/requirements-${Date.now()}.json`

  if (!context.options.dryRun) {
    await fs.write(requirementsPath, JSON.stringify(requirements, null, 2))
  }

  logger.info(`Requirements gathered: ${requirementsPath}`)

  return successWithTriggers(
    {
      requirementsPath,
      functionalRequirements: 0,
      nonFunctionalRequirements: 0,
      constraints: 0,
    },
    ['architect:assess-complexity', 'pm:write-spec']
  )
}

/**
 * Spec result
 */
export interface SpecResult {
  specPath: string
  sections: string[]
  tracedRequirements: number
}

/**
 * *write-spec handler - Write specification document
 */
export async function handleWriteSpec(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<SpecResult>> {
  const { deps, spec } = context
  const { fs, logger } = deps

  const requirementsPath = spec?.requirementsPath ?? (args?.requirementsPath as string)

  logger.info('Writing specification document...')

  // Read requirements if available
  let requirements = null
  if (requirementsPath) {
    const exists = await fs.exists(requirementsPath)
    if (exists) {
      const content = await fs.read(requirementsPath)
      try {
        requirements = JSON.parse(content)
      } catch {
        logger.warn('Could not parse requirements file')
      }
    }
  }

  // Generate spec
  const specPath = `docs/specs/spec-${Date.now()}.md`
  const content = generateSpecTemplate(requirements)

  if (!context.options.dryRun) {
    await fs.write(specPath, content)
  }

  logger.info(`Specification written: ${specPath}`)

  return successWithTriggers(
    {
      specPath,
      sections: ['Overview', 'Requirements', 'Design', 'Implementation'],
      tracedRequirements: requirements?.functionalRequirements?.length ?? 0,
    },
    ['qa:critique-spec']
  )
}

import type { ExtendedSkillHandler } from '../types'

/**
 * All PM handlers
 */
export const pmHandlers: Record<string, ExtendedSkillHandler> = {
  'pm:create-prd': handleCreatePrd,
  'pm:create-epic': handleCreateEpic,
  'pm:execute-epic': handleExecuteEpic,
  'pm:gather-requirements': handleGatherRequirements,
  'pm:write-spec': handleWriteSpec,
}

// Template generators
function generatePrdTemplate(prdId: string, title: string, description: string): string {
  return `# ${prdId} - ${title}

## Overview
${description || '[Project overview]'}

## Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-001 | [Requirement description] | High |

## Non-Functional Requirements

| ID | Requirement | Category |
|----|-------------|----------|
| NFR-001 | [Requirement description] | Performance |

## Constraints

| ID | Constraint | Reason |
|----|------------|--------|
| CON-001 | [Constraint description] | [Reason] |

## Success Metrics

- [Metric 1]
- [Metric 2]

## Timeline

- Phase 1: [Description]
- Phase 2: [Description]

---
Created: ${new Date().toISOString().split('T')[0]}
`
}

function generateEpicTemplate(epicId: string, title: string, prdId?: string): string {
  return `# ${epicId} - ${title}

## Metadata
- **Status:** Draft
- **PRD:** ${prdId ?? 'N/A'}
- **Created:** ${new Date().toISOString().split('T')[0]}

## Description

[Epic description]

## Stories

| Story | Title | Status |
|-------|-------|--------|
| 1.1 | [Story 1] | Draft |

## Success Criteria

- [ ] [Criterion 1]
- [ ] [Criterion 2]

## Dependencies

- [Dependency 1]

## Risks

- [Risk 1]
`
}

function generateSpecTemplate(requirements: unknown): string {
  return `# Specification Document

## Overview

[Project overview based on requirements]

## Requirements Traceability

[Link to requirements]

## Design

### Architecture

[Architecture description]

### Data Model

[Data model description]

## Implementation Plan

1. [Step 1]
2. [Step 2]

## Testing Strategy

[Testing approach]

---
Generated: ${new Date().toISOString()}
`
}
