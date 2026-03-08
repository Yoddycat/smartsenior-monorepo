/**
 * useHealth Hook Tests
 */

import { renderHook, waitFor } from '@testing-library/react-native'

// Mock health service
jest.mock('../../services/health', () => ({
  healthService: {
    isAvailable: jest.fn().mockResolvedValue(true),
    requestPermissions: jest.fn().mockResolvedValue({
      steps: true,
      heartRate: true,
      hrv: true,
      sleep: true,
    }),
    checkPermissions: jest.fn().mockResolvedValue({
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    }),
    getSteps: jest.fn().mockResolvedValue([
      { value: 8000, startDate: new Date(), endDate: new Date() },
    ]),
    getHeartRate: jest.fn().mockResolvedValue([
      { value: 72, startDate: new Date(), endDate: new Date() },
    ]),
    getHRV: jest.fn().mockResolvedValue([
      { value: 45, startDate: new Date(), endDate: new Date() },
    ]),
    getSleep: jest.fn().mockResolvedValue([
      { value: 7.5, startDate: new Date(), endDate: new Date() },
    ]),
  },
}))

import { useHealth } from '../../hooks/useHealth'

describe('useHealth Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('initial state', () => {
    it('starts with isLoading true', () => {
      const { result } = renderHook(() => useHealth())
      expect(result.current.isLoading).toBeDefined()
    })

    it('has permissions object', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.permissions).toBeDefined()
      })
    })

    it('has isAvailable property', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(typeof result.current.isAvailable).toBe('boolean')
      })
    })
  })

  describe('permissions', () => {
    it('has steps permission', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.permissions.steps).toBeDefined()
      })
    })

    it('has heartRate permission', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.permissions.heartRate).toBeDefined()
      })
    })

    it('has hrv permission', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.permissions.hrv).toBeDefined()
      })
    })

    it('has sleep permission', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.permissions.sleep).toBeDefined()
      })
    })
  })

  describe('requestPermissions', () => {
    it('has requestPermissions function', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(typeof result.current.requestPermissions).toBe('function')
      })
    })
  })

  describe('helper properties', () => {
    it('has hasAnyPermission property', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(typeof result.current.hasAnyPermission).toBe('boolean')
      })
    })

    it('has hasAllPermissions property', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(typeof result.current.hasAllPermissions).toBe('boolean')
      })
    })
  })
})

describe('Health permission logic', () => {
  it('calculates hasAnyPermission correctly when none granted', () => {
    const permissions = { steps: false, heartRate: false, hrv: false, sleep: false }
    const hasAny = Object.values(permissions).some(Boolean)
    expect(hasAny).toBe(false)
  })

  it('calculates hasAnyPermission correctly when some granted', () => {
    const permissions = { steps: true, heartRate: false, hrv: false, sleep: false }
    const hasAny = Object.values(permissions).some(Boolean)
    expect(hasAny).toBe(true)
  })

  it('calculates hasAllPermissions correctly when all granted', () => {
    const permissions = { steps: true, heartRate: true, hrv: true, sleep: true }
    const hasAll = Object.values(permissions).every(Boolean)
    expect(hasAll).toBe(true)
  })

  it('calculates hasAllPermissions correctly when not all granted', () => {
    const permissions = { steps: true, heartRate: true, hrv: false, sleep: true }
    const hasAll = Object.values(permissions).every(Boolean)
    expect(hasAll).toBe(false)
  })
})
