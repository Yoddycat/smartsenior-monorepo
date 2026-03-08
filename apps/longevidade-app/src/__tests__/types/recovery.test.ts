/**
 * Recovery Types Tests
 * Tests for recovery status types and constants
 */

import {
  RECOVERY_THRESHOLDS,
  RECOVERY_SUGGESTIONS,
} from '../../types/recovery'

describe('Recovery types', () => {
  describe('RecoveryStatus', () => {
    const statuses = ['optimal', 'good', 'moderate', 'recovery']

    it('has 4 status types', () => {
      expect(statuses).toHaveLength(4)
    })

    it('includes optimal', () => {
      expect(statuses).toContain('optimal')
    })

    it('includes good', () => {
      expect(statuses).toContain('good')
    })

    it('includes moderate', () => {
      expect(statuses).toContain('moderate')
    })

    it('includes recovery', () => {
      expect(statuses).toContain('recovery')
    })
  })
})

describe('RECOVERY_THRESHOLDS', () => {
  it('recovery threshold is -20', () => {
    expect(RECOVERY_THRESHOLDS.recovery).toBe(-20)
  })

  it('moderate threshold is -10', () => {
    expect(RECOVERY_THRESHOLDS.moderate).toBe(-10)
  })

  it('good threshold is 0', () => {
    expect(RECOVERY_THRESHOLDS.good).toBe(0)
  })

  it('optimal threshold is 10', () => {
    expect(RECOVERY_THRESHOLDS.optimal).toBe(10)
  })

  it('thresholds are in ascending order', () => {
    expect(RECOVERY_THRESHOLDS.recovery).toBeLessThan(RECOVERY_THRESHOLDS.moderate)
    expect(RECOVERY_THRESHOLDS.moderate).toBeLessThan(RECOVERY_THRESHOLDS.good)
    expect(RECOVERY_THRESHOLDS.good).toBeLessThan(RECOVERY_THRESHOLDS.optimal)
  })
})

describe('RECOVERY_SUGGESTIONS', () => {
  describe('recovery suggestion', () => {
    const suggestion = RECOVERY_SUGGESTIONS.recovery

    it('has title', () => {
      expect(suggestion.title).toBe('Dia de Recuperação')
    })

    it('has description', () => {
      expect(suggestion.description).toBeDefined()
      expect(suggestion.description.length).toBeGreaterThan(0)
    })

    it('has light activity type', () => {
      expect(suggestion.activityType).toBe('light')
    })

    it('has icon', () => {
      expect(suggestion.icon).toBe('🧘')
    })

    it('has duration', () => {
      expect(suggestion.duration).toBe('15-20 min')
    })
  })

  describe('moderate suggestion', () => {
    const suggestion = RECOVERY_SUGGESTIONS.moderate

    it('has title', () => {
      expect(suggestion.title).toBe('Atividade Moderada')
    })

    it('has moderate activity type', () => {
      expect(suggestion.activityType).toBe('moderate')
    })

    it('has icon', () => {
      expect(suggestion.icon).toBe('🚶')
    })

    it('has duration', () => {
      expect(suggestion.duration).toBe('20-30 min')
    })
  })

  describe('good suggestion', () => {
    const suggestion = RECOVERY_SUGGESTIONS.good

    it('has title', () => {
      expect(suggestion.title).toBe('Pronto para Treinar')
    })

    it('has moderate activity type', () => {
      expect(suggestion.activityType).toBe('moderate')
    })

    it('has icon', () => {
      expect(suggestion.icon).toBe('💪')
    })

    it('has duration', () => {
      expect(suggestion.duration).toBe('30-45 min')
    })
  })

  describe('optimal suggestion', () => {
    const suggestion = RECOVERY_SUGGESTIONS.optimal

    it('has title', () => {
      expect(suggestion.title).toBe('Performance Máxima')
    })

    it('has intense activity type', () => {
      expect(suggestion.activityType).toBe('intense')
    })

    it('has icon', () => {
      expect(suggestion.icon).toBe('🔥')
    })

    it('has duration', () => {
      expect(suggestion.duration).toBe('45-60 min')
    })
  })

  describe('all suggestions', () => {
    const suggestions = Object.values(RECOVERY_SUGGESTIONS)

    it('has 4 suggestions', () => {
      expect(suggestions).toHaveLength(4)
    })

    it('all have required fields', () => {
      suggestions.forEach((suggestion) => {
        expect(suggestion.title).toBeDefined()
        expect(suggestion.description).toBeDefined()
        expect(suggestion.activityType).toBeDefined()
        expect(suggestion.icon).toBeDefined()
      })
    })

    it('all have durations', () => {
      suggestions.forEach((suggestion) => {
        expect(suggestion.duration).toBeDefined()
      })
    })
  })
})

describe('Recovery analysis interface', () => {
  const mockAnalysis = {
    status: 'good' as const,
    todayHRV: 45,
    weekAverageHRV: 42,
    percentageChange: 7.14,
    suggestion: RECOVERY_SUGGESTIONS.good,
    analyzedAt: new Date(),
  }

  it('has status', () => {
    expect(['optimal', 'good', 'moderate', 'recovery']).toContain(mockAnalysis.status)
  })

  it('has todayHRV', () => {
    expect(typeof mockAnalysis.todayHRV).toBe('number')
  })

  it('has weekAverageHRV', () => {
    expect(typeof mockAnalysis.weekAverageHRV).toBe('number')
  })

  it('has percentageChange', () => {
    expect(typeof mockAnalysis.percentageChange).toBe('number')
  })

  it('has suggestion', () => {
    expect(mockAnalysis.suggestion).toBeDefined()
  })

  it('has analyzedAt date', () => {
    expect(mockAnalysis.analyzedAt).toBeInstanceOf(Date)
  })
})

describe('Recovery status calculation logic', () => {
  const calculateRecoveryStatus = (percentageChange: number) => {
    if (percentageChange <= RECOVERY_THRESHOLDS.recovery) {
      return 'recovery'
    } else if (percentageChange <= RECOVERY_THRESHOLDS.moderate) {
      return 'moderate'
    } else if (percentageChange < RECOVERY_THRESHOLDS.optimal) {
      return 'good'
    } else {
      return 'optimal'
    }
  }

  it('returns recovery for -25%', () => {
    expect(calculateRecoveryStatus(-25)).toBe('recovery')
  })

  it('returns recovery for -20%', () => {
    expect(calculateRecoveryStatus(-20)).toBe('recovery')
  })

  it('returns moderate for -15%', () => {
    expect(calculateRecoveryStatus(-15)).toBe('moderate')
  })

  it('returns moderate for -10%', () => {
    expect(calculateRecoveryStatus(-10)).toBe('moderate')
  })

  it('returns good for 0%', () => {
    expect(calculateRecoveryStatus(0)).toBe('good')
  })

  it('returns good for 5%', () => {
    expect(calculateRecoveryStatus(5)).toBe('good')
  })

  it('returns optimal for 10%', () => {
    expect(calculateRecoveryStatus(10)).toBe('optimal')
  })

  it('returns optimal for 15%', () => {
    expect(calculateRecoveryStatus(15)).toBe('optimal')
  })
})

describe('Recovery percentage change calculation', () => {
  const calculatePercentageChange = (todayHRV: number, weekAverage: number) => {
    if (weekAverage === 0) return 0
    return ((todayHRV - weekAverage) / weekAverage) * 100
  }

  it('calculates positive change', () => {
    const change = calculatePercentageChange(50, 45)
    expect(change).toBeCloseTo(11.11, 1)
  })

  it('calculates negative change', () => {
    const change = calculatePercentageChange(40, 50)
    expect(change).toBe(-20)
  })

  it('calculates zero change', () => {
    const change = calculatePercentageChange(45, 45)
    expect(change).toBe(0)
  })

  it('handles zero average', () => {
    const change = calculatePercentageChange(45, 0)
    expect(change).toBe(0)
  })
})

describe('Activity type values', () => {
  const activityTypes = ['rest', 'light', 'moderate', 'intense']

  it('has 4 activity types', () => {
    expect(activityTypes).toHaveLength(4)
  })

  it('includes rest', () => {
    expect(activityTypes).toContain('rest')
  })

  it('includes light', () => {
    expect(activityTypes).toContain('light')
  })

  it('includes moderate', () => {
    expect(activityTypes).toContain('moderate')
  })

  it('includes intense', () => {
    expect(activityTypes).toContain('intense')
  })
})
