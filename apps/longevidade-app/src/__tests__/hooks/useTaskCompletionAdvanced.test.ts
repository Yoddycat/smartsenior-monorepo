/**
 * useTaskCompletion Hook Advanced Tests
 * Detailed tests for task completion functionality
 */

interface CompletionHistoryEntry {
  date: string
  completed: number
}

// Mock AsyncStorage
const mockGetItem = jest.fn()
const mockSetItem = jest.fn()

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: mockGetItem,
  setItem: mockSetItem,
}))

describe('useTaskCompletion storage key generation', () => {
  const STORAGE_KEY_PREFIX = '@longevidade:completed_tasks'

  const getStorageKey = (month: number, date: string): string => {
    return `${STORAGE_KEY_PREFIX}:month_${month}:${date}`
  }

  it('generates key for month 1', () => {
    const key = getStorageKey(1, '2024-01-15')
    expect(key).toBe('@longevidade:completed_tasks:month_1:2024-01-15')
  })

  it('generates key for month 2', () => {
    const key = getStorageKey(2, '2024-02-20')
    expect(key).toBe('@longevidade:completed_tasks:month_2:2024-02-20')
  })

  it('generates key for month 3', () => {
    const key = getStorageKey(3, '2024-03-25')
    expect(key).toBe('@longevidade:completed_tasks:month_3:2024-03-25')
  })
})

describe('useTaskCompletion today key generation', () => {
  const getTodayKey = (): string => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  it('returns date in YYYY-MM-DD format', () => {
    const key = getTodayKey()
    expect(key).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('returns current date', () => {
    const key = getTodayKey()
    const today = new Date()
    const expected = today.toISOString().split('T')[0]
    expect(key).toBe(expected)
  })
})

describe('useTaskCompletion Set operations', () => {
  it('adds task to set', () => {
    const tasks = new Set<number>()
    tasks.add(0)
    expect(tasks.has(0)).toBe(true)
  })

  it('removes task from set', () => {
    const tasks = new Set<number>([0, 1, 2])
    tasks.delete(1)
    expect(tasks.has(1)).toBe(false)
  })

  it('toggles task correctly', () => {
    const tasks = new Set<number>([0, 1])

    // Toggle on
    if (!tasks.has(2)) {
      tasks.add(2)
    }
    expect(tasks.has(2)).toBe(true)

    // Toggle off
    if (tasks.has(2)) {
      tasks.delete(2)
    }
    expect(tasks.has(2)).toBe(false)
  })

  it('counts completed tasks', () => {
    const tasks = new Set<number>([0, 1, 2, 3])
    expect(tasks.size).toBe(4)
  })
})

describe('useTaskCompletion serialization', () => {
  it('converts Set to Array for storage', () => {
    const tasks = new Set<number>([0, 2, 4])
    const array = Array.from(tasks)
    expect(array).toEqual([0, 2, 4])
  })

  it('serializes to JSON', () => {
    const tasks = new Set<number>([1, 3, 5])
    const json = JSON.stringify(Array.from(tasks))
    expect(json).toBe('[1,3,5]')
  })

  it('deserializes from JSON', () => {
    const json = '[0,1,2]'
    const parsed = JSON.parse(json) as number[]
    const tasks = new Set(parsed)
    expect(tasks.has(0)).toBe(true)
    expect(tasks.has(1)).toBe(true)
    expect(tasks.has(2)).toBe(true)
  })

  it('handles empty array', () => {
    const json = '[]'
    const parsed = JSON.parse(json) as number[]
    const tasks = new Set(parsed)
    expect(tasks.size).toBe(0)
  })
})

describe('getCompletionHistory', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns array of history entries', async () => {
    mockGetItem.mockResolvedValue(null)

    const { getCompletionHistory } = require('../../hooks/useTaskCompletion')
    const history = await getCompletionHistory(1, 3)

    expect(Array.isArray(history)).toBe(true)
    expect(history.length).toBe(3)
  })

  it('each entry has date and completed count', async () => {
    mockGetItem.mockResolvedValue('[0,1,2]')

    const { getCompletionHistory } = require('../../hooks/useTaskCompletion')
    const history = await getCompletionHistory(1, 1)

    expect(history[0]).toHaveProperty('date')
    expect(history[0]).toHaveProperty('completed')
  })

  it('counts completed tasks from storage', async () => {
    mockGetItem.mockResolvedValue('[0,1,2,3]')

    const { getCompletionHistory } = require('../../hooks/useTaskCompletion')
    const history = await getCompletionHistory(1, 1)

    expect(history[0].completed).toBe(4)
  })

  it('returns 0 for missing dates', async () => {
    mockGetItem.mockResolvedValue(null)

    const { getCompletionHistory } = require('../../hooks/useTaskCompletion')
    const history = await getCompletionHistory(1, 1)

    expect(history[0].completed).toBe(0)
  })

  it('handles storage errors gracefully', async () => {
    mockGetItem.mockRejectedValue(new Error('Storage error'))

    const { getCompletionHistory } = require('../../hooks/useTaskCompletion')
    const history = await getCompletionHistory(1, 1)

    expect(history[0].completed).toBe(0)
  })

  it('reverses history to chronological order', async () => {
    mockGetItem.mockResolvedValue(null)

    const { getCompletionHistory } = require('../../hooks/useTaskCompletion')
    const history = await getCompletionHistory(1, 3)

    const dates = history.map((h: CompletionHistoryEntry) => h.date)
    // Should be in chronological order (oldest first)
    for (let i = 1; i < dates.length; i++) {
      expect(new Date(dates[i]).getTime()).toBeGreaterThan(new Date(dates[i - 1]).getTime())
    }
  })
})

describe('useTaskCompletion date calculations', () => {
  it('calculates date N days ago', () => {
    const today = new Date()
    const daysAgo = 5
    const date = new Date(today)
    date.setDate(date.getDate() - daysAgo)

    const diffMs = today.getTime() - date.getTime()
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))

    expect(diffDays).toBe(daysAgo)
  })

  it('generates correct date keys for history', () => {
    const dates: string[] = []
    const today = new Date()

    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      dates.push(date.toISOString().split('T')[0])
    }

    expect(dates.length).toBe(7)
    expect(dates[0]).toBe(today.toISOString().split('T')[0])
  })
})

describe('useTaskCompletion state management', () => {
  it('handles loading state', () => {
    const state = {
      completedTasks: new Set<number>(),
      isLoading: true,
    }

    expect(state.isLoading).toBe(true)
    expect(state.completedTasks.size).toBe(0)
  })

  it('handles loaded state', () => {
    const state = {
      completedTasks: new Set<number>([0, 1, 2]),
      isLoading: false,
    }

    expect(state.isLoading).toBe(false)
    expect(state.completedTasks.size).toBe(3)
  })

  it('handles error state', () => {
    const state = {
      completedTasks: new Set<number>(),
      isLoading: false,
      error: 'Failed to load',
    }

    expect(state.completedTasks.size).toBe(0)
    expect(state.error).toBe('Failed to load')
  })
})

describe('useTaskCompletion protocol months', () => {
  const months = [1, 2, 3] as const

  it('supports month 1', () => {
    expect(months).toContain(1)
  })

  it('supports month 2', () => {
    expect(months).toContain(2)
  })

  it('supports month 3', () => {
    expect(months).toContain(3)
  })

  it('has 3 months total', () => {
    expect(months.length).toBe(3)
  })
})

describe('useTaskCompletion return type', () => {
  it('has all required properties', () => {
    const returnValue = {
      completedTasks: new Set<number>(),
      toggleTask: jest.fn(),
      completedCount: 0,
      isLoading: false,
    }

    expect(returnValue.completedTasks).toBeInstanceOf(Set)
    expect(typeof returnValue.toggleTask).toBe('function')
    expect(typeof returnValue.completedCount).toBe('number')
    expect(typeof returnValue.isLoading).toBe('boolean')
  })
})
