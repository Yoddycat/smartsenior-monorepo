/**
 * Network Service
 * Monitors network connectivity and provides utilities for offline support
 */

import NetInfo, { NetInfoState, NetInfoSubscription } from '@react-native-community/netinfo'

export type NetworkStatus = 'online' | 'offline' | 'unknown'

export interface NetworkState {
  status: NetworkStatus
  isConnected: boolean
  type: string | null
  isInternetReachable: boolean | null
}

type NetworkListener = (state: NetworkState) => void

class NetworkService {
  private listeners: Set<NetworkListener> = new Set()
  private subscription: NetInfoSubscription | null = null
  private currentState: NetworkState = {
    status: 'unknown',
    isConnected: false,
    type: null,
    isInternetReachable: null,
  }

  /**
   * Initialize network monitoring
   */
  initialize(): void {
    if (this.subscription) return

    this.subscription = NetInfo.addEventListener(this.handleNetworkChange)

    // Get initial state
    NetInfo.fetch().then(this.handleNetworkChange)
  }

  /**
   * Stop network monitoring
   */
  destroy(): void {
    if (this.subscription) {
      this.subscription()
      this.subscription = null
    }
    this.listeners.clear()
  }

  /**
   * Handle network state changes
   */
  private handleNetworkChange = (state: NetInfoState): void => {
    const newState: NetworkState = {
      status: state.isConnected ? 'online' : 'offline',
      isConnected: state.isConnected ?? false,
      type: state.type,
      isInternetReachable: state.isInternetReachable,
    }

    // Only notify if state actually changed
    if (
      this.currentState.status !== newState.status ||
      this.currentState.isInternetReachable !== newState.isInternetReachable
    ) {
      this.currentState = newState
      this.notifyListeners(newState)
    }
  }

  /**
   * Notify all listeners of state change
   */
  private notifyListeners(state: NetworkState): void {
    this.listeners.forEach((listener) => {
      try {
        listener(state)
      } catch (error) {
        console.error('[NetworkService] Error in listener:', error)
      }
    })
  }

  /**
   * Add a listener for network changes
   */
  addListener(listener: NetworkListener): () => void {
    this.listeners.add(listener)

    // Initialize if not already done
    if (!this.subscription) {
      this.initialize()
    }

    // Immediately notify with current state
    listener(this.currentState)

    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener)
    }
  }

  /**
   * Get current network state
   */
  getState(): NetworkState {
    return this.currentState
  }

  /**
   * Check if currently online
   */
  isOnline(): boolean {
    return this.currentState.status === 'online' && this.currentState.isInternetReachable !== false
  }

  /**
   * Wait for network to be available (with timeout)
   */
  async waitForConnection(timeoutMs: number = 30000): Promise<boolean> {
    if (this.isOnline()) return true

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        unsubscribe()
        resolve(false)
      }, timeoutMs)

      const unsubscribe = this.addListener((state) => {
        if (state.status === 'online' && state.isInternetReachable !== false) {
          clearTimeout(timeout)
          unsubscribe()
          resolve(true)
        }
      })
    })
  }
}

export const networkService = new NetworkService()
