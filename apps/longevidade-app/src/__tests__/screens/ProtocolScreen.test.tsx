/**
 * ProtocolScreen Tests
 * Basic module and smoke tests
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
        { id: '1', title: 'Beber água', category: 'hydration' },
        { id: '2', title: 'Caminhar', category: 'movement' },
      ],
      weeklyGoals: [],
      milestones: [],
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
      expect(PROTOCOLS[2].title).toBe('Expansão')
      expect(PROTOCOLS[3].title).toBe('Integração')
    })

    it('has subtitles for each month', () => {
      const { PROTOCOLS } = require('../../protocols')
      expect(PROTOCOLS[1].subtitle).toBeDefined()
      expect(PROTOCOLS[2].subtitle).toBeDefined()
      expect(PROTOCOLS[3].subtitle).toBeDefined()
    })
  })
})
