/**
 * Sync Queue Service
 * Manages offline action queue and synchronization
 */

import AsyncStorage from '@react-native-async-storage/async-storage'
import { networkService } from './network'

const SYNC_QUEUE_KEY = '@longevidade:sync_queue'
const LAST_SYNC_KEY = '@longevidade:last_sync'

export interface SyncAction {
  id: string
  type: 'task_completion' | 'profile_update' | 'settings_update'
  payload: Record<string, unknown>
  timestamp: number
  retryCount: number
}

export interface SyncStatus {
  pendingCount: number
  lastSyncTime: number | null
  isSyncing: boolean
  lastError: string | null
}

type SyncStatusListener = (status: SyncStatus) => void

class SyncQueueService {
  private queue: SyncAction[] = []
  private isSyncing = false
  private lastError: string | null = null
  private lastSyncTime: number | null = null
  private listeners: Set<SyncStatusListener> = new Set()
  private networkUnsubscribe: (() => void) | null = null

  /**
   * Initialize the sync queue
   */
  async initialize(): Promise<void> {
    // Load persisted queue
    await this.loadQueue()

    // Load last sync time
    const lastSync = await AsyncStorage.getItem(LAST_SYNC_KEY)
    if (lastSync) {
      this.lastSyncTime = parseInt(lastSync, 10)
    }

    // Listen for network changes
    this.networkUnsubscribe = networkService.addListener((state) => {
      if (state.status === 'online' && state.isInternetReachable !== false) {
        // Network is back, try to sync
        this.processQueue()
      }
    })

    // Initial sync attempt
    if (networkService.isOnline()) {
      this.processQueue()
    }
  }

  /**
   * Destroy the service
   */
  destroy(): void {
    if (this.networkUnsubscribe) {
      this.networkUnsubscribe()
      this.networkUnsubscribe = null
    }
    this.listeners.clear()
  }

  /**
   * Load queue from storage
   */
  private async loadQueue(): Promise<void> {
    try {
      const stored = await AsyncStorage.getItem(SYNC_QUEUE_KEY)
      if (stored) {
        this.queue = JSON.parse(stored)
      }
    } catch (error) {
      console.error('[SyncQueue] Error loading queue:', error)
      this.queue = []
    }
  }

  /**
   * Save queue to storage
   */
  private async saveQueue(): Promise<void> {
    try {
      await AsyncStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(this.queue))
    } catch (error) {
      console.error('[SyncQueue] Error saving queue:', error)
    }
  }

  /**
   * Add an action to the queue
   */
  async enqueue(
    type: SyncAction['type'],
    payload: Record<string, unknown>
  ): Promise<string> {
    const action: SyncAction = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      payload,
      timestamp: Date.now(),
      retryCount: 0,
    }

    this.queue.push(action)
    await this.saveQueue()
    this.notifyListeners()

    // Try to process immediately if online
    if (networkService.isOnline()) {
      this.processQueue()
    }

    return action.id
  }

  /**
   * Process the sync queue
   */
  async processQueue(): Promise<void> {
    if (this.isSyncing || this.queue.length === 0) return
    if (!networkService.isOnline()) return

    this.isSyncing = true
    this.lastError = null
    this.notifyListeners()

    const processedIds: string[] = []

    for (const action of this.queue) {
      try {
        await this.processAction(action)
        processedIds.push(action.id)
      } catch (error) {
        console.error('[SyncQueue] Error processing action:', error)

        // Increment retry count
        action.retryCount++

        // Remove after 3 retries
        if (action.retryCount >= 3) {
          processedIds.push(action.id)
          this.lastError = `Failed to sync: ${action.type}`
        }
      }
    }

    // Remove processed actions
    this.queue = this.queue.filter((a) => !processedIds.includes(a.id))
    await this.saveQueue()

    // Update last sync time
    this.lastSyncTime = Date.now()
    await AsyncStorage.setItem(LAST_SYNC_KEY, this.lastSyncTime.toString())

    this.isSyncing = false
    this.notifyListeners()
  }

  /**
   * Process a single action
   */
  private async processAction(action: SyncAction): Promise<void> {
    // In a real app, this would send to a server
    // For now, we just simulate the sync
    switch (action.type) {
      case 'task_completion':
        // Task completions are stored locally, no server sync needed
        // This is where you would add server sync logic
        await this.simulateNetworkDelay()
        break

      case 'profile_update':
        // Profile updates would sync to server
        await this.simulateNetworkDelay()
        break

      case 'settings_update':
        // Settings would sync to server
        await this.simulateNetworkDelay()
        break

      default:
        console.warn('[SyncQueue] Unknown action type:', action.type)
    }
  }

  /**
   * Simulate network delay for demo purposes
   */
  private async simulateNetworkDelay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 100))
  }

  /**
   * Get current sync status
   */
  getStatus(): SyncStatus {
    return {
      pendingCount: this.queue.length,
      lastSyncTime: this.lastSyncTime,
      isSyncing: this.isSyncing,
      lastError: this.lastError,
    }
  }

  /**
   * Add a listener for sync status changes
   */
  addListener(listener: SyncStatusListener): () => void {
    this.listeners.add(listener)
    listener(this.getStatus())

    return () => {
      this.listeners.delete(listener)
    }
  }

  /**
   * Notify all listeners
   */
  private notifyListeners(): void {
    const status = this.getStatus()
    this.listeners.forEach((listener) => {
      try {
        listener(status)
      } catch (error) {
        console.error('[SyncQueue] Error in listener:', error)
      }
    })
  }

  /**
   * Clear the queue (for testing/reset)
   */
  async clearQueue(): Promise<void> {
    this.queue = []
    await this.saveQueue()
    this.notifyListeners()
  }

  /**
   * Force sync attempt
   */
  async forceSync(): Promise<boolean> {
    if (!networkService.isOnline()) {
      return false
    }

    await this.processQueue()
    return this.queue.length === 0
  }
}

export const syncQueueService = new SyncQueueService()
