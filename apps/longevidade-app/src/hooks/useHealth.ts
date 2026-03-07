/**
 * useHealth Hook
 *
 * React hook for managing health data permissions and fetching health metrics.
 *
 * Usage:
 * ```tsx
 * const {
 *   isAvailable,
 *   permissions,
 *   isLoading,
 *   requestPermissions,
 *   summary,
 *   refreshSummary,
 * } = useHealth()
 *
 * // Request permissions on mount or button press
 * useEffect(() => {
 *   if (isAvailable && !permissions.steps) {
 *     requestPermissions()
 *   }
 * }, [isAvailable])
 * ```
 */

import { useState, useEffect, useCallback } from 'react'
import {
  healthService,
  requestAllHealthPermissions,
  getHealthSummary,
  type HealthPermissionStatus,
  type HealthDataSummary,
} from '../services/health'

interface UseHealthState {
  isAvailable: boolean
  isLoading: boolean
  isLoadingSummary: boolean
  permissions: HealthPermissionStatus
  summary: HealthDataSummary | null
  error: string | null
}

interface UseHealthReturn extends UseHealthState {
  requestPermissions: () => Promise<HealthPermissionStatus>
  refreshSummary: () => Promise<void>
  hasAllPermissions: boolean
  hasAnyPermission: boolean
}

const initialPermissions: HealthPermissionStatus = {
  steps: false,
  heartRate: false,
  hrv: false,
  sleep: false,
}

export function useHealth(): UseHealthReturn {
  const [state, setState] = useState<UseHealthState>({
    isAvailable: false,
    isLoading: true,
    isLoadingSummary: false,
    permissions: initialPermissions,
    summary: null,
    error: null,
  })

  // Check availability on mount
  useEffect(() => {
    let mounted = true

    async function checkAvailability() {
      try {
        const available = await healthService.isAvailable()

        if (mounted) {
          setState((prev) => ({
            ...prev,
            isAvailable: available,
            isLoading: false,
          }))
        }
      } catch {
        if (mounted) {
          setState((prev) => ({
            ...prev,
            isAvailable: false,
            isLoading: false,
            error: 'Failed to check health service availability',
          }))
        }
      }
    }

    checkAvailability()

    return () => {
      mounted = false
    }
  }, [])

  // Request permissions
  const requestPermissions = useCallback(async (): Promise<HealthPermissionStatus> => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      const permissions = await requestAllHealthPermissions()

      setState((prev) => ({
        ...prev,
        permissions,
        isLoading: false,
      }))

      return permissions
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to request permissions'

      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }))

      return initialPermissions
    }
  }, [])

  // Refresh health summary
  const refreshSummary = useCallback(async (): Promise<void> => {
    setState((prev) => ({ ...prev, isLoadingSummary: true, error: null }))

    try {
      const summary = await getHealthSummary()

      setState((prev) => ({
        ...prev,
        summary,
        isLoadingSummary: false,
      }))
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch health data'

      setState((prev) => ({
        ...prev,
        isLoadingSummary: false,
        error: errorMessage,
      }))
    }
  }, [])

  // Computed values
  const hasAllPermissions =
    state.permissions.steps &&
    state.permissions.heartRate &&
    state.permissions.hrv &&
    state.permissions.sleep

  const hasAnyPermission =
    state.permissions.steps ||
    state.permissions.heartRate ||
    state.permissions.hrv ||
    state.permissions.sleep

  return {
    ...state,
    requestPermissions,
    refreshSummary,
    hasAllPermissions,
    hasAnyPermission,
  }
}

export default useHealth
