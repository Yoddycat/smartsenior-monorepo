/**
 * Analyst Skills - Research and Analysis
 *
 * Skills for research, analysis, and reporting
 */

import { defineAnalystSkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *research-prompt - Execute research for spec pipeline
 */
export const researchPromptSkill: Skill = defineAnalystSkill({
  command: '*research-prompt',
  name: 'Research Prompt',
  description: 'Execute research phase of spec pipeline. Investigates technical options, patterns, and produces research.json.',
  dependsOn: ['architect:assess-complexity'],
  canTrigger: ['pm:write-spec'],
  aliases: ['*research'],
  tags: ['research', 'analysis', 'spec-pipeline'],
})

/**
 * *analyze-data - Analyze data and metrics
 */
export const analyzeDataSkill: Skill = defineAnalystSkill({
  command: '*analyze-data',
  name: 'Analyze Data',
  description: 'Analyze data, metrics, and trends. Produces insights and recommendations.',
  aliases: ['*analyze'],
  tags: ['analysis', 'data', 'metrics'],
})

/**
 * *create-report - Create analytical report
 */
export const createReportSkill: Skill = defineAnalystSkill({
  command: '*create-report',
  name: 'Create Report',
  description: 'Create analytical report from data and research. Supports executive summary and detailed formats.',
  aliases: ['*report'],
  tags: ['reporting', 'documentation', 'analysis'],
})

/**
 * *competitor-analysis - Analyze competitors
 */
export const competitorAnalysisSkill: Skill = defineAnalystSkill({
  command: '*competitor-analysis',
  name: 'Competitor Analysis',
  description: 'Research and analyze competitors. Identifies strengths, weaknesses, and market positioning.',
  aliases: ['*competitors'],
  tags: ['research', 'competitors', 'market'],
})

/**
 * All Analyst skills
 */
export const analystSkills: Skill[] = [
  researchPromptSkill,
  analyzeDataSkill,
  createReportSkill,
  competitorAnalysisSkill,
]
