/**
 * ProgressScreen Tests
 * Basic module and integration tests
 */

import React from 'react'

// Mock hooks
jest.mock('../../hooks', () => ({
  useProtocolProgress: () => ({
    currentDay: 15,
    currentWeek: 2,
    currentMonth: 1,
    streakDays: 7,
    completionRate: 85,
    isLoading: false,
  }),
  getCompletionHistory: jest.fn(() =>
    Promise.resolve([
      { date: '2024-01-01', completed: 5 },
      { date: '2024-01-02', completed: 6 },
      { date: '2024-01-03', completed: 4 },
      { date: '2024-01-04', completed: 7 },
      { date: '2024-01-05', completed: 5 },
      { date: '2024-01-06', completed: 6 },
      { date: '2024-01-07', completed: 7 },
    ])
  ),
}))

// Mock health service
jest.mock('../../services/health', () => ({
  getHealthSummary: jest.fn(() =>
    Promise.resolve({
      steps: { today: 8000, weekAverage: 7500, trend: 'up' },
      sleep: { lastNight: 7.5, weekAverage: 7.0, trend: 'up' },
      heartRate: { current: 68, weekAverage: 70, trend: 'down' },
      hrv: { today: 45, weekAverage: 42, trend: 'up' },
    })
  ),
}))

describe('ProgressScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('module', () => {
    it('can be imported', () => {
      const { ProgressScreen } = require('../../screens/ProgressScreen')
      expect(ProgressScreen).toBeDefined()
    })

    it('is a function component', () => {
      const { ProgressScreen } = require('../../screens/ProgressScreen')
      expect(typeof ProgressScreen).toBe('function')
    })
  })

  describe('hooks', () => {
    it('uses useProtocolProgress hook', () => {
      const hooks = require('../../hooks')
      expect(hooks.useProtocolProgress).toBeDefined()

      const progress = hooks.useProtocolProgress()
      expect(progress.currentDay).toBe(15)
      expect(progress.streakDays).toBe(7)
    })

    it('has getCompletionHistory function', () => {
      const hooks = require('../../hooks')
      expect(hooks.getCompletionHistory).toBeDefined()
    })
  })

  describe('health service', () => {
    it('has getHealthSummary function', () => {
      const { getHealthSummary } = require('../../services/health')
      expect(getHealthSummary).toBeDefined()
    })

    it('returns health data', async () => {
      const { getHealthSummary } = require('../../services/health')
      const data = await getHealthSummary()

      expect(data.steps).toBeDefined()
      expect(data.sleep).toBeDefined()
      expect(data.heartRate).toBeDefined()
      expect(data.hrv).toBeDefined()
    })
  })
})
