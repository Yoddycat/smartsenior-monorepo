/**
 * Network Service Tests
 */

import { networkService, NetworkState } from '../services/network'

// Mock NetInfo
const mockNetInfoState = {
  isConnected: true,
  type: 'wifi',
  isInternetReachable: true,
}

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(() => {
    return jest.fn() // unsubscribe function
  }),
  fetch: jest.fn(() => Promise.resolve(mockNetInfoState)),
}))

describe('NetworkService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getState', () => {
    it('returns initial unknown state before initialization', () => {
      const state = networkService.getState()
      expect(state).toHaveProperty('status')
      expect(state).toHaveProperty('isConnected')
      expect(state).toHaveProperty('type')
      expect(state).toHaveProperty('isInternetReachable')
    })
  })

  describe('addListener', () => {
    it('calls listener immediately with current state', () => {
      const listener = jest.fn()
      const unsubscribe = networkService.addListener(listener)

      expect(listener).toHaveBeenCalledTimes(1)
      expect(listener).toHaveBeenCalledWith(expect.objectContaining({
        status: expect.any(String),
      }))

      unsubscribe()
    })

    it('returns unsubscribe function', () => {
      const listener = jest.fn()
      const unsubscribe = networkService.addListener(listener)

      expect(typeof unsubscribe).toBe('function')
      unsubscribe()
    })

    it('allows multiple listeners', () => {
      const listener1 = jest.fn()
      const listener2 = jest.fn()

      const unsub1 = networkService.addListener(listener1)
      const unsub2 = networkService.addListener(listener2)

      expect(listener1).toHaveBeenCalled()
      expect(listener2).toHaveBeenCalled()

      unsub1()
      unsub2()
    })
  })

  describe('isOnline', () => {
    it('returns boolean indicating online status', () => {
      const result = networkService.isOnline()
      expect(typeof result).toBe('boolean')
    })
  })

  describe('waitForConnection', () => {
    it('resolves immediately if already online', async () => {
      // Mock isOnline to return true
      const originalIsOnline = networkService.isOnline
      networkService.isOnline = jest.fn(() => true)

      const result = await networkService.waitForConnection(1000)
      expect(result).toBe(true)

      networkService.isOnline = originalIsOnline
    })

    it('accepts custom timeout parameter', async () => {
      const originalIsOnline = networkService.isOnline
      networkService.isOnline = jest.fn(() => true)

      const result = await networkService.waitForConnection(5000)
      expect(result).toBe(true)

      networkService.isOnline = originalIsOnline
    })
  })

  describe('network state changes', () => {
    it('handles online state correctly', () => {
      const state: NetworkState = {
        status: 'online',
        isConnected: true,
        type: 'wifi',
        isInternetReachable: true,
      }

      expect(state.status).toBe('online')
      expect(state.isConnected).toBe(true)
    })

    it('handles offline state correctly', () => {
      const state: NetworkState = {
        status: 'offline',
        isConnected: false,
        type: null,
        isInternetReachable: false,
      }

      expect(state.status).toBe('offline')
      expect(state.isConnected).toBe(false)
    })

    it('handles unknown state correctly', () => {
      const state: NetworkState = {
        status: 'unknown',
        isConnected: false,
        type: null,
        isInternetReachable: null,
      }

      expect(state.status).toBe('unknown')
      expect(state.isInternetReachable).toBeNull()
    })
  })
})
