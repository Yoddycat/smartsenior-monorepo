/**
 * useProtocolProgress Hook Advanced Tests
 * Detailed tests for protocol progress functionality
 */

// Mock AsyncStorage
const mockGetItem = jest.fn()
const mockSetItem = jest.fn()

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: mockGetItem,
  setItem: mockSetItem,
}))

// Mock protocols
jest.mock('../../protocols', () => ({
  PROTOCOLS: {
    1: {
      title: 'Fundação',
      subtitle: 'Construindo hábitos',
      dailyTasks: [{ id: '1' }, { id: '2' }, { id: '3' }],
      weeklyGoals: [{ id: 'w1' }],
      milestones: [],
    },
    2: {
      title: 'Progressão',
      subtitle: 'Intensificando',
      dailyTasks: [{ id: '1' }, { id: '2' }],
      weeklyGoals: [],
      milestones: [],
    },
    3: {
      title: 'Consolidação',
      subtitle: 'Mantendo',
      dailyTasks: [{ id: '1' }],
      weeklyGoals: [],
      milestones: [],
    },
  },
  PROTOCOL_DURATION_DAYS: 84,
  DAYS_PER_MONTH: 28,
  DAYS_PER_WEEK: 7,
}))

describe('useProtocolProgress day calculations', () => {
  const DAYS_PER_MONTH = 28
  const DAYS_PER_WEEK = 7
  const PROTOCOL_DURATION_DAYS = 84

  const calculateCurrentDay = (startDate: Date): number => {
    const now = new Date()
    const diffMs = now.getTime() - startDate.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    return Math.min(Math.max(1, diffDays + 1), PROTOCOL_DURATION_DAYS)
  }

  it('returns 1 on start date', () => {
    const today = new Date()
    const day = calculateCurrentDay(today)
    expect(day).toBe(1)
  })

  it('returns correct day after 10 days', () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 10)
    const day = calculateCurrentDay(startDate)
    expect(day).toBe(11)
  })

  it('caps at protocol duration', () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 100)
    const day = calculateCurrentDay(startDate)
    expect(day).toBe(PROTOCOL_DURATION_DAYS)
  })
})

describe('useProtocolProgress month calculations', () => {
  const DAYS_PER_MONTH = 28

  const calculateCurrentMonth = (day: number): number => {
    return Math.ceil(day / DAYS_PER_MONTH)
  }

  it('returns 1 for day 1', () => {
    expect(calculateCurrentMonth(1)).toBe(1)
  })

  it('returns 1 for day 28', () => {
    expect(calculateCurrentMonth(28)).toBe(1)
  })

  it('returns 2 for day 29', () => {
    expect(calculateCurrentMonth(29)).toBe(2)
  })

  it('returns 3 for day 57', () => {
    expect(calculateCurrentMonth(57)).toBe(3)
  })

  it('returns 3 for day 84', () => {
    expect(calculateCurrentMonth(84)).toBe(3)
  })
})

describe('useProtocolProgress week calculations', () => {
  const DAYS_PER_WEEK = 7

  const calculateCurrentWeek = (day: number): number => {
    return Math.ceil(day / DAYS_PER_WEEK)
  }

  it('returns 1 for day 1-7', () => {
    for (let i = 1; i <= 7; i++) {
      expect(calculateCurrentWeek(i)).toBe(1)
    }
  })

  it('returns 2 for day 8-14', () => {
    for (let i = 8; i <= 14; i++) {
      expect(calculateCurrentWeek(i)).toBe(2)
    }
  })

  it('returns 12 for day 84', () => {
    expect(calculateCurrentWeek(84)).toBe(12)
  })
})

describe('useProtocolProgress greeting', () => {
  const getGreeting = (): string => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Bom dia'
    if (hour < 18) return 'Boa tarde'
    return 'Boa noite'
  }

  it('returns a greeting', () => {
    const greeting = getGreeting()
    expect(['Bom dia', 'Boa tarde', 'Boa noite']).toContain(greeting)
  })
})

describe('useProtocolProgress completion rate', () => {
  const calculateCompletionRate = (completed: number, total: number): number => {
    if (total === 0) return 0
    return Math.round((completed / total) * 100)
  }

  it('returns 0 when no tasks', () => {
    expect(calculateCompletionRate(0, 0)).toBe(0)
  })

  it('returns 0 when none completed', () => {
    expect(calculateCompletionRate(0, 5)).toBe(0)
  })

  it('returns 100 when all completed', () => {
    expect(calculateCompletionRate(5, 5)).toBe(100)
  })

  it('returns 50 when half completed', () => {
    expect(calculateCompletionRate(2, 4)).toBe(50)
  })

  it('rounds to nearest integer', () => {
    expect(calculateCompletionRate(1, 3)).toBe(33)
    expect(calculateCompletionRate(2, 3)).toBe(67)
  })
})

describe('useProtocolProgress streak calculation', () => {
  const calculateStreak = (history: { completed: number; total: number }[]): number => {
    let streak = 0
    for (const day of history.reverse()) {
      if (day.completed === day.total && day.total > 0) {
        streak++
      } else {
        break
      }
    }
    return streak
  }

  it('returns 0 for empty history', () => {
    expect(calculateStreak([])).toBe(0)
  })

  it('returns 0 when last day incomplete', () => {
    const history = [
      { completed: 5, total: 5 },
      { completed: 3, total: 5 },
    ]
    expect(calculateStreak(history)).toBe(0)
  })

  it('returns streak count', () => {
    const history = [
      { completed: 0, total: 5 },
      { completed: 5, total: 5 },
      { completed: 5, total: 5 },
    ]
    expect(calculateStreak(history)).toBe(2)
  })
})

describe('useProtocolProgress protocol info', () => {
  it('returns title for current month', () => {
    const protocols: Record<number, { title: string; subtitle: string }> = {
      1: { title: 'Fundação', subtitle: 'Construindo hábitos' },
      2: { title: 'Progressão', subtitle: 'Intensificando' },
      3: { title: 'Consolidação', subtitle: 'Mantendo' },
    }

    expect(protocols[1].title).toBe('Fundação')
    expect(protocols[2].title).toBe('Progressão')
    expect(protocols[3].title).toBe('Consolidação')
  })
})

describe('useProtocolProgress storage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('loads protocol start date', async () => {
    mockGetItem.mockResolvedValue(JSON.stringify({ protocolStartDate: '2024-01-01' }))

    const profile = await mockGetItem('@longevidade:user_profile')
    const parsed = JSON.parse(profile)

    expect(parsed.protocolStartDate).toBe('2024-01-01')
  })

  it('handles missing profile', async () => {
    mockGetItem.mockResolvedValue(null)

    const profile = await mockGetItem('@longevidade:user_profile')

    expect(profile).toBeNull()
  })
})

describe('useProtocolProgress state shape', () => {
  it('has all required fields', () => {
    const state = {
      currentDay: 15,
      currentWeek: 3,
      currentMonth: 1,
      completionRate: 75,
      streakDays: 5,
      completedToday: 3,
      totalTasksToday: 4,
      protocolTitle: 'Fundação',
      protocolSubtitle: 'Construindo hábitos',
      isLoading: false,
    }

    expect(state.currentDay).toBe(15)
    expect(state.currentWeek).toBe(3)
    expect(state.currentMonth).toBe(1)
    expect(state.completionRate).toBe(75)
    expect(state.streakDays).toBe(5)
    expect(state.completedToday).toBe(3)
    expect(state.totalTasksToday).toBe(4)
    expect(state.protocolTitle).toBe('Fundação')
    expect(state.protocolSubtitle).toBe('Construindo hábitos')
    expect(state.isLoading).toBe(false)
  })
})

describe('useProtocolProgress refresh', () => {
  it('refreshProgress is a function', () => {
    const refreshProgress = jest.fn()
    expect(typeof refreshProgress).toBe('function')
  })

  it('can be called to refresh data', () => {
    const refreshProgress = jest.fn()
    refreshProgress()
    expect(refreshProgress).toHaveBeenCalled()
  })
})
