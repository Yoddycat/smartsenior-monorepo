/**
 * Services Index Tests
 * Tests for service exports
 */

// Mock health service
jest.mock('../../services/health', () => ({
  healthService: {
    isAvailable: jest.fn(),
    requestPermissions: jest.fn(),
    checkPermissions: jest.fn(),
    getSteps: jest.fn(),
    getHeartRate: jest.fn(),
    getHRV: jest.fn(),
    getSleep: jest.fn(),
  },
}))

describe('services index', () => {
  it('exports healthService', () => {
    const services = require('../../services')
    expect(services.healthService).toBeDefined()
  })

  it('healthService has isAvailable', () => {
    const services = require('../../services')
    expect(typeof services.healthService.isAvailable).toBe('function')
  })

  it('healthService has requestPermissions', () => {
    const services = require('../../services')
    expect(typeof services.healthService.requestPermissions).toBe('function')
  })

  it('healthService has checkPermissions', () => {
    const services = require('../../services')
    expect(typeof services.healthService.checkPermissions).toBe('function')
  })

  it('healthService has getSteps', () => {
    const services = require('../../services')
    expect(typeof services.healthService.getSteps).toBe('function')
  })

  it('healthService has getHeartRate', () => {
    const services = require('../../services')
    expect(typeof services.healthService.getHeartRate).toBe('function')
  })

  it('healthService has getHRV', () => {
    const services = require('../../services')
    expect(typeof services.healthService.getHRV).toBe('function')
  })

  it('healthService has getSleep', () => {
    const services = require('../../services')
    expect(typeof services.healthService.getSleep).toBe('function')
  })
})

describe('services index - network', () => {
  it('exports networkService', () => {
    const services = require('../../services')
    expect(services.networkService).toBeDefined()
  })
})

describe('services index - syncQueue', () => {
  it('exports syncQueueService', () => {
    const services = require('../../services')
    expect(services.syncQueueService).toBeDefined()
  })
})
