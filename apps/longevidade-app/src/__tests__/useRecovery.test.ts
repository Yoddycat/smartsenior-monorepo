/**
 * useRecovery Hook Tests
 */

import { renderHook, act, waitFor } from '@testing-library/react-native'
import { useRecovery } from '../hooks/useRecovery'

// Mock recovery analysis
jest.mock('../services/health', () => ({
  analyzeRecoveryStatus: jest.fn(() => Promise.resolve({
    status: 'optimal',
    todayHRV: 55,
    weekAverageHRV: 50,
    percentageChange: 10,
    suggestion: {
      title: 'Great recovery!',
      description: 'You can train at full intensity.',
      icon: '💪',
    },
    analyzedAt: new Date(),
  })),
}))

describe('useRecovery', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('initial state', () => {
    it('returns loading state initially', () => {
      const { result } = renderHook(() => useRecovery())

      expect(result.current.isLoading).toBe(true)
    })

    it('returns null analysis initially', () => {
      const { result } = renderHook(() => useRecovery())

      expect(result.current.analysis).toBeNull()
    })

    it('returns no error initially', () => {
      const { result } = renderHook(() => useRecovery())

      expect(result.current.error).toBeNull()
    })
  })

  describe('data fetching', () => {
    it('fetches analysis on mount', async () => {
      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.analysis).not.toBeNull()
    })

    it('sets analysis data correctly', async () => {
      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.analysis).not.toBeNull()
      })

      expect(result.current.analysis?.status).toBe('optimal')
      expect(result.current.analysis?.todayHRV).toBe(55)
    })
  })

  describe('refresh', () => {
    it('provides refresh function', () => {
      const { result } = renderHook(() => useRecovery())

      expect(typeof result.current.refresh).toBe('function')
    })

    it('refresh updates analysis', async () => {
      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refresh()
      })

      expect(result.current.analysis).not.toBeNull()
    })
  })

  describe('computed values', () => {
    it('isRecoveryMode is boolean', () => {
      const { result } = renderHook(() => useRecovery())

      expect(typeof result.current.isRecoveryMode).toBe('boolean')
    })

    it('needsAttention is boolean', () => {
      const { result } = renderHook(() => useRecovery())

      expect(typeof result.current.needsAttention).toBe('boolean')
    })

    it('isRecoveryMode is false for optimal status', async () => {
      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.analysis).not.toBeNull()
      })

      expect(result.current.isRecoveryMode).toBe(false)
    })

    it('needsAttention is false for optimal status', async () => {
      const { result } = renderHook(() => useRecovery())

      await waitFor(() => {
        expect(result.current.analysis).not.toBeNull()
      })

      expect(result.current.needsAttention).toBe(false)
    })
  })

  describe('return type', () => {
    it('returns all expected properties', () => {
      const { result } = renderHook(() => useRecovery())

      expect(result.current).toHaveProperty('analysis')
      expect(result.current).toHaveProperty('isLoading')
      expect(result.current).toHaveProperty('error')
      expect(result.current).toHaveProperty('refresh')
      expect(result.current).toHaveProperty('isRecoveryMode')
      expect(result.current).toHaveProperty('needsAttention')
    })
  })
})
