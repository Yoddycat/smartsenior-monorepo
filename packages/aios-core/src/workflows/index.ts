/**
 * AIOS Workflows Module
 *
 * Workflow definitions and orchestration
 */

export type WorkflowStatus = 'idle' | 'running' | 'paused' | 'completed' | 'failed'

export interface WorkflowStep {
  id: string
  name: string
  agent: string
  task: string
  dependsOn?: string[]
  condition?: string
}

export interface Workflow {
  id: string
  name: string
  description: string
  steps: WorkflowStep[]
  status: WorkflowStatus
  currentStep?: string
  context?: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

export interface WorkflowDefinition {
  name: string
  description: string
  steps: Omit<WorkflowStep, 'id'>[]
}

export const WORKFLOW_TYPES = {
  STORY_DEVELOPMENT_CYCLE: 'story-development-cycle',
  QA_LOOP: 'qa-loop',
  SPEC_PIPELINE: 'spec-pipeline',
  BROWNFIELD_DISCOVERY: 'brownfield-discovery',
} as const

export type WorkflowType = typeof WORKFLOW_TYPES[keyof typeof WORKFLOW_TYPES]

export function createWorkflow(definition: WorkflowDefinition): Workflow {
  const now = new Date()
  return {
    id: generateWorkflowId(),
    name: definition.name,
    description: definition.description,
    steps: definition.steps.map((step, index) => ({
      ...step,
      id: `step_${index + 1}`,
    })),
    status: 'idle',
    context: {},
    createdAt: now,
    updatedAt: now,
  }
}

export function startWorkflow(workflow: Workflow): Workflow {
  return {
    ...workflow,
    status: 'running',
    currentStep: workflow.steps[0]?.id,
    updatedAt: new Date(),
  }
}

export function completeWorkflowStep(workflow: Workflow, stepId: string): Workflow {
  const currentIndex = workflow.steps.findIndex(s => s.id === stepId)
  const nextStep = workflow.steps[currentIndex + 1]

  return {
    ...workflow,
    status: nextStep ? 'running' : 'completed',
    currentStep: nextStep?.id,
    updatedAt: new Date(),
  }
}

function generateWorkflowId(): string {
  return `wf_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}
