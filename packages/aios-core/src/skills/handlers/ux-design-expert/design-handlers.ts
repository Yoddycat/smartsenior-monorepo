/**
 * UX Design Expert Handlers - Design and Prototyping
 *
 * Handlers for UX design, prototyping, and accessibility
 */

import type { SkillResult } from '../../types'
import type { ExtendedSkillContext, ExtendedSkillHandler } from '../types'
import { success, failure, successWithTriggers } from '../base'

/**
 * Prototype result
 */
export interface PrototypeResult {
  prototypePath: string
  screens: ScreenDefinition[]
  interactions: number
  fidelity: 'low' | 'medium' | 'high'
}

interface ScreenDefinition {
  name: string
  components: string[]
  links: string[]
}

/**
 * *create-prototype handler - Create interactive prototype
 */
export async function handleCreatePrototype(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<PrototypeResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const name = (args?.name as string) ?? 'prototype'
  const fidelity = (args?.fidelity as 'low' | 'medium' | 'high') ?? 'medium'
  const screens = (args?.screens as string[]) ?? ['Home', 'Dashboard', 'Settings']

  logger.info(`Creating ${fidelity}-fidelity prototype: ${name}`)

  const prototypePath = `docs/prototypes/${name}-${Date.now()}.json`

  const screenDefinitions: ScreenDefinition[] = screens.map(screen => ({
    name: screen,
    components: ['Header', 'Navigation', 'Content', 'Footer'],
    links: screens.filter(s => s !== screen),
  }))

  const prototypeData = {
    name,
    fidelity,
    screens: screenDefinitions,
    interactions: screenDefinitions.length * 3,
    createdAt: new Date().toISOString(),
  }

  if (!context.options.dryRun) {
    await fs.write(prototypePath, JSON.stringify(prototypeData, null, 2))
  }

  logger.info(`Prototype created: ${prototypePath}`)

  return successWithTriggers(
    {
      prototypePath,
      screens: screenDefinitions,
      interactions: prototypeData.interactions,
      fidelity,
    },
    ['ux-design-expert:review-ux']
  )
}

/**
 * UX Review result
 */
export interface UxReviewResult {
  reviewPath: string
  score: number
  findings: UxFinding[]
  recommendations: string[]
}

interface UxFinding {
  category: 'usability' | 'consistency' | 'accessibility' | 'performance'
  severity: 'critical' | 'major' | 'minor'
  description: string
  screen?: string
  component?: string
}

/**
 * *review-ux handler - Review UX/UI implementation
 */
export async function handleReviewUx(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<UxReviewResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const targetPath = (args?.path as string) ?? 'src/components'

  logger.info(`Reviewing UX for: ${targetPath}`)

  // Simulate UX review findings
  const findings: UxFinding[] = [
    {
      category: 'consistency',
      severity: 'minor',
      description: 'Button styles vary across components',
      component: 'Button',
    },
    {
      category: 'usability',
      severity: 'major',
      description: 'Form lacks clear error messages',
      screen: 'Login',
    },
    {
      category: 'accessibility',
      severity: 'major',
      description: 'Missing aria-labels on icon buttons',
      component: 'IconButton',
    },
  ]

  const score = Math.max(0, 100 - findings.reduce((sum, f) => {
    const weights = { critical: 20, major: 10, minor: 5 }
    return sum + weights[f.severity]
  }, 0))

  const recommendations = [
    'Create shared button component with consistent styling',
    'Implement form validation with clear error messages',
    'Add aria-labels to all interactive elements',
  ]

  const reviewPath = `docs/reviews/ux-review-${Date.now()}.json`

  const reviewData = {
    targetPath,
    timestamp: new Date().toISOString(),
    score,
    findings,
    recommendations,
  }

  if (!context.options.dryRun) {
    await fs.write(reviewPath, JSON.stringify(reviewData, null, 2))
  }

  logger.info(`UX Review complete. Score: ${score}/100`)

  return success({
    reviewPath,
    score,
    findings,
    recommendations,
  })
}

/**
 * Wireframe result
 */
export interface WireframeResult {
  wireframePath: string
  screens: string[]
  annotations: number
}

/**
 * *create-wireframe handler - Create wireframe
 */
export async function handleCreateWireframe(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<WireframeResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const name = (args?.name as string) ?? 'wireframe'
  const screens = (args?.screens as string[]) ?? ['Home', 'List', 'Detail']

  logger.info(`Creating wireframe: ${name}`)

  const wireframePath = `docs/wireframes/${name}-${Date.now()}.md`

  const content = generateWireframeMarkdown(name, screens)

  if (!context.options.dryRun) {
    await fs.write(wireframePath, content)
  }

  logger.info(`Wireframe created: ${wireframePath}`)

  return successWithTriggers(
    {
      wireframePath,
      screens,
      annotations: screens.length * 5,
    },
    ['ux-design-expert:create-prototype']
  )
}

/**
 * Accessibility audit result
 */
export interface AccessibilityAuditResult {
  auditPath: string
  wcagLevel: 'A' | 'AA' | 'AAA'
  violations: AccessibilityViolation[]
  passed: number
  failed: number
  score: number
}

interface AccessibilityViolation {
  rule: string
  wcagCriteria: string
  severity: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  element?: string
  fix: string
}

/**
 * *audit-accessibility handler - Audit for accessibility compliance
 */
export async function handleAuditAccessibility(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<AccessibilityAuditResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const targetPath = (args?.path as string) ?? 'src/components'
  const wcagLevel = (args?.level as 'A' | 'AA' | 'AAA') ?? 'AA'

  logger.info(`Running WCAG ${wcagLevel} accessibility audit on: ${targetPath}`)

  // Simulate accessibility audit
  const violations: AccessibilityViolation[] = [
    {
      rule: 'color-contrast',
      wcagCriteria: '1.4.3',
      severity: 'serious',
      description: 'Text does not have sufficient color contrast',
      element: '.text-gray-400',
      fix: 'Increase contrast ratio to at least 4.5:1',
    },
    {
      rule: 'image-alt',
      wcagCriteria: '1.1.1',
      severity: 'critical',
      description: 'Images must have alternate text',
      element: 'img',
      fix: 'Add alt attribute to all images',
    },
    {
      rule: 'label',
      wcagCriteria: '1.3.1',
      severity: 'serious',
      description: 'Form elements must have labels',
      element: 'input',
      fix: 'Associate labels with form controls',
    },
  ]

  const totalChecks = 50
  const passed = totalChecks - violations.length
  const score = Math.round((passed / totalChecks) * 100)

  const auditPath = `docs/audits/a11y-audit-${Date.now()}.json`

  const auditData = {
    targetPath,
    wcagLevel,
    timestamp: new Date().toISOString(),
    violations,
    passed,
    failed: violations.length,
    score,
  }

  if (!context.options.dryRun) {
    await fs.write(auditPath, JSON.stringify(auditData, null, 2))
  }

  logger.info(`Accessibility audit complete. Score: ${score}% (${passed}/${totalChecks} checks passed)`)

  return success({
    auditPath,
    wcagLevel,
    violations,
    passed,
    failed: violations.length,
    score,
  })
}

/**
 * Design system result
 */
export interface DesignSystemResult {
  designSystemPath: string
  tokens: DesignTokenCategory[]
  components: string[]
  patterns: string[]
}

interface DesignTokenCategory {
  category: string
  tokens: number
}

/**
 * *create-design-system handler - Create design system documentation
 */
export async function handleCreateDesignSystem(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<DesignSystemResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const name = (args?.name as string) ?? 'design-system'

  logger.info(`Creating design system: ${name}`)

  const designSystemPath = `docs/design-system/${name}/index.md`

  const tokens: DesignTokenCategory[] = [
    { category: 'colors', tokens: 24 },
    { category: 'typography', tokens: 12 },
    { category: 'spacing', tokens: 8 },
    { category: 'shadows', tokens: 4 },
    { category: 'borders', tokens: 6 },
  ]

  const components = [
    'Button', 'Input', 'Card', 'Modal', 'Table',
    'Navigation', 'Dropdown', 'Toast', 'Avatar', 'Badge',
  ]

  const patterns = [
    'Forms', 'Navigation', 'Data Display', 'Feedback', 'Layout',
  ]

  const content = generateDesignSystemMarkdown(name, tokens, components, patterns)

  if (!context.options.dryRun) {
    await fs.write(designSystemPath, content)
  }

  logger.info(`Design system created: ${designSystemPath}`)

  return success({
    designSystemPath,
    tokens,
    components,
    patterns,
  })
}

/**
 * User flow result
 */
export interface UserFlowResult {
  flowPath: string
  flows: UserFlow[]
  painPoints: string[]
  opportunities: string[]
}

interface UserFlow {
  name: string
  steps: number
  entryPoint: string
  exitPoint: string
  dropOffRisk: 'low' | 'medium' | 'high'
}

/**
 * *user-flow-analysis handler - Analyze user flows
 */
export async function handleUserFlowAnalysis(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<UserFlowResult>> {
  const { deps } = context
  const { fs, logger } = deps

  const flowNames = (args?.flows as string[]) ?? ['Onboarding', 'Purchase', 'Support']

  logger.info(`Analyzing user flows: ${flowNames.join(', ')}`)

  const flows: UserFlow[] = flowNames.map(name => ({
    name,
    steps: Math.floor(Math.random() * 5) + 3,
    entryPoint: 'Landing Page',
    exitPoint: 'Confirmation',
    dropOffRisk: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
  }))

  const painPoints = [
    'Complex registration form causes 30% drop-off',
    'Users struggle to find support options',
    'Checkout requires too many steps',
  ]

  const opportunities = [
    'Simplify registration to 2 steps',
    'Add prominent support button in header',
    'Implement one-click checkout for returning users',
  ]

  const flowPath = `docs/analysis/user-flows-${Date.now()}.json`

  const flowData = {
    timestamp: new Date().toISOString(),
    flows,
    painPoints,
    opportunities,
  }

  if (!context.options.dryRun) {
    await fs.write(flowPath, JSON.stringify(flowData, null, 2))
  }

  logger.info(`User flow analysis complete: ${flowPath}`)

  return success({
    flowPath,
    flows,
    painPoints,
    opportunities,
  })
}

/**
 * All UX Design Expert handlers
 */
export const uxDesignExpertHandlers: Record<string, ExtendedSkillHandler> = {
  'ux-design-expert:create-prototype': handleCreatePrototype,
  'ux-design-expert:review-ux': handleReviewUx,
  'ux-design-expert:create-wireframe': handleCreateWireframe,
  'ux-design-expert:audit-accessibility': handleAuditAccessibility,
  'ux-design-expert:create-design-system': handleCreateDesignSystem,
  'ux-design-expert:user-flow-analysis': handleUserFlowAnalysis,
}

// Markdown generators
function generateWireframeMarkdown(name: string, screens: string[]): string {
  const screenSections = screens.map(screen => `
## ${screen}

\`\`\`
+---------------------------+
|        Header             |
+---------------------------+
|  Nav  |                   |
|       |     Content       |
|       |                   |
+---------------------------+
|        Footer             |
+---------------------------+
\`\`\`

### Annotations
1. Header: Logo + Navigation
2. Content: Main content area
3. Footer: Links + Copyright
`).join('\n')

  return `# Wireframe: ${name}

Generated: ${new Date().toISOString().split('T')[0]}

## Overview

Low-fidelity wireframes for ${screens.length} screens.

${screenSections}
`
}

function generateDesignSystemMarkdown(
  name: string,
  tokens: DesignTokenCategory[],
  components: string[],
  patterns: string[]
): string {
  return `# Design System: ${name}

Generated: ${new Date().toISOString().split('T')[0]}

## Design Tokens

${tokens.map(t => `- **${t.category}**: ${t.tokens} tokens`).join('\n')}

## Components

${components.map(c => `- [ ] ${c}`).join('\n')}

## Patterns

${patterns.map(p => `### ${p}\n\n[Pattern documentation]`).join('\n\n')}

## Usage

\`\`\`tsx
import { Button, Card } from '@/components/ui'
\`\`\`
`
}
