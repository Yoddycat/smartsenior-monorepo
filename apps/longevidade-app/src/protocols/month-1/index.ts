// Mês 1: Fundação - Construindo os Alicerces da Longevidade
// Foco: Hidratação, Sono e Movimento Básico

import { ProtocolTask, WeeklyGoal, MonthlyMilestone, TaskCategory } from '../../types'

export const MONTH_1_TITLE = 'Fundação'
export const MONTH_1_SUBTITLE = 'Construindo os Alicerces da Longevidade'
export const MONTH_1_DESCRIPTION = `
O primeiro mês foca em estabelecer as bases fundamentais para uma vida longa e saudável.
Vamos trabalhar três pilares essenciais: hidratação adequada, qualidade do sono e movimento diário.
`

export const MONTH_1_DAILY_TASKS: Omit<ProtocolTask, 'id' | 'status'>[] = [
  // Hidratação
  {
    category: 'hydration',
    title: 'Água ao acordar',
    description: 'Beber 500ml de água nos primeiros 30 minutos após acordar',
    frequency: 'daily',
    targetTime: '07:00',
  },
  {
    category: 'hydration',
    title: 'Meta diária de hidratação',
    description: 'Consumir pelo menos 2 litros de água ao longo do dia',
    frequency: 'daily',
  },

  // Sono
  {
    category: 'sleep',
    title: 'Rotina de desconexão',
    description: 'Desligar telas 1 hora antes de dormir',
    frequency: 'daily',
    targetTime: '21:00',
  },
  {
    category: 'sleep',
    title: 'Horário consistente',
    description: 'Dormir e acordar no mesmo horário todos os dias',
    frequency: 'daily',
    targetTime: '22:00',
  },

  // Movimento
  {
    category: 'movement',
    title: 'Caminhada matinal',
    description: '15 minutos de caminhada leve ao ar livre',
    duration: 15,
    frequency: 'daily',
    targetTime: '07:30',
  },
  {
    category: 'movement',
    title: 'Alongamento',
    description: '10 minutos de alongamento suave',
    duration: 10,
    frequency: 'daily',
    targetTime: '08:00',
  },
]

export const MONTH_1_WEEKLY_GOALS: Omit<WeeklyGoal, 'id' | 'current'>[] = [
  // Semana 1
  {
    month: 1,
    week: 1,
    category: 'hydration',
    title: 'Estabelecer rotina de hidratação',
    description: 'Beber água ao acordar por 5 dias consecutivos',
    target: 5,
    unit: 'dias',
  },
  {
    month: 1,
    week: 1,
    category: 'sleep',
    title: 'Horário de sono consistente',
    description: 'Dormir no mesmo horário por 5 noites',
    target: 5,
    unit: 'noites',
  },

  // Semana 2
  {
    month: 1,
    week: 2,
    category: 'movement',
    title: 'Caminhadas diárias',
    description: 'Completar 7 caminhadas de 15 minutos',
    target: 7,
    unit: 'caminhadas',
  },
  {
    month: 1,
    week: 2,
    category: 'hydration',
    title: 'Meta de 2L diários',
    description: 'Atingir 2L de água em pelo menos 5 dias',
    target: 5,
    unit: 'dias',
  },

  // Semana 3
  {
    month: 1,
    week: 3,
    category: 'sleep',
    title: 'Qualidade do sono',
    description: 'Registrar 7 horas de sono por 5 noites',
    target: 5,
    unit: 'noites',
  },
  {
    month: 1,
    week: 3,
    category: 'movement',
    title: 'Aumentar caminhada',
    description: 'Aumentar para 20 minutos de caminhada',
    target: 5,
    unit: 'dias',
  },

  // Semana 4
  {
    month: 1,
    week: 4,
    category: 'hydration',
    title: 'Hidratação completa',
    description: 'Completar rotina de hidratação por 7 dias',
    target: 7,
    unit: 'dias',
  },
  {
    month: 1,
    week: 4,
    category: 'movement',
    title: 'Rotina de movimento',
    description: 'Completar caminhada + alongamento por 6 dias',
    target: 6,
    unit: 'dias',
  },
]

export const MONTH_1_MILESTONES: Omit<MonthlyMilestone, 'id' | 'achieved' | 'achievedAt'>[] = [
  {
    month: 1,
    title: 'Mestre da Hidratação',
    description: 'Completou a rotina de hidratação por 21 dias',
  },
  {
    month: 1,
    title: 'Dorminhoco Consistente',
    description: 'Manteve horário de sono regular por 3 semanas',
  },
  {
    month: 1,
    title: 'Corpo em Movimento',
    description: 'Completou 25 sessões de exercício no mês',
  },
  {
    month: 1,
    title: 'Fundação Completa',
    description: 'Completou o Mês 1 com mais de 80% das tarefas',
  },
]
