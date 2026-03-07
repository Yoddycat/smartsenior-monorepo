/**
 * iOS HealthKit Service Implementation
 */

import AppleHealthKit, {
  HealthKitPermissions,
  HealthInputOptions,
  HealthValue,
} from 'react-native-health'
import type {
  HealthPermission,
  HealthPermissionStatus,
  HealthServiceInterface,
  StepsData,
  HeartRateData,
  HRVData,
  SleepData,
  SleepStage,
} from '../../types/health'

// HealthKit permission identifiers
const HEALTHKIT_PERMISSIONS: HealthKitPermissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.HeartRate,
      AppleHealthKit.Constants.Permissions.HeartRateVariability,
      AppleHealthKit.Constants.Permissions.SleepAnalysis,
    ],
    write: [],
  },
}

class IOSHealthService implements HealthServiceInterface {
  private initialized = false

  async isAvailable(): Promise<boolean> {
    return new Promise((resolve) => {
      AppleHealthKit.isAvailable((error, available) => {
        if (error) {
          console.error('[HealthService iOS] Error checking availability:', error)
          resolve(false)
          return
        }
        resolve(available)
      })
    })
  }

  private async ensureInitialized(): Promise<void> {
    if (this.initialized) return

    return new Promise((resolve, reject) => {
      AppleHealthKit.initHealthKit(HEALTHKIT_PERMISSIONS, (error) => {
        if (error) {
          console.error('[HealthService iOS] Error initializing:', error)
          reject(error)
          return
        }
        this.initialized = true
        resolve()
      })
    })
  }

  async requestPermissions(permissions: HealthPermission[]): Promise<HealthPermissionStatus> {
    const result: HealthPermissionStatus = {
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    }

    try {
      await this.ensureInitialized()

      // After initialization, permissions are requested
      // We check each permission type
      const checks = await Promise.all([
        permissions.includes('steps') ? this.checkStepsPermission() : false,
        permissions.includes('heartRate') ? this.checkHeartRatePermission() : false,
        permissions.includes('hrv') ? this.checkHRVPermission() : false,
        permissions.includes('sleep') ? this.checkSleepPermission() : false,
      ])

      result.steps = checks[0]
      result.heartRate = checks[1]
      result.hrv = checks[2]
      result.sleep = checks[3]
    } catch (error) {
      console.error('[HealthService iOS] Error requesting permissions:', error)
    }

    return result
  }

  async checkPermissions(): Promise<HealthPermissionStatus> {
    return this.requestPermissions(['steps', 'heartRate', 'hrv', 'sleep'])
  }

  private async checkStepsPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        date: new Date().toISOString(),
      }
      AppleHealthKit.getStepCount(options, (error) => {
        resolve(!error)
      })
    })
  }

  private async checkHeartRatePermission(): Promise<boolean> {
    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        startDate: new Date(Date.now() - 86400000).toISOString(),
        endDate: new Date().toISOString(),
      }
      AppleHealthKit.getHeartRateSamples(options, (error) => {
        resolve(!error)
      })
    })
  }

  private async checkHRVPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        startDate: new Date(Date.now() - 86400000).toISOString(),
        endDate: new Date().toISOString(),
      }
      AppleHealthKit.getHeartRateVariabilitySamples(options, (error) => {
        resolve(!error)
      })
    })
  }

  private async checkSleepPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        startDate: new Date(Date.now() - 86400000).toISOString(),
        endDate: new Date().toISOString(),
      }
      AppleHealthKit.getSleepSamples(options, (error) => {
        resolve(!error)
      })
    })
  }

  async getSteps(startDate: Date, endDate: Date): Promise<StepsData[]> {
    await this.ensureInitialized()

    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        includeManuallyAdded: true,
      }

      AppleHealthKit.getDailyStepCountSamples(options, (error, results) => {
        if (error || !results) {
          console.error('[HealthService iOS] Error reading steps:', error)
          resolve([])
          return
        }

        const stepsData: StepsData[] = results.map((sample: { startDate: string; value: number }) => ({
          date: new Date(sample.startDate),
          value: sample.value,
        }))

        resolve(stepsData)
      })
    })
  }

  async getHeartRate(startDate: Date, endDate: Date): Promise<HeartRateData[]> {
    await this.ensureInitialized()

    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        ascending: true,
      }

      AppleHealthKit.getHeartRateSamples(options, (error, results) => {
        if (error || !results) {
          console.error('[HealthService iOS] Error reading heart rate:', error)
          resolve([])
          return
        }

        const hrData: HeartRateData[] = results.map((sample: HealthValue) => ({
          date: new Date(sample.startDate),
          value: sample.value,
        }))

        resolve(hrData)
      })
    })
  }

  async getHRV(startDate: Date, endDate: Date): Promise<HRVData[]> {
    await this.ensureInitialized()

    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        ascending: true,
      }

      AppleHealthKit.getHeartRateVariabilitySamples(options, (error, results) => {
        if (error || !results) {
          console.error('[HealthService iOS] Error reading HRV:', error)
          resolve([])
          return
        }

        const hrvData: HRVData[] = results.map((sample: HealthValue) => ({
          date: new Date(sample.startDate),
          value: sample.value * 1000, // Convert to ms
        }))

        resolve(hrvData)
      })
    })
  }

  async getSleep(startDate: Date, endDate: Date): Promise<SleepData[]> {
    await this.ensureInitialized()

    return new Promise((resolve) => {
      const options: HealthInputOptions = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      }

      AppleHealthKit.getSleepSamples(options, (error, results) => {
        if (error || !results) {
          console.error('[HealthService iOS] Error reading sleep:', error)
          resolve([])
          return
        }

        // Group sleep samples into sessions
        // Cast results to our SleepSample type
        const sleepSamples = results as unknown as SleepSample[]
        const sleepSessions = groupSleepSamples(sleepSamples)
        resolve(sleepSessions)
      })
    })
  }
}

// Sleep sample type from HealthKit
interface SleepSample {
  startDate: string
  endDate: string
  value: string
}

// Group individual sleep samples into sessions
function groupSleepSamples(samples: SleepSample[]): SleepData[] {
  if (samples.length === 0) return []

  // Sort by start date
  const sorted = [...samples].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  )

  const sessions: SleepData[] = []
  let currentSession: {
    startDate: Date
    endDate: Date
    stages: SleepStage[]
  } | null = null

  for (const sample of sorted) {
    const sampleStart = new Date(sample.startDate)
    const sampleEnd = new Date(sample.endDate)
    const stage = mapHealthKitSleepValue(sample.value)

    // Start new session if gap > 2 hours or no current session
    if (
      !currentSession ||
      sampleStart.getTime() - currentSession.endDate.getTime() > 2 * 60 * 60 * 1000
    ) {
      if (currentSession) {
        sessions.push(finalizeSleepSession(currentSession))
      }
      currentSession = {
        startDate: sampleStart,
        endDate: sampleEnd,
        stages: [],
      }
    }

    currentSession.endDate = sampleEnd
    currentSession.stages.push({
      stage,
      startDate: sampleStart,
      endDate: sampleEnd,
    })
  }

  if (currentSession) {
    sessions.push(finalizeSleepSession(currentSession))
  }

  return sessions
}

function finalizeSleepSession(session: {
  startDate: Date
  endDate: Date
  stages: SleepStage[]
}): SleepData {
  return {
    startDate: session.startDate,
    endDate: session.endDate,
    durationMinutes: Math.round(
      (session.endDate.getTime() - session.startDate.getTime()) / 60000
    ),
    stages: session.stages,
  }
}

function mapHealthKitSleepValue(value: string): 'awake' | 'light' | 'deep' | 'rem' | 'unknown' {
  switch (value) {
    case 'AWAKE':
      return 'awake'
    case 'CORE':
    case 'ASLEEP':
      return 'light'
    case 'DEEP':
      return 'deep'
    case 'REM':
      return 'rem'
    default:
      return 'unknown'
  }
}

export const healthService = new IOSHealthService()
