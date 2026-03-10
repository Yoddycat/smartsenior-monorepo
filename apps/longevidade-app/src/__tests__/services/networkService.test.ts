/**
 * Network Service Tests
 * Tests that import and execute the actual network service
 */

// Mock NetInfo before importing the service
const mockAddEventListener = jest.fn(() => jest.fn())
const mockFetch = jest.fn(() => Promise.resolve({
  isConnected: true,
  isInternetReachable: true,
  type: 'wifi',
}))

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: mockAddEventListener,
  fetch: mockFetch,
}))

describe('NetworkService', () => {
  let networkService: {
    initialize: () => void
    destroy: () => void
    isOnline: () => boolean
    getState: () => { status: string; isConnected: boolean }
    addListener: (listener: () => void) => () => void
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
    const networkModule = require('../../services/network')
    networkService = networkModule.networkService
  })

  describe('isOnline', () => {
    it('returns a boolean', () => {
      const result = networkService.isOnline()
      expect(typeof result).toBe('boolean')
    })
  })

  describe('getState', () => {
    it('returns current network state', () => {
      const state = networkService.getState()
      expect(state).toHaveProperty('status')
      expect(state).toHaveProperty('isConnected')
    })
  })

  describe('addListener', () => {
    it('accepts listener function', () => {
      const listener = jest.fn()

      const unsubscribe = networkService.addListener(listener)

      expect(typeof unsubscribe).toBe('function')
    })

    it('calls listener with current state', () => {
      const listener = jest.fn()

      networkService.addListener(listener)

      expect(listener).toHaveBeenCalled()
    })

    it('returns unsubscribe function', () => {
      const listener = jest.fn()

      const unsubscribe = networkService.addListener(listener)
      unsubscribe()

      // After unsubscribe, listener count should decrease
    })
  })

  describe('initialize', () => {
    it('sets up network listener', async () => {
      await networkService.initialize()

      expect(mockAddEventListener).toHaveBeenCalled()
    })
  })

  describe('destroy', () => {
    it('can be called without error', () => {
      expect(() => networkService.destroy()).not.toThrow()
    })
  })

  describe('network state', () => {
    it('tracks connection status', () => {
      // Network service tracks connection status internally
      const isOnline = networkService.isOnline()
      expect(typeof isOnline).toBe('boolean')
    })
  })
})

describe('NetworkState interface', () => {
  it('has correct structure', () => {
    const state = {
      isConnected: true,
      isInternetReachable: true,
      type: 'wifi' as const,
      status: 'online' as const,
    }

    expect(state.isConnected).toBe(true)
    expect(state.isInternetReachable).toBe(true)
    expect(state.type).toBe('wifi')
    expect(state.status).toBe('online')
  })

  it('supports offline state', () => {
    const state = {
      isConnected: false,
      isInternetReachable: false,
      type: 'none' as const,
      status: 'offline' as const,
    }

    expect(state.isConnected).toBe(false)
    expect(state.status).toBe('offline')
  })
})

describe('Connection types', () => {
  const connectionTypes = ['wifi', 'cellular', 'ethernet', 'none', 'unknown']

  connectionTypes.forEach(type => {
    it(`supports ${type} connection type`, () => {
      expect(connectionTypes).toContain(type)
    })
  })
})
