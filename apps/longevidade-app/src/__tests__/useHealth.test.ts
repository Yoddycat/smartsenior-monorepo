/**
 * useHealth Hook Tests
 */

import { renderHook, act } from '@testing-library/react-native'
import { useHealth } from '../hooks/useHealth'

jest.mock('../services/health', () => ({
  healthService: {
    isAvailable: jest.fn(() => Promise.resolve(true)),
  },
  requestAllHealthPermissions: jest.fn(() => Promise.resolve({
    steps: true,
    heartRate: true,
    hrv: false,
    sleep: false,
  })),
  getHealthSummary: jest.fn(() => Promise.resolve({
    steps: { today: 5000, goal: 10000 },
    heartRate: { current: 72, min: 60, max: 120 },
    hrv: { today: 45, average: 50 },
    sleep: { lastNight: 7.5, quality: 'good' },
  })),
}))

describe('useHealth', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('initial state', () => {
    it('returns loading state initially', () => {
      const { result } = renderHook(() => useHealth())

      expect(result.current.isLoading).toBe(true)
    })

    it('returns initial permissions as false', () => {
      const { result } = renderHook(() => useHealth())

      expect(result.current.permissions.steps).toBe(false)
      expect(result.current.permissions.heartRate).toBe(false)
      expect(result.current.permissions.hrv).toBe(false)
      expect(result.current.permissions.sleep).toBe(false)
    })

    it('returns null summary initially', () => {
      const { result } = renderHook(() => useHealth())

      expect(result.current.summary).toBeNull()
    })

    it('returns no error initially', () => {
      const { result } = renderHook(() => useHealth())

      expect(result.current.error).toBeNull()
    })
  })

  describe('availability check', () => {
    it('checks availability on mount', async () => {
      const { result } = renderHook(() => useHealth())

      // Wait for availability check
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 100))
      })

      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('requestPermissions', () => {
    it('provides requestPermissions function', () => {
      const { result } = renderHook(() => useHealth())

      expect(typeof result.current.requestPermissions).toBe('function')
    })

    it('requestPermissions returns permissions object', async () => {
      const { result } = renderHook(() => useHealth())

      let permissions
      await act(async () => {
        permissions = await result.current.requestPermissions()
      })

      expect(permissions).toHaveProperty('steps')
      expect(permissions).toHaveProperty('heartRate')
      expect(permissions).toHaveProperty('hrv')
      expect(permissions).toHaveProperty('sleep')
    })
  })

  describe('refreshSummary', () => {
    it('provides refreshSummary function', () => {
      const { result } = renderHook(() => useHealth())

      expect(typeof result.current.refreshSummary).toBe('function')
    })

    it('refreshSummary updates summary state', async () => {
      const { result } = renderHook(() => useHealth())

      await act(async () => {
        await result.current.refreshSummary()
      })

      expect(result.current.summary).not.toBeNull()
    })
  })

  describe('computed values', () => {
    it('hasAllPermissions returns boolean', () => {
      const { result } = renderHook(() => useHealth())

      expect(typeof result.current.hasAllPermissions).toBe('boolean')
    })

    it('hasAnyPermission returns boolean', () => {
      const { result } = renderHook(() => useHealth())

      expect(typeof result.current.hasAnyPermission).toBe('boolean')
    })

    it('hasAllPermissions is false when not all granted', async () => {
      const { result } = renderHook(() => useHealth())

      await act(async () => {
        await result.current.requestPermissions()
      })

      // Mock returns steps and heartRate true, hrv and sleep false
      expect(result.current.hasAllPermissions).toBe(false)
    })

    it('hasAnyPermission is true when some granted', async () => {
      const { result } = renderHook(() => useHealth())

      await act(async () => {
        await result.current.requestPermissions()
      })

      expect(result.current.hasAnyPermission).toBe(true)
    })
  })

  describe('return type', () => {
    it('returns all expected properties', () => {
      const { result } = renderHook(() => useHealth())

      // State
      expect(result.current).toHaveProperty('isAvailable')
      expect(result.current).toHaveProperty('isLoading')
      expect(result.current).toHaveProperty('isLoadingSummary')
      expect(result.current).toHaveProperty('permissions')
      expect(result.current).toHaveProperty('summary')
      expect(result.current).toHaveProperty('error')

      // Actions
      expect(result.current).toHaveProperty('requestPermissions')
      expect(result.current).toHaveProperty('refreshSummary')

      // Computed
      expect(result.current).toHaveProperty('hasAllPermissions')
      expect(result.current).toHaveProperty('hasAnyPermission')
    })
  })
})
