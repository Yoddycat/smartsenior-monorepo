/**
 * useOffline Hook Tests
 */

import { renderHook, act } from '@testing-library/react-native'
import { useOffline } from '../hooks/useOffline'

// Mock services
const mockNetworkState = {
  status: 'online' as const,
  isConnected: true,
  type: 'wifi',
  isInternetReachable: true,
}

const mockSyncStatus = {
  pendingCount: 0,
  lastSyncTime: null,
  isSyncing: false,
  lastError: null,
}

jest.mock('../services/network', () => ({
  networkService: {
    getState: jest.fn(() => mockNetworkState),
    addListener: jest.fn((listener) => {
      listener(mockNetworkState)
      return jest.fn()
    }),
  },
}))

jest.mock('../services/syncQueue', () => ({
  syncQueueService: {
    getStatus: jest.fn(() => mockSyncStatus),
    addListener: jest.fn((listener) => {
      listener(mockSyncStatus)
      return jest.fn()
    }),
    forceSync: jest.fn(() => Promise.resolve(true)),
    enqueue: jest.fn(() => Promise.resolve('action-id-123')),
  },
}))

describe('useOffline', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('network state', () => {
    it('returns isOnline as boolean', () => {
      const { result } = renderHook(() => useOffline())

      expect(typeof result.current.isOnline).toBe('boolean')
    })

    it('returns networkStatus', () => {
      const { result } = renderHook(() => useOffline())

      expect(['online', 'offline', 'unknown']).toContain(result.current.networkStatus)
    })

    it('returns connectionType', () => {
      const { result } = renderHook(() => useOffline())

      expect(result.current).toHaveProperty('connectionType')
    })
  })

  describe('sync state', () => {
    it('returns pendingActions count', () => {
      const { result } = renderHook(() => useOffline())

      expect(typeof result.current.pendingActions).toBe('number')
      expect(result.current.pendingActions).toBeGreaterThanOrEqual(0)
    })

    it('returns isSyncing boolean', () => {
      const { result } = renderHook(() => useOffline())

      expect(typeof result.current.isSyncing).toBe('boolean')
    })

    it('returns lastSyncTime as Date or null', () => {
      const { result } = renderHook(() => useOffline())

      expect(
        result.current.lastSyncTime === null ||
        result.current.lastSyncTime instanceof Date
      ).toBe(true)
    })

    it('returns syncError as string or null', () => {
      const { result } = renderHook(() => useOffline())

      expect(
        result.current.syncError === null ||
        typeof result.current.syncError === 'string'
      ).toBe(true)
    })
  })

  describe('actions', () => {
    it('provides forceSync function', () => {
      const { result } = renderHook(() => useOffline())

      expect(typeof result.current.forceSync).toBe('function')
    })

    it('forceSync returns Promise<boolean>', async () => {
      const { result } = renderHook(() => useOffline())

      let syncResult: boolean | undefined
      await act(async () => {
        syncResult = await result.current.forceSync()
      })

      expect(typeof syncResult).toBe('boolean')
    })

    it('provides queueAction function', () => {
      const { result } = renderHook(() => useOffline())

      expect(typeof result.current.queueAction).toBe('function')
    })

    it('queueAction returns Promise<string>', async () => {
      const { result } = renderHook(() => useOffline())

      let actionId: string | undefined
      await act(async () => {
        actionId = await result.current.queueAction('task_completion', { taskId: '1' })
      })

      expect(typeof actionId).toBe('string')
    })

    it('queueAction accepts task_completion type', async () => {
      const { result } = renderHook(() => useOffline())

      await act(async () => {
        await result.current.queueAction('task_completion', {
          taskId: 'task-123',
          completed: true,
        })
      })
    })

    it('queueAction accepts profile_update type', async () => {
      const { result } = renderHook(() => useOffline())

      await act(async () => {
        await result.current.queueAction('profile_update', {
          name: 'Test',
        })
      })
    })

    it('queueAction accepts settings_update type', async () => {
      const { result } = renderHook(() => useOffline())

      await act(async () => {
        await result.current.queueAction('settings_update', {
          notifications: true,
        })
      })
    })
  })

  describe('return type', () => {
    it('returns all expected properties', () => {
      const { result } = renderHook(() => useOffline())

      // Network state
      expect(result.current).toHaveProperty('isOnline')
      expect(result.current).toHaveProperty('networkStatus')
      expect(result.current).toHaveProperty('connectionType')

      // Sync state
      expect(result.current).toHaveProperty('pendingActions')
      expect(result.current).toHaveProperty('isSyncing')
      expect(result.current).toHaveProperty('lastSyncTime')
      expect(result.current).toHaveProperty('syncError')

      // Actions
      expect(result.current).toHaveProperty('forceSync')
      expect(result.current).toHaveProperty('queueAction')
    })
  })
})
