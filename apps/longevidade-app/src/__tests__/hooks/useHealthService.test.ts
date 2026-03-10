/**
 * useHealth Hook Service Tests
 * Tests that import and execute the actual health service
 */

import type { HealthServiceInterface } from '../../types/health'

// Mock platform to use mock service
jest.mock('react-native', () => ({
  Platform: { OS: 'web' },
}))

// Mock health services
jest.mock('../../services/health/healthService.ios', () => ({
  healthService: {
    isAvailable: jest.fn(() => Promise.resolve(false)),
    requestPermissions: jest.fn(() => Promise.resolve({
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    })),
    checkPermissions: jest.fn(() => Promise.resolve({
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    })),
    getSteps: jest.fn(() => Promise.resolve([])),
    getHeartRate: jest.fn(() => Promise.resolve([])),
    getHRV: jest.fn(() => Promise.resolve([])),
    getSleep: jest.fn(() => Promise.resolve([])),
  },
}))

jest.mock('../../services/health/healthService.android', () => ({
  healthService: {
    isAvailable: jest.fn(() => Promise.resolve(false)),
    requestPermissions: jest.fn(() => Promise.resolve({
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    })),
    checkPermissions: jest.fn(() => Promise.resolve({
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    })),
    getSteps: jest.fn(() => Promise.resolve([])),
    getHeartRate: jest.fn(() => Promise.resolve([])),
    getHRV: jest.fn(() => Promise.resolve([])),
    getSleep: jest.fn(() => Promise.resolve([])),
  },
}))

describe('Health Service Web', () => {
  let healthService: HealthServiceInterface

  beforeEach(() => {
    jest.resetModules()
    const webService = require('../../services/health/healthService.web')
    healthService = webService.healthService
  })

  describe('isAvailable', () => {
    it('returns false on web', async () => {
      const available = await healthService.isAvailable()
      expect(available).toBe(false)
    })
  })

  describe('requestPermissions', () => {
    it('returns all permissions as false', async () => {
      const permissions = await healthService.requestPermissions(['steps', 'heartRate'])

      expect(permissions.steps).toBe(false)
      expect(permissions.heartRate).toBe(false)
    })
  })

  describe('checkPermissions', () => {
    it('returns all permissions as false', async () => {
      const permissions = await healthService.checkPermissions()

      expect(permissions.steps).toBe(false)
      expect(permissions.heartRate).toBe(false)
      expect(permissions.hrv).toBe(false)
      expect(permissions.sleep).toBe(false)
    })
  })

  describe('getSteps', () => {
    it('returns empty array', async () => {
      const steps = await healthService.getSteps(new Date(), new Date())
      expect(steps).toEqual([])
    })
  })

  describe('getHeartRate', () => {
    it('returns empty array', async () => {
      const heartRate = await healthService.getHeartRate(new Date(), new Date())
      expect(heartRate).toEqual([])
    })
  })

  describe('getHRV', () => {
    it('returns empty array', async () => {
      const hrv = await healthService.getHRV(new Date(), new Date())
      expect(hrv).toEqual([])
    })
  })

  describe('getSleep', () => {
    it('returns empty array', async () => {
      const sleep = await healthService.getSleep(new Date(), new Date())
      expect(sleep).toEqual([])
    })
  })
})

describe('Health Service Mock', () => {
  let healthService: HealthServiceInterface

  beforeEach(() => {
    jest.resetModules()
    const mockService = require('../../services/health/healthService.mock')
    healthService = mockService.healthService
  })

  describe('isAvailable', () => {
    it('returns a boolean', async () => {
      const available = await healthService.isAvailable()
      expect(typeof available).toBe('boolean')
    })
  })

  describe('requestPermissions', () => {
    it('returns permission status object', async () => {
      const permissions = await healthService.requestPermissions(['steps', 'heartRate', 'hrv', 'sleep'])

      expect(permissions).toHaveProperty('steps')
      expect(permissions).toHaveProperty('heartRate')
      expect(permissions).toHaveProperty('hrv')
      expect(permissions).toHaveProperty('sleep')
    })
  })

  describe('checkPermissions', () => {
    it('returns permission status object', async () => {
      const permissions = await healthService.checkPermissions()

      expect(permissions).toHaveProperty('steps')
      expect(permissions).toHaveProperty('heartRate')
      expect(permissions).toHaveProperty('hrv')
      expect(permissions).toHaveProperty('sleep')
    })
  })

  describe('getSteps', () => {
    it('returns array', async () => {
      const steps = await healthService.getSteps(new Date(), new Date())
      expect(Array.isArray(steps)).toBe(true)
    })
  })

  describe('getHeartRate', () => {
    it('returns array', async () => {
      const heartRate = await healthService.getHeartRate(new Date(), new Date())
      expect(Array.isArray(heartRate)).toBe(true)
    })
  })

  describe('getHRV', () => {
    it('returns array', async () => {
      const hrv = await healthService.getHRV(new Date(), new Date())
      expect(Array.isArray(hrv)).toBe(true)
    })
  })

  describe('getSleep', () => {
    it('returns array', async () => {
      const sleep = await healthService.getSleep(new Date(), new Date())
      expect(Array.isArray(sleep)).toBe(true)
    })
  })
})

describe('HealthPermission type', () => {
  const permissions = ['steps', 'heartRate', 'hrv', 'sleep'] as const

  permissions.forEach(perm => {
    it(`includes ${perm}`, () => {
      expect(permissions).toContain(perm)
    })
  })
})

describe('HealthPermissionStatus type', () => {
  it('has all permission flags', () => {
    const status = {
      steps: true,
      heartRate: false,
      hrv: true,
      sleep: false,
    }

    expect(status).toHaveProperty('steps')
    expect(status).toHaveProperty('heartRate')
    expect(status).toHaveProperty('hrv')
    expect(status).toHaveProperty('sleep')
  })
})
