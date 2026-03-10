/**
 * Hooks Index
 */

// Domain hooks
export { useHealth } from './useHealth'
export { useRecovery } from './useRecovery'
export { useTaskCompletion, getCompletionHistory } from './useTaskCompletion'
export { useProtocolProgress, getGreeting } from './useProtocolProgress'
export { useOffline } from './useOffline'
export type { UseOfflineReturn } from './useOffline'

// Utility hooks
export { useAsyncData } from './useAsyncData'
export { useAsyncStorage, useAsyncStorageItem } from './useAsyncStorage'
export { useHealthMetrics } from './useHealthMetrics'
