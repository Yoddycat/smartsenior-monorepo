/**
 * AIOS Skills System - Tests
 */

import { describe, it, expect, beforeEach } from 'vitest'
import {
  SkillRegistry,
  validateSkillAuthority,
  AUTHORITY_PRESETS,
  exclusiveAuthority,
  sharedAuthority,
  delegatedAuthority,
  isOperationBlocked,
  getRequiredAgentForOperation,
} from './index'
import { defineSkill, defineDevSkill, defineDevOpsSkill } from './definitions/factory'
import { registerAllSkills, getAllSkillDefinitions, ALL_SKILLS } from './definitions'
import type { AgentRole } from '../agents'

describe('SkillRegistry', () => {
  beforeEach(() => {
    SkillRegistry.reset()
  })

  it('should register and retrieve a skill by ID', () => {
    const registry = SkillRegistry.getInstance()
    const skill = defineSkill({
      command: '*test',
      name: 'Test Skill',
      description: 'A test skill',
      owner: 'dev',
      category: 'development',
    })

    registry.register(skill)

    const retrieved = registry.get('dev:test')
    expect(retrieved).toBeDefined()
    expect(retrieved?.name).toBe('Test Skill')
  })

  it('should retrieve a skill by command', () => {
    const registry = SkillRegistry.getInstance()
    const skill = defineSkill({
      command: '*my-command',
      name: 'My Command',
      description: 'A command',
      owner: 'qa',
      category: 'quality',
    })

    registry.register(skill)

    const retrieved = registry.getByCommand('*my-command')
    expect(retrieved).toBeDefined()
    expect(retrieved?.id).toBe('qa:my-command')
  })

  it('should retrieve a skill by alias', () => {
    const registry = SkillRegistry.getInstance()
    const skill = defineSkill({
      command: '*main-cmd',
      name: 'Main Command',
      description: 'Main command with aliases',
      owner: 'dev',
      category: 'development',
      aliases: ['*alias1', '*alias2'],
    })

    registry.register(skill)

    expect(registry.getByCommand('*alias1')?.id).toBe('dev:main-cmd')
    expect(registry.getByCommand('*alias2')?.id).toBe('dev:main-cmd')
  })

  it('should filter skills by owner', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    const devSkills = registry.filter({ owner: 'dev' })
    expect(devSkills.length).toBeGreaterThan(0)
    expect(devSkills.every(s => s.owner === 'dev')).toBe(true)
  })

  it('should filter skills by category', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    const deploymentSkills = registry.filter({ category: 'deployment' })
    expect(deploymentSkills.length).toBeGreaterThan(0)
    expect(deploymentSkills.every(s => s.category === 'deployment')).toBe(true)
  })

  it('should filter skills allowed for an agent', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    const devAllowed = registry.getAllowedFor('dev')
    expect(devAllowed.some(s => s.id === 'dev:develop')).toBe(true)
    // DevOps exclusive skills should not be in dev's allowed list
    expect(devAllowed.some(s => s.id === 'devops:push')).toBe(false)
  })

  it('should validate execution authority', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    // Dev can execute dev skills
    const devError = registry.validateExecution('dev:develop', 'dev')
    expect(devError).toBeNull()

    // Dev cannot execute devops skills
    const devopsError = registry.validateExecution('devops:push', 'dev')
    expect(devopsError).not.toBeNull()
    expect(devopsError?.code).toBe('UNAUTHORIZED')
  })

  it('should allow aios-master to execute any skill', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    // AIOS Master can execute anything
    const pushError = registry.validateExecution('devops:push', 'aios-master')
    expect(pushError).toBeNull()

    const devError = registry.validateExecution('dev:develop', 'aios-master')
    expect(devError).toBeNull()
  })

  it('should return stats about registered skills', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    const stats = registry.getStats()
    expect(stats.total).toBeGreaterThan(0)
    expect(stats.byOwner).toBeDefined()
    expect(stats.byCategory).toBeDefined()
    expect(stats.byAuthorityLevel).toBeDefined()
  })
})

describe('Authority System', () => {
  it('should validate exclusive authority correctly', () => {
    const authority = exclusiveAuthority('devops')

    // DevOps can execute
    const devopsResult = validateSkillAuthority(authority, 'devops')
    expect(devopsResult.authorized).toBe(true)

    // Dev cannot execute
    const devResult = validateSkillAuthority(authority, 'dev')
    expect(devResult.authorized).toBe(false)
    expect(devResult.suggestDelegateTo).toBe('devops')
  })

  it('should validate shared authority correctly', () => {
    const authority = sharedAuthority('dev', 'qa')

    // Both dev and qa can execute
    expect(validateSkillAuthority(authority, 'dev').authorized).toBe(true)
    expect(validateSkillAuthority(authority, 'qa').authorized).toBe(true)

    // PM cannot execute
    expect(validateSkillAuthority(authority, 'pm').authorized).toBe(false)
  })

  it('should validate delegated authority correctly', () => {
    const authority = delegatedAuthority('data-engineer', 'architect', 'Schema implementation')

    // Data engineer can execute (delegated to)
    expect(validateSkillAuthority(authority, 'data-engineer').authorized).toBe(true)

    // Architect cannot execute (delegated from, but not allowed)
    expect(validateSkillAuthority(authority, 'architect').authorized).toBe(false)

    // Dev cannot execute
    expect(validateSkillAuthority(authority, 'dev').authorized).toBe(false)
  })

  it('should always allow aios-master', () => {
    const exclusiveAuth = exclusiveAuthority('devops')
    expect(validateSkillAuthority(exclusiveAuth, 'aios-master').authorized).toBe(true)

    const sharedAuth = sharedAuthority('dev', 'qa')
    expect(validateSkillAuthority(sharedAuth, 'aios-master').authorized).toBe(true)
  })

  it('should have correct authority presets', () => {
    expect(AUTHORITY_PRESETS.DEVOPS_EXCLUSIVE.allowedAgents).toContain('devops')
    expect(AUTHORITY_PRESETS.DEVOPS_EXCLUSIVE.level).toBe('exclusive')

    expect(AUTHORITY_PRESETS.DEV_QA_SHARED.allowedAgents).toContain('dev')
    expect(AUTHORITY_PRESETS.DEV_QA_SHARED.allowedAgents).toContain('qa')
    expect(AUTHORITY_PRESETS.DEV_QA_SHARED.level).toBe('shared')
  })
})

describe('Blocked Operations', () => {
  it('should identify blocked operations for agents', () => {
    // Git push is blocked for dev
    expect(isOperationBlocked('git push', 'dev')).toBe(true)

    // Git push is NOT blocked for devops
    expect(isOperationBlocked('git push', 'devops')).toBe(false)

    // PR creation is blocked for dev
    expect(isOperationBlocked('gh pr create', 'dev')).toBe(true)
  })

  it('should return required agent for blocked operations', () => {
    expect(getRequiredAgentForOperation('git push')).toBe('devops')
    expect(getRequiredAgentForOperation('gh pr create')).toBe('devops')
  })
})

describe('Skill Definitions', () => {
  it('should have all expected skills defined', () => {
    expect(ALL_SKILLS.length).toBeGreaterThan(0)

    // Check for key skills
    const skillIds = ALL_SKILLS.map(s => s.id)
    expect(skillIds).toContain('sm:draft')
    expect(skillIds).toContain('po:validate-story-draft')
    expect(skillIds).toContain('dev:develop')
    expect(skillIds).toContain('qa:gate')
    expect(skillIds).toContain('devops:push')
  })

  it('should auto-generate skill IDs correctly', () => {
    const skill = defineDevSkill({
      command: '*my-action',
      name: 'My Action',
      description: 'Does something',
    })

    expect(skill.id).toBe('dev:my-action')
    expect(skill.owner).toBe('dev')
    expect(skill.category).toBe('development')
  })

  it('should use DevOps preset for DevOps skills', () => {
    const skill = defineDevOpsSkill({
      command: '*deploy',
      name: 'Deploy',
      description: 'Deploys application',
    })

    expect(skill.owner).toBe('devops')
    expect(skill.category).toBe('deployment')
    expect(skill.authority.level).toBe('exclusive')
    expect(skill.authority.allowedAgents).toContain('devops')
  })

  it('should include dependencies and triggers', () => {
    const skills = getAllSkillDefinitions()

    const gateSkill = skills.find(s => s.id === 'qa:gate')
    expect(gateSkill?.dependsOn).toContain('dev:develop')
    expect(gateSkill?.canTrigger).toContain('devops:push')

    const pushSkill = skills.find(s => s.id === 'devops:push')
    expect(pushSkill?.dependsOn).toContain('qa:gate')
  })
})

describe('Registry Integration', () => {
  beforeEach(() => {
    SkillRegistry.reset()
  })

  it('should list all commands after registration', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    const commands = registry.listCommands()
    expect(commands.length).toBeGreaterThan(0)

    // Check some expected commands
    const commandStrings = commands.map(c => c.command)
    expect(commandStrings).toContain('*develop')
    expect(commandStrings).toContain('*push')
    expect(commandStrings).toContain('*draft')
  })

  it('should handle skill search', () => {
    const registry = SkillRegistry.getInstance()
    registerAllSkills()

    // Search by command
    const pushResults = registry.filter({ search: 'push' })
    expect(pushResults.some(s => s.command === '*push')).toBe(true)

    // Search by name
    const devResults = registry.filter({ search: 'develop' })
    expect(devResults.length).toBeGreaterThan(0)
  })
})
