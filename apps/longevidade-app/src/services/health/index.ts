/**
 * Health Service
 *
 * Unified health data service that works across platforms:
 * - iOS: Uses HealthKit via react-native-health
 * - Android: Uses Health Connect via expo-health-connect
 * - Web: Returns unavailable (no health APIs)
 *
 * Usage:
 * ```
 * import { healthService, useHealthPermissions } from '@/services/health'
 *
 * // Request permissions
 * const status = await healthService.requestPermissions(['steps', 'heartRate', 'hrv', 'sleep'])
 *
 * // Read data
 * const steps = await healthService.getSteps(startDate, endDate)
 * ```
 */

import { Platform } from 'react-native'
import type {
  HealthPermission,
  HealthPermissionStatus,
  HealthServiceInterface,
  StepsData,
  HeartRateData,
  HRVData,
  SleepData,
  HealthDataSummary,
} from '../../types/health'

// Platform-specific imports using require to avoid bundling issues
let platformHealthService: HealthServiceInterface

if (Platform.OS === 'ios') {
  platformHealthService = require('./healthService.ios').healthService
} else if (Platform.OS === 'android') {
  platformHealthService = require('./healthService.android').healthService
} else {
  platformHealthService = require('./healthService.web').healthService
}

export const healthService = platformHealthService

// Re-export types
export type {
  HealthPermission,
  HealthPermissionStatus,
  HealthServiceInterface,
  StepsData,
  HeartRateData,
  HRVData,
  SleepData,
  HealthDataSummary,
}

// Helper functions

/**
 * Request all health permissions at once
 */
export async function requestAllHealthPermissions(): Promise<HealthPermissionStatus> {
  return healthService.requestPermissions(['steps', 'heartRate', 'hrv', 'sleep'])
}

/**
 * Get today's step count
 */
export async function getTodaySteps(): Promise<number> {
  const now = new Date()
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const steps = await healthService.getSteps(startOfDay, now)
  return steps.reduce((sum, s) => sum + s.value, 0)
}

/**
 * Get latest heart rate reading
 */
export async function getLatestHeartRate(): Promise<number | null> {
  const now = new Date()
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

  const readings = await healthService.getHeartRate(oneDayAgo, now)
  if (readings.length === 0) return null

  // Return most recent
  const sorted = readings.sort((a, b) => b.date.getTime() - a.date.getTime())
  return sorted[0].value
}

/**
 * Get latest HRV reading
 */
export async function getLatestHRV(): Promise<number | null> {
  const now = new Date()
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

  const readings = await healthService.getHRV(oneDayAgo, now)
  if (readings.length === 0) return null

  // Return most recent
  const sorted = readings.sort((a, b) => b.date.getTime() - a.date.getTime())
  return sorted[0].value
}

/**
 * Get last night's sleep duration in hours
 */
export async function getLastNightSleep(): Promise<number | null> {
  const now = new Date()
  const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000)

  const sleepData = await healthService.getSleep(twoDaysAgo, now)
  if (sleepData.length === 0) return null

  // Find most recent sleep session
  const sorted = sleepData.sort((a, b) => b.endDate.getTime() - a.endDate.getTime())
  return sorted[0].durationMinutes / 60
}

/**
 * Calculate trend based on recent vs older data
 */
function calculateTrend(recent: number, older: number): 'up' | 'down' | 'stable' {
  // Guard against division by zero
  if (older === 0) {
    return recent > 0 ? 'up' : 'stable'
  }

  const threshold = 0.05 // 5% change threshold
  const change = (recent - older) / older

  if (change > threshold) return 'up'
  if (change < -threshold) return 'down'
  return 'stable'
}

/**
 * Get comprehensive health data summary for dashboard
 */
export async function getHealthSummary(): Promise<HealthDataSummary | null> {
  const isAvailable = await healthService.isAvailable()
  if (!isAvailable) return null

  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  try {
    // Fetch all data in parallel
    const [
      todaySteps,
      weekSteps,
      prevWeekSteps,
      weekHR,
      prevWeekHR,
      weekHRV,
      prevWeekHRV,
      weekSleep,
      prevWeekSleep,
    ] = await Promise.all([
      healthService.getSteps(startOfToday, now),
      healthService.getSteps(oneWeekAgo, now),
      healthService.getSteps(twoWeeksAgo, oneWeekAgo),
      healthService.getHeartRate(oneWeekAgo, now),
      healthService.getHeartRate(twoWeeksAgo, oneWeekAgo),
      healthService.getHRV(oneWeekAgo, now),
      healthService.getHRV(twoWeeksAgo, oneWeekAgo),
      healthService.getSleep(oneWeekAgo, now),
      healthService.getSleep(twoWeeksAgo, oneWeekAgo),
    ])

    // Calculate steps metrics
    const todayStepsTotal = todaySteps.reduce((sum, s) => sum + s.value, 0)
    const weekStepsTotal = weekSteps.reduce((sum, s) => sum + s.value, 0)
    const prevWeekStepsTotal = prevWeekSteps.reduce((sum, s) => sum + s.value, 0)
    const weekStepsAvg = weekStepsTotal / 7
    const prevWeekStepsAvg = prevWeekStepsTotal / 7

    // Calculate HR metrics
    const weekHRAvg = weekHR.length > 0
      ? weekHR.reduce((sum, h) => sum + h.value, 0) / weekHR.length
      : 0
    const prevWeekHRAvg = prevWeekHR.length > 0
      ? prevWeekHR.reduce((sum, h) => sum + h.value, 0) / prevWeekHR.length
      : 0
    const latestHR = weekHR.length > 0
      ? weekHR.sort((a, b) => b.date.getTime() - a.date.getTime())[0].value
      : 0

    // Calculate HRV metrics
    const weekHRVAvg = weekHRV.length > 0
      ? weekHRV.reduce((sum, h) => sum + h.value, 0) / weekHRV.length
      : 0
    const prevWeekHRVAvg = prevWeekHRV.length > 0
      ? prevWeekHRV.reduce((sum, h) => sum + h.value, 0) / prevWeekHRV.length
      : 0
    const latestHRV = weekHRV.length > 0
      ? weekHRV.sort((a, b) => b.date.getTime() - a.date.getTime())[0].value
      : 0

    // Calculate sleep metrics
    const weekSleepHours = weekSleep.reduce((sum, s) => sum + s.durationMinutes / 60, 0)
    const prevWeekSleepHours = prevWeekSleep.reduce((sum, s) => sum + s.durationMinutes / 60, 0)
    const weekSleepAvg = weekSleep.length > 0 ? weekSleepHours / weekSleep.length : 0
    const prevWeekSleepAvg = prevWeekSleep.length > 0 ? prevWeekSleepHours / prevWeekSleep.length : 0
    const lastNightSleep = weekSleep.length > 0
      ? weekSleep.sort((a, b) => b.endDate.getTime() - a.endDate.getTime())[0].durationMinutes / 60
      : 0

    return {
      steps: {
        today: todayStepsTotal,
        weekAverage: Math.round(weekStepsAvg),
        trend: calculateTrend(weekStepsAvg, prevWeekStepsAvg),
      },
      heartRate: {
        latest: Math.round(latestHR),
        restingAverage: Math.round(weekHRAvg),
        trend: calculateTrend(weekHRAvg, prevWeekHRAvg),
      },
      hrv: {
        latest: Math.round(latestHRV),
        weekAverage: Math.round(weekHRVAvg),
        trend: calculateTrend(weekHRVAvg, prevWeekHRVAvg),
      },
      sleep: {
        lastNightHours: Math.round(lastNightSleep * 10) / 10,
        weekAverage: Math.round(weekSleepAvg * 10) / 10,
        trend: calculateTrend(weekSleepAvg, prevWeekSleepAvg),
      },
    }
  } catch (error) {
    console.error('[HealthService] Error getting health summary:', error)
    return null
  }
}
