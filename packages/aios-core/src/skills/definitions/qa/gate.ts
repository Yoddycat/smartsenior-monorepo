/**
 * QA Skills - Quality Gates and Reviews
 *
 * Skills for quality assurance and code review
 */

import { defineQASkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *gate - Execute QA gate checks
 */
export const gateSkill: Skill = defineQASkill({
  command: '*gate',
  name: 'QA Gate',
  description: 'Execute the 7-point QA gate checks: code review, unit tests, AC verification, regression, performance, security, documentation.',
  dependsOn: ['dev:develop'],
  canTrigger: ['devops:push', 'po:accept-story'],
  aliases: ['*qa-gate', '*quality-gate'],
  tags: ['quality', 'gate', 'sdc', 'verification'],
})

/**
 * *review - Code review
 */
export const reviewSkill: Skill = defineQASkill({
  command: '*review',
  name: 'Code Review',
  description: 'Perform detailed code review checking patterns, readability, maintainability, and best practices.',
  aliases: ['*code-review', '*cr'],
  tags: ['quality', 'review', 'code'],
})

/**
 * *qa-loop - Start QA review-fix iteration loop
 */
export const qaLoopSkill: Skill = defineQASkill({
  command: '*qa-loop',
  name: 'QA Loop',
  description: 'Start the iterative QA review-fix loop. Max 5 iterations before escalation. Tracks state in qa/loop-status.json.',
  dependsOn: ['dev:develop'],
  aliases: ['*start-qa-loop'],
  tags: ['quality', 'iteration', 'loop'],
})

/**
 * *coderabbit-review - Run CodeRabbit analysis
 */
export const coderabbitReviewSkill: Skill = defineQASkill({
  command: '*coderabbit-review',
  name: 'CodeRabbit Review',
  description: 'Execute CodeRabbit automated code review with severity filtering and self-healing for CRITICAL/HIGH issues.',
  aliases: ['*coderabbit', '*cr-review'],
  tags: ['quality', 'automated', 'coderabbit'],
})

/**
 * *security-audit - Run security audit
 */
export const securityAuditSkill: Skill = defineQASkill({
  command: '*security-audit',
  name: 'Security Audit',
  description: 'Execute security audit checking OWASP top 10 vulnerabilities, dependency vulnerabilities, and secrets exposure.',
  aliases: ['*security', '*audit'],
  tags: ['security', 'audit', 'owasp'],
})

/**
 * All QA skills
 */
export const qaSkills: Skill[] = [
  gateSkill,
  reviewSkill,
  qaLoopSkill,
  coderabbitReviewSkill,
  securityAuditSkill,
]
