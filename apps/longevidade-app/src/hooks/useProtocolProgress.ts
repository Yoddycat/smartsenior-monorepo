/**
 * Hook for managing protocol progress with real data
 * Calculates current day/week/month based on protocol start date
 * Tracks completion rates and streaks
 */

import { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProtocolMonth } from '../types'
import { PROTOCOLS, PROTOCOL_DURATION_DAYS } from '../protocols'

const PROFILE_STORAGE_KEY = '@longevidade:user_profile'
const COMPLETED_TASKS_PREFIX = '@longevidade:completed_tasks'

interface ProtocolProgress {
  // Current position in protocol
  currentDay: number // 1-84
  currentWeek: number // 1-12
  currentMonth: ProtocolMonth // 1-3
  protocolStartDate: string

  // Today's progress
  completedToday: number
  totalTasksToday: number
  completionRate: number

  // Streak
  streakDays: number

  // Protocol info
  protocolTitle: string
  protocolSubtitle: string

  // Loading state
  isLoading: boolean
}

interface UseProtocolProgressReturn extends ProtocolProgress {
  refreshProgress: () => Promise<void>
}

const getTodayKey = (): string => {
  return new Date().toISOString().split('T')[0]
}

const getStorageKey = (month: ProtocolMonth, date: string): string => {
  return `${COMPLETED_TASKS_PREFIX}:month_${month}:${date}`
}

export function useProtocolProgress(): UseProtocolProgressReturn {
  const [progress, setProgress] = useState<ProtocolProgress>({
    currentDay: 1,
    currentWeek: 1,
    currentMonth: 1,
    protocolStartDate: getTodayKey(),
    completedToday: 0,
    totalTasksToday: 0,
    completionRate: 0,
    streakDays: 0,
    protocolTitle: PROTOCOLS[1].title,
    protocolSubtitle: PROTOCOLS[1].subtitle,
    isLoading: true,
  })

  const calculateProgress = useCallback(async () => {
    try {
      // Load profile to get start date
      const profileData = await AsyncStorage.getItem(PROFILE_STORAGE_KEY)
      let startDate = getTodayKey()

      if (profileData) {
        const profile = JSON.parse(profileData)
        startDate = profile.protocolStartDate || startDate
      }

      // Calculate current position
      const start = new Date(startDate)
      const today = new Date()
      const diffTime = today.getTime() - start.getTime()
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

      // Clamp to protocol duration
      const currentDay = Math.min(Math.max(diffDays + 1, 1), PROTOCOL_DURATION_DAYS)
      const currentWeek = Math.min(Math.ceil(currentDay / 7), 12)
      const currentMonth = Math.min(Math.ceil(currentDay / 28), 3) as ProtocolMonth

      // Get today's tasks
      const protocol = PROTOCOLS[currentMonth]
      const totalTasksToday = protocol.dailyTasks.length

      // Load completed tasks for today
      const todayKey = getTodayKey()
      const storageKey = getStorageKey(currentMonth, todayKey)
      const completedData = await AsyncStorage.getItem(storageKey)
      const completedTasks = completedData ? JSON.parse(completedData) as number[] : []
      const completedToday = completedTasks.length

      // Calculate completion rate
      const completionRate = totalTasksToday > 0
        ? Math.round((completedToday / totalTasksToday) * 100)
        : 0

      // Calculate streak
      const streakDays = await calculateStreak(currentMonth, currentDay, startDate)

      setProgress({
        currentDay,
        currentWeek,
        currentMonth,
        protocolStartDate: startDate,
        completedToday,
        totalTasksToday,
        completionRate,
        streakDays,
        protocolTitle: protocol.title,
        protocolSubtitle: protocol.subtitle,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error calculating progress:', error)
      setProgress(prev => ({ ...prev, isLoading: false }))
    }
  }, [])

  useEffect(() => {
    calculateProgress()
  }, [calculateProgress])

  return {
    ...progress,
    refreshProgress: calculateProgress,
  }
}

async function calculateStreak(
  currentMonth: ProtocolMonth,
  currentDay: number,
  startDate: string
): Promise<number> {
  let streak = 0
  const today = new Date()

  // Check up to 84 days back (full protocol)
  for (let i = 0; i < Math.min(currentDay, 84); i++) {
    const checkDate = new Date(today)
    checkDate.setDate(checkDate.getDate() - i)
    const dateKey = checkDate.toISOString().split('T')[0]

    // Skip if before protocol start
    if (dateKey < startDate) break

    // Determine which month this date falls in
    const daysSinceStart = Math.floor(
      (checkDate.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)
    )
    const monthForDate = Math.min(Math.ceil((daysSinceStart + 1) / 28), 3) as ProtocolMonth

    const storageKey = getStorageKey(monthForDate, dateKey)
    const completedData = await AsyncStorage.getItem(storageKey)

    if (completedData) {
      const completed = JSON.parse(completedData) as number[]
      const protocol = PROTOCOLS[monthForDate]
      const totalTasks = protocol.dailyTasks.length

      // Consider day complete if at least 50% of tasks done
      if (completed.length >= totalTasks * 0.5) {
        streak++
      } else {
        break
      }
    } else if (i > 0) {
      // No data for past day means streak broken (skip today)
      break
    }
  }

  return streak
}

/**
 * Get greeting based on time of day
 */
export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Bom dia!'
  if (hour < 18) return 'Boa tarde!'
  return 'Boa noite!'
}
