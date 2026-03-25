/**
 * DevOps Skills - Git Operations and Deployment
 *
 * EXCLUSIVE skills for git push, PR creation, and infrastructure
 */

import { defineDevOpsSkill } from '../factory'
import type { Skill } from '../../types'

/**
 * *push - Push changes to remote
 */
export const pushSkill: Skill = defineDevOpsSkill({
  command: '*push',
  name: 'Git Push',
  description: 'Push committed changes to remote repository. EXCLUSIVE to DevOps - other agents must delegate.',
  dependsOn: ['qa:gate'],
  aliases: ['*git-push'],
  requiresConfirmation: true,
  tags: ['git', 'deployment', 'exclusive'],
})

/**
 * *create-pr - Create a pull request
 */
export const createPrSkill: Skill = defineDevOpsSkill({
  command: '*create-pr',
  name: 'Create Pull Request',
  description: 'Create a GitHub pull request with proper title, description, and labels. EXCLUSIVE to DevOps.',
  dependsOn: ['devops:push'],
  canTrigger: ['devops:merge-pr'],
  aliases: ['*pr', '*pull-request'],
  requiresConfirmation: true,
  tags: ['git', 'github', 'pr', 'exclusive'],
})

/**
 * *merge-pr - Merge a pull request
 */
export const mergePrSkill: Skill = defineDevOpsSkill({
  command: '*merge-pr',
  name: 'Merge Pull Request',
  description: 'Merge an approved pull request. Verifies all checks pass before merging. EXCLUSIVE to DevOps.',
  dependsOn: ['devops:create-pr'],
  aliases: ['*merge'],
  requiresConfirmation: true,
  tags: ['git', 'github', 'pr', 'exclusive'],
})

/**
 * *release - Create a release
 */
export const releaseSkill: Skill = defineDevOpsSkill({
  command: '*release',
  name: 'Create Release',
  description: 'Create a new release with version bump, changelog generation, and tag creation. EXCLUSIVE to DevOps.',
  aliases: ['*create-release'],
  requiresConfirmation: true,
  tags: ['release', 'version', 'exclusive'],
})

/**
 * *setup-mcp - Setup MCP server
 */
export const setupMcpSkill: Skill = defineDevOpsSkill({
  command: '*setup-mcp',
  name: 'Setup MCP Server',
  description: 'Configure and setup an MCP (Model Context Protocol) server. EXCLUSIVE to DevOps.',
  aliases: ['*add-mcp', '*mcp-setup'],
  tags: ['mcp', 'infrastructure', 'exclusive'],
})

/**
 * All DevOps skills
 */
export const devopsSkills: Skill[] = [
  pushSkill,
  createPrSkill,
  mergePrSkill,
  releaseSkill,
  setupMcpSkill,
]
