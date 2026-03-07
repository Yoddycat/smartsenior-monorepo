// Tipos para o Protocolo de Longevidade de 3 meses

export type ProtocolMonth = 1 | 2 | 3

export type ProtocolWeek = 1 | 2 | 3 | 4

export type ProtocolDay = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type TaskCategory =
  | 'nutrition'      // Nutrição
  | 'movement'       // Movimento/Exercício
  | 'sleep'          // Sono
  | 'hydration'      // Hidratação
  | 'supplements'    // Suplementação
  | 'mindfulness'    // Mindfulness/Meditação
  | 'social'         // Conexões Sociais
  | 'cognitive'      // Exercícios Cognitivos

export type TaskStatus = 'pending' | 'completed' | 'skipped'

export interface ProtocolTask {
  id: string
  category: TaskCategory
  title: string
  description: string
  duration?: number // em minutos
  frequency: 'daily' | 'weekly' | 'monthly'
  targetTime?: string // horário sugerido (ex: "08:00")
  status: TaskStatus
  completedAt?: Date
}

export interface DailyProgress {
  date: string // YYYY-MM-DD
  month: ProtocolMonth
  week: ProtocolWeek
  day: ProtocolDay
  tasks: ProtocolTask[]
  completionRate: number // 0-100
  notes?: string
}

export interface WeeklyGoal {
  id: string
  month: ProtocolMonth
  week: ProtocolWeek
  category: TaskCategory
  title: string
  description: string
  target: number
  current: number
  unit: string
}

export interface MonthlyMilestone {
  id: string
  month: ProtocolMonth
  title: string
  description: string
  achieved: boolean
  achievedAt?: Date
}

export interface UserProfile {
  id: string
  name: string
  birthDate: Date
  startDate: Date // Data de início do protocolo
  currentMonth: ProtocolMonth
  currentWeek: ProtocolWeek
  currentDay: ProtocolDay
  healthGoals: string[]
  restrictions?: string[]
}

export interface ProtocolState {
  user: UserProfile
  dailyProgress: DailyProgress[]
  weeklyGoals: WeeklyGoal[]
  milestones: MonthlyMilestone[]
  streakDays: number
  totalCompletedTasks: number
}
