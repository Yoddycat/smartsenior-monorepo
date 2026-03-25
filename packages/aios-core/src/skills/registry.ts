/**
 * AIOS Skills Module - Registry
 *
 * Centralized registry for skill registration and lookup
 */

import type { AgentRole } from '../agents'
import type {
  Skill,
  RegisteredSkill,
  SkillHandler,
  SkillContext,
  SkillResult,
  SkillFilter,
  SkillValidationError,
} from './types'
import { validateSkillAuthority } from './authority'

/**
 * Skill Registry - Singleton for managing all skills
 */
export class SkillRegistry {
  private static instance: SkillRegistry
  private skills: Map<string, RegisteredSkill> = new Map()
  private commandIndex: Map<string, string> = new Map() // command -> skillId

  private constructor() {
    // Private constructor for singleton
  }

  /**
   * Get the singleton instance
   */
  static getInstance(): SkillRegistry {
    if (!SkillRegistry.instance) {
      SkillRegistry.instance = new SkillRegistry()
    }
    return SkillRegistry.instance
  }

  /**
   * Reset the registry (useful for testing)
   */
  static reset(): void {
    SkillRegistry.instance = new SkillRegistry()
  }

  /**
   * Register a skill
   */
  register(skill: Skill, handler?: SkillHandler): void {
    const registeredSkill: RegisteredSkill = {
      ...skill,
      handler,
    }

    this.skills.set(skill.id, registeredSkill)
    this.commandIndex.set(skill.command, skill.id)

    // Index aliases
    if (skill.aliases) {
      for (const alias of skill.aliases) {
        this.commandIndex.set(alias, skill.id)
      }
    }
  }

  /**
   * Register multiple skills at once
   */
  registerMany(skills: Array<{ skill: Skill; handler?: SkillHandler }>): void {
    for (const { skill, handler } of skills) {
      this.register(skill, handler)
    }
  }

  /**
   * Get a skill by ID
   */
  get(skillId: string): RegisteredSkill | undefined {
    return this.skills.get(skillId)
  }

  /**
   * Get a skill by command
   */
  getByCommand(command: string): RegisteredSkill | undefined {
    const skillId = this.commandIndex.get(command)
    if (!skillId) {
      return undefined
    }
    return this.skills.get(skillId)
  }

  /**
   * Check if a skill exists
   */
  has(skillId: string): boolean {
    return this.skills.has(skillId)
  }

  /**
   * Check if a command exists
   */
  hasCommand(command: string): boolean {
    return this.commandIndex.has(command)
  }

  /**
   * Get all registered skills
   */
  getAll(): RegisteredSkill[] {
    return Array.from(this.skills.values())
  }

  /**
   * Filter skills based on criteria
   */
  filter(options: SkillFilter): RegisteredSkill[] {
    let results = this.getAll()

    if (options.owner) {
      results = results.filter(s => s.owner === options.owner)
    }

    if (options.category) {
      results = results.filter(s => s.category === options.category)
    }

    if (options.authorityLevel) {
      results = results.filter(s => s.authority.level === options.authorityLevel)
    }

    if (options.allowedFor) {
      results = results.filter(s =>
        s.authority.allowedAgents.includes(options.allowedFor!) ||
        options.allowedFor === 'aios-master'
      )
    }

    if (options.tags && options.tags.length > 0) {
      results = results.filter(s =>
        s.tags?.some(tag => options.tags!.includes(tag))
      )
    }

    if (options.search) {
      const searchLower = options.search.toLowerCase()
      results = results.filter(s =>
        s.command.toLowerCase().includes(searchLower) ||
        s.name.toLowerCase().includes(searchLower) ||
        s.description.toLowerCase().includes(searchLower)
      )
    }

    return results
  }

  /**
   * Get skills owned by an agent
   */
  getByOwner(agent: AgentRole): RegisteredSkill[] {
    return this.filter({ owner: agent })
  }

  /**
   * Get skills allowed for an agent
   */
  getAllowedFor(agent: AgentRole): RegisteredSkill[] {
    return this.filter({ allowedFor: agent })
  }

  /**
   * Validate if an agent can execute a skill
   */
  validateExecution(
    skillId: string,
    executingAgent: AgentRole,
    context?: SkillContext
  ): SkillValidationError | null {
    const skill = this.get(skillId)

    if (!skill) {
      return {
        code: 'NOT_FOUND',
        message: `Skill '${skillId}' not found`,
        skillId,
        attemptedBy: executingAgent,
      }
    }

    const validation = validateSkillAuthority(
      skill.authority,
      executingAgent,
      context
    )

    if (!validation.authorized) {
      return {
        code: 'UNAUTHORIZED',
        message: validation.reason || 'Unauthorized',
        skillId,
        attemptedBy: executingAgent,
        requiredAgents: skill.authority.allowedAgents,
      }
    }

    // Check dependencies
    if (skill.dependsOn && skill.dependsOn.length > 0 && context) {
      // Note: In a real implementation, you'd check if dependencies are satisfied
      // This is a placeholder for the dependency check logic
    }

    return null
  }

  /**
   * Execute a skill
   */
  async execute<T = unknown>(
    skillId: string,
    context: SkillContext,
    args?: Record<string, unknown>
  ): Promise<SkillResult<T>> {
    // Validate execution
    const error = this.validateExecution(skillId, context.executingAgent, context)
    if (error) {
      return {
        success: false,
        error: error.message,
      }
    }

    const skill = this.get(skillId)
    if (!skill) {
      return {
        success: false,
        error: `Skill '${skillId}' not found`,
      }
    }

    if (!skill.handler) {
      return {
        success: false,
        error: `Skill '${skillId}' has no handler registered`,
      }
    }

    try {
      return await skill.handler(context, args) as SkillResult<T>
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error during skill execution',
      }
    }
  }

  /**
   * Execute a skill by command
   */
  async executeByCommand<T = unknown>(
    command: string,
    context: SkillContext,
    args?: Record<string, unknown>
  ): Promise<SkillResult<T>> {
    const skill = this.getByCommand(command)
    if (!skill) {
      return {
        success: false,
        error: `No skill found for command '${command}'`,
      }
    }

    return this.execute<T>(skill.id, context, args)
  }

  /**
   * Get statistics about registered skills
   */
  getStats(): {
    total: number
    byOwner: Record<string, number>
    byCategory: Record<string, number>
    byAuthorityLevel: Record<string, number>
  } {
    const skills = this.getAll()

    const byOwner: Record<string, number> = {}
    const byCategory: Record<string, number> = {}
    const byAuthorityLevel: Record<string, number> = {}

    for (const skill of skills) {
      byOwner[skill.owner] = (byOwner[skill.owner] || 0) + 1
      byCategory[skill.category] = (byCategory[skill.category] || 0) + 1
      byAuthorityLevel[skill.authority.level] = (byAuthorityLevel[skill.authority.level] || 0) + 1
    }

    return {
      total: skills.length,
      byOwner,
      byCategory,
      byAuthorityLevel,
    }
  }

  /**
   * List all commands with their skill info
   */
  listCommands(): Array<{ command: string; skillId: string; owner: AgentRole; name: string }> {
    const result: Array<{ command: string; skillId: string; owner: AgentRole; name: string }> = []

    for (const [command, skillId] of this.commandIndex) {
      const skill = this.skills.get(skillId)
      if (skill) {
        result.push({
          command,
          skillId,
          owner: skill.owner,
          name: skill.name,
        })
      }
    }

    return result.sort((a, b) => a.command.localeCompare(b.command))
  }
}

/**
 * Get the default registry instance
 */
export function getRegistry(): SkillRegistry {
  return SkillRegistry.getInstance()
}

/**
 * Register a skill to the default registry
 */
export function registerSkill(skill: Skill, handler?: SkillHandler): void {
  getRegistry().register(skill, handler)
}

/**
 * Register multiple skills to the default registry
 */
export function registerSkills(skills: Array<{ skill: Skill; handler?: SkillHandler }>): void {
  getRegistry().registerMany(skills)
}
