/**
 * Health Data Types for Longevidade App
 * Supports both iOS (HealthKit) and Android (Health Connect)
 */

export type HealthPermission = 'steps' | 'heartRate' | 'hrv' | 'sleep'

export interface HealthPermissionStatus {
  steps: boolean
  heartRate: boolean
  hrv: boolean
  sleep: boolean
}

export interface StepsData {
  date: Date
  value: number
}

export interface HeartRateData {
  date: Date
  value: number // bpm
}

export interface HRVData {
  date: Date
  value: number // ms (SDNN or RMSSD)
}

export interface SleepData {
  startDate: Date
  endDate: Date
  durationMinutes: number
  stages?: SleepStage[]
}

export interface SleepStage {
  stage: 'awake' | 'light' | 'deep' | 'rem' | 'unknown'
  startDate: Date
  endDate: Date
}

export interface HealthDataSummary {
  steps: {
    today: number
    weekAverage: number
    trend: 'up' | 'down' | 'stable'
  }
  heartRate: {
    latest: number
    restingAverage: number
    trend: 'up' | 'down' | 'stable'
  }
  hrv: {
    latest: number
    weekAverage: number
    trend: 'up' | 'down' | 'stable'
  }
  sleep: {
    lastNightHours: number
    weekAverage: number
    trend: 'up' | 'down' | 'stable'
  }
}

export interface HealthServiceInterface {
  isAvailable(): Promise<boolean>
  requestPermissions(permissions: HealthPermission[]): Promise<HealthPermissionStatus>
  checkPermissions(): Promise<HealthPermissionStatus>
  getSteps(startDate: Date, endDate: Date): Promise<StepsData[]>
  getHeartRate(startDate: Date, endDate: Date): Promise<HeartRateData[]>
  getHRV(startDate: Date, endDate: Date): Promise<HRVData[]>
  getSleep(startDate: Date, endDate: Date): Promise<SleepData[]>
}
