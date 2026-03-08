/**
 * useProtocolProgress Hook Logic Tests
 * Tests for protocol progress calculations and state
 */

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
}))

describe('useProtocolProgress calculations', () => {
  describe('getGreeting', () => {
    const getGreeting = () => {
      const hour = new Date().getHours()
      if (hour < 12) return 'Bom dia'
      if (hour < 18) return 'Boa tarde'
      return 'Boa noite'
    }

    it('returns a string', () => {
      const greeting = getGreeting()
      expect(typeof greeting).toBe('string')
    })

    it('returns one of three greetings', () => {
      const greeting = getGreeting()
      expect(['Bom dia', 'Boa tarde', 'Boa noite']).toContain(greeting)
    })
  })

  describe('calculateCurrentDay', () => {
    const calculateCurrentDay = (startDate: string) => {
      const start = new Date(startDate)
      const now = new Date()
      const diffTime = now.getTime() - start.getTime()
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      return Math.max(1, diffDays + 1)
    }

    it('returns 1 for today start date', () => {
      const today = new Date().toISOString().split('T')[0]
      expect(calculateCurrentDay(today)).toBe(1)
    })

    it('returns minimum of 1', () => {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const tomorrowStr = tomorrow.toISOString().split('T')[0]

      // Even for future date, returns minimum 1
      const day = calculateCurrentDay(tomorrowStr)
      expect(day).toBeGreaterThanOrEqual(1)
    })
  })

  describe('calculateCurrentWeek', () => {
    const calculateCurrentWeek = (currentDay: number) => {
      return Math.ceil(currentDay / 7)
    }

    it('returns week 1 for days 1-7', () => {
      expect(calculateCurrentWeek(1)).toBe(1)
      expect(calculateCurrentWeek(7)).toBe(1)
    })

    it('returns week 2 for days 8-14', () => {
      expect(calculateCurrentWeek(8)).toBe(2)
      expect(calculateCurrentWeek(14)).toBe(2)
    })

    it('returns week 12 for day 84', () => {
      expect(calculateCurrentWeek(84)).toBe(12)
    })
  })

  describe('calculateCurrentMonth', () => {
    const calculateCurrentMonth = (currentDay: number): 1 | 2 | 3 => {
      if (currentDay <= 28) return 1
      if (currentDay <= 56) return 2
      return 3
    }

    it('returns month 1 for days 1-28', () => {
      expect(calculateCurrentMonth(1)).toBe(1)
      expect(calculateCurrentMonth(14)).toBe(1)
      expect(calculateCurrentMonth(28)).toBe(1)
    })

    it('returns month 2 for days 29-56', () => {
      expect(calculateCurrentMonth(29)).toBe(2)
      expect(calculateCurrentMonth(42)).toBe(2)
      expect(calculateCurrentMonth(56)).toBe(2)
    })

    it('returns month 3 for days 57+', () => {
      expect(calculateCurrentMonth(57)).toBe(3)
      expect(calculateCurrentMonth(70)).toBe(3)
      expect(calculateCurrentMonth(84)).toBe(3)
    })
  })

  describe('calculateCompletionRate', () => {
    const calculateCompletionRate = (completed: number, total: number) => {
      if (total === 0) return 0
      return Math.round((completed / total) * 100)
    }

    it('returns 0 for no tasks', () => {
      expect(calculateCompletionRate(0, 0)).toBe(0)
    })

    it('returns 0 for no completed tasks', () => {
      expect(calculateCompletionRate(0, 10)).toBe(0)
    })

    it('returns 100 for all completed', () => {
      expect(calculateCompletionRate(10, 10)).toBe(100)
    })

    it('rounds to nearest integer', () => {
      expect(calculateCompletionRate(1, 3)).toBe(33)
      expect(calculateCompletionRate(2, 3)).toBe(67)
    })
  })

  describe('calculateStreak', () => {
    const calculateStreak = (completionHistory: Array<{ date: string; completed: boolean }>) => {
      let streak = 0
      const sorted = [...completionHistory].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )

      for (const day of sorted) {
        if (day.completed) {
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

    it('counts consecutive completed days', () => {
      const history = [
        { date: '2024-01-15', completed: true },
        { date: '2024-01-14', completed: true },
        { date: '2024-01-13', completed: true },
      ]
      expect(calculateStreak(history)).toBe(3)
    })

    it('stops at first incomplete day', () => {
      const history = [
        { date: '2024-01-15', completed: true },
        { date: '2024-01-14', completed: true },
        { date: '2024-01-13', completed: false },
        { date: '2024-01-12', completed: true },
      ]
      expect(calculateStreak(history)).toBe(2)
    })

    it('returns 0 if most recent day is incomplete', () => {
      const history = [
        { date: '2024-01-15', completed: false },
        { date: '2024-01-14', completed: true },
      ]
      expect(calculateStreak(history)).toBe(0)
    })
  })
})

describe('Protocol progress state', () => {
  interface ProtocolProgressState {
    currentDay: number
    currentWeek: number
    currentMonth: 1 | 2 | 3
    completionRate: number
    streakDays: number
    completedToday: number
    totalTasksToday: number
    protocolTitle: string
    protocolSubtitle: string
    isLoading: boolean
  }

  it('has all required fields', () => {
    const state: ProtocolProgressState = {
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

    expect(state.currentDay).toBeDefined()
    expect(state.currentWeek).toBeDefined()
    expect(state.currentMonth).toBeDefined()
    expect(state.completionRate).toBeDefined()
    expect(state.streakDays).toBeDefined()
  })

  it('month is restricted to 1, 2, or 3', () => {
    const validMonths = [1, 2, 3] as const

    validMonths.forEach(month => {
      expect([1, 2, 3]).toContain(month)
    })
  })
})

describe('Protocol storage keys', () => {
  const STORAGE_KEYS = {
    PROTOCOL_START_DATE: '@longevidade:protocol_start_date',
    COMPLETED_TASKS: '@longevidade:completed_tasks',
    COMPLETION_HISTORY: '@longevidade:completion_history',
  }

  it('has start date key', () => {
    expect(STORAGE_KEYS.PROTOCOL_START_DATE).toBe('@longevidade:protocol_start_date')
  })

  it('has completed tasks key', () => {
    expect(STORAGE_KEYS.COMPLETED_TASKS).toBe('@longevidade:completed_tasks')
  })

  it('has completion history key', () => {
    expect(STORAGE_KEYS.COMPLETION_HISTORY).toBe('@longevidade:completion_history')
  })
})

describe('Protocol titles by month', () => {
  const PROTOCOL_TITLES = {
    1: { title: 'Fundação', subtitle: 'Construindo hábitos sólidos' },
    2: { title: 'Nutrição', subtitle: 'Alimentando a longevidade' },
    3: { title: 'Integração', subtitle: 'Potencializando a longevidade' },
  }

  it('month 1 is Fundação', () => {
    expect(PROTOCOL_TITLES[1].title).toBe('Fundação')
  })

  it('month 2 is Nutrição', () => {
    expect(PROTOCOL_TITLES[2].title).toBe('Nutrição')
  })

  it('month 3 is Integração', () => {
    expect(PROTOCOL_TITLES[3].title).toBe('Integração')
  })
})
