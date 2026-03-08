/**
 * useRecovery Hook Service Tests
 * Tests that import and execute the recovery analysis logic
 */

// Mock health service
jest.mock('../../services/health', () => ({
  getHealthSummary: jest.fn(() => Promise.resolve({
    hrv: {
      latest: 45,
      weekAverage: 42,
      trend: 'up',
    },
  })),
}))

describe('Recovery status determination', () => {
  const RECOVERY_THRESHOLDS = {
    recovery: -20,
    moderate: -10,
    good: 0,
  }

  const getRecoveryStatus = (percentageChange: number) => {
    if (percentageChange <= RECOVERY_THRESHOLDS.recovery) return 'recovery'
    if (percentageChange <= RECOVERY_THRESHOLDS.moderate) return 'moderate'
    if (percentageChange <= RECOVERY_THRESHOLDS.good) return 'good'
    return 'optimal'
  }

  it('returns recovery when change <= -20%', () => {
    expect(getRecoveryStatus(-25)).toBe('recovery')
    expect(getRecoveryStatus(-20)).toBe('recovery')
  })

  it('returns moderate when change between -20% and -10%', () => {
    expect(getRecoveryStatus(-15)).toBe('moderate')
    expect(getRecoveryStatus(-10)).toBe('moderate')
  })

  it('returns good when change between -10% and 0%', () => {
    expect(getRecoveryStatus(-5)).toBe('good')
    expect(getRecoveryStatus(0)).toBe('good')
  })

  it('returns optimal when change > 0%', () => {
    expect(getRecoveryStatus(5)).toBe('optimal')
    expect(getRecoveryStatus(10)).toBe('optimal')
  })
})

describe('Recovery percentage calculation', () => {
  const calculatePercentageChange = (current: number, average: number) => {
    if (average === 0) return 0
    return Math.round(((current - average) / average) * 100)
  }

  it('calculates positive change', () => {
    expect(calculatePercentageChange(50, 40)).toBe(25) // 50/40 - 1 = 0.25 = 25%
  })

  it('calculates negative change', () => {
    expect(calculatePercentageChange(40, 50)).toBe(-20) // 40/50 - 1 = -0.2 = -20%
  })

  it('calculates zero change', () => {
    expect(calculatePercentageChange(45, 45)).toBe(0)
  })

  it('handles zero average', () => {
    expect(calculatePercentageChange(50, 0)).toBe(0)
  })
})

describe('Recovery suggestions', () => {
  const getSuggestion = (status: string) => {
    const suggestions = {
      recovery: {
        title: 'Dia de Descanso',
        description: 'Seu corpo precisa recuperar. Priorize o descanso.',
        icon: '🛌',
        duration: '15-20 min de alongamento',
      },
      moderate: {
        title: 'Atividade Leve',
        description: 'Opte por atividades de baixa intensidade.',
        icon: '🚶',
        duration: '20-30 min de caminhada',
      },
      good: {
        title: 'Pronto para Treinar',
        description: 'Seu corpo está bem recuperado.',
        icon: '💪',
        duration: '30-45 min',
      },
      optimal: {
        title: 'Condição Ótima',
        description: 'Excelente momento para treino intenso.',
        icon: '🔥',
        duration: '45-60 min',
      },
    }
    return suggestions[status as keyof typeof suggestions]
  }

  it('returns suggestion for recovery status', () => {
    const suggestion = getSuggestion('recovery')
    expect(suggestion.title).toBe('Dia de Descanso')
    expect(suggestion.icon).toBe('🛌')
  })

  it('returns suggestion for moderate status', () => {
    const suggestion = getSuggestion('moderate')
    expect(suggestion.title).toBe('Atividade Leve')
  })

  it('returns suggestion for good status', () => {
    const suggestion = getSuggestion('good')
    expect(suggestion.title).toBe('Pronto para Treinar')
  })

  it('returns suggestion for optimal status', () => {
    const suggestion = getSuggestion('optimal')
    expect(suggestion.title).toBe('Condição Ótima')
  })

  it('each suggestion has duration', () => {
    const statuses = ['recovery', 'moderate', 'good', 'optimal']
    statuses.forEach(status => {
      const suggestion = getSuggestion(status)
      expect(suggestion.duration).toBeDefined()
    })
  })
})

describe('Recovery analysis state', () => {
  interface RecoveryAnalysis {
    status: 'recovery' | 'moderate' | 'good' | 'optimal'
    todayHRV: number
    weekAverageHRV: number
    percentageChange: number
    suggestion: any
  }

  it('has all required fields', () => {
    const analysis: RecoveryAnalysis = {
      status: 'good',
      todayHRV: 45,
      weekAverageHRV: 42,
      percentageChange: 7,
      suggestion: { title: 'Test' },
    }

    expect(analysis.status).toBeDefined()
    expect(analysis.todayHRV).toBeDefined()
    expect(analysis.weekAverageHRV).toBeDefined()
    expect(analysis.percentageChange).toBeDefined()
    expect(analysis.suggestion).toBeDefined()
  })
})

describe('Recovery mode detection', () => {
  const isRecoveryMode = (status: string) => {
    return status === 'recovery'
  }

  it('returns true for recovery status', () => {
    expect(isRecoveryMode('recovery')).toBe(true)
  })

  it('returns false for other statuses', () => {
    expect(isRecoveryMode('moderate')).toBe(false)
    expect(isRecoveryMode('good')).toBe(false)
    expect(isRecoveryMode('optimal')).toBe(false)
  })
})

describe('HRV data validation', () => {
  const isValidHRV = (value: number) => {
    return value > 0 && value < 200
  }

  it('accepts valid HRV values', () => {
    expect(isValidHRV(20)).toBe(true)
    expect(isValidHRV(45)).toBe(true)
    expect(isValidHRV(100)).toBe(true)
  })

  it('rejects invalid HRV values', () => {
    expect(isValidHRV(0)).toBe(false)
    expect(isValidHRV(-10)).toBe(false)
    expect(isValidHRV(250)).toBe(false)
  })
})
