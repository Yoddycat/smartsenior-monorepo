/**
 * Recovery Types Tests
 * Tests for recovery type definitions
 */

import type { RecoveryStatus, RecoverySuggestion, RecoveryAnalysis } from '../../types/recovery'

describe('RecoveryStatus type', () => {
  const statuses: RecoveryStatus[] = ['recovery', 'moderate', 'good', 'optimal']

  it('has 4 possible values', () => {
    expect(statuses.length).toBe(4)
  })

  it('includes recovery', () => {
    expect(statuses).toContain('recovery')
  })

  it('includes moderate', () => {
    expect(statuses).toContain('moderate')
  })

  it('includes good', () => {
    expect(statuses).toContain('good')
  })

  it('includes optimal', () => {
    expect(statuses).toContain('optimal')
  })
})

describe('RecoverySuggestion structure', () => {
  const suggestion: RecoverySuggestion = {
    title: 'Test Title',
    description: 'Test Description',
    activityType: 'moderate',
    icon: '🎯',
    duration: '30 min',
  }

  it('has title property', () => {
    expect(suggestion.title).toBe('Test Title')
  })

  it('has description property', () => {
    expect(suggestion.description).toBe('Test Description')
  })

  it('has icon property', () => {
    expect(suggestion.icon).toBe('🎯')
  })

  it('has duration property', () => {
    expect(suggestion.duration).toBe('30 min')
  })
})

describe('RecoveryAnalysis structure', () => {
  const analysis: RecoveryAnalysis = {
    status: 'good',
    todayHRV: 45,
    weekAverageHRV: 42,
    percentageChange: 7,
    suggestion: {
      title: 'Pronto para Treinar',
      description: 'Seu corpo está bem recuperado.',
      activityType: 'moderate',
      icon: '💪',
      duration: '30-45 min',
    },
    analyzedAt: new Date(),
  }

  it('has status property', () => {
    expect(analysis.status).toBe('good')
  })

  it('has todayHRV property', () => {
    expect(analysis.todayHRV).toBe(45)
  })

  it('has weekAverageHRV property', () => {
    expect(analysis.weekAverageHRV).toBe(42)
  })

  it('has percentageChange property', () => {
    expect(analysis.percentageChange).toBe(7)
  })

  it('has suggestion property', () => {
    expect(analysis.suggestion).toBeDefined()
    expect(analysis.suggestion?.title).toBe('Pronto para Treinar')
  })
})

describe('RecoveryStatus ordering', () => {
  const statusOrder: Record<RecoveryStatus, number> = {
    recovery: 0,
    moderate: 1,
    good: 2,
    optimal: 3,
  }

  it('recovery is lowest', () => {
    expect(statusOrder.recovery).toBe(0)
  })

  it('optimal is highest', () => {
    expect(statusOrder.optimal).toBe(3)
  })

  it('ordering is sequential', () => {
    expect(statusOrder.moderate).toBe(statusOrder.recovery + 1)
    expect(statusOrder.good).toBe(statusOrder.moderate + 1)
    expect(statusOrder.optimal).toBe(statusOrder.good + 1)
  })
})

describe('Recovery percentage change ranges', () => {
  const getStatusForChange = (change: number): RecoveryStatus => {
    if (change <= -20) return 'recovery'
    if (change <= -10) return 'moderate'
    if (change <= 0) return 'good'
    return 'optimal'
  }

  describe('edge cases', () => {
    it('-20 is recovery', () => {
      expect(getStatusForChange(-20)).toBe('recovery')
    })

    it('-10 is moderate', () => {
      expect(getStatusForChange(-10)).toBe('moderate')
    })

    it('0 is good', () => {
      expect(getStatusForChange(0)).toBe('good')
    })

    it('1 is optimal', () => {
      expect(getStatusForChange(1)).toBe('optimal')
    })
  })
})
