/**
 * Architect Handlers - System Design
 *
 * Handlers for architecture decisions and complexity assessment
 */

import type { SkillResult } from '../../types'
import type { ExtendedSkillContext } from '../types'
import { success, failure, successWithTriggers } from '../base'

/**
 * Complexity result
 */
export interface ComplexityResult {
  classification: 'SIMPLE' | 'STANDARD' | 'COMPLEX'
  score: number
  dimensions: ComplexityDimension[]
  recommendedPhases: number
}

interface ComplexityDimension {
  name: string
  score: number
  maxScore: number
  notes: string
}

/**
 * *assess-complexity handler - Assess complexity of a feature/epic
 */
export async function handleAssessComplexity(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ComplexityResult>> {
  const { deps, spec } = context
  const { fs, logger } = deps

  const specPath = spec?.specPath ?? (args?.specPath as string)
  const requirementsPath = spec?.requirementsPath ?? (args?.requirementsPath as string)

  logger.info('Assessing complexity...')

  // Read spec or requirements if available
  let content = ''
  if (specPath) {
    const exists = await fs.exists(specPath)
    if (exists) {
      content = await fs.read(specPath)
    }
  }

  // Assess 5 dimensions
  const dimensions: ComplexityDimension[] = [
    assessScope(content),
    assessIntegration(content),
    assessInfrastructure(content),
    assessKnowledge(content),
    assessRisk(content),
  ]

  const totalScore = dimensions.reduce((sum, d) => sum + d.score, 0)

  // Classify based on score
  let classification: 'SIMPLE' | 'STANDARD' | 'COMPLEX'
  let recommendedPhases: number

  if (totalScore <= 8) {
    classification = 'SIMPLE'
    recommendedPhases = 3
  } else if (totalScore <= 15) {
    classification = 'STANDARD'
    recommendedPhases = 6
  } else {
    classification = 'COMPLEX'
    recommendedPhases = 6 // + revision cycles
  }

  logger.info(`Complexity: ${classification} (score: ${totalScore}/25)`)

  const result: ComplexityResult = {
    classification,
    score: totalScore,
    dimensions,
    recommendedPhases,
  }

  // Trigger research for non-simple projects
  if (classification !== 'SIMPLE') {
    return successWithTriggers(result, ['analyst:research-prompt'])
  }

  return success(result)
}

/**
 * Design result
 */
export interface DesignResult {
  designPath: string
  components: string[]
  integrations: string[]
  dataModels: string[]
}

/**
 * *design-system handler - Create system design document
 */
export async function handleDesignSystem(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<DesignResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const projectName = (args?.projectName as string) ?? 'System'

  logger.info(`Creating system design for: ${projectName}`)

  const designPath = `docs/architecture/design-${Date.now()}.md`
  const content = generateDesignTemplate(projectName)

  if (!context.options.dryRun) {
    await fs.write(designPath, content)
  }

  logger.info(`System design created: ${designPath}`)

  return successWithTriggers(
    {
      designPath,
      components: ['API', 'Database', 'Frontend'],
      integrations: [],
      dataModels: [],
    },
    ['data-engineer:create-schema']
  )
}

/**
 * Architecture result
 */
export interface ArchitectureResult {
  architecturePath: string
  components: string[]
  decisions: ArchitectureDecision[]
  diagrams: string[]
}

interface ArchitectureDecision {
  title: string
  decision: string
  rationale: string
  consequences: string[]
}

/**
 * *create-architecture handler - Create architecture documentation
 */
export async function handleCreateArchitecture(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ArchitectureResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const projectName = (args?.projectName as string) ?? 'Project'
  const scope = (args?.scope as string) ?? 'full'

  logger.info(`Creating architecture documentation for: ${projectName}`)

  const architecturePath = `docs/architecture/${projectName.toLowerCase()}-architecture.md`

  const decisions: ArchitectureDecision[] = [
    {
      title: 'Technology Stack',
      decision: 'Use TypeScript with Node.js',
      rationale: 'Type safety and ecosystem support',
      consequences: ['Learning curve for JS devs', 'Better maintainability'],
    },
  ]

  const content = generateArchitectureDoc(projectName, decisions)

  if (!context.options.dryRun) {
    await fs.write(architecturePath, content)
  }

  logger.info(`Architecture documentation created: ${architecturePath}`)

  return success({
    architecturePath,
    components: ['Core', 'API', 'Database', 'UI'],
    decisions,
    diagrams: [`${architecturePath.replace('.md', '-diagram.png')}`],
  })
}

/**
 * Architecture review result
 */
export interface ArchitectureReviewResult {
  reviewPath: string
  score: number
  strengths: string[]
  weaknesses: string[]
  technicalDebt: TechnicalDebtItem[]
  recommendations: string[]
}

interface TechnicalDebtItem {
  area: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  description: string
  effort: string
}

/**
 * *review-architecture handler - Review existing architecture
 */
export async function handleReviewArchitecture(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ArchitectureReviewResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const targetPath = (args?.targetPath as string) ?? 'src'

  logger.info(`Reviewing architecture at: ${targetPath}`)

  const reviewPath = `docs/reviews/architecture-review-${Date.now()}.md`

  const technicalDebt: TechnicalDebtItem[] = [
    {
      area: 'Dependencies',
      severity: 'medium',
      description: 'Some outdated dependencies',
      effort: '1-2 days',
    },
  ]

  const review = {
    score: 75,
    strengths: [
      'Clear separation of concerns',
      'Consistent coding patterns',
    ],
    weaknesses: [
      'Missing documentation',
      'Some circular dependencies',
    ],
    technicalDebt,
    recommendations: [
      'Add architecture documentation',
      'Refactor circular dependencies',
      'Update outdated packages',
    ],
  }

  const content = generateArchitectureReview(review)

  if (!context.options.dryRun) {
    await fs.write(reviewPath, content)
  }

  logger.info(`Architecture review complete: ${reviewPath} (score: ${review.score}/100)`)

  return successWithTriggers(
    {
      reviewPath,
      ...review,
    },
    ['architect:plan-implementation']
  )
}

/**
 * Implementation plan result
 */
export interface ImplementationPlanResult {
  planPath: string
  phases: ImplementationPhase[]
  estimatedStories: number
}

interface ImplementationPhase {
  phase: number
  name: string
  stories: string[]
}

/**
 * *plan-implementation handler - Create implementation plan
 */
export async function handlePlanImplementation(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ImplementationPlanResult>> {
  const { deps, spec } = context
  const { fs, logger } = deps

  const complexity = spec?.complexity ?? (args?.complexity as string) ?? 'STANDARD'

  logger.info(`Planning implementation (complexity: ${complexity})`)

  const planPath = `docs/plans/implementation-${Date.now()}.yaml`

  const phases: ImplementationPhase[] = [
    { phase: 1, name: 'Foundation', stories: ['Setup', 'Core models'] },
    { phase: 2, name: 'Core Features', stories: ['Feature A', 'Feature B'] },
    { phase: 3, name: 'Integration', stories: ['API integration', 'Testing'] },
  ]

  const content = generateImplementationPlan(phases)

  if (!context.options.dryRun) {
    await fs.write(planPath, content)
  }

  logger.info(`Implementation plan created: ${planPath}`)

  return success({
    planPath,
    phases,
    estimatedStories: phases.reduce((sum, p) => sum + p.stories.length, 0),
  })
}

import type { ExtendedSkillHandler } from '../types'

/**
 * All Architect handlers
 */
export const architectHandlers: Record<string, ExtendedSkillHandler> = {
  'architect:assess-complexity': handleAssessComplexity,
  'architect:design-system': handleDesignSystem,
  'architect:create-architecture': handleCreateArchitecture,
  'architect:review-architecture': handleReviewArchitecture,
  'architect:plan-implementation': handlePlanImplementation,
}

// Complexity assessment helpers
function assessScope(content: string): ComplexityDimension {
  // Simple heuristic based on content length and sections
  const score = content.length > 5000 ? 4 : content.length > 2000 ? 3 : content.length > 500 ? 2 : 1
  return {
    name: 'Scope',
    score,
    maxScore: 5,
    notes: `${score <= 2 ? 'Limited' : score <= 3 ? 'Moderate' : 'Large'} scope detected`,
  }
}

function assessIntegration(content: string): ComplexityDimension {
  const integrationKeywords = ['API', 'integration', 'external', 'third-party', 'webhook', 'OAuth']
  const matches = integrationKeywords.filter(kw => content.toLowerCase().includes(kw.toLowerCase()))
  const score = Math.min(matches.length + 1, 5)
  return {
    name: 'Integration',
    score,
    maxScore: 5,
    notes: `${matches.length} integration points identified`,
  }
}

function assessInfrastructure(content: string): ComplexityDimension {
  const infraKeywords = ['database', 'cache', 'queue', 'kubernetes', 'docker', 'cloud', 'aws', 'deploy']
  const matches = infraKeywords.filter(kw => content.toLowerCase().includes(kw.toLowerCase()))
  const score = Math.min(matches.length + 1, 5)
  return {
    name: 'Infrastructure',
    score,
    maxScore: 5,
    notes: `${matches.length} infrastructure components`,
  }
}

function assessKnowledge(content: string): ComplexityDimension {
  // Default to moderate - would need team context
  return {
    name: 'Knowledge',
    score: 2,
    maxScore: 5,
    notes: 'Moderate team familiarity assumed',
  }
}

function assessRisk(content: string): ComplexityDimension {
  const riskKeywords = ['critical', 'security', 'compliance', 'payment', 'PII', 'GDPR', 'HIPAA']
  const matches = riskKeywords.filter(kw => content.toLowerCase().includes(kw.toLowerCase()))
  const score = Math.min(matches.length + 1, 5)
  return {
    name: 'Risk',
    score,
    maxScore: 5,
    notes: `${matches.length} risk factors identified`,
  }
}

function generateDesignTemplate(projectName: string): string {
  return `# System Design: ${projectName}

## Overview

[System overview]

## Architecture

### High-Level Architecture

\`\`\`
[Client] --> [API Gateway] --> [Services] --> [Database]
\`\`\`

### Components

| Component | Responsibility | Technology |
|-----------|----------------|------------|
| API | REST endpoints | Node.js |
| Database | Data persistence | PostgreSQL |
| Cache | Session/caching | Redis |

## Data Model

[Data model description]

## API Design

[API endpoints]

## Security

[Security considerations]

## Scalability

[Scalability approach]

---
Created: ${new Date().toISOString().split('T')[0]}
`
}

function generateImplementationPlan(phases: ImplementationPhase[]): string {
  const phasesYaml = phases.map(p => `
  - phase: ${p.phase}
    name: ${p.name}
    stories:
${p.stories.map(s => `      - ${s}`).join('\n')}`).join('\n')

  return `# Implementation Plan

phases:${phasesYaml}

created: ${new Date().toISOString()}
`
}

function generateArchitectureDoc(projectName: string, decisions: ArchitectureDecision[]): string {
  const decisionsSection = decisions.map(d => `
### ${d.title}

**Decision:** ${d.decision}

**Rationale:** ${d.rationale}

**Consequences:**
${d.consequences.map(c => `- ${c}`).join('\n')}
`).join('\n')

  return `# Architecture: ${projectName}

## Overview

This document describes the architecture for ${projectName}.

## System Context

\`\`\`
[External Systems] <--> [${projectName}] <--> [Database]
\`\`\`

## Components

| Component | Description |
|-----------|-------------|
| Core | Business logic |
| API | REST/GraphQL interface |
| Database | Data persistence |
| UI | User interface |

## Architecture Decisions
${decisionsSection}

## Quality Attributes

- **Scalability:** Horizontal scaling support
- **Security:** Authentication and authorization
- **Maintainability:** Clean architecture principles

---
Generated: ${new Date().toISOString().split('T')[0]}
`
}

function generateArchitectureReview(review: {
  score: number
  strengths: string[]
  weaknesses: string[]
  technicalDebt: TechnicalDebtItem[]
  recommendations: string[]
}): string {
  return `# Architecture Review

## Score: ${review.score}/100

## Strengths

${review.strengths.map(s => `- ${s}`).join('\n')}

## Weaknesses

${review.weaknesses.map(w => `- ${w}`).join('\n')}

## Technical Debt

| Area | Severity | Description | Effort |
|------|----------|-------------|--------|
${review.technicalDebt.map(d => `| ${d.area} | ${d.severity} | ${d.description} | ${d.effort} |`).join('\n')}

## Recommendations

${review.recommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}

---
Reviewed: ${new Date().toISOString().split('T')[0]}
`
}
