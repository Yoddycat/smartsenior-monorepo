/**
 * AIOS Master Handlers - Framework Governance
 *
 * Handlers for workflow orchestration and system management
 */

import type { SkillResult } from '../../types'
import type { ExtendedSkillContext } from '../types'
import { success, failure, successWithTriggers } from '../base'
import { getRegistry } from '../../registry'

/**
 * Workflow run result
 */
export interface WorkflowRunResult {
  workflowId: string
  workflowType: string
  status: 'started' | 'running' | 'completed' | 'failed'
  currentStep?: string
  triggeredSkills: string[]
}

/**
 * *run-workflow handler - Execute a workflow
 */
export async function handleRunWorkflow(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<WorkflowRunResult>> {
  const { deps } = context
  const { logger } = deps

  const workflowType = (args?.type as string) ?? 'story-development-cycle'

  logger.info(`Starting workflow: ${workflowType}`)

  const workflowId = `wf-${Date.now()}`

  // Define workflow steps based on type
  let triggeredSkills: string[] = []
  let currentStep: string

  switch (workflowType) {
    case 'story-development-cycle':
    case 'sdc':
      currentStep = 'sm:draft'
      triggeredSkills = ['sm:draft']
      break

    case 'qa-loop':
      currentStep = 'qa:gate'
      triggeredSkills = ['qa:gate']
      break

    case 'spec-pipeline':
      currentStep = 'pm:gather-requirements'
      triggeredSkills = ['pm:gather-requirements']
      break

    case 'brownfield-discovery':
      currentStep = 'architect:review-architecture'
      triggeredSkills = ['architect:review-architecture']
      break

    default:
      return failure(`Unknown workflow type: ${workflowType}`)
  }

  logger.info(`Workflow ${workflowId} started at step: ${currentStep}`)

  return successWithTriggers(
    {
      workflowId,
      workflowType,
      status: 'started',
      currentStep,
      triggeredSkills,
    },
    triggeredSkills
  )
}

/**
 * Help result
 */
export interface HelpResult {
  commands: CommandHelp[]
  currentAgent?: string
  totalSkills: number
  availableWorkflows: string[]
}

interface CommandHelp {
  command: string
  name: string
  owner: string
  description: string
}

/**
 * *help handler - Show available commands and help
 */
export async function handleHelp(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<HelpResult>> {
  const { deps, executingAgent } = context
  const { logger } = deps

  const filter = args?.filter as string
  const agentFilter = args?.agent as string

  logger.info('Generating help information...')

  const registry = getRegistry()
  let skills = registry.getAll()

  // Filter by agent if specified
  if (agentFilter) {
    skills = skills.filter(s => s.owner === agentFilter)
  }

  // Filter by allowed for current agent (skip for aios-master which can execute anything)
  if (!agentFilter && executingAgent !== 'aios-master') {
    skills = skills.filter(s => s.authority.allowedAgents.includes(executingAgent))
  }

  // Filter by search term
  if (filter) {
    const searchLower = filter.toLowerCase()
    skills = skills.filter(
      s =>
        s.command.toLowerCase().includes(searchLower) ||
        s.name.toLowerCase().includes(searchLower) ||
        s.description.toLowerCase().includes(searchLower)
    )
  }

  const commands: CommandHelp[] = skills.map(s => ({
    command: s.command,
    name: s.name,
    owner: s.owner,
    description: s.description,
  }))

  return success({
    commands,
    currentAgent: executingAgent,
    totalSkills: registry.getAll().length,
    availableWorkflows: [
      'story-development-cycle',
      'qa-loop',
      'spec-pipeline',
      'brownfield-discovery',
    ],
  })
}

/**
 * Status result
 */
export interface StatusResult {
  systemStatus: 'healthy' | 'degraded' | 'error'
  skills: {
    total: number
    withHandlers: number
    coverage: number
  }
  agents: {
    name: string
    skillCount: number
  }[]
  activeWorkflows: number
}

/**
 * *status handler - Show system status
 */
export async function handleStatus(
  context: ExtendedSkillContext,
  _args?: Record<string, unknown>
): Promise<SkillResult<StatusResult>> {
  const { deps } = context
  const { logger } = deps

  logger.info('Gathering system status...')

  const registry = getRegistry()
  const stats = registry.getStats()
  const handlerStats = registry.getHandlerStats()

  const agents = Object.entries(stats.byOwner).map(([name, count]) => ({
    name,
    skillCount: count,
  }))

  return success({
    systemStatus: 'healthy',
    skills: {
      total: stats.total,
      withHandlers: handlerStats.withHandlers,
      coverage: handlerStats.coveragePercent,
    },
    agents,
    activeWorkflows: 0,
  })
}

/**
 * Delegate result
 */
export interface DelegateResult {
  taskId: string
  delegatedTo: string
  triggeredSkill: string
  reason: string
}

/**
 * *delegate handler - Delegate task to specific agent
 */
export async function handleDelegate(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<DelegateResult>> {
  const { deps } = context
  const { logger } = deps

  const targetAgent = args?.agent as string
  const skillCommand = args?.skill as string
  const reason = (args?.reason as string) ?? 'Manual delegation'

  if (!targetAgent) {
    return failure('Target agent is required')
  }

  if (!skillCommand) {
    return failure('Skill command is required')
  }

  logger.info(`Delegating ${skillCommand} to ${targetAgent}`)

  const registry = getRegistry()
  const skill = registry.getByCommand(skillCommand)

  if (!skill) {
    return failure(`Skill not found: ${skillCommand}`)
  }

  // Verify target agent can execute the skill
  const validation = registry.validateExecution(skill.id, targetAgent as never)
  if (validation) {
    logger.warn(`Note: ${targetAgent} normally cannot execute ${skillCommand}`)
  }

  const taskId = `task-${Date.now()}`

  return successWithTriggers(
    {
      taskId,
      delegatedTo: targetAgent,
      triggeredSkill: skill.id,
      reason,
    },
    [skill.id]
  )
}

/**
 * Config result
 */
export interface ConfigResult {
  action: 'view' | 'set' | 'reset'
  configPath: string
  settings: Record<string, unknown>
  modified: boolean
}

/**
 * *config handler - Manage AIOS configuration
 */
export async function handleConfig(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<ConfigResult>> {
  const { deps } = context
  const { fs, logger, prompt } = deps

  const action = (args?.action as 'view' | 'set' | 'reset') ?? 'view'
  const key = args?.key as string
  const value = args?.value as unknown

  const configPath = '.aios/config.yaml'

  logger.info(`Config action: ${action}`)

  // Check if config exists
  const exists = await fs.exists(configPath)

  if (action === 'view') {
    if (!exists) {
      return success({
        action: 'view',
        configPath,
        settings: {},
        modified: false,
      }, ['Config file not found. Using defaults.'])
    }

    const content = await fs.read(configPath)
    // Parse YAML (placeholder - would use yaml parser)
    const settings: Record<string, unknown> = { raw: content }

    return success({
      action: 'view',
      configPath,
      settings,
      modified: false,
    })
  }

  if (action === 'set') {
    if (!key) {
      return failure('Config key is required for set action')
    }

    // Confirm change
    const confirmed = await prompt.confirm(
      `Set config "${key}" to "${String(value)}"?`
    )
    if (!confirmed) {
      return failure('Config change cancelled by user')
    }

    if (context.options.dryRun) {
      logger.info(`[DRY RUN] Would set ${key}=${String(value)}`)
      return success({
        action: 'set',
        configPath,
        settings: { [key]: value },
        modified: false,
      }, ['Executed in dry-run mode'])
    }

    // Read existing config or create new
    let content = ''
    if (exists) {
      content = await fs.read(configPath)
    }

    // Simple key: value append (would use proper YAML parsing)
    content += `\n${key}: ${String(value)}`
    await fs.write(configPath, content)

    logger.info(`Config updated: ${key}=${String(value)}`)

    return success({
      action: 'set',
      configPath,
      settings: { [key]: value },
      modified: true,
    })
  }

  if (action === 'reset') {
    const confirmed = await prompt.confirm(
      'Reset all AIOS configuration to defaults?'
    )
    if (!confirmed) {
      return failure('Config reset cancelled by user')
    }

    if (context.options.dryRun) {
      logger.info('[DRY RUN] Would reset config')
      return success({
        action: 'reset',
        configPath,
        settings: {},
        modified: false,
      }, ['Executed in dry-run mode'])
    }

    // Write default config
    const defaultConfig = `# AIOS Configuration
# Reset at ${new Date().toISOString()}

debug: false
autoSave: true
maxIterations: 5
`
    await fs.write(configPath, defaultConfig)

    logger.info('Config reset to defaults')

    return success({
      action: 'reset',
      configPath,
      settings: { debug: false, autoSave: true, maxIterations: 5 },
      modified: true,
    })
  }

  return failure(`Unknown config action: ${action}`)
}

import type { ExtendedSkillHandler } from '../types'

/**
 * All AIOS Master handlers
 */
export const aiosMasterHandlers: Record<string, ExtendedSkillHandler> = {
  'aios-master:run-workflow': handleRunWorkflow,
  'aios-master:help': handleHelp,
  'aios-master:status': handleStatus,
  'aios-master:delegate': handleDelegate,
  'aios-master:config': handleConfig,
}
