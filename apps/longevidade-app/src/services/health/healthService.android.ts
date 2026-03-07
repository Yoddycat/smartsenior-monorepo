/**
 * Android Health Connect Service Implementation
 * Uses react-native-health-connect
 */

import {
  initialize,
  requestPermission,
  readRecords,
  getSdkStatus,
  SdkAvailabilityStatus,
  type Permission,
  type RecordType,
} from 'react-native-health-connect'
import type {
  HealthPermission,
  HealthPermissionStatus,
  HealthServiceInterface,
  StepsData,
  HeartRateData,
  HRVData,
  SleepData,
} from '../../types/health'

// Map our permission types to Health Connect record types
const PERMISSION_MAP: Record<HealthPermission, RecordType> = {
  steps: 'Steps',
  heartRate: 'HeartRate',
  hrv: 'HeartRateVariabilityRmssd',
  sleep: 'SleepSession',
}

class AndroidHealthService implements HealthServiceInterface {
  private initialized = false

  async isAvailable(): Promise<boolean> {
    try {
      const status = await getSdkStatus()
      return status === SdkAvailabilityStatus.SDK_AVAILABLE
    } catch (error) {
      console.error('[HealthService Android] Error checking availability:', error)
      return false
    }
  }

  private async ensureInitialized(): Promise<void> {
    if (!this.initialized) {
      const isAvailable = await this.isAvailable()
      if (!isAvailable) {
        throw new Error('Health Connect is not available on this device')
      }
      await initialize()
      this.initialized = true
    }
  }

  async requestPermissions(permissions: HealthPermission[]): Promise<HealthPermissionStatus> {
    await this.ensureInitialized()

    const result: HealthPermissionStatus = {
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    }

    try {
      // Request read permissions for each type
      const permissionRequests: Permission[] = permissions.map((perm) => ({
        accessType: 'read' as const,
        recordType: PERMISSION_MAP[perm],
      }))

      const granted = await requestPermission(permissionRequests)

      // Check which permissions were granted
      for (const perm of permissions) {
        const recordType = PERMISSION_MAP[perm]
        result[perm] = granted.some(
          (g) => g.recordType === recordType && g.accessType === 'read'
        )
      }
    } catch (error) {
      console.error('[HealthService Android] Error requesting permissions:', error)
    }

    return result
  }

  async checkPermissions(): Promise<HealthPermissionStatus> {
    // Health Connect doesn't have a direct check API,
    // so we attempt to request with minimal UI
    return this.requestPermissions(['steps', 'heartRate', 'hrv', 'sleep'])
  }

  async getSteps(startDate: Date, endDate: Date): Promise<StepsData[]> {
    await this.ensureInitialized()

    try {
      const result = await readRecords('Steps', {
        timeRangeFilter: {
          operator: 'between',
          startTime: startDate.toISOString(),
          endTime: endDate.toISOString(),
        },
      })

      return result.records.map((record) => ({
        date: new Date(record.startTime),
        value: record.count,
      }))
    } catch (error) {
      console.error('[HealthService Android] Error reading steps:', error)
      return []
    }
  }

  async getHeartRate(startDate: Date, endDate: Date): Promise<HeartRateData[]> {
    await this.ensureInitialized()

    try {
      const result = await readRecords('HeartRate', {
        timeRangeFilter: {
          operator: 'between',
          startTime: startDate.toISOString(),
          endTime: endDate.toISOString(),
        },
      })

      return result.records.flatMap((record) =>
        record.samples.map((sample) => ({
          date: new Date(sample.time),
          value: sample.beatsPerMinute,
        }))
      )
    } catch (error) {
      console.error('[HealthService Android] Error reading heart rate:', error)
      return []
    }
  }

  async getHRV(startDate: Date, endDate: Date): Promise<HRVData[]> {
    await this.ensureInitialized()

    try {
      const result = await readRecords('HeartRateVariabilityRmssd', {
        timeRangeFilter: {
          operator: 'between',
          startTime: startDate.toISOString(),
          endTime: endDate.toISOString(),
        },
      })

      return result.records.map((record) => ({
        date: new Date(record.time),
        value: record.heartRateVariabilityMillis,
      }))
    } catch (error) {
      console.error('[HealthService Android] Error reading HRV:', error)
      return []
    }
  }

  async getSleep(startDate: Date, endDate: Date): Promise<SleepData[]> {
    await this.ensureInitialized()

    try {
      const result = await readRecords('SleepSession', {
        timeRangeFilter: {
          operator: 'between',
          startTime: startDate.toISOString(),
          endTime: endDate.toISOString(),
        },
      })

      return result.records.map((record) => {
        const start = new Date(record.startTime)
        const end = new Date(record.endTime)
        const durationMinutes = Math.round((end.getTime() - start.getTime()) / 60000)

        return {
          startDate: start,
          endDate: end,
          durationMinutes,
          stages: record.stages?.map((stage) => ({
            stage: mapSleepStage(stage.stage),
            startDate: new Date(stage.startTime),
            endDate: new Date(stage.endTime),
          })),
        }
      })
    } catch (error) {
      console.error('[HealthService Android] Error reading sleep:', error)
      return []
    }
  }
}

// Health Connect sleep stage mapping
function mapSleepStage(stage: number): 'awake' | 'light' | 'deep' | 'rem' | 'unknown' {
  switch (stage) {
    case 1: return 'awake'
    case 2: return 'light'
    case 3: return 'deep'
    case 4: return 'rem'
    default: return 'unknown'
  }
}

export const healthService = new AndroidHealthService()
