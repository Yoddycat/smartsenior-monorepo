/**
 * Protocols Data Validation Tests
 */

import {
  PROTOCOLS,
  PROTOCOL_DURATION_WEEKS,
  PROTOCOL_DURATION_DAYS,
} from '../protocols'

describe('Protocols', () => {
  describe('constants', () => {
    it('has correct duration in weeks', () => {
      expect(PROTOCOL_DURATION_WEEKS).toBe(12)
    })

    it('has correct duration in days', () => {
      expect(PROTOCOL_DURATION_DAYS).toBe(84)
    })

    it('weeks and days are consistent', () => {
      expect(PROTOCOL_DURATION_DAYS).toBe(PROTOCOL_DURATION_WEEKS * 7)
    })
  })

  describe('PROTOCOLS structure', () => {
    it('has all three months defined', () => {
      expect(PROTOCOLS[1]).toBeDefined()
      expect(PROTOCOLS[2]).toBeDefined()
      expect(PROTOCOLS[3]).toBeDefined()
    })

    it('has only three months', () => {
      const monthKeys = Object.keys(PROTOCOLS)
      expect(monthKeys.length).toBe(3)
    })
  })

  describe('Month 1 - Fundação', () => {
    const month1 = PROTOCOLS[1]

    it('has required fields', () => {
      expect(month1.title).toBeDefined()
      expect(month1.subtitle).toBeDefined()
      expect(month1.description).toBeDefined()
      expect(month1.dailyTasks).toBeDefined()
      expect(month1.weeklyGoals).toBeDefined()
      expect(month1.milestones).toBeDefined()
    })

    it('has correct title', () => {
      expect(month1.title).toBe('Fundação')
    })

    it('has correct subtitle', () => {
      expect(month1.subtitle).toContain('Alicerces')
    })

    it('has daily tasks as array', () => {
      expect(Array.isArray(month1.dailyTasks)).toBe(true)
    })

    it('has weekly goals as array', () => {
      expect(Array.isArray(month1.weeklyGoals)).toBe(true)
    })

    it('has milestones as array', () => {
      expect(Array.isArray(month1.milestones)).toBe(true)
    })

    it('daily tasks have required fields', () => {
      month1.dailyTasks.forEach((task) => {
        expect(task.title).toBeDefined()
        expect(task.category).toBeDefined()
        expect(task.description).toBeDefined()
        expect(task.frequency).toBeDefined()
      })
    })

    it('has at least one daily task', () => {
      expect(month1.dailyTasks.length).toBeGreaterThan(0)
    })
  })

  describe('Month 2 - Nutrição', () => {
    const month2 = PROTOCOLS[2]

    it('has required fields', () => {
      expect(month2.title).toBeDefined()
      expect(month2.subtitle).toBeDefined()
      expect(month2.description).toBeDefined()
      expect(month2.dailyTasks).toBeDefined()
      expect(month2.weeklyGoals).toBeDefined()
      expect(month2.milestones).toBeDefined()
    })

    it('has correct title', () => {
      expect(month2.title).toBe('Nutrição')
    })

    it('has at least one daily task', () => {
      expect(month2.dailyTasks.length).toBeGreaterThan(0)
    })
  })

  describe('Month 3 - Integração', () => {
    const month3 = PROTOCOLS[3]

    it('has required fields', () => {
      expect(month3.title).toBeDefined()
      expect(month3.subtitle).toBeDefined()
      expect(month3.description).toBeDefined()
      expect(month3.dailyTasks).toBeDefined()
      expect(month3.weeklyGoals).toBeDefined()
      expect(month3.milestones).toBeDefined()
    })

    it('has correct title', () => {
      expect(month3.title).toBe('Integração')
    })

    it('has at least one daily task', () => {
      expect(month3.dailyTasks.length).toBeGreaterThan(0)
    })
  })

  describe('task categories', () => {
    const validCategories = [
      'hydration',
      'nutrition',
      'movement',
      'sleep',
      'supplements',
      'mindfulness',
      'social',
      'cognitive',
    ]

    it('month 1 tasks have valid categories', () => {
      PROTOCOLS[1].dailyTasks.forEach((task) => {
        expect(validCategories).toContain(task.category)
      })
    })

    it('month 2 tasks have valid categories', () => {
      PROTOCOLS[2].dailyTasks.forEach((task) => {
        expect(validCategories).toContain(task.category)
      })
    })

    it('month 3 tasks have valid categories', () => {
      PROTOCOLS[3].dailyTasks.forEach((task) => {
        expect(validCategories).toContain(task.category)
      })
    })
  })

  describe('weekly goals structure', () => {
    it('weekly goals have required fields', () => {
      Object.values(PROTOCOLS).forEach((month) => {
        month.weeklyGoals.forEach((goal) => {
          expect(goal.title).toBeDefined()
          expect(goal.description).toBeDefined()
          expect(goal.week).toBeDefined()
          expect(goal.category).toBeDefined()
          expect(goal.target).toBeDefined()
          expect(goal.unit).toBeDefined()
        })
      })
    })

    it('weekly goals have valid week numbers', () => {
      Object.values(PROTOCOLS).forEach((month) => {
        month.weeklyGoals.forEach((goal) => {
          expect(goal.week).toBeGreaterThanOrEqual(1)
          expect(goal.week).toBeLessThanOrEqual(4)
        })
      })
    })
  })

  describe('milestones structure', () => {
    it('milestones have required fields', () => {
      Object.values(PROTOCOLS).forEach((month) => {
        month.milestones.forEach((milestone) => {
          expect(milestone.title).toBeDefined()
          expect(milestone.description).toBeDefined()
        })
      })
    })
  })

  describe('data consistency', () => {
    it('all months have unique titles', () => {
      const titles = Object.values(PROTOCOLS).map((m) => m.title)
      const uniqueTitles = new Set(titles)
      expect(uniqueTitles.size).toBe(titles.length)
    })

    it('all months have non-empty description', () => {
      Object.values(PROTOCOLS).forEach((month) => {
        expect(month.description.trim().length).toBeGreaterThan(0)
      })
    })

    it('all months have month property', () => {
      expect(PROTOCOLS[1].month).toBe(1)
      expect(PROTOCOLS[2].month).toBe(2)
      expect(PROTOCOLS[3].month).toBe(3)
    })
  })

  describe('task frequency values', () => {
    it('all tasks have valid frequency', () => {
      Object.values(PROTOCOLS).forEach((month) => {
        month.dailyTasks.forEach((task) => {
          expect(['daily', 'weekly', 'monthly']).toContain(task.frequency)
        })
      })
    })
  })
})
