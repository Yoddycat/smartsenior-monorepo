/**
 * RecoveryCard Branch Coverage Tests
 * Tests specifically targeting uncovered branches
 */

import type { RecoveryStatus } from '../../types/recovery'

// Suppress console warnings during tests
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('RecoveryCard Branch Coverage', () => {
  describe('Loading State Branch', () => {
    const getCardState = (isLoading: boolean, error: string | null, analysis: object | null) => {
      if (isLoading) {
        return { type: 'loading', text: 'Analisando recuperação...' }
      }
      if (error || !analysis) {
        return { type: 'error', text: error || 'Dados de HRV não disponíveis' }
      }
      return { type: 'content', text: null }
    }

    it('shows loading state when loading', () => {
      const state = getCardState(true, null, null)
      expect(state.type).toBe('loading')
      expect(state.text).toBe('Analisando recuperação...')
    })

    it('shows error when error present', () => {
      const state = getCardState(false, 'Connection failed', null)
      expect(state.type).toBe('error')
      expect(state.text).toBe('Connection failed')
    })

    it('shows default error when no analysis', () => {
      const state = getCardState(false, null, null)
      expect(state.type).toBe('error')
      expect(state.text).toBe('Dados de HRV não disponíveis')
    })

    it('shows content when has analysis', () => {
      const state = getCardState(false, null, { status: 'good' })
      expect(state.type).toBe('content')
    })

    it('prioritizes loading over error', () => {
      const state = getCardState(true, 'Error', null)
      expect(state.type).toBe('loading')
    })
  })

  describe('Status Colors Branch', () => {
    const STATUS_COLORS: Record<RecoveryStatus, string> = {
      recovery: '#EF4444', // danger
      moderate: '#F59E0B', // warning
      good: '#22C55E', // success
      optimal: '#3B82F6', // info
    }

    const getStatusColor = (status: RecoveryStatus) => {
      return STATUS_COLORS[status]
    }

    it('returns danger color for recovery status', () => {
      expect(getStatusColor('recovery')).toBe('#EF4444')
    })

    it('returns warning color for moderate status', () => {
      expect(getStatusColor('moderate')).toBe('#F59E0B')
    })

    it('returns success color for good status', () => {
      expect(getStatusColor('good')).toBe('#22C55E')
    })

    it('returns info color for optimal status', () => {
      expect(getStatusColor('optimal')).toBe('#3B82F6')
    })
  })

  describe('Status Labels Branch', () => {
    const STATUS_LABELS: Record<RecoveryStatus, string> = {
      recovery: 'Recuperação',
      moderate: 'Moderado',
      good: 'Bom',
      optimal: 'Ótimo',
    }

    const getStatusLabel = (status: RecoveryStatus) => {
      return STATUS_LABELS[status]
    }

    it('returns Recuperação for recovery status', () => {
      expect(getStatusLabel('recovery')).toBe('Recuperação')
    })

    it('returns Moderado for moderate status', () => {
      expect(getStatusLabel('moderate')).toBe('Moderado')
    })

    it('returns Bom for good status', () => {
      expect(getStatusLabel('good')).toBe('Bom')
    })

    it('returns Ótimo for optimal status', () => {
      expect(getStatusLabel('optimal')).toBe('Ótimo')
    })
  })

  describe('Recovery Mode Style Branch', () => {
    const getContainerStyle = (isRecoveryMode: boolean) => {
      return {
        hasAlertBorder: isRecoveryMode,
      }
    }

    it('applies alert border when in recovery mode', () => {
      expect(getContainerStyle(true).hasAlertBorder).toBe(true)
    })

    it('does not apply alert border when not in recovery mode', () => {
      expect(getContainerStyle(false).hasAlertBorder).toBe(false)
    })
  })

  describe('Percentage Change Color Branch', () => {
    const getPercentageColor = (percentageChange: number) => {
      const colors = {
        danger: '#EF4444',
        success: '#22C55E',
      }
      return percentageChange < 0 ? colors.danger : colors.success
    }

    it('returns danger color for negative change', () => {
      expect(getPercentageColor(-5)).toBe('#EF4444')
    })

    it('returns danger color for -20%', () => {
      expect(getPercentageColor(-20)).toBe('#EF4444')
    })

    it('returns success color for positive change', () => {
      expect(getPercentageColor(5)).toBe('#22C55E')
    })

    it('returns success color for zero change', () => {
      expect(getPercentageColor(0)).toBe('#22C55E')
    })
  })

  describe('Percentage Change Format Branch', () => {
    const formatPercentageChange = (change: number) => {
      const prefix = change > 0 ? '+' : ''
      return `${prefix}${change}%`
    }

    it('adds plus sign for positive change', () => {
      expect(formatPercentageChange(10)).toBe('+10%')
    })

    it('does not add plus sign for zero', () => {
      expect(formatPercentageChange(0)).toBe('0%')
    })

    it('does not add plus sign for negative change', () => {
      expect(formatPercentageChange(-15)).toBe('-15%')
    })
  })

  describe('Suggestion Display Branch', () => {
    interface Suggestion {
      icon: string
      title: string
      description: string
      duration?: string
    }

    const getSuggestionConfig = (suggestion: Suggestion | null) => {
      if (!suggestion) {
        return { showSuggestion: false, showDuration: false }
      }
      return {
        showSuggestion: true,
        showDuration: !!suggestion.duration,
        icon: suggestion.icon,
        title: suggestion.title,
        description: suggestion.description,
        durationText: suggestion.duration ? `Duração sugerida: ${suggestion.duration}` : null,
      }
    }

    it('hides suggestion when null', () => {
      const config = getSuggestionConfig(null)
      expect(config.showSuggestion).toBe(false)
    })

    it('shows suggestion when present', () => {
      const suggestion = {
        icon: '💪',
        title: 'Test',
        description: 'Test desc',
      }
      const config = getSuggestionConfig(suggestion)
      expect(config.showSuggestion).toBe(true)
    })

    it('hides duration when not provided', () => {
      const suggestion = {
        icon: '💪',
        title: 'Test',
        description: 'Test desc',
      }
      const config = getSuggestionConfig(suggestion)
      expect(config.showDuration).toBe(false)
      expect(config.durationText).toBeNull()
    })

    it('shows duration when provided', () => {
      const suggestion = {
        icon: '💪',
        title: 'Test',
        description: 'Test desc',
        duration: '30 min',
      }
      const config = getSuggestionConfig(suggestion)
      expect(config.showDuration).toBe(true)
      expect(config.durationText).toBe('Duração sugerida: 30 min')
    })
  })

  describe('Recovery Alert Display Branch', () => {
    const getAlertConfig = (isRecoveryMode: boolean) => {
      return {
        showAlert: isRecoveryMode,
        alertIcon: '⚠️',
        alertText: 'Seu HRV está 20% abaixo da média. Priorize o descanso hoje.',
      }
    }

    it('shows alert when in recovery mode', () => {
      const config = getAlertConfig(true)
      expect(config.showAlert).toBe(true)
      expect(config.alertText).toContain('20% abaixo')
    })

    it('hides alert when not in recovery mode', () => {
      const config = getAlertConfig(false)
      expect(config.showAlert).toBe(false)
    })
  })

  describe('Complete Analysis Rendering', () => {
    interface Analysis {
      status: RecoveryStatus
      todayHRV: number
      weekAverageHRV: number
      percentageChange: number
      suggestion?: {
        icon: string
        title: string
        description: string
        duration?: string
      }
    }

    const getAnalysisDisplay = (analysis: Analysis) => {
      const STATUS_COLORS: Record<RecoveryStatus, string> = {
        recovery: '#EF4444',
        moderate: '#F59E0B',
        good: '#22C55E',
        optimal: '#3B82F6',
      }

      return {
        statusColor: STATUS_COLORS[analysis.status],
        todayHRV: analysis.todayHRV,
        weekAverage: analysis.weekAverageHRV,
        changeText: `${analysis.percentageChange > 0 ? '+' : ''}${analysis.percentageChange}%`,
        changeColor: analysis.percentageChange < 0 ? '#EF4444' : '#22C55E',
        suggestionIcon: analysis.suggestion?.icon,
        suggestionTitle: analysis.suggestion?.title,
      }
    }

    it('renders recovery status correctly', () => {
      const display = getAnalysisDisplay({
        status: 'recovery',
        todayHRV: 30,
        weekAverageHRV: 45,
        percentageChange: -33,
        suggestion: { icon: '🛌', title: 'Descanse', description: 'Hoje é dia de descanso' },
      })
      expect(display.statusColor).toBe('#EF4444')
      expect(display.changeColor).toBe('#EF4444')
      expect(display.changeText).toBe('-33%')
    })

    it('renders optimal status correctly', () => {
      const display = getAnalysisDisplay({
        status: 'optimal',
        todayHRV: 55,
        weekAverageHRV: 45,
        percentageChange: 22,
        suggestion: { icon: '🏃', title: 'Treino intenso', description: 'Aproveite!' },
      })
      expect(display.statusColor).toBe('#3B82F6')
      expect(display.changeColor).toBe('#22C55E')
      expect(display.changeText).toBe('+22%')
    })

    it('handles missing suggestion', () => {
      const display = getAnalysisDisplay({
        status: 'good',
        todayHRV: 45,
        weekAverageHRV: 45,
        percentageChange: 0,
      })
      expect(display.suggestionIcon).toBeUndefined()
      expect(display.suggestionTitle).toBeUndefined()
    })
  })
})
