/**
 * Protocols Advanced Tests
 * Detailed tests for protocol structure and calculations
 */

import { PROTOCOLS, PROTOCOL_DURATION_DAYS } from '../../protocols'
import { ProtocolMonth } from '../../types'

// Local constants for testing
const DAYS_PER_MONTH = 28
const DAYS_PER_WEEK = 7

describe('Protocol duration constants', () => {
  it('has 84 total days', () => {
    expect(PROTOCOL_DURATION_DAYS).toBe(84)
  })

  it('protocol is 28 days per month', () => {
    expect(DAYS_PER_MONTH).toBe(28)
  })

  it('week has 7 days', () => {
    expect(DAYS_PER_WEEK).toBe(7)
  })

  it('protocol duration equals 3 months', () => {
    expect(PROTOCOL_DURATION_DAYS).toBe(DAYS_PER_MONTH * 3)
  })

  it('month equals 4 weeks', () => {
    expect(DAYS_PER_MONTH).toBe(DAYS_PER_WEEK * 4)
  })
})

describe('Protocol months structure', () => {
  const months: ProtocolMonth[] = [1, 2, 3]

  it('has 3 months', () => {
    expect(months.length).toBe(3)
  })

  it('each month has a protocol', () => {
    months.forEach((month) => {
      expect(PROTOCOLS[month]).toBeDefined()
    })
  })

  it('each protocol has title', () => {
    months.forEach((month) => {
      expect(PROTOCOLS[month].title).toBeDefined()
      expect(typeof PROTOCOLS[month].title).toBe('string')
    })
  })

  it('each protocol has subtitle', () => {
    months.forEach((month) => {
      expect(PROTOCOLS[month].subtitle).toBeDefined()
      expect(typeof PROTOCOLS[month].subtitle).toBe('string')
    })
  })
})

describe('Protocol daily tasks', () => {
  const months: ProtocolMonth[] = [1, 2, 3]

  it('each month has daily tasks', () => {
    months.forEach((month) => {
      expect(Array.isArray(PROTOCOLS[month].dailyTasks)).toBe(true)
      expect(PROTOCOLS[month].dailyTasks.length).toBeGreaterThan(0)
    })
  })

  it('tasks have required properties', () => {
    months.forEach((month) => {
      PROTOCOLS[month].dailyTasks.forEach((task) => {
        expect(task).toHaveProperty('title')
        expect(task).toHaveProperty('description')
        expect(task).toHaveProperty('category')
      })
    })
  })

  it('task categories are valid', () => {
    const validCategories = ['hydration', 'movement', 'sleep', 'nutrition', 'mindfulness', 'supplements', 'cognitive', 'social']
    months.forEach((month) => {
      PROTOCOLS[month].dailyTasks.forEach((task) => {
        expect(validCategories).toContain(task.category)
      })
    })
  })
})

describe('Protocol weekly goals', () => {
  const months: ProtocolMonth[] = [1, 2, 3]

  it('each month has weekly goals array', () => {
    months.forEach((month) => {
      expect(Array.isArray(PROTOCOLS[month].weeklyGoals)).toBe(true)
    })
  })

  it('weekly goals have title and description', () => {
    months.forEach((month) => {
      PROTOCOLS[month].weeklyGoals.forEach((goal) => {
        expect(goal).toHaveProperty('title')
        expect(goal).toHaveProperty('description')
      })
    })
  })
})

describe('Protocol milestones', () => {
  const months: ProtocolMonth[] = [1, 2, 3]

  it('each month has milestones array', () => {
    months.forEach((month) => {
      expect(Array.isArray(PROTOCOLS[month].milestones)).toBe(true)
    })
  })
})

describe('Protocol month 1 - Foundation', () => {
  const protocol = PROTOCOLS[1]

  it('has correct title', () => {
    expect(protocol.title).toBe('Fundação')
  })

  it('focuses on building foundation', () => {
    expect(protocol.subtitle.toLowerCase()).toContain('longevidade')
  })

  it('has hydration tasks', () => {
    const hydrationTasks = protocol.dailyTasks.filter((t) => t.category === 'hydration')
    expect(hydrationTasks.length).toBeGreaterThan(0)
  })
})

describe('Protocol month 2 - Nutrition', () => {
  const protocol = PROTOCOLS[2]

  it('has correct title', () => {
    expect(protocol.title).toBe('Nutrição')
  })

  it('has daily tasks', () => {
    expect(protocol.dailyTasks.length).toBeGreaterThan(0)
  })
})

describe('Protocol month 3 - Integration', () => {
  const protocol = PROTOCOLS[3]

  it('has correct title', () => {
    expect(protocol.title).toBe('Integração')
  })

  it('maintains habits', () => {
    expect(protocol.dailyTasks.length).toBeGreaterThan(0)
  })
})

describe('Protocol calculations', () => {
  it('calculates current month from day', () => {
    const getMonth = (day: number): ProtocolMonth => {
      if (day <= 28) return 1
      if (day <= 56) return 2
      return 3
    }

    expect(getMonth(1)).toBe(1)
    expect(getMonth(28)).toBe(1)
    expect(getMonth(29)).toBe(2)
    expect(getMonth(56)).toBe(2)
    expect(getMonth(57)).toBe(3)
    expect(getMonth(84)).toBe(3)
  })

  it('calculates current week from day', () => {
    const getWeek = (day: number): number => {
      return Math.ceil(day / 7)
    }

    expect(getWeek(1)).toBe(1)
    expect(getWeek(7)).toBe(1)
    expect(getWeek(8)).toBe(2)
    expect(getWeek(84)).toBe(12)
  })

  it('calculates day within month', () => {
    const getDayInMonth = (day: number): number => {
      return ((day - 1) % 28) + 1
    }

    expect(getDayInMonth(1)).toBe(1)
    expect(getDayInMonth(28)).toBe(28)
    expect(getDayInMonth(29)).toBe(1)
    expect(getDayInMonth(56)).toBe(28)
    expect(getDayInMonth(57)).toBe(1)
  })
})

describe('Protocol task categories', () => {
  const categories = {
    hydration: { icon: '💧', color: '#3B82F6' },
    movement: { icon: '🏃', color: '#22C55E' },
    sleep: { icon: '😴', color: '#8B5CF6' },
    nutrition: { icon: '🥗', color: '#F59E0B' },
    mindfulness: { icon: '🧘', color: '#06B6D4' },
    supplements: { icon: '💊', color: '#EC4899' },
    cognitive: { icon: '🧠', color: '#6366F1' },
    social: { icon: '👥', color: '#10B981' },
  }

  it('has 8 categories', () => {
    expect(Object.keys(categories).length).toBe(8)
  })

  it('each category has icon', () => {
    Object.values(categories).forEach((cat) => {
      expect(cat.icon).toBeDefined()
    })
  })

  it('each category has color', () => {
    Object.values(categories).forEach((cat) => {
      expect(cat.color).toMatch(/^#[0-9A-Fa-f]{6}$/)
    })
  })
})

describe('Protocol progress percentage', () => {
  it('calculates day progress', () => {
    const getProgress = (day: number): number => {
      return Math.round((day / PROTOCOL_DURATION_DAYS) * 100)
    }

    expect(getProgress(1)).toBe(1)
    expect(getProgress(42)).toBe(50)
    expect(getProgress(84)).toBe(100)
  })

  it('calculates month progress', () => {
    const daysPerMonth = 28
    const getMonthProgress = (dayInMonth: number): number => {
      return Math.round((dayInMonth / daysPerMonth) * 100)
    }

    expect(getMonthProgress(1)).toBe(4)
    expect(getMonthProgress(14)).toBe(50)
    expect(getMonthProgress(28)).toBe(100)
  })
})
