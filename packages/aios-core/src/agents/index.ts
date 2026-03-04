/**
 * AIOS Agents Module
 *
 * Agent definitions and orchestration utilities
 */

export interface AgentConfig {
  id: string
  name: string
  role: string
  description: string
  capabilities: string[]
  tools?: string[]
}

export interface AgentContext {
  agentId: string
  sessionId: string
  metadata?: Record<string, unknown>
}

export type AgentRole =
  | 'dev'
  | 'qa'
  | 'architect'
  | 'pm'
  | 'po'
  | 'sm'
  | 'analyst'
  | 'devops'
  | 'data-engineer'
  | 'ux-design-expert'
  | 'aios-master'

export const AGENT_ROLES: Record<AgentRole, string> = {
  'dev': 'Developer',
  'qa': 'Quality Assurance',
  'architect': 'Software Architect',
  'pm': 'Project Manager',
  'po': 'Product Owner',
  'sm': 'Scrum Master',
  'analyst': 'Business Analyst',
  'devops': 'DevOps Engineer',
  'data-engineer': 'Data Engineer',
  'ux-design-expert': 'UX Design Expert',
  'aios-master': 'AIOS Master',
}

export function createAgent(config: AgentConfig): AgentConfig {
  return {
    ...config,
    tools: config.tools || [],
  }
}

export function createAgentContext(
  agentId: string,
  sessionId: string,
  metadata?: Record<string, unknown>
): AgentContext {
  return {
    agentId,
    sessionId,
    metadata,
  }
}
