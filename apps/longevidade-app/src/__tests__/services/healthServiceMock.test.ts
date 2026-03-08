/**
 * Health Service Mock Tests
 * Tests for mock health service functionality
 */

import { healthService, setMockRecoveryMode, setMockBaseValues } from '../../services/health/healthService.mock'

describe('MockHealthService', () => {
  describe('isAvailable', () => {
    it('returns true', async () => {
      const available = await healthService.isAvailable()
      expect(available).toBe(true)
    })
  })

  describe('requestPermissions', () => {
    it('grants all permissions', async () => {
      const status = await healthService.requestPermissions(['steps', 'heartRate', 'hrv', 'sleep'])
      expect(status.steps).toBe(true)
      expect(status.heartRate).toBe(true)
      expect(status.hrv).toBe(true)
      expect(status.sleep).toBe(true)
    })
  })

  describe('checkPermissions', () => {
    it('returns permission status', async () => {
      await healthService.requestPermissions(['steps'])
      const status = await healthService.checkPermissions()
      expect(status).toHaveProperty('steps')
      expect(status).toHaveProperty('heartRate')
      expect(status).toHaveProperty('hrv')
      expect(status).toHaveProperty('sleep')
    })
  })

  describe('getSteps', () => {
    it('returns steps data for date range', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 1)
      const steps = await healthService.getSteps(startDate, endDate)
      expect(Array.isArray(steps)).toBe(true)
    })

    it('steps have date and value', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 1)
      const steps = await healthService.getSteps(startDate, endDate)
      if (steps.length > 0) {
        expect(steps[0]).toHaveProperty('date')
        expect(steps[0]).toHaveProperty('value')
        expect(typeof steps[0].value).toBe('number')
      }
    })
  })

  describe('getHeartRate', () => {
    it('returns heart rate data', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 1)
      const readings = await healthService.getHeartRate(startDate, endDate)
      expect(Array.isArray(readings)).toBe(true)
    })

    it('heart rate readings have correct structure', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 1)
      const readings = await healthService.getHeartRate(startDate, endDate)
      if (readings.length > 0) {
        expect(readings[0]).toHaveProperty('date')
        expect(readings[0]).toHaveProperty('value')
      }
    })
  })

  describe('getHRV', () => {
    it('returns HRV data', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 3)
      const readings = await healthService.getHRV(startDate, endDate)
      expect(Array.isArray(readings)).toBe(true)
    })

    it('HRV readings are positive numbers', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 3)
      const readings = await healthService.getHRV(startDate, endDate)
      readings.forEach((reading) => {
        expect(reading.value).toBeGreaterThan(0)
      })
    })
  })

  describe('getSleep', () => {
    it('returns sleep data', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 3)
      const sleepData = await healthService.getSleep(startDate, endDate)
      expect(Array.isArray(sleepData)).toBe(true)
    })

    it('sleep data has required fields', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 3)
      const sleepData = await healthService.getSleep(startDate, endDate)
      if (sleepData.length > 0) {
        expect(sleepData[0]).toHaveProperty('startDate')
        expect(sleepData[0]).toHaveProperty('endDate')
        expect(sleepData[0]).toHaveProperty('durationMinutes')
        expect(sleepData[0]).toHaveProperty('stages')
      }
    })

    it('sleep stages are valid', async () => {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 3)
      const sleepData = await healthService.getSleep(startDate, endDate)
      const validStages = ['awake', 'light', 'deep', 'rem', 'unknown']
      sleepData.forEach((session) => {
        session.stages?.forEach((stage) => {
          expect(validStages).toContain(stage.stage)
        })
      })
    })
  })
})

describe('Mock configuration functions', () => {
  describe('setMockRecoveryMode', () => {
    it('accepts boolean and reduction', () => {
      expect(() => setMockRecoveryMode(true, 0.3)).not.toThrow()
      expect(() => setMockRecoveryMode(false)).not.toThrow()
    })
  })

  describe('setMockBaseValues', () => {
    it('accepts partial config', () => {
      expect(() => setMockBaseValues({ baseStepsPerDay: 8000 })).not.toThrow()
      expect(() => setMockBaseValues({ baseHeartRate: 75 })).not.toThrow()
    })
  })
})

describe('Helper functions behavior', () => {
  describe('randomWithVariation logic', () => {
    it('base value with 0% variation equals base', () => {
      const base = 100
      const variation = 0
      const min = base * (1 - variation)
      const max = base * (1 + variation)
      expect(min).toBe(base)
      expect(max).toBe(base)
    })

    it('base value with variation has range', () => {
      const base = 100
      const variation = 0.2
      const min = base * (1 - variation)
      const max = base * (1 + variation)
      expect(min).toBe(80)
      expect(max).toBe(120)
    })
  })

  describe('dateAtHour logic', () => {
    it('creates date at specific hour', () => {
      const daysAgo = 1
      const hour = 10
      const date = new Date()
      date.setDate(date.getDate() - daysAgo)
      date.setHours(hour, 0, 0, 0)
      expect(date.getHours()).toBe(hour)
    })
  })
})

describe('Sleep stages generation', () => {
  it('generates multiple stages for sleep session', async () => {
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 3)
    const sleepData = await healthService.getSleep(startDate, endDate)
    sleepData.forEach((session) => {
      expect(session.stages?.length ?? 0).toBeGreaterThan(0)
    })
  })

  it('stages have start and end dates', async () => {
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 3)
    const sleepData = await healthService.getSleep(startDate, endDate)
    sleepData.forEach((session) => {
      session.stages?.forEach((stage) => {
        expect(stage.startDate).toBeDefined()
        expect(stage.endDate).toBeDefined()
      })
    })
  })
})
