/**
 * Web/Fallback Health Service Implementation
 * Returns mock data or unavailable status for web platform
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

class WebHealthService implements HealthServiceInterface {
  async isAvailable(): Promise<boolean> {
    // Health APIs not available on web
    return false
  }

  async requestPermissions(_permissions: HealthPermission[]): Promise<HealthPermissionStatus> {
    console.warn('[HealthService Web] Health APIs not available on web platform')
    return {
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    }
  }

  async checkPermissions(): Promise<HealthPermissionStatus> {
    return {
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    }
  }

  async getSteps(_startDate: Date, _endDate: Date): Promise<StepsData[]> {
    console.warn('[HealthService Web] Cannot read steps on web platform')
    return []
  }

  async getHeartRate(_startDate: Date, _endDate: Date): Promise<HeartRateData[]> {
    console.warn('[HealthService Web] Cannot read heart rate on web platform')
    return []
  }

  async getHRV(_startDate: Date, _endDate: Date): Promise<HRVData[]> {
    console.warn('[HealthService Web] Cannot read HRV on web platform')
    return []
  }

  async getSleep(_startDate: Date, _endDate: Date): Promise<SleepData[]> {
    console.warn('[HealthService Web] Cannot read sleep on web platform')
    return []
  }
}

export const healthService = new WebHealthService()
