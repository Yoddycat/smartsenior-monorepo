/**
 * AIOS Tasks Module
 *
 * Task definitions and execution utilities
 */

export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'failed' | 'blocked'

export type TaskPriority = 'low' | 'medium' | 'high' | 'critical'

export interface Task {
  id: string
  subject: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  assignee?: string
  blockedBy?: string[]
  blocks?: string[]
  metadata?: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

export interface TaskCreateInput {
  subject: string
  description: string
  priority?: TaskPriority
  assignee?: string
  blockedBy?: string[]
  metadata?: Record<string, unknown>
}

export interface TaskUpdateInput {
  subject?: string
  description?: string
  status?: TaskStatus
  priority?: TaskPriority
  assignee?: string
  blockedBy?: string[]
  blocks?: string[]
  metadata?: Record<string, unknown>
}

export function createTask(input: TaskCreateInput): Task {
  const now = new Date()
  return {
    id: generateTaskId(),
    subject: input.subject,
    description: input.description,
    status: 'pending',
    priority: input.priority || 'medium',
    assignee: input.assignee,
    blockedBy: input.blockedBy || [],
    blocks: [],
    metadata: input.metadata || {},
    createdAt: now,
    updatedAt: now,
  }
}

export function updateTask(task: Task, input: TaskUpdateInput): Task {
  return {
    ...task,
    ...input,
    updatedAt: new Date(),
  }
}

function generateTaskId(): string {
  return `task_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}
