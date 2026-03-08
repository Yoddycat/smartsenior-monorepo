/**
 * MonthDetailScreen Tests
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import { MonthDetailScreen } from '../../screens/MonthDetailScreen'

// Mock hooks
jest.mock('../../hooks', () => ({
  useTaskCompletion: () => ({
    completedTasks: new Set([0, 1]),
    toggleTask: jest.fn(),
    completedCount: 2,
    isLoading: false,
  }),
}))

// Mock protocols - must include all required fields
jest.mock('../../protocols', () => ({
  PROTOCOLS: {
    1: {
      title: 'Fundação',
      subtitle: 'Construindo hábitos sólidos',
      description: 'Primeiro mês do protocolo de longevidade.',
      dailyTasks: [
        { id: '1', title: 'Beber água', description: 'Beba 2L', category: 'hydration', duration: 5 },
        { id: '2', title: 'Caminhar', description: 'Caminhe 30 min', category: 'movement', duration: 30 },
      ],
      weeklyGoals: [
        { id: '1', title: 'Meta semanal', description: 'Complete as tarefas', week: 1, category: 'hydration', target: 7, unit: 'dias' },
      ],
      milestones: [
        { id: '1', title: 'Primeira conquista', description: 'Complete 7 dias' },
      ],
    },
    2: {
      title: 'Expansão',
      subtitle: 'Expandindo horizontes',
      description: 'Segundo mês do protocolo.',
      dailyTasks: [],
      weeklyGoals: [],
      milestones: [],
    },
    3: {
      title: 'Integração',
      subtitle: 'Integrando hábitos',
      description: 'Terceiro mês do protocolo.',
      dailyTasks: [],
      weeklyGoals: [],
      milestones: [],
    },
  },
}))

// Mock icons with proper URI objects
jest.mock('../../constants/icons', () => ({
  pillarIcons: {
    hydration: { uri: 'https://example.com/hydration.png' },
    nutrition: { uri: 'https://example.com/nutrition.png' },
    movement: { uri: 'https://example.com/movement.png' },
    sleep: { uri: 'https://example.com/sleep.png' },
    supplements: { uri: 'https://example.com/supplements.png' },
    mindfulness: { uri: 'https://example.com/mindfulness.png' },
    social: { uri: 'https://example.com/social.png' },
    cognitive: { uri: 'https://example.com/cognitive.png' },
  },
  categoryColors: {
    hydration: '#3B82F6',
    nutrition: '#10B981',
    movement: '#F59E0B',
    sleep: '#8B5CF6',
    supplements: '#EC4899',
    mindfulness: '#6366F1',
    social: '#14B8A6',
    cognitive: '#F97316',
  },
  categoryLabels: {
    hydration: 'Hidratação',
    nutrition: 'Nutrição',
    movement: 'Movimento',
    sleep: 'Sono',
    supplements: 'Suplementos',
    mindfulness: 'Mindfulness',
    social: 'Social',
    cognitive: 'Cognitivo',
  },
}))

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
}

const mockRoute = {
  params: { month: 1 },
}

describe('MonthDetailScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders without crashing', () => {
      expect(() =>
        render(
          <MonthDetailScreen
            route={mockRoute as any}
            navigation={mockNavigation as any}
          />
        )
      ).not.toThrow()
    })

    it('renders month information', () => {
      const { toJSON } = render(
        <MonthDetailScreen
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Fundação')
    })

    it('renders tabs', () => {
      const { toJSON } = render(
        <MonthDetailScreen
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Tarefas')
    })

    it('renders goals tab', () => {
      const { toJSON } = render(
        <MonthDetailScreen
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Metas')
    })

    it('renders milestones tab', () => {
      const { toJSON } = render(
        <MonthDetailScreen
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Conquistas')
    })
  })

  describe('with different months', () => {
    it('renders month 1 correctly', () => {
      const route = { params: { month: 1 } }
      const { toJSON } = render(
        <MonthDetailScreen
          route={route as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Fundação')
    })

    it('renders month 2 correctly', () => {
      const route = { params: { month: 2 } }
      const { toJSON } = render(
        <MonthDetailScreen
          route={route as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Expansão')
    })

    it('renders month 3 correctly', () => {
      const route = { params: { month: 3 } }
      const { toJSON } = render(
        <MonthDetailScreen
          route={route as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Integração')
    })
  })

  describe('completion tracking', () => {
    it('shows completion percentage', () => {
      const { toJSON } = render(
        <MonthDetailScreen
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      // Should show some percentage indicator
      expect(json).toContain('%')
    })
  })

  describe('task display', () => {
    it('renders task list', () => {
      const { toJSON } = render(
        <MonthDetailScreen
          route={mockRoute as any}
          navigation={mockNavigation as any}
        />
      )
      const json = JSON.stringify(toJSON())

      // Task section should be visible by default
      expect(json).toContain('Tarefas Diarias')
    })
  })

  describe('props', () => {
    it('accepts route with month param', () => {
      const route = { params: { month: 2 } }
      expect(() =>
        render(
          <MonthDetailScreen
            route={route as any}
            navigation={mockNavigation as any}
          />
        )
      ).not.toThrow()
    })

    it('accepts navigation prop', () => {
      expect(() =>
        render(
          <MonthDetailScreen
            route={mockRoute as any}
            navigation={mockNavigation as any}
          />
        )
      ).not.toThrow()
    })
  })
})
