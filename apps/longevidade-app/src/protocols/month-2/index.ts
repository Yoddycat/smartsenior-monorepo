// Mês 2: Nutrição - Alimentando a Longevidade
// Foco: Nutrição Inteligente, Suplementação e Mindfulness

import { ProtocolTask, WeeklyGoal, MonthlyMilestone } from '../../types'

export const MONTH_2_TITLE = 'Nutrição'
export const MONTH_2_SUBTITLE = 'Alimentando a Longevidade'
export const MONTH_2_DESCRIPTION = `
O segundo mês foca em otimizar a alimentação para longevidade.
Vamos introduzir padrões alimentares baseados em evidência, suplementação estratégica
e práticas de mindfulness para reduzir o estresse.
`

export const MONTH_2_DAILY_TASKS: Omit<ProtocolTask, 'id' | 'status'>[] = [
  // Nutrição
  {
    category: 'nutrition',
    title: 'Café da manhã proteico',
    description: 'Incluir pelo menos 20g de proteína no café da manhã',
    frequency: 'daily',
    targetTime: '08:00',
  },
  {
    category: 'nutrition',
    title: 'Vegetais coloridos',
    description: 'Consumir pelo menos 5 porções de vegetais variados',
    frequency: 'daily',
  },
  {
    category: 'nutrition',
    title: 'Janela alimentar',
    description: 'Concentrar alimentação em janela de 10-12 horas',
    frequency: 'daily',
  },
  {
    category: 'nutrition',
    title: 'Última refeição',
    description: 'Finalizar última refeição 3 horas antes de dormir',
    frequency: 'daily',
    targetTime: '19:00',
  },

  // Suplementação
  {
    category: 'supplements',
    title: 'Vitamina D',
    description: 'Tomar vitamina D pela manhã (conforme orientação médica)',
    frequency: 'daily',
    targetTime: '08:00',
  },
  {
    category: 'supplements',
    title: 'Ômega 3',
    description: 'Tomar ômega 3 com refeição principal',
    frequency: 'daily',
    targetTime: '12:00',
  },

  // Mindfulness
  {
    category: 'mindfulness',
    title: 'Meditação matinal',
    description: '10 minutos de meditação guiada ao acordar',
    duration: 10,
    frequency: 'daily',
    targetTime: '07:00',
  },
  {
    category: 'mindfulness',
    title: 'Respiração consciente',
    description: '5 minutos de respiração profunda antes das refeições',
    duration: 5,
    frequency: 'daily',
  },

  // Manter hábitos do Mês 1
  {
    category: 'hydration',
    title: 'Hidratação diária',
    description: 'Manter meta de 2L de água',
    frequency: 'daily',
  },
  {
    category: 'movement',
    title: 'Movimento diário',
    description: '20 minutos de atividade física',
    duration: 20,
    frequency: 'daily',
  },
]

export const MONTH_2_WEEKLY_GOALS: Omit<WeeklyGoal, 'id' | 'current'>[] = [
  // Semana 1
  {
    month: 2,
    week: 1,
    category: 'nutrition',
    title: 'Proteína no café',
    description: 'Incluir proteína no café da manhã por 6 dias',
    target: 6,
    unit: 'dias',
  },
  {
    month: 2,
    week: 1,
    category: 'mindfulness',
    title: 'Início da meditação',
    description: 'Completar 5 sessões de meditação',
    target: 5,
    unit: 'sessões',
  },

  // Semana 2
  {
    month: 2,
    week: 2,
    category: 'nutrition',
    title: 'Arco-íris de vegetais',
    description: 'Consumir vegetais de 5 cores diferentes por dia',
    target: 5,
    unit: 'dias',
  },
  {
    month: 2,
    week: 2,
    category: 'supplements',
    title: 'Rotina de suplementos',
    description: 'Tomar suplementos consistentemente por 7 dias',
    target: 7,
    unit: 'dias',
  },

  // Semana 3
  {
    month: 2,
    week: 3,
    category: 'nutrition',
    title: 'Janela alimentar',
    description: 'Manter janela de 12h por 6 dias',
    target: 6,
    unit: 'dias',
  },
  {
    month: 2,
    week: 3,
    category: 'mindfulness',
    title: 'Meditação consistente',
    description: 'Meditar todos os dias da semana',
    target: 7,
    unit: 'dias',
  },

  // Semana 4
  {
    month: 2,
    week: 4,
    category: 'nutrition',
    title: 'Integração completa',
    description: 'Seguir protocolo nutricional completo por 6 dias',
    target: 6,
    unit: 'dias',
  },
  {
    month: 2,
    week: 4,
    category: 'mindfulness',
    title: 'Mente calma',
    description: 'Registrar 3 momentos de respiração consciente por dia',
    target: 5,
    unit: 'dias',
  },
]

export const MONTH_2_MILESTONES: Omit<MonthlyMilestone, 'id' | 'achieved' | 'achievedAt'>[] = [
  {
    month: 2,
    title: 'Chef da Longevidade',
    description: 'Seguiu protocolo nutricional por 21 dias',
  },
  {
    month: 2,
    title: 'Mente Serena',
    description: 'Completou 25 sessões de meditação',
  },
  {
    month: 2,
    title: 'Suplementação em Dia',
    description: 'Manteve rotina de suplementos por 4 semanas',
  },
  {
    month: 2,
    title: 'Nutrição Completa',
    description: 'Completou o Mês 2 com mais de 80% das tarefas',
  },
]
