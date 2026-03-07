/**
 * Mock Health Service Implementation
 * Provides fake data for testing UI without a real health device
 */

import type {
  HealthPermission,
  HealthPermissionStatus,
  HealthServiceInterface,
  StepsData,
  HeartRateData,
  HRVData,
  SleepData,
} from '../../types/health'

// Configuration for mock data generation
const MOCK_CONFIG = {
  // User profile simulation
  baseStepsPerDay: 7500,
  baseHeartRate: 72,
  baseHRV: 45, // ms RMSSD
  baseSleepHours: 7.5,

  // Variation ranges
  stepsVariation: 0.3, // ±30%
  heartRateVariation: 0.15, // ±15%
  hrvVariation: 0.25, // ±25%
  sleepVariation: 0.2, // ±20%

  // Simulate recovery scenario (HRV 25% below average)
  simulateRecoveryMode: true,
  recoveryHRVReduction: 0.25, // 25% reduction for today
}

/**
 * Generate random value with variation
 */
function randomWithVariation(base: number, variation: number): number {
  const min = base * (1 - variation)
  const max = base * (1 + variation)
  return Math.round(min + Math.random() * (max - min))
}

/**
 * Generate date at specific hour
 */
function dateAtHour(daysAgo: number, hour: number): Date {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  date.setHours(hour, Math.floor(Math.random() * 60), 0, 0)
  return date
}

class MockHealthService implements HealthServiceInterface {
  private permissionsGranted = false

  async isAvailable(): Promise<boolean> {
    // Mock is always available
    return true
  }

  async requestPermissions(_permissions: HealthPermission[]): Promise<HealthPermissionStatus> {
    // Simulate permission grant
    this.permissionsGranted = true

    return {
      steps: true,
      heartRate: true,
      hrv: true,
      sleep: true,
    }
  }

  async checkPermissions(): Promise<HealthPermissionStatus> {
    return {
      steps: this.permissionsGranted,
      heartRate: this.permissionsGranted,
      hrv: this.permissionsGranted,
      sleep: this.permissionsGranted,
    }
  }

  async getSteps(startDate: Date, endDate: Date): Promise<StepsData[]> {
    const steps: StepsData[] = []
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))

    for (let i = 0; i < daysDiff; i++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + i)

      // Generate hourly step data
      const hoursToGenerate = i === daysDiff - 1 ? new Date().getHours() : 24

      for (let hour = 6; hour < Math.min(hoursToGenerate, 22); hour++) {
        // More steps during morning and evening
        const hourMultiplier = (hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 19) ? 1.5 : 1

        steps.push({
          date: dateAtHour(daysDiff - 1 - i, hour),
          value: Math.round(randomWithVariation(
            (MOCK_CONFIG.baseStepsPerDay / 16) * hourMultiplier,
            MOCK_CONFIG.stepsVariation
          )),
        })
      }
    }

    return steps
  }

  async getHeartRate(startDate: Date, endDate: Date): Promise<HeartRateData[]> {
    const readings: HeartRateData[] = []
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))

    for (let i = 0; i < daysDiff; i++) {
      // Generate 4-6 readings per day
      const readingsPerDay = 4 + Math.floor(Math.random() * 3)

      for (let j = 0; j < readingsPerDay; j++) {
        const hour = 6 + Math.floor((16 / readingsPerDay) * j) + Math.floor(Math.random() * 2)

        // Heart rate varies by activity level
        const isActiveHour = (hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 19)
        const baseHR = isActiveHour
          ? MOCK_CONFIG.baseHeartRate * 1.3
          : MOCK_CONFIG.baseHeartRate

        readings.push({
          date: dateAtHour(daysDiff - 1 - i, hour),
          value: randomWithVariation(baseHR, MOCK_CONFIG.heartRateVariation),
        })
      }
    }

    return readings
  }

  async getHRV(startDate: Date, endDate: Date): Promise<HRVData[]> {
    const readings: HRVData[] = []
    const now = new Date()
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))

    for (let i = 0; i < daysDiff; i++) {
      const readingDate = new Date(startDate)
      readingDate.setDate(readingDate.getDate() + i)

      // Generate 1-2 HRV readings per day (usually morning)
      const isToday = readingDate >= startOfToday

      // Apply recovery reduction for today if simulating recovery mode
      let baseHRV = MOCK_CONFIG.baseHRV
      if (isToday && MOCK_CONFIG.simulateRecoveryMode) {
        baseHRV = MOCK_CONFIG.baseHRV * (1 - MOCK_CONFIG.recoveryHRVReduction)
      }

      // Morning reading (most important for HRV)
      readings.push({
        date: dateAtHour(daysDiff - 1 - i, 7),
        value: randomWithVariation(baseHRV, MOCK_CONFIG.hrvVariation * 0.5),
      })

      // Sometimes an evening reading
      if (Math.random() > 0.5) {
        readings.push({
          date: dateAtHour(daysDiff - 1 - i, 22),
          value: randomWithVariation(baseHRV * 0.9, MOCK_CONFIG.hrvVariation),
        })
      }
    }

    return readings
  }

  async getSleep(startDate: Date, endDate: Date): Promise<SleepData[]> {
    const sleepSessions: SleepData[] = []
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))

    for (let i = 1; i < daysDiff; i++) {
      const sleepStart = new Date(startDate)
      sleepStart.setDate(sleepStart.getDate() + i - 1)
      sleepStart.setHours(22 + Math.floor(Math.random() * 2), Math.floor(Math.random() * 60), 0)

      const sleepDurationHours = randomWithVariation(
        MOCK_CONFIG.baseSleepHours,
        MOCK_CONFIG.sleepVariation
      ) / 10 * 10 // Round to nearest 0.1

      const sleepEnd = new Date(sleepStart.getTime() + sleepDurationHours * 60 * 60 * 1000)

      sleepSessions.push({
        startDate: sleepStart,
        endDate: sleepEnd,
        durationMinutes: Math.round(sleepDurationHours * 60),
        stages: generateSleepStages(sleepStart, sleepEnd),
      })
    }

    return sleepSessions
  }
}

/**
 * Generate realistic sleep stages
 */
function generateSleepStages(start: Date, end: Date) {
  const stages: Array<{
    stage: 'awake' | 'light' | 'deep' | 'rem' | 'unknown'
    startDate: Date
    endDate: Date
  }> = []

  const totalMinutes = (end.getTime() - start.getTime()) / 60000
  let currentTime = start.getTime()

  // Sleep cycles are typically 90 minutes
  const cycleCount = Math.floor(totalMinutes / 90)

  for (let cycle = 0; cycle < cycleCount; cycle++) {
    // Light sleep (30-40% of cycle)
    const lightDuration = 90 * 0.35 * 60000
    stages.push({
      stage: 'light',
      startDate: new Date(currentTime),
      endDate: new Date(currentTime + lightDuration),
    })
    currentTime += lightDuration

    // Deep sleep (more in first half of night)
    const deepRatio = cycle < cycleCount / 2 ? 0.25 : 0.1
    const deepDuration = 90 * deepRatio * 60000
    stages.push({
      stage: 'deep',
      startDate: new Date(currentTime),
      endDate: new Date(currentTime + deepDuration),
    })
    currentTime += deepDuration

    // REM sleep (more in second half of night)
    const remRatio = cycle >= cycleCount / 2 ? 0.3 : 0.15
    const remDuration = 90 * remRatio * 60000
    stages.push({
      stage: 'rem',
      startDate: new Date(currentTime),
      endDate: new Date(currentTime + remDuration),
    })
    currentTime += remDuration

    // Brief awake periods between cycles
    if (cycle < cycleCount - 1 && Math.random() > 0.7) {
      const awakeDuration = 5 * 60000
      stages.push({
        stage: 'awake',
        startDate: new Date(currentTime),
        endDate: new Date(currentTime + awakeDuration),
      })
      currentTime += awakeDuration
    }
  }

  return stages
}

export const healthService = new MockHealthService()

/**
 * Configuration functions to adjust mock behavior
 */
export function setMockRecoveryMode(enabled: boolean, reduction = 0.25) {
  MOCK_CONFIG.simulateRecoveryMode = enabled
  MOCK_CONFIG.recoveryHRVReduction = reduction
}

export function setMockBaseValues(config: Partial<typeof MOCK_CONFIG>) {
  Object.assign(MOCK_CONFIG, config)
}
