/**
 * useHealth Hook Error Path Tests
 * Tests specifically targeting error handling branches (lines 84-85, 117-125, 142-144)
 */

import { renderHook, act, waitFor } from '@testing-library/react-native'
import { useHealth } from '../../hooks/useHealth'

// Store original implementations
const originalHealthService = jest.requireActual('../../services/health')

// Mock the health service module
jest.mock('../../services/health', () => ({
  healthService: {
    isAvailable: jest.fn(),
  },
  requestAllHealthPermissions: jest.fn(),
  getHealthSummary: jest.fn(),
}))

// Import mocked functions
import { healthService, requestAllHealthPermissions, getHealthSummary } from '../../services/health'

const mockIsAvailable = healthService.isAvailable as jest.Mock
const mockRequestAllHealthPermissions = requestAllHealthPermissions as jest.Mock
const mockGetHealthSummary = getHealthSummary as jest.Mock

describe('useHealth Error Handling', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Default: service is available
    mockIsAvailable.mockResolvedValue(true)
    mockRequestAllHealthPermissions.mockResolvedValue({
      steps: true,
      heartRate: true,
      hrv: true,
      sleep: true,
    })
    mockGetHealthSummary.mockResolvedValue({
      steps: { today: 5000, weeklyAverage: 6000 },
      heartRate: { current: 72, restingAverage: 65 },
      hrv: { current: 45, weeklyAverage: 50 },
      sleep: { lastNight: 7.5, weeklyAverage: 7 },
    })
  })

  describe('checkAvailability error path (lines 84-85)', () => {
    it('handles error when isAvailable throws', async () => {
      mockIsAvailable.mockRejectedValue(new Error('Health service unavailable'))

      const { result } = renderHook(() => useHealth())

      // Wait for the effect to complete
      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isAvailable).toBe(false)
      expect(result.current.error).toBe('Failed to check health service availability')
    })

    it('handles non-Error thrown in isAvailable', async () => {
      mockIsAvailable.mockRejectedValue('string error')

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isAvailable).toBe(false)
      expect(result.current.error).toBe('Failed to check health service availability')
    })

    it('handles null thrown in isAvailable', async () => {
      mockIsAvailable.mockRejectedValue(null)

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isAvailable).toBe(false)
      expect(result.current.error).toBe('Failed to check health service availability')
    })
  })

  describe('requestPermissions error path (lines 117-125)', () => {
    it('handles Error instance in requestPermissions', async () => {
      mockRequestAllHealthPermissions.mockRejectedValue(new Error('Permission denied by user'))

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      let permissions
      await act(async () => {
        permissions = await result.current.requestPermissions()
      })

      expect(result.current.error).toBe('Permission denied by user')
      expect(permissions).toEqual({
        steps: false,
        heartRate: false,
        hrv: false,
        sleep: false,
      })
    })

    it('handles non-Error in requestPermissions (fallback message)', async () => {
      mockRequestAllHealthPermissions.mockRejectedValue('string error')

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      let permissions
      await act(async () => {
        permissions = await result.current.requestPermissions()
      })

      expect(result.current.error).toBe('Failed to request permissions')
      expect(permissions).toEqual({
        steps: false,
        heartRate: false,
        hrv: false,
        sleep: false,
      })
    })

    it('handles null in requestPermissions', async () => {
      mockRequestAllHealthPermissions.mockRejectedValue(null)

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.requestPermissions()
      })

      expect(result.current.error).toBe('Failed to request permissions')
    })

    it('handles undefined in requestPermissions', async () => {
      mockRequestAllHealthPermissions.mockRejectedValue(undefined)

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.requestPermissions()
      })

      expect(result.current.error).toBe('Failed to request permissions')
    })

    it('handles object without message in requestPermissions', async () => {
      mockRequestAllHealthPermissions.mockRejectedValue({ code: 'PERMISSION_DENIED' })

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.requestPermissions()
      })

      expect(result.current.error).toBe('Failed to request permissions')
    })
  })

  describe('refreshSummary error path (lines 142-144)', () => {
    it('handles Error instance in refreshSummary', async () => {
      mockGetHealthSummary.mockRejectedValue(new Error('Network error'))

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refreshSummary()
      })

      expect(result.current.error).toBe('Network error')
      expect(result.current.isLoadingSummary).toBe(false)
    })

    it('handles non-Error in refreshSummary (fallback message)', async () => {
      mockGetHealthSummary.mockRejectedValue('API error')

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refreshSummary()
      })

      expect(result.current.error).toBe('Failed to fetch health data')
    })

    it('handles null in refreshSummary', async () => {
      mockGetHealthSummary.mockRejectedValue(null)

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refreshSummary()
      })

      expect(result.current.error).toBe('Failed to fetch health data')
    })

    it('handles undefined in refreshSummary', async () => {
      mockGetHealthSummary.mockRejectedValue(undefined)

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refreshSummary()
      })

      expect(result.current.error).toBe('Failed to fetch health data')
    })

    it('handles object without message in refreshSummary', async () => {
      mockGetHealthSummary.mockRejectedValue({ status: 500 })

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refreshSummary()
      })

      expect(result.current.error).toBe('Failed to fetch health data')
    })
  })

  describe('Success paths for context', () => {
    it('successfully checks availability', async () => {
      mockIsAvailable.mockResolvedValue(true)

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isAvailable).toBe(true)
      expect(result.current.error).toBeNull()
    })

    it('successfully requests permissions', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      let permissions
      await act(async () => {
        permissions = await result.current.requestPermissions()
      })

      expect(permissions).toEqual({
        steps: true,
        heartRate: true,
        hrv: true,
        sleep: true,
      })
      expect(result.current.hasAllPermissions).toBe(true)
    })

    it('successfully refreshes summary', async () => {
      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refreshSummary()
      })

      expect(result.current.summary).toBeTruthy()
      expect(result.current.summary?.steps.today).toBe(5000)
    })
  })

  describe('State transitions', () => {
    it('clears error on new requestPermissions attempt', async () => {
      // First call fails
      mockRequestAllHealthPermissions.mockRejectedValueOnce(new Error('First error'))
      // Second call succeeds
      mockRequestAllHealthPermissions.mockResolvedValueOnce({
        steps: true,
        heartRate: true,
        hrv: true,
        sleep: true,
      })

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      // First attempt - should fail
      await act(async () => {
        await result.current.requestPermissions()
      })
      expect(result.current.error).toBe('First error')

      // Second attempt - should clear error and succeed
      await act(async () => {
        await result.current.requestPermissions()
      })
      expect(result.current.error).toBeNull()
      expect(result.current.hasAllPermissions).toBe(true)
    })

    it('clears error on new refreshSummary attempt', async () => {
      // First call fails
      mockGetHealthSummary.mockRejectedValueOnce(new Error('Network down'))
      // Second call succeeds
      mockGetHealthSummary.mockResolvedValueOnce({
        steps: { today: 3000, weeklyAverage: 4000 },
        heartRate: { current: 70, restingAverage: 62 },
        hrv: { current: 40, weeklyAverage: 45 },
        sleep: { lastNight: 6.5, weeklyAverage: 7 },
      })

      const { result } = renderHook(() => useHealth())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      // First attempt - should fail
      await act(async () => {
        await result.current.refreshSummary()
      })
      expect(result.current.error).toBe('Network down')

      // Second attempt - should clear error and succeed
      await act(async () => {
        await result.current.refreshSummary()
      })
      expect(result.current.error).toBeNull()
      expect(result.current.summary).toBeTruthy()
    })
  })
})
