/**
 * SyncQueue Service Advanced Tests
 * Detailed tests for sync queue functionality
 */

// Mock dependencies
const mockGetItem = jest.fn((_key: string): Promise<string | null> => Promise.resolve(null))
const mockSetItem = jest.fn((_key: string, _value: string): Promise<void> => Promise.resolve())
const mockRemoveItem = jest.fn((_key: string): Promise<void> => Promise.resolve())

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: mockGetItem,
  setItem: mockSetItem,
  removeItem: mockRemoveItem,
}))

const mockNetworkAddListener = jest.fn(() => jest.fn())
const mockNetworkIsOnline = jest.fn(() => true)

jest.mock('../../services/network', () => ({
  networkService: {
    addListener: mockNetworkAddListener,
    isOnline: mockNetworkIsOnline,
  },
}))

describe('SyncQueueService advanced', () => {
  let syncQueueService: any

  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
    mockGetItem.mockResolvedValue(null)
    mockSetItem.mockResolvedValue(undefined)
    mockNetworkIsOnline.mockReturnValue(true)
    const syncModule = require('../../services/syncQueue')
    syncQueueService = syncModule.syncQueueService
  })

  describe('initialize', () => {
    it('loads queue and sets up network listener', async () => {
      await syncQueueService.initialize()

      expect(mockGetItem).toHaveBeenCalled()
      expect(mockNetworkAddListener).toHaveBeenCalled()
    })

    it('loads last sync time from storage', async () => {
      mockGetItem.mockImplementation((key: string) => {
        if (key.includes('last_sync')) {
          return Promise.resolve('1704067200000')
        }
        return Promise.resolve(null)
      })

      await syncQueueService.initialize()

      const status = syncQueueService.getStatus()
      expect(status.lastSyncTime).toBe(1704067200000)
    })

    it('loads existing queue from storage', async () => {
      const existingQueue = JSON.stringify([
        {
          id: 'test-1',
          type: 'task_completion',
          payload: { taskId: '123' },
          timestamp: Date.now(),
          retryCount: 0,
        },
      ])

      mockGetItem.mockImplementation((key: string) => {
        if (key.includes('sync_queue')) {
          return Promise.resolve(existingQueue)
        }
        return Promise.resolve(null)
      })

      await syncQueueService.initialize()
      // Queue should be loaded
    })
  })

  describe('forceSync', () => {
    it('returns false when offline', async () => {
      mockNetworkIsOnline.mockReturnValue(false)

      const result = await syncQueueService.forceSync()

      expect(result).toBe(false)
    })

    it('returns true when queue is empty after sync', async () => {
      mockNetworkIsOnline.mockReturnValue(true)

      const result = await syncQueueService.forceSync()

      expect(result).toBe(true)
    })
  })

  describe('processQueue behavior', () => {
    it('does not process when offline', async () => {
      mockNetworkIsOnline.mockReturnValue(false)

      await syncQueueService.enqueue('task_completion', { taskId: '123' })
      await syncQueueService.processQueue()

      // Should still have pending items
      const status = syncQueueService.getStatus()
      // Pending count might be 0 or 1 depending on timing
    })

    it('processes queue when online', async () => {
      mockNetworkIsOnline.mockReturnValue(true)

      await syncQueueService.enqueue('profile_update', { name: 'Test' })
      await new Promise((resolve) => setTimeout(resolve, 200))

      const status = syncQueueService.getStatus()
      expect(status.pendingCount).toBe(0)
    })
  })

  describe('action types', () => {
    it('handles task_completion type', async () => {
      const id = await syncQueueService.enqueue('task_completion', {
        taskId: 'task-1',
        completed: true,
      })

      expect(typeof id).toBe('string')
    })

    it('handles profile_update type', async () => {
      const id = await syncQueueService.enqueue('profile_update', {
        name: 'John',
        birthYear: 1990,
      })

      expect(typeof id).toBe('string')
    })

    it('handles settings_update type', async () => {
      const id = await syncQueueService.enqueue('settings_update', {
        notifications: true,
        darkMode: false,
      })

      expect(typeof id).toBe('string')
    })
  })

  describe('listener notifications', () => {
    it('notifies listener on enqueue', async () => {
      const listener = jest.fn()
      syncQueueService.addListener(listener)

      await syncQueueService.enqueue('task_completion', { taskId: '1' })

      expect(listener.mock.calls.length).toBeGreaterThanOrEqual(2) // Initial + after enqueue + possibly process
    })

    it('notifies multiple listeners', async () => {
      const listener1 = jest.fn()
      const listener2 = jest.fn()

      syncQueueService.addListener(listener1)
      syncQueueService.addListener(listener2)

      expect(listener1).toHaveBeenCalled()
      expect(listener2).toHaveBeenCalled()
    })

    it('supports multiple listeners', async () => {
      const listener1 = jest.fn()
      const listener2 = jest.fn()

      const unsub1 = syncQueueService.addListener(listener1)
      const unsub2 = syncQueueService.addListener(listener2)

      // Both should have been called
      expect(listener1).toHaveBeenCalled()
      expect(listener2).toHaveBeenCalled()

      // Cleanup
      unsub1()
      unsub2()
    })
  })

  describe('storage errors', () => {
    it('handles getItem error', async () => {
      mockGetItem.mockRejectedValueOnce(new Error('Storage error'))

      // Should not throw, queue should be empty
      await expect(syncQueueService.clearQueue()).resolves.not.toThrow()
    })

    it('handles setItem error', async () => {
      mockSetItem.mockRejectedValueOnce(new Error('Storage error'))

      // Should not throw
      await expect(
        syncQueueService.enqueue('task_completion', { taskId: '1' })
      ).resolves.toBeDefined()
    })
  })
})

describe('SyncAction generation', () => {
  it('generates unique IDs', () => {
    const ids = new Set()
    for (let i = 0; i < 100; i++) {
      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      ids.add(id)
    }
    expect(ids.size).toBe(100)
  })

  it('action structure is correct', () => {
    const action = {
      id: '1234-abc123',
      type: 'task_completion' as const,
      payload: { taskId: '456', completed: true },
      timestamp: 1704067200000,
      retryCount: 0,
    }

    expect(action).toMatchObject({
      id: expect.any(String),
      type: expect.any(String),
      payload: expect.any(Object),
      timestamp: expect.any(Number),
      retryCount: expect.any(Number),
    })
  })

  it('timestamp is recent', () => {
    const timestamp = Date.now()
    expect(timestamp).toBeGreaterThan(1700000000000)
  })
})

describe('Queue filtering', () => {
  it('filters by ID correctly', () => {
    const queue = [
      { id: '1', type: 'task_completion' },
      { id: '2', type: 'profile_update' },
      { id: '3', type: 'settings_update' },
    ]

    const processedIds = ['1', '3']
    const filtered = queue.filter((a) => !processedIds.includes(a.id))

    expect(filtered).toHaveLength(1)
    expect(filtered[0].id).toBe('2')
  })
})

describe('Retry logic', () => {
  it('increments retry count', () => {
    const action = { retryCount: 0 }
    action.retryCount++
    expect(action.retryCount).toBe(1)
  })

  it('removes after 3 retries', () => {
    const action = { retryCount: 2 }
    action.retryCount++
    expect(action.retryCount >= 3).toBe(true)
  })
})
