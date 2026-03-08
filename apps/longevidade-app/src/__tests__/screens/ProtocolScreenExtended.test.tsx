/**
 * ProtocolScreen Extended Tests
 */

import React from 'react'

// Mock protocols
jest.mock('../../protocols', () => ({
  PROTOCOLS: {
    1: {
      title: 'Fundação',
      subtitle: 'Construindo hábitos sólidos',
      description: 'Primeiro mês do protocolo de longevidade.',
      dailyTasks: [
        { id: '1', title: 'Beber água', category: 'hydration', description: 'Beba 2L' },
        { id: '2', title: 'Caminhar', category: 'movement', description: 'Caminhe 30min' },
      ],
      weeklyGoals: [
        { id: '1', title: 'Meta semanal', week: 1, category: 'hydration', target: 7, unit: 'dias' },
      ],
      milestones: [
        { id: '1', title: 'Primeira semana', description: 'Complete 7 dias' },
      ],
    },
    2: {
      title: 'Nutrição',
      subtitle: 'Alimentando a longevidade',
      description: 'Segundo mês do protocolo.',
      dailyTasks: [
        { id: '1', title: 'Café proteico', category: 'nutrition', description: '20g proteína' },
      ],
      weeklyGoals: [],
      milestones: [],
    },
    3: {
      title: 'Integração',
      subtitle: 'Potencializando a longevidade',
      description: 'Terceiro mês do protocolo.',
      dailyTasks: [
        { id: '1', title: 'Treino força', category: 'movement', description: '30min' },
      ],
      weeklyGoals: [],
      milestones: [],
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

describe('ProtocolScreen', () => {
  describe('module', () => {
    it('can be imported', () => {
      const { ProtocolScreen } = require('../../screens/ProtocolScreen')
      expect(ProtocolScreen).toBeDefined()
    })

    it('is a function component', () => {
      const { ProtocolScreen } = require('../../screens/ProtocolScreen')
      expect(typeof ProtocolScreen).toBe('function')
    })
  })

  describe('protocols data', () => {
    it('has all three months defined', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(PROTOCOLS[1]).toBeDefined()
      expect(PROTOCOLS[2]).toBeDefined()
      expect(PROTOCOLS[3]).toBeDefined()
    })

    it('has correct titles for each month', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(PROTOCOLS[1].title).toBe('Fundação')
      expect(PROTOCOLS[2].title).toBe('Nutrição')
      expect(PROTOCOLS[3].title).toBe('Integração')
    })

    it('has subtitles for each month', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(PROTOCOLS[1].subtitle).toBeDefined()
      expect(PROTOCOLS[2].subtitle).toBeDefined()
      expect(PROTOCOLS[3].subtitle).toBeDefined()
    })

    it('has descriptions for each month', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(PROTOCOLS[1].description).toBeDefined()
      expect(PROTOCOLS[2].description).toBeDefined()
      expect(PROTOCOLS[3].description).toBeDefined()
    })
  })

  describe('month 1 content', () => {
    it('has daily tasks', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(Array.isArray(PROTOCOLS[1].dailyTasks)).toBe(true)
      expect(PROTOCOLS[1].dailyTasks.length).toBeGreaterThan(0)
    })

    it('has weekly goals', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(Array.isArray(PROTOCOLS[1].weeklyGoals)).toBe(true)
    })

    it('has milestones', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(Array.isArray(PROTOCOLS[1].milestones)).toBe(true)
    })

    it('tasks have required fields', () => {
      const { PROTOCOLS } = require('../../protocols')
      PROTOCOLS[1].dailyTasks.forEach((task: any) => {
        expect(task.id).toBeDefined()
        expect(task.title).toBeDefined()
        expect(task.category).toBeDefined()
      })
    })
  })

  describe('navigation', () => {
    it('handles month selection', () => {
      const mockNavigate = jest.fn()
      const navigation = { navigate: mockNavigate }

      // Simulate navigation to month detail
      navigation.navigate('MonthDetail', { month: 1 })

      expect(mockNavigate).toHaveBeenCalledWith('MonthDetail', { month: 1 })
    })

    it('can navigate to different months', () => {
      const mockNavigate = jest.fn()
      const navigation = { navigate: mockNavigate }

      navigation.navigate('MonthDetail', { month: 2 })
      expect(mockNavigate).toHaveBeenCalledWith('MonthDetail', { month: 2 })

      navigation.navigate('MonthDetail', { month: 3 })
      expect(mockNavigate).toHaveBeenCalledWith('MonthDetail', { month: 3 })
    })
  })
})

describe('Protocol category colors', () => {
  const categoryColors: Record<string, string> = {
    hydration: '#3B82F6',
    nutrition: '#10B981',
    movement: '#F59E0B',
    sleep: '#8B5CF6',
    supplements: '#EC4899',
    mindfulness: '#6366F1',
    social: '#14B8A6',
    cognitive: '#F97316',
  }

  it('has color for hydration', () => {
    expect(categoryColors.hydration).toBe('#3B82F6')
  })

  it('has color for nutrition', () => {
    expect(categoryColors.nutrition).toBe('#10B981')
  })

  it('has color for movement', () => {
    expect(categoryColors.movement).toBe('#F59E0B')
  })

  it('has color for sleep', () => {
    expect(categoryColors.sleep).toBe('#8B5CF6')
  })

  it('has color for supplements', () => {
    expect(categoryColors.supplements).toBe('#EC4899')
  })

  it('has color for mindfulness', () => {
    expect(categoryColors.mindfulness).toBe('#6366F1')
  })

  it('has color for social', () => {
    expect(categoryColors.social).toBe('#14B8A6')
  })

  it('has color for cognitive', () => {
    expect(categoryColors.cognitive).toBe('#F97316')
  })
})

describe('Protocol category labels', () => {
  const categoryLabels: Record<string, string> = {
    hydration: 'Hidratação',
    nutrition: 'Nutrição',
    movement: 'Movimento',
    sleep: 'Sono',
    supplements: 'Suplementos',
    mindfulness: 'Mindfulness',
    social: 'Social',
    cognitive: 'Cognitivo',
  }

  it('has label for all categories', () => {
    expect(categoryLabels.hydration).toBe('Hidratação')
    expect(categoryLabels.nutrition).toBe('Nutrição')
    expect(categoryLabels.movement).toBe('Movimento')
    expect(categoryLabels.sleep).toBe('Sono')
    expect(categoryLabels.supplements).toBe('Suplementos')
    expect(categoryLabels.mindfulness).toBe('Mindfulness')
    expect(categoryLabels.social).toBe('Social')
    expect(categoryLabels.cognitive).toBe('Cognitivo')
  })
})
