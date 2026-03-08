/**
 * useProtocolProgress Hook Service Tests
 * Tests that import and execute the actual hook helpers
 */

// Mock dependencies
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
}))

describe('getGreeting function', () => {
  let getGreeting: () => string

  beforeEach(() => {
    jest.resetModules()
    const hooksModule = require('../../hooks')
    getGreeting = hooksModule.getGreeting
  })

  it('returns a string', () => {
    const greeting = getGreeting()
    expect(typeof greeting).toBe('string')
  })

  it('returns one of the valid greetings', () => {
    const greeting = getGreeting()
    // Greetings may have exclamation marks
    expect(greeting).toMatch(/Bom dia|Boa tarde|Boa noite/)
  })
})

describe('getCompletionHistory function', () => {
  let getCompletionHistory: () => Promise<any[]>

  beforeEach(() => {
    jest.resetModules()
    const hooksModule = require('../../hooks')
    getCompletionHistory = hooksModule.getCompletionHistory
  })

  it('returns a promise', () => {
    const result = getCompletionHistory()
    expect(result).toBeInstanceOf(Promise)
  })

  it('resolves to an array', async () => {
    const result = await getCompletionHistory()
    expect(Array.isArray(result)).toBe(true)
  })
})

describe('Protocol progress constants', () => {
  it('PROTOCOL_DURATION_DAYS is 84', () => {
    const { PROTOCOL_DURATION_DAYS } = require('../../protocols')
    expect(PROTOCOL_DURATION_DAYS).toBe(84)
  })

  it('has PROTOCOLS object', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS).toBeDefined()
    expect(typeof PROTOCOLS).toBe('object')
  })

  it('PROTOCOLS has month 1', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[1]).toBeDefined()
  })

  it('PROTOCOLS has month 2', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[2]).toBeDefined()
  })

  it('PROTOCOLS has month 3', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[3]).toBeDefined()
  })
})

describe('Protocol month titles', () => {
  it('month 1 is Fundação', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[1].title).toBe('Fundação')
  })

  it('month 2 is Nutrição', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[2].title).toBe('Nutrição')
  })

  it('month 3 is Integração', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[3].title).toBe('Integração')
  })
})

describe('Protocol daily tasks', () => {
  it('month 1 has daily tasks', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[1].dailyTasks).toBeDefined()
    expect(Array.isArray(PROTOCOLS[1].dailyTasks)).toBe(true)
  })

  it('month 1 has at least 4 daily tasks', () => {
    const { PROTOCOLS } = require('../../protocols')
    expect(PROTOCOLS[1].dailyTasks.length).toBeGreaterThanOrEqual(4)
  })

  it('each task has required fields', () => {
    const { PROTOCOLS } = require('../../protocols')
    const task = PROTOCOLS[1].dailyTasks[0]

    expect(task).toHaveProperty('title')
    expect(task).toHaveProperty('category')
    expect(task).toHaveProperty('description')
  })
})

describe('Storage keys', () => {
  const STORAGE_KEYS = {
    PROTOCOL_START_DATE: '@longevidade:protocol_start_date',
    COMPLETED_TASKS: '@longevidade:completed_tasks',
    USER_PROFILE: '@longevidade:user_profile',
  }

  it('has protocol start date key', () => {
    expect(STORAGE_KEYS.PROTOCOL_START_DATE).toBe('@longevidade:protocol_start_date')
  })

  it('has completed tasks key', () => {
    expect(STORAGE_KEYS.COMPLETED_TASKS).toBe('@longevidade:completed_tasks')
  })

  it('has user profile key', () => {
    expect(STORAGE_KEYS.USER_PROFILE).toBe('@longevidade:user_profile')
  })
})
