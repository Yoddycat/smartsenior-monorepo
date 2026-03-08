/**
 * useRecovery Hook Error Path Tests
 * Tests specifically targeting error handling branches (lines 49-50, 78)
 */

import { renderHook, act, waitFor } from '@testing-library/react-native'
import { useRecovery } from '../../hooks/useRecovery'

// Mock the health service module
jest.mock('../../services/health', () => ({
  analyzeRecoveryStatus: jest.fn(),
}))

// Import mocked function
import { analyzeRecoveryStatus } from '../../services/health'

const mockAnalyzeRecoveryStatus = analyzeRecoveryStatus as jest.Mock

describe('useRecovery Error Handling', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchRecoveryStatus error path (lines 49-50)', () => {
    it('handles error on initial load', async () => {
      mockAnalyzeRecoveryStatus.mockRejectedValue(new Error('Network error'))

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.analysis).toBeNull()
      expect(result.current.error).toBe('Falha ao analisar status de recuperação')
    })

    it('handles non-Error thrown on initial load', async () => {
      mockAnalyzeRecoveryStatus.mockRejectedValue('string error')

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.error).toBe('Falha ao analisar status de recuperação')
    })

    it('handles null thrown on initial load', async () => {
      mockAnalyzeRecoveryStatus.mockRejectedValue(null)

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.error).toBe('Falha ao analisar status de recuperação')
    })

    it('handles undefined thrown on initial load', async () => {
      mockAnalyzeRecoveryStatus.mockRejectedValue(undefined)

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.error).toBe('Falha ao analisar status de recuperação')
    })
  })

  describe('refresh error path (line 78)', () => {
    it('handles error on refresh', async () => {
      // First call succeeds
      mockAnalyzeRecoveryStatus.mockResolvedValueOnce({
        status: 'optimal',
        hrvToday: 50,
        hrvAverage: 45,
        percentageChange: 11.1,
        recommendation: 'Good recovery',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.analysis?.status).toBe('optimal')

      // Second call (refresh) fails
      mockAnalyzeRecoveryStatus.mockRejectedValueOnce(new Error('Refresh failed'))

      await act(async () => {
        await result.current.refresh()
      })

      expect(result.current.error).toBe('Falha ao analisar status de recuperação')
      expect(result.current.isLoading).toBe(false)
    })

    it('handles non-Error thrown on refresh', async () => {
      mockAnalyzeRecoveryStatus.mockResolvedValueOnce({
        status: 'optimal',
        hrvToday: 50,
        hrvAverage: 45,
        percentageChange: 11.1,
        recommendation: 'Good recovery',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      mockAnalyzeRecoveryStatus.mockRejectedValueOnce({ code: 500 })

      await act(async () => {
        await result.current.refresh()
      })

      expect(result.current.error).toBe('Falha ao analisar status de recuperação')
    })

    it('clears error on successful refresh after error', async () => {
      // First call fails
      mockAnalyzeRecoveryStatus.mockRejectedValueOnce(new Error('Initial error'))

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.error).toBe('Falha ao analisar status de recuperação')

      // Refresh succeeds
      mockAnalyzeRecoveryStatus.mockResolvedValueOnce({
        status: 'optimal',
        hrvToday: 55,
        hrvAverage: 50,
        percentageChange: 10,
        recommendation: 'Great recovery',
      })

      await act(async () => {
        await result.current.refresh()
      })

      expect(result.current.error).toBeNull()
      expect(result.current.analysis?.status).toBe('optimal')
    })
  })

  describe('Success paths', () => {
    it('successfully loads recovery data on mount', async () => {
      mockAnalyzeRecoveryStatus.mockResolvedValue({
        status: 'optimal',
        hrvToday: 60,
        hrvAverage: 55,
        percentageChange: 9.1,
        recommendation: 'Excellent recovery',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.analysis).toBeTruthy()
      expect(result.current.analysis?.status).toBe('optimal')
      expect(result.current.error).toBeNull()
    })

    it('successfully refreshes recovery data', async () => {
      mockAnalyzeRecoveryStatus.mockResolvedValue({
        status: 'recovery',
        hrvToday: 30,
        hrvAverage: 50,
        percentageChange: -40,
        recommendation: 'Take it easy today',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      mockAnalyzeRecoveryStatus.mockResolvedValueOnce({
        status: 'moderate',
        hrvToday: 40,
        hrvAverage: 50,
        percentageChange: -20,
        recommendation: 'Light activity recommended',
      })

      await act(async () => {
        await result.current.refresh()
      })

      expect(result.current.analysis?.status).toBe('moderate')
    })
  })

  describe('Computed values', () => {
    it('isRecoveryMode is true when status is recovery', async () => {
      mockAnalyzeRecoveryStatus.mockResolvedValue({
        status: 'recovery',
        hrvToday: 25,
        hrvAverage: 50,
        percentageChange: -50,
        recommendation: 'Rest day',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isRecoveryMode).toBe(true)
      expect(result.current.needsAttention).toBe(true)
    })

    it('isRecoveryMode is false when status is optimal', async () => {
      mockAnalyzeRecoveryStatus.mockResolvedValue({
        status: 'optimal',
        hrvToday: 60,
        hrvAverage: 50,
        percentageChange: 20,
        recommendation: 'Go for it',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isRecoveryMode).toBe(false)
      expect(result.current.needsAttention).toBe(false)
    })

    it('needsAttention is true when status is moderate', async () => {
      mockAnalyzeRecoveryStatus.mockResolvedValue({
        status: 'moderate',
        hrvToday: 42,
        hrvAverage: 50,
        percentageChange: -16,
        recommendation: 'Take it easy',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isRecoveryMode).toBe(false)
      expect(result.current.needsAttention).toBe(true)
    })

    it('computed values are false when analysis is null', async () => {
      mockAnalyzeRecoveryStatus.mockRejectedValue(new Error('Failed'))

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.analysis).toBeNull()
      expect(result.current.isRecoveryMode).toBe(false)
      expect(result.current.needsAttention).toBe(false)
    })
  })

  describe('Loading states', () => {
    it('shows loading true initially', async () => {
      mockAnalyzeRecoveryStatus.mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({
          status: 'optimal',
          hrvToday: 50,
          hrvAverage: 50,
          percentageChange: 0,
          recommendation: 'Normal',
        }), 100))
      )

      const { result } = renderHook(() => useRecovery())

      expect(result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })
    })

    it('shows loading true during refresh', async () => {
      mockAnalyzeRecoveryStatus.mockResolvedValue({
        status: 'optimal',
        hrvToday: 50,
        hrvAverage: 50,
        percentageChange: 0,
        recommendation: 'Normal',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      // Slow response for refresh
      mockAnalyzeRecoveryStatus.mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({
          status: 'optimal',
          hrvToday: 55,
          hrvAverage: 50,
          percentageChange: 10,
          recommendation: 'Good',
        }), 100))
      )

      act(() => {
        result.current.refresh()
      })

      expect(result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })
    })
  })

  describe('All recovery statuses', () => {
    it.each([
      ['optimal', false, false],
      ['moderate', false, true],
      ['recovery', true, true],
    ])('status %s: isRecoveryMode=%s, needsAttention=%s', async (status, expectedRecovery, expectedAttention) => {
      mockAnalyzeRecoveryStatus.mockResolvedValue({
        status,
        hrvToday: 50,
        hrvAverage: 50,
        percentageChange: 0,
        recommendation: 'Test',
      })

      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.isRecoveryMode).toBe(expectedRecovery)
      expect(result.current.needsAttention).toBe(expectedAttention)
    })
  })
})
