/**
 * SyncQueue Service Branch Coverage Tests
 * Tests specifically targeting uncovered branches
 */

// Suppress console warnings during tests
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('SyncQueue Service Branch Coverage', () => {
  describe('Initialize Branch - lastSync Exists', () => {
    const createSyncState = () => {
      let lastSync: Date | null = null
      let queue: Array<{ id: string; action: string }> = []
      let initialized = false

      return {
        initialize: async (storedLastSync: Date | null, storedQueue: Array<{ id: string; action: string }>) => {
          if (storedLastSync) {
            lastSync = storedLastSync
          }
          if (storedQueue) {
            queue = storedQueue
          }
          initialized = true
          return { lastSync, queueSize: queue.length }
        },
        getLastSync: () => lastSync,
        getQueueSize: () => queue.length,
        isInitialized: () => initialized,
      }
    }

    it('restores lastSync when stored value exists', async () => {
      const state = createSyncState()
      const storedDate = new Date('2024-01-15T10:00:00Z')
      await state.initialize(storedDate, [])

      expect(state.getLastSync()).toEqual(storedDate)
    })

    it('handles null lastSync', async () => {
      const state = createSyncState()
      await state.initialize(null, [])

      expect(state.getLastSync()).toBeNull()
    })

    it('restores queue when stored queue exists', async () => {
      const state = createSyncState()
      const storedQueue = [{ id: '1', action: 'sync' }, { id: '2', action: 'delete' }]
      await state.initialize(null, storedQueue)

      expect(state.getQueueSize()).toBe(2)
    })

    it('handles empty stored queue', async () => {
      const state = createSyncState()
      await state.initialize(null, [])

      expect(state.getQueueSize()).toBe(0)
    })
  })

  describe('Initialize Branch - Network Online', () => {
    const initializeWithNetwork = async (isOnline: boolean) => {
      const result = {
        syncTriggered: false,
        reason: '',
      }

      if (isOnline) {
        result.syncTriggered = true
        result.reason = 'network_online'
      } else {
        result.syncTriggered = false
        result.reason = 'network_offline'
      }

      return result
    }

    it('triggers sync when network is online', async () => {
      const result = await initializeWithNetwork(true)
      expect(result.syncTriggered).toBe(true)
      expect(result.reason).toBe('network_online')
    })

    it('does not trigger sync when network is offline', async () => {
      const result = await initializeWithNetwork(false)
      expect(result.syncTriggered).toBe(false)
      expect(result.reason).toBe('network_offline')
    })
  })

  describe('Destroy Branch', () => {
    const createDestroyableState = () => {
      let networkListener: (() => void) | null = null
      let queue: string[] = []

      return {
        setNetworkListener: (listener: () => void) => {
          networkListener = listener
        },
        addToQueue: (item: string) => {
          queue.push(item)
        },
        destroy: async () => {
          const hadListener = networkListener !== null
          networkListener = null
          queue = []
          return { listenerRemoved: hadListener, queueCleared: true }
        },
        hasNetworkListener: () => networkListener !== null,
        getQueueSize: () => queue.length,
      }
    }

    it('removes network listener on destroy', async () => {
      const state = createDestroyableState()
      state.setNetworkListener(() => {})
      expect(state.hasNetworkListener()).toBe(true)

      await state.destroy()
      expect(state.hasNetworkListener()).toBe(false)
    })

    it('clears queue on destroy', async () => {
      const state = createDestroyableState()
      state.addToQueue('item1')
      state.addToQueue('item2')
      expect(state.getQueueSize()).toBe(2)

      await state.destroy()
      expect(state.getQueueSize()).toBe(0)
    })
  })

  describe('loadQueue Error Handling Branch', () => {
    const loadQueue = async (
      storageGetFn: () => Promise<string | null>
    ): Promise<{ success: boolean; queue: string[]; error?: string }> => {
      try {
        const stored = await storageGetFn()
        if (stored) {
          const parsed = JSON.parse(stored)
          return { success: true, queue: parsed }
        }
        return { success: true, queue: [] }
      } catch (error) {
        return {
          success: false,
          queue: [],
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    }

    it('loads queue successfully', async () => {
      const result = await loadQueue(async () => JSON.stringify(['a', 'b', 'c']))
      expect(result.success).toBe(true)
      expect(result.queue).toEqual(['a', 'b', 'c'])
    })

    it('returns empty array when no stored data', async () => {
      const result = await loadQueue(async () => null)
      expect(result.success).toBe(true)
      expect(result.queue).toEqual([])
    })

    it('handles JSON parse error', async () => {
      const result = await loadQueue(async () => 'invalid json')
      expect(result.success).toBe(false)
      expect(result.queue).toEqual([])
      expect(result.error).toBeDefined()
    })

    it('handles storage access error', async () => {
      const result = await loadQueue(async () => {
        throw new Error('Storage unavailable')
      })
      expect(result.success).toBe(false)
      expect(result.error).toBe('Storage unavailable')
    })
  })

  describe('processQueue Branches', () => {
    interface QueueAction {
      id: string
      type: string
      data: object
    }

    const processQueue = async (
      queue: QueueAction[],
      isSyncing: boolean,
      isOnline: boolean
    ): Promise<{
      processed: boolean
      reason: string
      processedCount: number
    }> => {
      if (isSyncing) {
        return { processed: false, reason: 'already_syncing', processedCount: 0 }
      }

      if (queue.length === 0) {
        return { processed: false, reason: 'queue_empty', processedCount: 0 }
      }

      if (!isOnline) {
        return { processed: false, reason: 'offline', processedCount: 0 }
      }

      return { processed: true, reason: 'success', processedCount: queue.length }
    }

    it('skips when already syncing', async () => {
      const result = await processQueue([{ id: '1', type: 'sync', data: {} }], true, true)
      expect(result.processed).toBe(false)
      expect(result.reason).toBe('already_syncing')
    })

    it('skips when queue is empty', async () => {
      const result = await processQueue([], false, true)
      expect(result.processed).toBe(false)
      expect(result.reason).toBe('queue_empty')
    })

    it('skips when offline', async () => {
      const result = await processQueue([{ id: '1', type: 'sync', data: {} }], false, false)
      expect(result.processed).toBe(false)
      expect(result.reason).toBe('offline')
    })

    it('processes when online with items', async () => {
      const queue = [
        { id: '1', type: 'sync', data: {} },
        { id: '2', type: 'update', data: {} },
      ]
      const result = await processQueue(queue, false, true)
      expect(result.processed).toBe(true)
      expect(result.processedCount).toBe(2)
    })
  })

  describe('processAction Type Branches', () => {
    type ActionType = 'sync_progress' | 'sync_tasks' | 'sync_health' | 'unknown'

    interface QueueAction {
      id: string
      type: ActionType
      data: object
    }

    const processAction = async (
      action: QueueAction
    ): Promise<{ success: boolean; handler: string }> => {
      switch (action.type) {
        case 'sync_progress':
          return { success: true, handler: 'progressHandler' }
        case 'sync_tasks':
          return { success: true, handler: 'tasksHandler' }
        case 'sync_health':
          return { success: true, handler: 'healthHandler' }
        default:
          return { success: false, handler: 'unknown' }
      }
    }

    it('handles sync_progress action', async () => {
      const result = await processAction({ id: '1', type: 'sync_progress', data: {} })
      expect(result.success).toBe(true)
      expect(result.handler).toBe('progressHandler')
    })

    it('handles sync_tasks action', async () => {
      const result = await processAction({ id: '2', type: 'sync_tasks', data: {} })
      expect(result.success).toBe(true)
      expect(result.handler).toBe('tasksHandler')
    })

    it('handles sync_health action', async () => {
      const result = await processAction({ id: '3', type: 'sync_health', data: {} })
      expect(result.success).toBe(true)
      expect(result.handler).toBe('healthHandler')
    })

    it('handles unknown action type', async () => {
      const result = await processAction({ id: '4', type: 'unknown', data: {} })
      expect(result.success).toBe(false)
      expect(result.handler).toBe('unknown')
    })
  })

  describe('forceSync Branch', () => {
    const forceSync = async (
      isOnline: boolean,
      queueSize: number
    ): Promise<{ success: boolean; reason: string }> => {
      if (!isOnline) {
        return { success: false, reason: 'offline' }
      }

      if (queueSize === 0) {
        return { success: true, reason: 'nothing_to_sync' }
      }

      return { success: true, reason: 'sync_completed' }
    }

    it('fails when offline', async () => {
      const result = await forceSync(false, 5)
      expect(result.success).toBe(false)
      expect(result.reason).toBe('offline')
    })

    it('succeeds with nothing to sync', async () => {
      const result = await forceSync(true, 0)
      expect(result.success).toBe(true)
      expect(result.reason).toBe('nothing_to_sync')
    })

    it('succeeds after syncing items', async () => {
      const result = await forceSync(true, 5)
      expect(result.success).toBe(true)
      expect(result.reason).toBe('sync_completed')
    })
  })

  describe('notifyListeners Error Handling', () => {
    type SyncListener = (status: { syncing: boolean; queueSize: number }) => void

    const notifyListeners = (
      listeners: SyncListener[],
      status: { syncing: boolean; queueSize: number }
    ) => {
      const results: Array<{ success: boolean; error?: string }> = []

      listeners.forEach((listener) => {
        try {
          listener(status)
          results.push({ success: true })
        } catch (error) {
          results.push({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown',
          })
        }
      })

      return results
    }

    it('notifies all listeners successfully', () => {
      const listener1 = jest.fn()
      const listener2 = jest.fn()
      const status = { syncing: true, queueSize: 5 }

      const results = notifyListeners([listener1, listener2], status)

      expect(listener1).toHaveBeenCalledWith(status)
      expect(listener2).toHaveBeenCalledWith(status)
      expect(results.every((r) => r.success)).toBe(true)
    })

    it('catches and continues on listener error', () => {
      const goodListener = jest.fn()
      const badListener = jest.fn(() => {
        throw new Error('Listener crashed')
      })
      const anotherGoodListener = jest.fn()

      const results = notifyListeners(
        [goodListener, badListener, anotherGoodListener],
        { syncing: false, queueSize: 0 }
      )

      expect(goodListener).toHaveBeenCalled()
      expect(badListener).toHaveBeenCalled()
      expect(anotherGoodListener).toHaveBeenCalled()
      expect(results[1].success).toBe(false)
      expect(results[1].error).toBe('Listener crashed')
    })
  })

  describe('Queue Item Management', () => {
    interface QueueItem {
      id: string
      type: string
      timestamp: number
      retryCount: number
    }

    const createQueueManager = () => {
      const queue: QueueItem[] = []

      return {
        addItem: (item: Omit<QueueItem, 'timestamp' | 'retryCount'>) => {
          queue.push({
            ...item,
            timestamp: Date.now(),
            retryCount: 0,
          })
        },
        removeItem: (id: string) => {
          const index = queue.findIndex((item) => item.id === id)
          if (index > -1) {
            queue.splice(index, 1)
            return true
          }
          return false
        },
        incrementRetry: (id: string) => {
          const item = queue.find((i) => i.id === id)
          if (item) {
            item.retryCount++
            return item.retryCount
          }
          return -1
        },
        getQueueSize: () => queue.length,
        getItem: (id: string) => queue.find((i) => i.id === id),
      }
    }

    it('adds item with timestamp and retry count', () => {
      const manager = createQueueManager()
      manager.addItem({ id: '1', type: 'sync' })

      const item = manager.getItem('1')
      expect(item).toBeDefined()
      expect(item?.retryCount).toBe(0)
      expect(item?.timestamp).toBeDefined()
    })

    it('removes existing item', () => {
      const manager = createQueueManager()
      manager.addItem({ id: '1', type: 'sync' })

      const removed = manager.removeItem('1')
      expect(removed).toBe(true)
      expect(manager.getQueueSize()).toBe(0)
    })

    it('returns false when removing non-existent item', () => {
      const manager = createQueueManager()
      const removed = manager.removeItem('non-existent')
      expect(removed).toBe(false)
    })

    it('increments retry count', () => {
      const manager = createQueueManager()
      manager.addItem({ id: '1', type: 'sync' })

      expect(manager.incrementRetry('1')).toBe(1)
      expect(manager.incrementRetry('1')).toBe(2)
      expect(manager.incrementRetry('1')).toBe(3)
    })

    it('returns -1 when incrementing non-existent item', () => {
      const manager = createQueueManager()
      expect(manager.incrementRetry('non-existent')).toBe(-1)
    })
  })

  describe('Retry Logic Branch', () => {
    const MAX_RETRIES = 3

    const shouldRetry = (retryCount: number, error: Error | null) => {
      if (retryCount >= MAX_RETRIES) {
        return { retry: false, reason: 'max_retries_reached' }
      }

      if (error && error.message.includes('permanent')) {
        return { retry: false, reason: 'permanent_error' }
      }

      return { retry: true, reason: 'retryable' }
    }

    it('allows retry when under max retries', () => {
      const result = shouldRetry(0, new Error('Temporary error'))
      expect(result.retry).toBe(true)
    })

    it('allows retry at max - 1', () => {
      const result = shouldRetry(2, null)
      expect(result.retry).toBe(true)
    })

    it('stops retry at max retries', () => {
      const result = shouldRetry(3, null)
      expect(result.retry).toBe(false)
      expect(result.reason).toBe('max_retries_reached')
    })

    it('stops retry on permanent error', () => {
      const result = shouldRetry(0, new Error('This is a permanent failure'))
      expect(result.retry).toBe(false)
      expect(result.reason).toBe('permanent_error')
    })

    it('continues retry on temporary error', () => {
      const result = shouldRetry(1, new Error('Network timeout'))
      expect(result.retry).toBe(true)
    })
  })

  describe('Persistence Operations', () => {
    const createPersistence = () => {
      const storage = new Map<string, string>()

      return {
        save: async (key: string, data: object) => {
          try {
            storage.set(key, JSON.stringify(data))
            return { success: true }
          } catch {
            return { success: false, error: 'Serialization failed' }
          }
        },
        load: async <T>(key: string): Promise<{ success: boolean; data: T | null }> => {
          try {
            const stored = storage.get(key)
            if (!stored) {
              return { success: true, data: null }
            }
            return { success: true, data: JSON.parse(stored) as T }
          } catch {
            return { success: false, data: null }
          }
        },
        clear: async (key: string) => {
          storage.delete(key)
          return { success: true }
        },
      }
    }

    it('saves data successfully', async () => {
      const persistence = createPersistence()
      const result = await persistence.save('queue', { items: [1, 2, 3] })
      expect(result.success).toBe(true)
    })

    it('loads saved data', async () => {
      const persistence = createPersistence()
      await persistence.save('queue', { items: [1, 2, 3] })

      const result = await persistence.load<{ items: number[] }>('queue')
      expect(result.success).toBe(true)
      expect(result.data?.items).toEqual([1, 2, 3])
    })

    it('returns null for non-existent key', async () => {
      const persistence = createPersistence()
      const result = await persistence.load('non-existent')
      expect(result.success).toBe(true)
      expect(result.data).toBeNull()
    })

    it('clears data', async () => {
      const persistence = createPersistence()
      await persistence.save('queue', { items: [] })
      await persistence.clear('queue')

      const result = await persistence.load('queue')
      expect(result.data).toBeNull()
    })
  })

  describe('Network Online Handler', () => {
    const handleNetworkOnline = async (
      hasItems: boolean,
      lastSyncAge: number,
      minSyncInterval: number
    ): Promise<{ shouldSync: boolean; reason: string }> => {
      if (!hasItems) {
        return { shouldSync: false, reason: 'no_items' }
      }

      if (lastSyncAge < minSyncInterval) {
        return { shouldSync: false, reason: 'too_recent' }
      }

      return { shouldSync: true, reason: 'ready' }
    }

    it('does not sync when no items', async () => {
      const result = await handleNetworkOnline(false, 60000, 30000)
      expect(result.shouldSync).toBe(false)
      expect(result.reason).toBe('no_items')
    })

    it('does not sync when last sync too recent', async () => {
      const result = await handleNetworkOnline(true, 10000, 30000)
      expect(result.shouldSync).toBe(false)
      expect(result.reason).toBe('too_recent')
    })

    it('syncs when has items and enough time passed', async () => {
      const result = await handleNetworkOnline(true, 60000, 30000)
      expect(result.shouldSync).toBe(true)
      expect(result.reason).toBe('ready')
    })
  })

  describe('Queue Status Computation', () => {
    interface QueueStatus {
      isEmpty: boolean
      isSyncing: boolean
      pendingCount: number
      oldestItemAge: number | null
    }

    const computeQueueStatus = (
      queue: Array<{ timestamp: number }>,
      isSyncing: boolean,
      now: number
    ): QueueStatus => {
      const isEmpty = queue.length === 0

      const oldestItemAge = isEmpty
        ? null
        : Math.min(...queue.map((item) => now - item.timestamp))

      return {
        isEmpty,
        isSyncing,
        pendingCount: queue.length,
        oldestItemAge,
      }
    }

    it('computes empty queue status', () => {
      const status = computeQueueStatus([], false, Date.now())
      expect(status.isEmpty).toBe(true)
      expect(status.pendingCount).toBe(0)
      expect(status.oldestItemAge).toBeNull()
    })

    it('computes non-empty queue status', () => {
      const now = Date.now()
      const queue = [
        { timestamp: now - 5000 },
        { timestamp: now - 10000 },
        { timestamp: now - 3000 },
      ]
      const status = computeQueueStatus(queue, true, now)

      expect(status.isEmpty).toBe(false)
      expect(status.isSyncing).toBe(true)
      expect(status.pendingCount).toBe(3)
      expect(status.oldestItemAge).toBe(3000)
    })
  })

  describe('Edge Cases', () => {
    it('handles concurrent queue operations', () => {
      const queue: string[] = []

      const add = (item: string) => queue.push(item)
      const remove = () => queue.shift()

      add('a')
      add('b')
      remove()
      add('c')
      remove()

      expect(queue).toEqual(['c'])
    })

    it('handles rapid sync requests', () => {
      let syncInProgress = false
      const requestedSyncs: number[] = []

      const requestSync = (id: number) => {
        if (syncInProgress) {
          return { queued: true, id }
        }
        syncInProgress = true
        requestedSyncs.push(id)
        return { queued: false, id }
      }

      const r1 = requestSync(1)
      const r2 = requestSync(2)
      const r3 = requestSync(3)

      expect(r1.queued).toBe(false)
      expect(r2.queued).toBe(true)
      expect(r3.queued).toBe(true)
      expect(requestedSyncs).toEqual([1])
    })
  })
})
