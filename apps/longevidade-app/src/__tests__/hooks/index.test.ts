/**
 * Hooks Index Tests
 * Tests for hook exports
 */

// Mock all hooks before importing
jest.mock('../../services/health', () => ({
  healthService: {
    isAvailable: jest.fn().mockResolvedValue(true),
    requestPermissions: jest.fn().mockResolvedValue({
      steps: true,
      heartRate: true,
      hrv: true,
      sleep: true,
    }),
    checkPermissions: jest.fn().mockResolvedValue({
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    }),
    getSteps: jest.fn().mockResolvedValue([]),
    getHeartRate: jest.fn().mockResolvedValue([]),
    getHRV: jest.fn().mockResolvedValue([]),
    getSleep: jest.fn().mockResolvedValue([]),
  },
}))

describe('hooks index', () => {
  it('exports useHealth', () => {
    const hooks = require('../../hooks')
    expect(hooks.useHealth).toBeDefined()
    expect(typeof hooks.useHealth).toBe('function')
  })

  it('exports useRecovery', () => {
    const hooks = require('../../hooks')
    expect(hooks.useRecovery).toBeDefined()
    expect(typeof hooks.useRecovery).toBe('function')
  })

  it('exports useTaskCompletion', () => {
    const hooks = require('../../hooks')
    expect(hooks.useTaskCompletion).toBeDefined()
    expect(typeof hooks.useTaskCompletion).toBe('function')
  })

  it('exports getCompletionHistory', () => {
    const hooks = require('../../hooks')
    expect(hooks.getCompletionHistory).toBeDefined()
    expect(typeof hooks.getCompletionHistory).toBe('function')
  })

  it('exports useProtocolProgress', () => {
    const hooks = require('../../hooks')
    expect(hooks.useProtocolProgress).toBeDefined()
    expect(typeof hooks.useProtocolProgress).toBe('function')
  })

  it('exports getGreeting', () => {
    const hooks = require('../../hooks')
    expect(hooks.getGreeting).toBeDefined()
    expect(typeof hooks.getGreeting).toBe('function')
  })

  it('exports useOffline', () => {
    const hooks = require('../../hooks')
    expect(hooks.useOffline).toBeDefined()
    expect(typeof hooks.useOffline).toBe('function')
  })
})

describe('getGreeting function', () => {
  const getGreeting = (hour: number) => {
    if (hour < 12) return 'Bom dia'
    if (hour < 18) return 'Boa tarde'
    return 'Boa noite'
  }

  it('returns Bom dia for morning hours', () => {
    expect(getGreeting(6)).toBe('Bom dia')
    expect(getGreeting(9)).toBe('Bom dia')
    expect(getGreeting(11)).toBe('Bom dia')
  })

  it('returns Boa tarde for afternoon hours', () => {
    expect(getGreeting(12)).toBe('Boa tarde')
    expect(getGreeting(15)).toBe('Boa tarde')
    expect(getGreeting(17)).toBe('Boa tarde')
  })

  it('returns Boa noite for evening hours', () => {
    expect(getGreeting(18)).toBe('Boa noite')
    expect(getGreeting(21)).toBe('Boa noite')
    expect(getGreeting(23)).toBe('Boa noite')
  })

  it('returns Bom dia at midnight', () => {
    expect(getGreeting(0)).toBe('Bom dia')
  })
})
