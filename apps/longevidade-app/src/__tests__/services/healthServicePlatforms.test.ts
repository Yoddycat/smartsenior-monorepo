/**
 * Health Service Platform Implementations Tests
 * Module and interface tests only
 */

describe('Health Service Platforms', () => {
  describe('iOS Health Service', () => {
    it('can be imported', () => {
      const module = require('../../services/health/healthService.ios')
      expect(module).toBeDefined()
    })

    it('exports healthService', () => {
      const { healthService } = require('../../services/health/healthService.ios')
      expect(healthService).toBeDefined()
    })

    it('has isAvailable method', () => {
      const { healthService } = require('../../services/health/healthService.ios')
      expect(typeof healthService.isAvailable).toBe('function')
    })

    it('has requestPermissions method', () => {
      const { healthService } = require('../../services/health/healthService.ios')
      expect(typeof healthService.requestPermissions).toBe('function')
    })

    it('has getSteps method', () => {
      const { healthService } = require('../../services/health/healthService.ios')
      expect(typeof healthService.getSteps).toBe('function')
    })

    it('has getHeartRate method', () => {
      const { healthService } = require('../../services/health/healthService.ios')
      expect(typeof healthService.getHeartRate).toBe('function')
    })

    it('has getHRV method', () => {
      const { healthService } = require('../../services/health/healthService.ios')
      expect(typeof healthService.getHRV).toBe('function')
    })

    it('has getSleep method', () => {
      const { healthService } = require('../../services/health/healthService.ios')
      expect(typeof healthService.getSleep).toBe('function')
    })
  })

  describe('Android Health Service', () => {
    it('can be imported', () => {
      const module = require('../../services/health/healthService.android')
      expect(module).toBeDefined()
    })

    it('exports healthService', () => {
      const { healthService } = require('../../services/health/healthService.android')
      expect(healthService).toBeDefined()
    })

    it('has isAvailable method', () => {
      const { healthService } = require('../../services/health/healthService.android')
      expect(typeof healthService.isAvailable).toBe('function')
    })

    it('has requestPermissions method', () => {
      const { healthService } = require('../../services/health/healthService.android')
      expect(typeof healthService.requestPermissions).toBe('function')
    })

    it('has getSteps method', () => {
      const { healthService } = require('../../services/health/healthService.android')
      expect(typeof healthService.getSteps).toBe('function')
    })

    it('has getHeartRate method', () => {
      const { healthService } = require('../../services/health/healthService.android')
      expect(typeof healthService.getHeartRate).toBe('function')
    })

    it('has getHRV method', () => {
      const { healthService } = require('../../services/health/healthService.android')
      expect(typeof healthService.getHRV).toBe('function')
    })

    it('has getSleep method', () => {
      const { healthService } = require('../../services/health/healthService.android')
      expect(typeof healthService.getSleep).toBe('function')
    })
  })

  describe('Mock Health Service', () => {
    it('can be imported', () => {
      const module = require('../../services/health/healthService.mock')
      expect(module).toBeDefined()
    })

    it('exports healthService', () => {
      const { healthService } = require('../../services/health/healthService.mock')
      expect(healthService).toBeDefined()
    })

    it('has isAvailable method', () => {
      const { healthService } = require('../../services/health/healthService.mock')
      expect(typeof healthService.isAvailable).toBe('function')
    })

    it('has requestPermissions method', () => {
      const { healthService } = require('../../services/health/healthService.mock')
      expect(typeof healthService.requestPermissions).toBe('function')
    })

    it('has getSteps method', () => {
      const { healthService } = require('../../services/health/healthService.mock')
      expect(typeof healthService.getSteps).toBe('function')
    })

    it('has getHeartRate method', () => {
      const { healthService } = require('../../services/health/healthService.mock')
      expect(typeof healthService.getHeartRate).toBe('function')
    })

    it('has getHRV method', () => {
      const { healthService } = require('../../services/health/healthService.mock')
      expect(typeof healthService.getHRV).toBe('function')
    })

    it('has getSleep method', () => {
      const { healthService } = require('../../services/health/healthService.mock')
      expect(typeof healthService.getSleep).toBe('function')
    })

    it('exports setMockRecoveryMode helper', () => {
      const { setMockRecoveryMode } = require('../../services/health/healthService.mock')
      expect(typeof setMockRecoveryMode).toBe('function')
    })

    it('exports setMockBaseValues helper', () => {
      const { setMockBaseValues } = require('../../services/health/healthService.mock')
      expect(typeof setMockBaseValues).toBe('function')
    })
  })

  describe('Web Health Service', () => {
    it('can be imported', () => {
      const module = require('../../services/health/healthService.web')
      expect(module).toBeDefined()
    })

    it('exports healthService', () => {
      const { healthService } = require('../../services/health/healthService.web')
      expect(healthService).toBeDefined()
    })

    it('has isAvailable method', () => {
      const { healthService } = require('../../services/health/healthService.web')
      expect(typeof healthService.isAvailable).toBe('function')
    })

    it('has requestPermissions method', () => {
      const { healthService } = require('../../services/health/healthService.web')
      expect(typeof healthService.requestPermissions).toBe('function')
    })

    it('has getSteps method', () => {
      const { healthService } = require('../../services/health/healthService.web')
      expect(typeof healthService.getSteps).toBe('function')
    })

    it('has getHeartRate method', () => {
      const { healthService } = require('../../services/health/healthService.web')
      expect(typeof healthService.getHeartRate).toBe('function')
    })

    it('has getHRV method', () => {
      const { healthService } = require('../../services/health/healthService.web')
      expect(typeof healthService.getHRV).toBe('function')
    })

    it('has getSleep method', () => {
      const { healthService } = require('../../services/health/healthService.web')
      expect(typeof healthService.getSleep).toBe('function')
    })
  })

  describe('Health Service Index', () => {
    it('can be imported', () => {
      const module = require('../../services/health')
      expect(module).toBeDefined()
    })

    it('exports healthService', () => {
      const { healthService } = require('../../services/health')
      expect(healthService).toBeDefined()
    })
  })
})
