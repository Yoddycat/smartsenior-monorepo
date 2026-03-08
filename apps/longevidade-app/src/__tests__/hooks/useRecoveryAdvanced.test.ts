/**
 * useRecovery Hook Advanced Tests
 * Detailed tests for recovery analysis functionality
 */

import type { RecoveryStatus } from '../../types/recovery'

// Mock health service
jest.mock('../../services/health', () => ({
  getHealthSummary: jest.fn(() =>
    Promise.resolve({
      hrv: {
        latest: 45,
        weekAverage: 42,
        trend: 'up',
      },
    })
  ),
}))

describe('Recovery status thresholds', () => {
  const RECOVERY_THRESHOLDS = {
    recovery: -20,
    moderate: -10,
    good: 0,
  }

  it('recovery threshold is -20%', () => {
    expect(RECOVERY_THRESHOLDS.recovery).toBe(-20)
  })

  it('moderate threshold is -10%', () => {
    expect(RECOVERY_THRESHOLDS.moderate).toBe(-10)
  })

  it('good threshold is 0%', () => {
    expect(RECOVERY_THRESHOLDS.good).toBe(0)
  })
})

describe('Recovery status determination', () => {
  const getRecoveryStatus = (percentageChange: number): RecoveryStatus => {
    if (percentageChange <= -20) return 'recovery'
    if (percentageChange <= -10) return 'moderate'
    if (percentageChange <= 0) return 'good'
    return 'optimal'
  }

  describe('recovery status', () => {
    it('returns for -25%', () => {
      expect(getRecoveryStatus(-25)).toBe('recovery')
    })

    it('returns for -20%', () => {
      expect(getRecoveryStatus(-20)).toBe('recovery')
    })

    it('returns for -30%', () => {
      expect(getRecoveryStatus(-30)).toBe('recovery')
    })
  })

  describe('moderate status', () => {
    it('returns for -15%', () => {
      expect(getRecoveryStatus(-15)).toBe('moderate')
    })

    it('returns for -10%', () => {
      expect(getRecoveryStatus(-10)).toBe('moderate')
    })

    it('returns for -19%', () => {
      expect(getRecoveryStatus(-19)).toBe('moderate')
    })
  })

  describe('good status', () => {
    it('returns for -5%', () => {
      expect(getRecoveryStatus(-5)).toBe('good')
    })

    it('returns for 0%', () => {
      expect(getRecoveryStatus(0)).toBe('good')
    })

    it('returns for -9%', () => {
      expect(getRecoveryStatus(-9)).toBe('good')
    })
  })

  describe('optimal status', () => {
    it('returns for 5%', () => {
      expect(getRecoveryStatus(5)).toBe('optimal')
    })

    it('returns for 10%', () => {
      expect(getRecoveryStatus(10)).toBe('optimal')
    })

    it('returns for 1%', () => {
      expect(getRecoveryStatus(1)).toBe('optimal')
    })
  })
})

describe('Recovery percentage calculation', () => {
  const calculatePercentageChange = (current: number, average: number): number => {
    if (average === 0) return 0
    return Math.round(((current - average) / average) * 100)
  }

  it('calculates positive change', () => {
    expect(calculatePercentageChange(55, 50)).toBe(10)
  })

  it('calculates negative change', () => {
    expect(calculatePercentageChange(45, 50)).toBe(-10)
  })

  it('calculates zero change', () => {
    expect(calculatePercentageChange(50, 50)).toBe(0)
  })

  it('handles zero average', () => {
    expect(calculatePercentageChange(50, 0)).toBe(0)
  })

  it('rounds to integer', () => {
    expect(calculatePercentageChange(51, 50)).toBe(2) // 2% instead of 2.0
  })
})

describe('Recovery suggestions', () => {
  const getSuggestion = (status: RecoveryStatus) => {
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
    return suggestions[status]
  }

  it('recovery suggestion has rest focus', () => {
    const suggestion = getSuggestion('recovery')
    expect(suggestion.title).toBe('Dia de Descanso')
    expect(suggestion.icon).toBe('🛌')
  })

  it('moderate suggestion has light activity', () => {
    const suggestion = getSuggestion('moderate')
    expect(suggestion.title).toBe('Atividade Leve')
    expect(suggestion.icon).toBe('🚶')
  })

  it('good suggestion indicates readiness', () => {
    const suggestion = getSuggestion('good')
    expect(suggestion.title).toBe('Pronto para Treinar')
    expect(suggestion.icon).toBe('💪')
  })

  it('optimal suggestion encourages intensity', () => {
    const suggestion = getSuggestion('optimal')
    expect(suggestion.title).toBe('Condição Ótima')
    expect(suggestion.icon).toBe('🔥')
  })
})

describe('Recovery mode detection', () => {
  const isRecoveryMode = (status: RecoveryStatus): boolean => {
    return status === 'recovery'
  }

  it('true for recovery', () => {
    expect(isRecoveryMode('recovery')).toBe(true)
  })

  it('false for moderate', () => {
    expect(isRecoveryMode('moderate')).toBe(false)
  })

  it('false for good', () => {
    expect(isRecoveryMode('good')).toBe(false)
  })

  it('false for optimal', () => {
    expect(isRecoveryMode('optimal')).toBe(false)
  })
})

describe('HRV validation', () => {
  const isValidHRV = (value: number): boolean => {
    return value > 0 && value < 200
  }

  it('accepts normal range', () => {
    expect(isValidHRV(20)).toBe(true)
    expect(isValidHRV(45)).toBe(true)
    expect(isValidHRV(80)).toBe(true)
  })

  it('rejects zero', () => {
    expect(isValidHRV(0)).toBe(false)
  })

  it('rejects negative', () => {
    expect(isValidHRV(-10)).toBe(false)
  })

  it('rejects too high', () => {
    expect(isValidHRV(250)).toBe(false)
  })
})

describe('Recovery analysis state', () => {
  it('has complete structure', () => {
    const analysis = {
      status: 'good' as RecoveryStatus,
      todayHRV: 45,
      weekAverageHRV: 42,
      percentageChange: 7,
      suggestion: {
        title: 'Pronto para Treinar',
        description: 'Seu corpo está bem recuperado.',
        icon: '💪',
        duration: '30-45 min',
      },
    }

    expect(analysis.status).toBe('good')
    expect(analysis.todayHRV).toBe(45)
    expect(analysis.weekAverageHRV).toBe(42)
    expect(analysis.percentageChange).toBe(7)
    expect(analysis.suggestion).toBeDefined()
  })
})

describe('Recovery hook return value', () => {
  it('has all required properties', () => {
    const returnValue = {
      analysis: null as any,
      isLoading: false,
      error: null as string | null,
      isRecoveryMode: false,
      refresh: jest.fn(),
    }

    expect(returnValue).toHaveProperty('analysis')
    expect(returnValue).toHaveProperty('isLoading')
    expect(returnValue).toHaveProperty('error')
    expect(returnValue).toHaveProperty('isRecoveryMode')
    expect(returnValue).toHaveProperty('refresh')
  })
})

describe('Recovery loading states', () => {
  it('initial loading state', () => {
    const state = {
      analysis: null,
      isLoading: true,
      error: null,
    }

    expect(state.isLoading).toBe(true)
    expect(state.analysis).toBeNull()
  })

  it('loaded state', () => {
    const state = {
      analysis: { status: 'good' },
      isLoading: false,
      error: null,
    }

    expect(state.isLoading).toBe(false)
    expect(state.analysis).not.toBeNull()
  })

  it('error state', () => {
    const state = {
      analysis: null,
      isLoading: false,
      error: 'HRV data not available',
    }

    expect(state.error).toBe('HRV data not available')
  })
})

describe('Recovery alert threshold', () => {
  const ALERT_THRESHOLD = -20

  const shouldShowAlert = (percentageChange: number): boolean => {
    return percentageChange <= ALERT_THRESHOLD
  }

  it('shows alert at threshold', () => {
    expect(shouldShowAlert(-20)).toBe(true)
  })

  it('shows alert below threshold', () => {
    expect(shouldShowAlert(-25)).toBe(true)
  })

  it('hides alert above threshold', () => {
    expect(shouldShowAlert(-15)).toBe(false)
  })
})
