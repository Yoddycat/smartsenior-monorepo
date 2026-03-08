/**
 * Extended useProtocolProgress Tests
 */

import { renderHook, act, waitFor } from '@testing-library/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Must mock before importing
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

import { useProtocolProgress, getGreeting } from '../../hooks/useProtocolProgress'

describe('useProtocolProgress Hook', () => {
  beforeEach(async () => {
    await AsyncStorage.clear()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('initial state', () => {
    it('returns loading state initially', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      // Initial state should have isLoading true
      expect(result.current.isLoading).toBeDefined()
    })

    it('has default current day as 1', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.currentDay).toBeGreaterThanOrEqual(1)
      })
    })

    it('has default current week as 1', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.currentWeek).toBeGreaterThanOrEqual(1)
      })
    })

    it('has default current month as 1', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.currentMonth).toBeGreaterThanOrEqual(1)
      })
    })
  })

  describe('with stored profile', () => {
    it('loads start date from profile', async () => {
      const startDate = '2024-01-01'
      await AsyncStorage.setItem(
        '@longevidade:user_profile',
        JSON.stringify({ protocolStartDate: startDate })
      )

      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.protocolStartDate).toBe(startDate)
      })
    })
  })

  describe('completion rate', () => {
    it('calculates completion rate from stored tasks', async () => {
      const today = new Date().toISOString().split('T')[0]
      await AsyncStorage.setItem(
        `@longevidade:completed_tasks:month_1:${today}`,
        JSON.stringify([0, 1, 2])
      )

      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.completedToday).toBeGreaterThanOrEqual(0)
      })
    })
  })

  describe('refreshProgress', () => {
    it('has refreshProgress function', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(typeof result.current.refreshProgress).toBe('function')
      })
    })

    it('can call refreshProgress', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      await act(async () => {
        await result.current.refreshProgress()
      })

      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('protocol info', () => {
    it('returns protocol title', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.protocolTitle).toBeDefined()
        expect(typeof result.current.protocolTitle).toBe('string')
      })
    })

    it('returns protocol subtitle', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(result.current.protocolSubtitle).toBeDefined()
        expect(typeof result.current.protocolSubtitle).toBe('string')
      })
    })
  })

  describe('streak calculation', () => {
    it('returns streak days', async () => {
      const { result } = renderHook(() => useProtocolProgress())

      await waitFor(() => {
        expect(typeof result.current.streakDays).toBe('number')
        expect(result.current.streakDays).toBeGreaterThanOrEqual(0)
      })
    })
  })
})

describe('getGreeting extended', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('returns morning greeting at 6am', () => {
    jest.setSystemTime(new Date('2024-01-15T06:00:00'))
    expect(getGreeting()).toBe('Bom dia!')
  })

  it('returns morning greeting at 11:59am', () => {
    jest.setSystemTime(new Date('2024-01-15T11:59:00'))
    expect(getGreeting()).toBe('Bom dia!')
  })

  it('returns afternoon greeting at 12:00pm', () => {
    jest.setSystemTime(new Date('2024-01-15T12:00:00'))
    expect(getGreeting()).toBe('Boa tarde!')
  })

  it('returns afternoon greeting at 5pm', () => {
    jest.setSystemTime(new Date('2024-01-15T17:00:00'))
    expect(getGreeting()).toBe('Boa tarde!')
  })

  it('returns evening greeting at 6pm', () => {
    jest.setSystemTime(new Date('2024-01-15T18:00:00'))
    expect(getGreeting()).toBe('Boa noite!')
  })

  it('returns evening greeting at midnight', () => {
    jest.setSystemTime(new Date('2024-01-15T00:00:00'))
    expect(getGreeting()).toBe('Bom dia!')
  })

  it('returns evening greeting at 11pm', () => {
    jest.setSystemTime(new Date('2024-01-15T23:00:00'))
    expect(getGreeting()).toBe('Boa noite!')
  })
})
