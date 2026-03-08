/**
 * Protocol Types Tests
 * Tests for type definitions and structures
 */

describe('Protocol types', () => {
  describe('ProtocolMonth', () => {
    const validMonths = [1, 2, 3]

    it('has 3 valid months', () => {
      expect(validMonths).toHaveLength(3)
    })

    it('starts at 1', () => {
      expect(validMonths[0]).toBe(1)
    })

    it('ends at 3', () => {
      expect(validMonths[validMonths.length - 1]).toBe(3)
    })
  })

  describe('ProtocolWeek', () => {
    const validWeeks = [1, 2, 3, 4]

    it('has 4 valid weeks', () => {
      expect(validWeeks).toHaveLength(4)
    })

    it('starts at 1', () => {
      expect(validWeeks[0]).toBe(1)
    })

    it('ends at 4', () => {
      expect(validWeeks[validWeeks.length - 1]).toBe(4)
    })
  })

  describe('ProtocolDay', () => {
    const validDays = [1, 2, 3, 4, 5, 6, 7]

    it('has 7 valid days', () => {
      expect(validDays).toHaveLength(7)
    })

    it('starts at 1', () => {
      expect(validDays[0]).toBe(1)
    })

    it('ends at 7', () => {
      expect(validDays[validDays.length - 1]).toBe(7)
    })
  })

  describe('TaskCategory', () => {
    const categories = [
      'nutrition',
      'movement',
      'sleep',
      'hydration',
      'supplements',
      'mindfulness',
      'social',
      'cognitive',
    ]

    it('has 8 categories', () => {
      expect(categories).toHaveLength(8)
    })

    it('includes nutrition', () => {
      expect(categories).toContain('nutrition')
    })

    it('includes movement', () => {
      expect(categories).toContain('movement')
    })

    it('includes sleep', () => {
      expect(categories).toContain('sleep')
    })

    it('includes hydration', () => {
      expect(categories).toContain('hydration')
    })

    it('includes supplements', () => {
      expect(categories).toContain('supplements')
    })

    it('includes mindfulness', () => {
      expect(categories).toContain('mindfulness')
    })

    it('includes social', () => {
      expect(categories).toContain('social')
    })

    it('includes cognitive', () => {
      expect(categories).toContain('cognitive')
    })
  })

  describe('TaskStatus', () => {
    const statuses = ['pending', 'completed', 'skipped']

    it('has 3 statuses', () => {
      expect(statuses).toHaveLength(3)
    })

    it('includes pending', () => {
      expect(statuses).toContain('pending')
    })

    it('includes completed', () => {
      expect(statuses).toContain('completed')
    })

    it('includes skipped', () => {
      expect(statuses).toContain('skipped')
    })
  })
})

describe('ProtocolTask interface', () => {
  const mockTask = {
    id: 'task-1',
    category: 'hydration' as const,
    title: 'Beber água',
    description: 'Beba 2L de água por dia',
    duration: 5,
    frequency: 'daily' as const,
    targetTime: '08:00',
    status: 'pending' as const,
    completedAt: undefined,
  }

  it('has required id', () => {
    expect(mockTask.id).toBeDefined()
    expect(typeof mockTask.id).toBe('string')
  })

  it('has required category', () => {
    expect(mockTask.category).toBeDefined()
  })

  it('has required title', () => {
    expect(mockTask.title).toBeDefined()
  })

  it('has required description', () => {
    expect(mockTask.description).toBeDefined()
  })

  it('has optional duration', () => {
    expect(mockTask.duration).toBe(5)
  })

  it('has required frequency', () => {
    expect(['daily', 'weekly', 'monthly']).toContain(mockTask.frequency)
  })

  it('has optional targetTime', () => {
    expect(mockTask.targetTime).toBe('08:00')
  })

  it('has required status', () => {
    expect(['pending', 'completed', 'skipped']).toContain(mockTask.status)
  })

  it('has optional completedAt', () => {
    expect(mockTask.completedAt).toBeUndefined()
  })
})

describe('DailyProgress interface', () => {
  const mockProgress = {
    date: '2024-01-15',
    month: 1 as const,
    week: 3 as const,
    day: 1 as const,
    tasks: [],
    completionRate: 75,
    notes: 'Good day',
  }

  it('has date in YYYY-MM-DD format', () => {
    expect(mockProgress.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('has valid month', () => {
    expect([1, 2, 3]).toContain(mockProgress.month)
  })

  it('has valid week', () => {
    expect([1, 2, 3, 4]).toContain(mockProgress.week)
  })

  it('has valid day', () => {
    expect([1, 2, 3, 4, 5, 6, 7]).toContain(mockProgress.day)
  })

  it('has tasks array', () => {
    expect(Array.isArray(mockProgress.tasks)).toBe(true)
  })

  it('has completionRate 0-100', () => {
    expect(mockProgress.completionRate).toBeGreaterThanOrEqual(0)
    expect(mockProgress.completionRate).toBeLessThanOrEqual(100)
  })

  it('has optional notes', () => {
    expect(mockProgress.notes).toBe('Good day')
  })
})

describe('WeeklyGoal interface', () => {
  const mockGoal = {
    id: 'goal-1',
    month: 1 as const,
    week: 2 as const,
    category: 'movement' as const,
    title: 'Caminhada',
    description: 'Caminhar 10km na semana',
    target: 10,
    current: 5,
    unit: 'km',
  }

  it('has required id', () => {
    expect(mockGoal.id).toBeDefined()
  })

  it('has valid month', () => {
    expect([1, 2, 3]).toContain(mockGoal.month)
  })

  it('has valid week', () => {
    expect([1, 2, 3, 4]).toContain(mockGoal.week)
  })

  it('has category', () => {
    expect(mockGoal.category).toBe('movement')
  })

  it('has target and current', () => {
    expect(mockGoal.target).toBe(10)
    expect(mockGoal.current).toBe(5)
  })

  it('has unit', () => {
    expect(mockGoal.unit).toBe('km')
  })

  it('current <= target makes sense', () => {
    expect(mockGoal.current).toBeLessThanOrEqual(mockGoal.target)
  })
})

describe('MonthlyMilestone interface', () => {
  const mockMilestone = {
    id: 'milestone-1',
    month: 1 as const,
    title: 'Primeira semana completa',
    description: 'Complete 7 dias seguidos',
    achieved: true,
    achievedAt: new Date('2024-01-07'),
  }

  it('has required id', () => {
    expect(mockMilestone.id).toBeDefined()
  })

  it('has valid month', () => {
    expect([1, 2, 3]).toContain(mockMilestone.month)
  })

  it('has title', () => {
    expect(mockMilestone.title).toBeDefined()
  })

  it('has description', () => {
    expect(mockMilestone.description).toBeDefined()
  })

  it('has achieved boolean', () => {
    expect(typeof mockMilestone.achieved).toBe('boolean')
  })

  it('has optional achievedAt', () => {
    expect(mockMilestone.achievedAt).toBeInstanceOf(Date)
  })
})

describe('UserProfile interface', () => {
  const mockProfile = {
    id: 'user-1',
    name: 'João Silva',
    birthDate: new Date('1960-05-15'),
    startDate: new Date('2024-01-01'),
    currentMonth: 1 as const,
    currentWeek: 2 as const,
    currentDay: 3 as const,
    healthGoals: ['Perder peso', 'Dormir melhor'],
    restrictions: ['Sem glúten'],
  }

  it('has required id', () => {
    expect(mockProfile.id).toBeDefined()
  })

  it('has name', () => {
    expect(mockProfile.name).toBe('João Silva')
  })

  it('has birthDate', () => {
    expect(mockProfile.birthDate).toBeInstanceOf(Date)
  })

  it('has startDate', () => {
    expect(mockProfile.startDate).toBeInstanceOf(Date)
  })

  it('has valid current progress', () => {
    expect([1, 2, 3]).toContain(mockProfile.currentMonth)
    expect([1, 2, 3, 4]).toContain(mockProfile.currentWeek)
    expect([1, 2, 3, 4, 5, 6, 7]).toContain(mockProfile.currentDay)
  })

  it('has healthGoals array', () => {
    expect(Array.isArray(mockProfile.healthGoals)).toBe(true)
    expect(mockProfile.healthGoals.length).toBeGreaterThan(0)
  })

  it('has optional restrictions', () => {
    expect(Array.isArray(mockProfile.restrictions)).toBe(true)
  })
})

describe('ProtocolState interface', () => {
  const mockState = {
    user: {
      id: 'user-1',
      name: 'Maria',
      birthDate: new Date(),
      startDate: new Date(),
      currentMonth: 1 as const,
      currentWeek: 1 as const,
      currentDay: 1 as const,
      healthGoals: [],
    },
    dailyProgress: [],
    weeklyGoals: [],
    milestones: [],
    streakDays: 7,
    totalCompletedTasks: 42,
  }

  it('has user object', () => {
    expect(mockState.user).toBeDefined()
  })

  it('has dailyProgress array', () => {
    expect(Array.isArray(mockState.dailyProgress)).toBe(true)
  })

  it('has weeklyGoals array', () => {
    expect(Array.isArray(mockState.weeklyGoals)).toBe(true)
  })

  it('has milestones array', () => {
    expect(Array.isArray(mockState.milestones)).toBe(true)
  })

  it('has streakDays', () => {
    expect(mockState.streakDays).toBe(7)
  })

  it('has totalCompletedTasks', () => {
    expect(mockState.totalCompletedTasks).toBe(42)
  })
})
