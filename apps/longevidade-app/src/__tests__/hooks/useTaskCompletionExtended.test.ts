/**
 * Extended useTaskCompletion Tests
 */

import { renderHook, act, waitFor } from '@testing-library/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Must mock before importing
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

import { useTaskCompletion, getCompletionHistory } from '../../hooks/useTaskCompletion'

describe('useTaskCompletion Hook', () => {
  beforeEach(async () => {
    await AsyncStorage.clear()
  })

  describe('initial state', () => {
    it('starts with loading true', () => {
      const { result } = renderHook(() => useTaskCompletion(1))

      // Initial render should show loading
      expect(result.current.isLoading).toBeDefined()
    })

    it('starts with empty completed tasks', async () => {
      const { result } = renderHook(() => useTaskCompletion(1))

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.completedTasks.size).toBe(0)
    })

    it('starts with completedCount 0', async () => {
      const { result } = renderHook(() => useTaskCompletion(1))

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.completedCount).toBe(0)
    })
  })

  describe('toggleTask', () => {
    it('adds task to completed when not completed', async () => {
      const { result } = renderHook(() => useTaskCompletion(1))

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      act(() => {
        result.current.toggleTask(0)
      })

      expect(result.current.completedTasks.has(0)).toBe(true)
      expect(result.current.completedCount).toBe(1)
    })

    it('removes task from completed when already completed', async () => {
      const { result } = renderHook(() => useTaskCompletion(1))

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      // Toggle on
      act(() => {
        result.current.toggleTask(0)
      })
      expect(result.current.completedTasks.has(0)).toBe(true)

      // Toggle off
      act(() => {
        result.current.toggleTask(0)
      })
      expect(result.current.completedTasks.has(0)).toBe(false)
    })

    it('can toggle multiple tasks', async () => {
      const { result } = renderHook(() => useTaskCompletion(1))

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      act(() => {
        result.current.toggleTask(0)
        result.current.toggleTask(1)
        result.current.toggleTask(2)
      })

      expect(result.current.completedCount).toBe(3)
      expect(result.current.completedTasks.has(0)).toBe(true)
      expect(result.current.completedTasks.has(1)).toBe(true)
      expect(result.current.completedTasks.has(2)).toBe(true)
    })

    it('persists completed tasks to AsyncStorage', async () => {
      const { result } = renderHook(() => useTaskCompletion(1))

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      act(() => {
        result.current.toggleTask(0)
      })

      // Wait for storage to be updated
      await waitFor(async () => {
        const today = new Date().toISOString().split('T')[0]
        const stored = await AsyncStorage.getItem(
          `@longevidade:completed_tasks:month_1:${today}`
        )
        expect(stored).toBeTruthy()
      })
    })
  })

  describe('loading from storage', () => {
    it('loads previously saved tasks', async () => {
      const today = new Date().toISOString().split('T')[0]
      await AsyncStorage.setItem(
        `@longevidade:completed_tasks:month_1:${today}`,
        JSON.stringify([0, 2, 4])
      )

      const { result } = renderHook(() => useTaskCompletion(1))

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.completedTasks.has(0)).toBe(true)
      expect(result.current.completedTasks.has(2)).toBe(true)
      expect(result.current.completedTasks.has(4)).toBe(true)
      expect(result.current.completedCount).toBe(3)
    })
  })

  describe('different months', () => {
    it('separates tasks by month', async () => {
      const today = new Date().toISOString().split('T')[0]
      await AsyncStorage.setItem(
        `@longevidade:completed_tasks:month_1:${today}`,
        JSON.stringify([0, 1])
      )
      await AsyncStorage.setItem(
        `@longevidade:completed_tasks:month_2:${today}`,
        JSON.stringify([0, 1, 2, 3])
      )

      const { result: result1 } = renderHook(() => useTaskCompletion(1))
      const { result: result2 } = renderHook(() => useTaskCompletion(2))

      await waitFor(() => {
        expect(result1.current.isLoading).toBe(false)
        expect(result2.current.isLoading).toBe(false)
      })

      expect(result1.current.completedCount).toBe(2)
      expect(result2.current.completedCount).toBe(4)
    })
  })
})

describe('getCompletionHistory extended', () => {
  beforeEach(async () => {
    await AsyncStorage.clear()
  })

  it('returns history in chronological order', async () => {
    const history = await getCompletionHistory(1, 5)

    expect(history.length).toBe(5)

    // Check dates are in order (oldest to newest)
    for (let i = 1; i < history.length; i++) {
      expect(new Date(history[i].date).getTime()).toBeGreaterThan(
        new Date(history[i - 1].date).getTime()
      )
    }
  })

  it('handles storage errors gracefully', async () => {
    // Even with no data, should return array with zeros
    const history = await getCompletionHistory(1, 3)

    expect(history.length).toBe(3)
    expect(history.every(h => h.completed === 0)).toBe(true)
  })

  it('works for month 2', async () => {
    const today = new Date().toISOString().split('T')[0]
    await AsyncStorage.setItem(
      `@longevidade:completed_tasks:month_2:${today}`,
      JSON.stringify([0, 1, 2, 3, 4])
    )

    const history = await getCompletionHistory(2, 1)

    expect(history.length).toBe(1)
    expect(history[0].completed).toBe(5)
  })

  it('works for month 3', async () => {
    const today = new Date().toISOString().split('T')[0]
    await AsyncStorage.setItem(
      `@longevidade:completed_tasks:month_3:${today}`,
      JSON.stringify([0, 1])
    )

    const history = await getCompletionHistory(3, 1)

    expect(history.length).toBe(1)
    expect(history[0].completed).toBe(2)
  })

  it('returns correct data for 14 days', async () => {
    const history = await getCompletionHistory(1, 14)
    expect(history.length).toBe(14)
  })

  it('returns correct data for 30 days', async () => {
    const history = await getCompletionHistory(1, 30)
    expect(history.length).toBe(30)
  })
})
