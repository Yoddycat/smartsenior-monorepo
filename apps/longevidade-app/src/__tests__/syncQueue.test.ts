/**
 * Sync Queue Service Tests
 */

import AsyncStorage from '@react-native-async-storage/async-storage'
import { syncQueueService, SyncAction, SyncStatus } from '../services/syncQueue'

// Mock network service
jest.mock('../services/network', () => ({
  networkService: {
    isOnline: jest.fn(() => true),
    addListener: jest.fn(() => jest.fn()),
  },
}))

describe('SyncQueueService', () => {
  beforeEach(async () => {
    jest.clearAllMocks()
    await AsyncStorage.clear()
  })

  describe('getStatus', () => {
    it('returns SyncStatus object', () => {
      const status = syncQueueService.getStatus()

      expect(status).toHaveProperty('pendingCount')
      expect(status).toHaveProperty('lastSyncTime')
      expect(status).toHaveProperty('isSyncing')
      expect(status).toHaveProperty('lastError')
    })

    it('pendingCount is a number', () => {
      const status = syncQueueService.getStatus()
      expect(typeof status.pendingCount).toBe('number')
    })

    it('isSyncing is a boolean', () => {
      const status = syncQueueService.getStatus()
      expect(typeof status.isSyncing).toBe('boolean')
    })
  })

  describe('addListener', () => {
    it('calls listener immediately with current status', () => {
      const listener = jest.fn()
      const unsubscribe = syncQueueService.addListener(listener)

      expect(listener).toHaveBeenCalledTimes(1)
      expect(listener).toHaveBeenCalledWith(expect.objectContaining({
        pendingCount: expect.any(Number),
        isSyncing: expect.any(Boolean),
      }))

      unsubscribe()
    })

    it('returns unsubscribe function', () => {
      const listener = jest.fn()
      const unsubscribe = syncQueueService.addListener(listener)

      expect(typeof unsubscribe).toBe('function')
      unsubscribe()
    })
  })

  describe('enqueue', () => {
    it('returns action id string', async () => {
      const id = await syncQueueService.enqueue('task_completion', { taskId: '123' })

      expect(typeof id).toBe('string')
      expect(id.length).toBeGreaterThan(0)
    })

    it('accepts task_completion type', async () => {
      const id = await syncQueueService.enqueue('task_completion', {
        taskId: 'task-1',
        completed: true,
      })

      expect(id).toBeTruthy()
    })

    it('accepts profile_update type', async () => {
      const id = await syncQueueService.enqueue('profile_update', {
        name: 'Test User',
        age: 65,
      })

      expect(id).toBeTruthy()
    })

    it('accepts settings_update type', async () => {
      const id = await syncQueueService.enqueue('settings_update', {
        notifications: true,
        theme: 'dark',
      })

      expect(id).toBeTruthy()
    })

    it('generates unique ids for each action', async () => {
      const id1 = await syncQueueService.enqueue('task_completion', { taskId: '1' })
      const id2 = await syncQueueService.enqueue('task_completion', { taskId: '2' })

      expect(id1).not.toBe(id2)
    })
  })

  describe('forceSync', () => {
    it('returns boolean result', async () => {
      const result = await syncQueueService.forceSync()
      expect(typeof result).toBe('boolean')
    })
  })

  describe('clearQueue', () => {
    it('clears all pending actions', async () => {
      await syncQueueService.enqueue('task_completion', { taskId: '1' })
      await syncQueueService.enqueue('task_completion', { taskId: '2' })

      await syncQueueService.clearQueue()

      const status = syncQueueService.getStatus()
      expect(status.pendingCount).toBe(0)
    })
  })

  describe('SyncAction interface', () => {
    it('has required properties', () => {
      const action: SyncAction = {
        id: 'test-id-123',
        type: 'task_completion',
        payload: { taskId: '1' },
        timestamp: Date.now(),
        retryCount: 0,
      }

      expect(action.id).toBe('test-id-123')
      expect(action.type).toBe('task_completion')
      expect(action.payload).toEqual({ taskId: '1' })
      expect(typeof action.timestamp).toBe('number')
      expect(action.retryCount).toBe(0)
    })

    it('supports all action types', () => {
      const types: SyncAction['type'][] = [
        'task_completion',
        'profile_update',
        'settings_update',
      ]

      types.forEach((type) => {
        const action: SyncAction = {
          id: `test-${type}`,
          type,
          payload: {},
          timestamp: Date.now(),
          retryCount: 0,
        }
        expect(action.type).toBe(type)
      })
    })
  })

  describe('SyncStatus interface', () => {
    it('has correct shape', () => {
      const status: SyncStatus = {
        pendingCount: 5,
        lastSyncTime: Date.now(),
        isSyncing: false,
        lastError: null,
      }

      expect(status.pendingCount).toBe(5)
      expect(typeof status.lastSyncTime).toBe('number')
      expect(status.isSyncing).toBe(false)
      expect(status.lastError).toBeNull()
    })

    it('can have error message', () => {
      const status: SyncStatus = {
        pendingCount: 1,
        lastSyncTime: null,
        isSyncing: false,
        lastError: 'Network error',
      }

      expect(status.lastError).toBe('Network error')
    })
  })
})
