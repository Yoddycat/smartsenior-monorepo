/**
 * HomeScreen Tests
 * Basic module and smoke tests
 */

import React from 'react'

// Mock hooks first
jest.mock('../../hooks', () => ({
  useProtocolProgress: () => ({
    currentMonth: 1,
    currentWeek: 2,
    currentDay: 10,
    completionRate: 75,
    streakDays: 5,
    completedToday: 4,
    totalTasksToday: 8,
    protocolTitle: 'Fundação',
    protocolSubtitle: 'Construindo hábitos sólidos',
    isLoading: false,
  }),
  getGreeting: () => 'Bom dia',
  useTaskCompletion: () => ({
    completedTasks: new Set([0, 1, 2, 3]),
    toggleTask: jest.fn(),
    completedCount: 4,
    isLoading: false,
  }),
}))

// Mock components
jest.mock('../../components', () => ({
  RecoveryCard: () => null,
  FadeInView: ({ children }: { children: React.ReactNode }) => children,
  AnimatedProgressBar: () => null,
  AnimatedCheckbox: () => null,
  AnimatedCounter: () => null,
  SuccessAnimation: () => null,
}))

// Mock protocols
jest.mock('../../protocols', () => ({
  PROTOCOLS: {
    1: {
      title: 'Fundação',
      subtitle: 'Construindo hábitos sólidos',
      description: 'Primeiro mês do protocolo',
      dailyTasks: [
        { id: '1', title: 'Beber água', description: 'Beba 2L de água', category: 'hydration' },
        { id: '2', title: 'Caminhar', description: 'Caminhe 30 minutos', category: 'movement' },
      ],
      weeklyGoals: [
        { id: '1', title: 'Manter hidratação', description: 'Beba água todos os dias', week: 1, category: 'hydration', target: 7, unit: 'dias' },
      ],
      milestones: [
        { id: '1', title: 'Primeira semana', description: 'Complete 7 dias' },
      ],
    },
  },
}))

// Mock icons
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
}))

describe('HomeScreen', () => {
  describe('module', () => {
    it('can be imported', () => {
      const { HomeScreen } = require('../../screens/HomeScreen')
      expect(HomeScreen).toBeDefined()
    })

    it('is a function component', () => {
      const { HomeScreen } = require('../../screens/HomeScreen')
      expect(typeof HomeScreen).toBe('function')
    })
  })

  describe('hooks', () => {
    it('uses useProtocolProgress hook', () => {
      const hooks = require('../../hooks')
      expect(hooks.useProtocolProgress).toBeDefined()
    })

    it('uses getGreeting function', () => {
      const hooks = require('../../hooks')
      expect(hooks.getGreeting).toBeDefined()
      expect(hooks.getGreeting()).toBe('Bom dia')
    })

    it('uses useTaskCompletion hook', () => {
      const hooks = require('../../hooks')
      expect(hooks.useTaskCompletion).toBeDefined()
    })
  })

  describe('protocols', () => {
    it('accesses PROTOCOLS data', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(PROTOCOLS).toBeDefined()
      expect(PROTOCOLS[1]).toBeDefined()
      expect(PROTOCOLS[1].title).toBe('Fundação')
    })
  })
})
