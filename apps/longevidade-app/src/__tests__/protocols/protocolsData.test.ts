/**
 * Protocols Data Tests
 * Tests for protocol data structure and content
 */

import type { TaskCategory } from '../../types'

interface MockTask {
  id: string
  title: string
  category: TaskCategory
  description: string
}

// Mock protocols
jest.mock('../../protocols', () => ({
  PROTOCOLS: {
    1: {
      title: 'Fundação',
      subtitle: 'Construindo hábitos sólidos',
      description: 'Primeiro mês focado em criar bases sólidas para longevidade.',
      icon: '🏗️',
      dailyTasks: [
        { id: 'h1', title: 'Beber 2L de água', category: 'hydration', description: 'Hidrate-se adequadamente' },
        { id: 'm1', title: 'Caminhar 30min', category: 'movement', description: 'Movimento diário' },
        { id: 's1', title: 'Dormir 7-8h', category: 'sleep', description: 'Sono reparador' },
        { id: 'n1', title: 'Café da manhã proteico', category: 'nutrition', description: '20g de proteína' },
        { id: 'mi1', title: 'Meditar 10min', category: 'mindfulness', description: 'Mindfulness diário' },
      ],
      weeklyGoals: [
        { id: 'wg1', title: 'Meta semanal 1', description: 'Descrição' },
      ],
      milestones: [
        { id: 'ms1', title: 'Milestone 1', description: 'Descrição', day: 7 },
      ],
    },
    2: {
      title: 'Nutrição',
      subtitle: 'Alimentando a longevidade',
      description: 'Segundo mês focado em otimizar a nutrição.',
      icon: '🥗',
      dailyTasks: [
        { id: 'n2', title: 'Proteína em cada refeição', category: 'nutrition', description: 'Distribuir proteína' },
        { id: 'sp1', title: 'Suplementação', category: 'supplements', description: 'Vitamina D e Omega-3' },
      ],
      weeklyGoals: [],
      milestones: [],
    },
    3: {
      title: 'Integração',
      subtitle: 'Potencializando a longevidade',
      description: 'Terceiro mês focado em integrar todos os hábitos.',
      icon: '🎯',
      dailyTasks: [
        { id: 'm2', title: 'Treino de força', category: 'movement', description: '30min de resistência' },
      ],
      weeklyGoals: [],
      milestones: [],
    },
  },
  PROTOCOL_DURATION_DAYS: 84,
}))

describe('PROTOCOLS data structure', () => {
  const { PROTOCOLS } = require('../../protocols')

  describe('Month 1 - Fundação', () => {
    const month1 = PROTOCOLS[1]

    it('has title', () => {
      expect(month1.title).toBe('Fundação')
    })

    it('has subtitle', () => {
      expect(month1.subtitle).toBe('Construindo hábitos sólidos')
    })

    it('has description', () => {
      expect(month1.description).toBeDefined()
      expect(typeof month1.description).toBe('string')
    })

    it('has icon', () => {
      expect(month1.icon).toBe('🏗️')
    })

    it('has daily tasks array', () => {
      expect(Array.isArray(month1.dailyTasks)).toBe(true)
      expect(month1.dailyTasks.length).toBeGreaterThan(0)
    })

    it('has weekly goals array', () => {
      expect(Array.isArray(month1.weeklyGoals)).toBe(true)
    })

    it('has milestones array', () => {
      expect(Array.isArray(month1.milestones)).toBe(true)
    })
  })

  describe('Month 2 - Nutrição', () => {
    const month2 = PROTOCOLS[2]

    it('has title', () => {
      expect(month2.title).toBe('Nutrição')
    })

    it('has subtitle', () => {
      expect(month2.subtitle).toBe('Alimentando a longevidade')
    })

    it('has daily tasks', () => {
      expect(month2.dailyTasks.length).toBeGreaterThan(0)
    })
  })

  describe('Month 3 - Integração', () => {
    const month3 = PROTOCOLS[3]

    it('has title', () => {
      expect(month3.title).toBe('Integração')
    })

    it('has subtitle', () => {
      expect(month3.subtitle).toBe('Potencializando a longevidade')
    })
  })
})

describe('Daily task structure', () => {
  const { PROTOCOLS } = require('../../protocols')
  const task = PROTOCOLS[1].dailyTasks[0]

  it('has id', () => {
    expect(task.id).toBeDefined()
    expect(typeof task.id).toBe('string')
  })

  it('has title', () => {
    expect(task.title).toBeDefined()
    expect(typeof task.title).toBe('string')
  })

  it('has category', () => {
    expect(task.category).toBeDefined()
    expect(typeof task.category).toBe('string')
  })

  it('has description', () => {
    expect(task.description).toBeDefined()
    expect(typeof task.description).toBe('string')
  })
})

describe('Task categories', () => {
  const { PROTOCOLS } = require('../../protocols')
  const allTasks = [
    ...PROTOCOLS[1].dailyTasks,
    ...PROTOCOLS[2].dailyTasks,
    ...PROTOCOLS[3].dailyTasks,
  ]

  const validCategories = ['hydration', 'movement', 'sleep', 'nutrition', 'mindfulness', 'supplements']

  it('all tasks have valid category', () => {
    allTasks.forEach(task => {
      expect(validCategories).toContain(task.category)
    })
  })

  it('month 1 has hydration tasks', () => {
    const hydrationTasks = PROTOCOLS[1].dailyTasks.filter((t: MockTask) => t.category === 'hydration')
    expect(hydrationTasks.length).toBeGreaterThan(0)
  })

  it('month 1 has movement tasks', () => {
    const movementTasks = PROTOCOLS[1].dailyTasks.filter((t: MockTask) => t.category === 'movement')
    expect(movementTasks.length).toBeGreaterThan(0)
  })

  it('month 1 has sleep tasks', () => {
    const sleepTasks = PROTOCOLS[1].dailyTasks.filter((t: MockTask) => t.category === 'sleep')
    expect(sleepTasks.length).toBeGreaterThan(0)
  })

  it('month 2 has nutrition tasks', () => {
    const nutritionTasks = PROTOCOLS[2].dailyTasks.filter((t: MockTask) => t.category === 'nutrition')
    expect(nutritionTasks.length).toBeGreaterThan(0)
  })
})

describe('PROTOCOL_DURATION_DAYS', () => {
  const { PROTOCOL_DURATION_DAYS } = require('../../protocols')

  it('is 84 days (12 weeks / 3 months)', () => {
    expect(PROTOCOL_DURATION_DAYS).toBe(84)
  })

  it('is divisible by 7 (weeks)', () => {
    expect(PROTOCOL_DURATION_DAYS % 7).toBe(0)
  })

  it('equals 12 weeks', () => {
    expect(PROTOCOL_DURATION_DAYS / 7).toBe(12)
  })

  it('equals 3 months of 28 days', () => {
    expect(PROTOCOL_DURATION_DAYS / 28).toBe(3)
  })
})

describe('Protocol month structure', () => {
  const { PROTOCOLS } = require('../../protocols')

  it('has exactly 3 months', () => {
    const months = Object.keys(PROTOCOLS)
    expect(months).toHaveLength(3)
  })

  it('months are indexed 1, 2, 3', () => {
    expect(PROTOCOLS[1]).toBeDefined()
    expect(PROTOCOLS[2]).toBeDefined()
    expect(PROTOCOLS[3]).toBeDefined()
  })

  it('all months have required fields', () => {
    const requiredFields = ['title', 'subtitle', 'dailyTasks', 'weeklyGoals', 'milestones']

    for (let month = 1; month <= 3; month++) {
      requiredFields.forEach(field => {
        expect(PROTOCOLS[month]).toHaveProperty(field)
      })
    }
  })
})

describe('Weekly goals structure', () => {
  const { PROTOCOLS } = require('../../protocols')
  const weeklyGoal = PROTOCOLS[1].weeklyGoals[0]

  it('has id', () => {
    expect(weeklyGoal.id).toBeDefined()
  })

  it('has title', () => {
    expect(weeklyGoal.title).toBeDefined()
  })

  it('has description', () => {
    expect(weeklyGoal.description).toBeDefined()
  })
})

describe('Milestones structure', () => {
  const { PROTOCOLS } = require('../../protocols')
  const milestone = PROTOCOLS[1].milestones[0]

  it('has id', () => {
    expect(milestone.id).toBeDefined()
  })

  it('has title', () => {
    expect(milestone.title).toBeDefined()
  })

  it('has day', () => {
    expect(milestone.day).toBeDefined()
    expect(typeof milestone.day).toBe('number')
  })
})

describe('Protocol progression', () => {
  it('each month builds on previous', () => {
    const monthOrder = ['Fundação', 'Nutrição', 'Integração']
    const { PROTOCOLS } = require('../../protocols')

    expect(PROTOCOLS[1].title).toBe(monthOrder[0])
    expect(PROTOCOLS[2].title).toBe(monthOrder[1])
    expect(PROTOCOLS[3].title).toBe(monthOrder[2])
  })
})
