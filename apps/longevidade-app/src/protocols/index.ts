// Protocolo de Longevidade - 3 Meses
// SmartSenior Health & Longevity

export * from './month-1'
export * from './month-2'
export * from './month-3'

import {
  MONTH_1_TITLE,
  MONTH_1_SUBTITLE,
  MONTH_1_DESCRIPTION,
  MONTH_1_DAILY_TASKS,
  MONTH_1_WEEKLY_GOALS,
  MONTH_1_MILESTONES,
} from './month-1'

import {
  MONTH_2_TITLE,
  MONTH_2_SUBTITLE,
  MONTH_2_DESCRIPTION,
  MONTH_2_DAILY_TASKS,
  MONTH_2_WEEKLY_GOALS,
  MONTH_2_MILESTONES,
} from './month-2'

import {
  MONTH_3_TITLE,
  MONTH_3_SUBTITLE,
  MONTH_3_DESCRIPTION,
  MONTH_3_DAILY_TASKS,
  MONTH_3_WEEKLY_GOALS,
  MONTH_3_MILESTONES,
} from './month-3'

import { ProtocolMonth } from '../types'

export interface MonthProtocol {
  month: ProtocolMonth
  title: string
  subtitle: string
  description: string
  dailyTasks: typeof MONTH_1_DAILY_TASKS
  weeklyGoals: typeof MONTH_1_WEEKLY_GOALS
  milestones: typeof MONTH_1_MILESTONES
}

export const PROTOCOLS: Record<ProtocolMonth, MonthProtocol> = {
  1: {
    month: 1,
    title: MONTH_1_TITLE,
    subtitle: MONTH_1_SUBTITLE,
    description: MONTH_1_DESCRIPTION,
    dailyTasks: MONTH_1_DAILY_TASKS,
    weeklyGoals: MONTH_1_WEEKLY_GOALS,
    milestones: MONTH_1_MILESTONES,
  },
  2: {
    month: 2,
    title: MONTH_2_TITLE,
    subtitle: MONTH_2_SUBTITLE,
    description: MONTH_2_DESCRIPTION,
    dailyTasks: MONTH_2_DAILY_TASKS,
    weeklyGoals: MONTH_2_WEEKLY_GOALS,
    milestones: MONTH_2_MILESTONES,
  },
  3: {
    month: 3,
    title: MONTH_3_TITLE,
    subtitle: MONTH_3_SUBTITLE,
    description: MONTH_3_DESCRIPTION,
    dailyTasks: MONTH_3_DAILY_TASKS,
    weeklyGoals: MONTH_3_WEEKLY_GOALS,
    milestones: MONTH_3_MILESTONES,
  },
}

export const getProtocol = (month: ProtocolMonth): MonthProtocol => PROTOCOLS[month]

export const PROTOCOL_DURATION_WEEKS = 12
export const PROTOCOL_DURATION_DAYS = 84
