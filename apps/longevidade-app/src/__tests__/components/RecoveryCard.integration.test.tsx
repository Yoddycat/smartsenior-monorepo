/**
 * RecoveryCard Integration Tests
 * Tests component rendering with mocked useRecovery hook
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import { RecoveryCard } from '../../components/RecoveryCard'
import { useRecovery } from '../../hooks/useRecovery'

// Mock the useRecovery hook
jest.mock('../../hooks/useRecovery')
const mockUseRecovery = useRecovery as jest.MockedFunction<typeof useRecovery>

describe('RecoveryCard Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Loading State', () => {
    it('renders loading indicator when isLoading is true', () => {
      mockUseRecovery.mockReturnValue({
        analysis: null,
        isLoading: true,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Analisando recuperação')
    })

    it('renders ActivityIndicator when loading', () => {
      mockUseRecovery.mockReturnValue({
        analysis: null,
        isLoading: true,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { UNSAFE_getByType } = render(<RecoveryCard />)
      const ActivityIndicator = require('react-native').ActivityIndicator
      expect(UNSAFE_getByType(ActivityIndicator)).toBeTruthy()
    })
  })

  describe('Error State', () => {
    it('renders error message when error exists', () => {
      mockUseRecovery.mockReturnValue({
        analysis: null,
        isLoading: false,
        error: 'Falha ao carregar dados',
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Falha ao carregar dados')
    })

    it('renders default message when analysis is null', () => {
      mockUseRecovery.mockReturnValue({
        analysis: null,
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Dados de HRV não disponíveis')
    })
  })

  describe('Recovery Status Display', () => {
    it('renders optimal status correctly', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'optimal',
          todayHRV: 65,
          weekAverageHRV: 60,
          percentageChange: 8,
          suggestion: {
            icon: '🏃',
            title: 'Dia de Treino Intenso',
            description: 'Seu corpo está pronto para desafios maiores.',
            duration: '60-90 min',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Ótimo')
      expect(tree).toContain('65')
      expect(tree).toContain('60')
      expect(tree).toContain('Dia de Treino Intenso')
      expect(tree).toContain('60-90 min')
    })

    it('renders good status correctly', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'good',
          todayHRV: 55,
          weekAverageHRV: 52,
          percentageChange: 6,
          suggestion: {
            icon: '🚶',
            title: 'Treino Moderado',
            description: 'Bom dia para atividades moderadas.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Bom')
      expect(tree).toContain('Treino Moderado')
    })

    it('renders moderate status correctly', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'moderate',
          todayHRV: 45,
          weekAverageHRV: 50,
          percentageChange: -10,
          suggestion: {
            icon: '🧘',
            title: 'Atividade Leve',
            description: 'Prefira atividades de baixa intensidade.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Moderado')
      expect(tree).toContain('-10')
    })

    it('renders recovery status correctly', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'recovery',
          todayHRV: 35,
          weekAverageHRV: 50,
          percentageChange: -30,
          suggestion: {
            icon: '😴',
            title: 'Descanso Necessário',
            description: 'Priorize o repouso e recuperação.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: true,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Recuperação')
      expect(tree).toContain('Descanso Necessário')
    })
  })

  describe('Recovery Mode Alert', () => {
    it('shows alert when isRecoveryMode is true', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'recovery',
          todayHRV: 35,
          weekAverageHRV: 50,
          percentageChange: -30,
          suggestion: {
            icon: '😴',
            title: 'Descanso',
            description: 'Descanse.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: true,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Seu HRV está 20% abaixo da média')
      expect(tree).toContain('⚠️')
    })

    it('does not show alert when isRecoveryMode is false', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'good',
          todayHRV: 55,
          weekAverageHRV: 52,
          percentageChange: 6,
          suggestion: {
            icon: '🚶',
            title: 'Treino',
            description: 'Treinar.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).not.toContain('Seu HRV está 20% abaixo da média')
    })
  })

  describe('HRV Statistics', () => {
    it('displays positive percentage change', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'optimal',
          todayHRV: 70,
          weekAverageHRV: 60,
          percentageChange: 15,
          suggestion: {
            icon: '🏃',
            title: 'Treino',
            description: 'Treinar forte.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('15')
      expect(tree).toContain('%')
    })

    it('displays negative percentage change', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'moderate',
          todayHRV: 40,
          weekAverageHRV: 50,
          percentageChange: -20,
          suggestion: {
            icon: '🧘',
            title: 'Leve',
            description: 'Atividade leve.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('-20')
    })

    it('displays HRV values', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'good',
          todayHRV: 55,
          weekAverageHRV: 52,
          percentageChange: 6,
          suggestion: {
            icon: '🚶',
            title: 'Normal',
            description: 'Dia normal.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('55')
      expect(tree).toContain('52')
    })
  })

  describe('Suggestion Display', () => {
    it('renders suggestion with duration', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'optimal',
          todayHRV: 65,
          weekAverageHRV: 60,
          percentageChange: 8,
          suggestion: {
            icon: '🏋️',
            title: 'Treino Pesado',
            description: 'Dia ideal para treino de força.',
            duration: '45-60 min',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Dia ideal para treino de força')
      expect(tree).toContain('45-60 min')
    })

    it('renders suggestion without duration', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'recovery',
          todayHRV: 35,
          weekAverageHRV: 50,
          percentageChange: -30,
          suggestion: {
            icon: '😴',
            title: 'Descanso',
            description: 'Foque em descansar.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Foque em descansar')
      expect(tree).not.toContain('Duração sugerida')
    })

    it('renders icon from suggestion', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'good',
          todayHRV: 55,
          weekAverageHRV: 52,
          percentageChange: 6,
          suggestion: {
            icon: '🚴',
            title: 'Ciclismo',
            description: 'Bom dia para pedalar.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('🚴')
      expect(tree).toContain('Ciclismo')
    })
  })

  describe('Labels Display', () => {
    it('displays stat labels', () => {
      mockUseRecovery.mockReturnValue({
        analysis: {
          status: 'good',
          todayHRV: 55,
          weekAverageHRV: 52,
          percentageChange: 6,
          suggestion: {
            icon: '🚶',
            title: 'Treino',
            description: 'OK.',
          },
        },
        isLoading: false,
        error: null,
        isRecoveryMode: false,
        refreshAnalysis: jest.fn(),
      })

      const { toJSON } = render(<RecoveryCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('HRV Hoje')
      expect(tree).toContain('Média 7 dias')
      expect(tree).toContain('Variação')
    })
  })

  describe('Component Renders Without Crashing', () => {
    it('renders in all states without throwing', () => {
      const states = [
        { isLoading: true, analysis: null, error: null, isRecoveryMode: false },
        { isLoading: false, analysis: null, error: 'Error', isRecoveryMode: false },
        { isLoading: false, analysis: null, error: null, isRecoveryMode: false },
      ]

      states.forEach((state) => {
        mockUseRecovery.mockReturnValue({
          ...state,
          refreshAnalysis: jest.fn(),
        })

        expect(() => render(<RecoveryCard />)).not.toThrow()
      })
    })
  })
})
