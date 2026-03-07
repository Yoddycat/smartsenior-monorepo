/**
 * Recovery Status Types
 * Based on HRV analysis comparing today vs 7-day average
 */

export type RecoveryStatus = 'optimal' | 'good' | 'moderate' | 'recovery'

export interface RecoveryAnalysis {
  status: RecoveryStatus
  todayHRV: number
  weekAverageHRV: number
  percentageChange: number
  suggestion: RecoverySuggestion | null
  analyzedAt: Date
}

export interface RecoverySuggestion {
  title: string
  description: string
  activityType: 'rest' | 'light' | 'moderate' | 'intense'
  icon: string
  duration?: string
}

export const RECOVERY_THRESHOLDS = {
  recovery: -20,    // 20% below average = recovery mode
  moderate: -10,    // 10% below average = moderate
  good: 0,          // At or above average = good
  optimal: 10,      // 10% above average = optimal
} as const

export const RECOVERY_SUGGESTIONS: Record<RecoveryStatus, RecoverySuggestion> = {
  recovery: {
    title: 'Dia de Recuperação',
    description: 'Seu corpo precisa descansar. Opte por atividades leves como alongamento, caminhada suave ou meditação.',
    activityType: 'light',
    icon: '🧘',
    duration: '15-20 min',
  },
  moderate: {
    title: 'Atividade Moderada',
    description: 'Seu corpo está se recuperando. Prefira exercícios de baixa intensidade como yoga ou natação leve.',
    activityType: 'moderate',
    icon: '🚶',
    duration: '20-30 min',
  },
  good: {
    title: 'Pronto para Treinar',
    description: 'Seu corpo está bem recuperado. Pode realizar seu treino normalmente.',
    activityType: 'moderate',
    icon: '💪',
    duration: '30-45 min',
  },
  optimal: {
    title: 'Performance Máxima',
    description: 'Excelente recuperação! Ótimo dia para treinos mais intensos ou desafios físicos.',
    activityType: 'intense',
    icon: '🔥',
    duration: '45-60 min',
  },
}
