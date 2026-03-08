/**
 * useOffline Hook
 * Provides network status and sync queue information
 */

import { useState, useEffect, useCallback } from 'react'
import { networkService, NetworkState } from '../services/network'
import { syncQueueService, SyncStatus } from '../services/syncQueue'

export interface UseOfflineReturn {
  // Network state
  isOnline: boolean
  networkStatus: 'online' | 'offline' | 'unknown'
  connectionType: string | null

  // Sync state
  pendingActions: number
  isSyncing: boolean
  lastSyncTime: Date | null
  syncError: string | null

  // Actions
  forceSync: () => Promise<boolean>
  queueAction: (type: 'task_completion' | 'profile_update' | 'settings_update', payload: Record<string, unknown>) => Promise<string>
}

export function useOffline(): UseOfflineReturn {
  const [networkState, setNetworkState] = useState<NetworkState>(networkService.getState())
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(syncQueueService.getStatus())

  useEffect(() => {
    // Subscribe to network changes
    const unsubscribeNetwork = networkService.addListener(setNetworkState)

    // Subscribe to sync status changes
    const unsubscribeSync = syncQueueService.addListener(setSyncStatus)

    return () => {
      unsubscribeNetwork()
      unsubscribeSync()
    }
  }, [])

  const forceSync = useCallback(async (): Promise<boolean> => {
    return syncQueueService.forceSync()
  }, [])

  const queueAction = useCallback(
    async (
      type: 'task_completion' | 'profile_update' | 'settings_update',
      payload: Record<string, unknown>
    ): Promise<string> => {
      return syncQueueService.enqueue(type, payload)
    },
    []
  )

  return {
    // Network state
    isOnline: networkState.status === 'online' && networkState.isInternetReachable !== false,
    networkStatus: networkState.status,
    connectionType: networkState.type,

    // Sync state
    pendingActions: syncStatus.pendingCount,
    isSyncing: syncStatus.isSyncing,
    lastSyncTime: syncStatus.lastSyncTime ? new Date(syncStatus.lastSyncTime) : null,
    syncError: syncStatus.lastError,

    // Actions
    forceSync,
    queueAction,
  }
}
