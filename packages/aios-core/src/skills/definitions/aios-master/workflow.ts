/**
 * AIOS Master Skills - Framework Governance
 *
 * Skills for framework orchestration and governance
 */

import { defineAIOSMasterSkill } from '../factory'
import { AUTHORITY_PRESETS } from '../../authority'
import type { Skill } from '../../types'

/**
 * *run-workflow - Execute a workflow
 */
export const runWorkflowSkill: Skill = defineAIOSMasterSkill({
  command: '*run-workflow',
  name: 'Run Workflow',
  description: 'Execute any defined workflow (SDC, QA Loop, Spec Pipeline, Brownfield Discovery). AIOS Master can orchestrate any workflow.',
  aliases: ['*workflow', '*wf'],
  tags: ['workflow', 'orchestration', 'framework'],
})

/**
 * *help - Show available commands and help
 */
export const helpSkill: Skill = {
  id: 'aios-master:help',
  command: '*help',
  name: 'Show Help',
  description: 'Display available commands, active agent info, and contextual help.',
  owner: 'aios-master',
  authority: AUTHORITY_PRESETS.ALL_AGENTS, // Anyone can ask for help
  category: 'framework',
  aliases: ['*?', '*commands'],
  tags: ['help', 'documentation', 'framework'],
}

/**
 * *status - Show system status
 */
export const statusSkill: Skill = {
  id: 'aios-master:status',
  command: '*status',
  name: 'System Status',
  description: 'Display current system status including active workflows, pending tasks, and agent states.',
  owner: 'aios-master',
  authority: AUTHORITY_PRESETS.ALL_AGENTS, // Anyone can check status
  category: 'framework',
  aliases: ['*sys-status'],
  tags: ['status', 'monitoring', 'framework'],
}

/**
 * *config - Manage AIOS configuration
 */
export const configSkill: Skill = defineAIOSMasterSkill({
  command: '*config',
  name: 'Manage Config',
  description: 'View or modify AIOS framework configuration. Requires AIOS Master authority.',
  aliases: ['*configuration', '*settings'],
  requiresConfirmation: true,
  tags: ['configuration', 'framework', 'admin'],
})

/**
 * *delegate - Delegate task to specific agent
 */
export const delegateSkill: Skill = defineAIOSMasterSkill({
  command: '*delegate',
  name: 'Delegate Task',
  description: 'Explicitly delegate a task to a specific agent, bypassing normal workflow. Use for cross-agent coordination.',
  aliases: ['*assign'],
  tags: ['delegation', 'orchestration', 'framework'],
})

/**
 * All AIOS Master skills
 */
export const aiosMasterSkills: Skill[] = [
  runWorkflowSkill,
  helpSkill,
  statusSkill,
  configSkill,
  delegateSkill,
]
