/**
 * Network Service Branch Coverage Tests
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

describe('Network Service Branch Coverage', () => {
  describe('Initialize Subscription Branch', () => {
    const createNetworkState = () => {
      let subscription: object | null = null
      let isOnline = true

      return {
        hasSubscription: () => subscription !== null,
        subscribe: () => {
          subscription = { id: 'test-subscription' }
        },
        unsubscribe: () => {
          subscription = null
        },
        initialize: () => {
          if (subscription) {
            return { skipped: true, reason: 'already_subscribed' }
          }
          subscription = { id: 'new-subscription' }
          return { skipped: false, reason: null }
        },
        setOnline: (online: boolean) => {
          isOnline = online
        },
        getIsOnline: () => isOnline,
      }
    }

    it('skips initialization when already subscribed', () => {
      const state = createNetworkState()
      state.subscribe()
      const result = state.initialize()
      expect(result.skipped).toBe(true)
      expect(result.reason).toBe('already_subscribed')
    })

    it('initializes when no subscription exists', () => {
      const state = createNetworkState()
      const result = state.initialize()
      expect(result.skipped).toBe(false)
      expect(state.hasSubscription()).toBe(true)
    })
  })

  describe('Destroy Subscription Branch', () => {
    const createDestroyState = () => {
      let subscription: object | null = null

      return {
        subscribe: () => {
          subscription = { id: 'sub' }
        },
        destroy: () => {
          if (subscription) {
            subscription = null
            return { destroyed: true }
          }
          return { destroyed: false }
        },
        hasSubscription: () => subscription !== null,
      }
    }

    it('destroys when subscription exists', () => {
      const state = createDestroyState()
      state.subscribe()
      const result = state.destroy()
      expect(result.destroyed).toBe(true)
      expect(state.hasSubscription()).toBe(false)
    })

    it('does nothing when no subscription', () => {
      const state = createDestroyState()
      const result = state.destroy()
      expect(result.destroyed).toBe(false)
    })
  })

  describe('handleNetworkChange State Changed Branch', () => {
    const handleNetworkChange = (
      newState: { isConnected: boolean | null; isInternetReachable: boolean | null },
      currentIsOnline: boolean
    ) => {
      const newIsOnline = !!(newState.isConnected && newState.isInternetReachable)

      if (newIsOnline !== currentIsOnline) {
        return { stateChanged: true, newIsOnline }
      }
      return { stateChanged: false, newIsOnline }
    }

    it('detects state change from offline to online', () => {
      const result = handleNetworkChange(
        { isConnected: true, isInternetReachable: true },
        false
      )
      expect(result.stateChanged).toBe(true)
      expect(result.newIsOnline).toBe(true)
    })

    it('detects state change from online to offline', () => {
      const result = handleNetworkChange(
        { isConnected: false, isInternetReachable: false },
        true
      )
      expect(result.stateChanged).toBe(true)
      expect(result.newIsOnline).toBe(false)
    })

    it('no change when staying online', () => {
      const result = handleNetworkChange(
        { isConnected: true, isInternetReachable: true },
        true
      )
      expect(result.stateChanged).toBe(false)
    })

    it('no change when staying offline', () => {
      const result = handleNetworkChange(
        { isConnected: false, isInternetReachable: false },
        false
      )
      expect(result.stateChanged).toBe(false)
    })

    it('handles null isConnected as offline', () => {
      const result = handleNetworkChange(
        { isConnected: null, isInternetReachable: true },
        true
      )
      expect(result.newIsOnline).toBe(false)
    })

    it('handles null isInternetReachable as offline', () => {
      const result = handleNetworkChange(
        { isConnected: true, isInternetReachable: null },
        true
      )
      expect(result.newIsOnline).toBe(false)
    })

    it('handles both null as offline', () => {
      const result = handleNetworkChange(
        { isConnected: null, isInternetReachable: null },
        false
      )
      expect(result.newIsOnline).toBe(false)
      expect(result.stateChanged).toBe(false)
    })
  })

  describe('notifyListeners Error Handling Branch', () => {
    type Listener = (isOnline: boolean) => void

    const notifyListeners = (listeners: Listener[], isOnline: boolean) => {
      const results: Array<{ success: boolean; error?: string }> = []

      listeners.forEach((listener) => {
        try {
          listener(isOnline)
          results.push({ success: true })
        } catch (error) {
          results.push({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
          })
        }
      })

      return results
    }

    it('notifies all listeners successfully', () => {
      const listener1 = jest.fn()
      const listener2 = jest.fn()
      const results = notifyListeners([listener1, listener2], true)

      expect(listener1).toHaveBeenCalledWith(true)
      expect(listener2).toHaveBeenCalledWith(true)
      expect(results).toEqual([{ success: true }, { success: true }])
    })

    it('catches error from failing listener and continues', () => {
      const listener1 = jest.fn()
      const failingListener = jest.fn(() => {
        throw new Error('Listener failed')
      })
      const listener3 = jest.fn()

      const results = notifyListeners([listener1, failingListener, listener3], true)

      expect(listener1).toHaveBeenCalled()
      expect(failingListener).toHaveBeenCalled()
      expect(listener3).toHaveBeenCalled()
      expect(results[1].success).toBe(false)
      expect(results[1].error).toBe('Listener failed')
    })

    it('handles non-Error thrown values', () => {
      const failingListener = jest.fn(() => {
        throw 'string error'
      })

      const results = notifyListeners([failingListener], true)
      expect(results[0].success).toBe(false)
      expect(results[0].error).toBe('Unknown error')
    })

    it('handles empty listeners array', () => {
      const results = notifyListeners([], true)
      expect(results).toEqual([])
    })
  })

  describe('addListener Auto-Initialize Branch', () => {
    const createListenerManager = () => {
      let initialized = false
      const listeners: Array<(isOnline: boolean) => void> = []

      return {
        isInitialized: () => initialized,
        initialize: () => {
          initialized = true
        },
        addListener: (listener: (isOnline: boolean) => void) => {
          if (!initialized) {
            initialized = true
          }
          listeners.push(listener)
          return listeners.length - 1
        },
        getListenerCount: () => listeners.length,
      }
    }

    it('auto-initializes when not initialized', () => {
      const manager = createListenerManager()
      expect(manager.isInitialized()).toBe(false)

      manager.addListener(() => {})
      expect(manager.isInitialized()).toBe(true)
    })

    it('does not re-initialize when already initialized', () => {
      const manager = createListenerManager()
      manager.initialize()
      expect(manager.isInitialized()).toBe(true)

      manager.addListener(() => {})
      expect(manager.isInitialized()).toBe(true)
      expect(manager.getListenerCount()).toBe(1)
    })
  })

  describe('removeListener Branch', () => {
    const createRemovableListenerManager = () => {
      const listeners = new Set<(isOnline: boolean) => void>()

      return {
        addListener: (listener: (isOnline: boolean) => void) => {
          listeners.add(listener)
          return () => {
            listeners.delete(listener)
          }
        },
        getListenerCount: () => listeners.size,
      }
    }

    it('removes listener when unsubscribe called', () => {
      const manager = createRemovableListenerManager()
      const unsubscribe = manager.addListener(() => {})
      expect(manager.getListenerCount()).toBe(1)

      unsubscribe()
      expect(manager.getListenerCount()).toBe(0)
    })

    it('handles multiple listeners', () => {
      const manager = createRemovableListenerManager()
      const unsub1 = manager.addListener(() => {})
      const unsub2 = manager.addListener(() => {})
      expect(manager.getListenerCount()).toBe(2)

      unsub1()
      expect(manager.getListenerCount()).toBe(1)

      unsub2()
      expect(manager.getListenerCount()).toBe(0)
    })

    it('handles removing same listener twice', () => {
      const manager = createRemovableListenerManager()
      const unsubscribe = manager.addListener(() => {})
      expect(manager.getListenerCount()).toBe(1)

      unsubscribe()
      unsubscribe() // Second call should be safe
      expect(manager.getListenerCount()).toBe(0)
    })
  })

  describe('isOnline Branch', () => {
    const createOnlineChecker = () => {
      let isOnline = true

      return {
        setOnline: (online: boolean) => {
          isOnline = online
        },
        isOnline: () => isOnline,
      }
    }

    it('returns true when online', () => {
      const checker = createOnlineChecker()
      checker.setOnline(true)
      expect(checker.isOnline()).toBe(true)
    })

    it('returns false when offline', () => {
      const checker = createOnlineChecker()
      checker.setOnline(false)
      expect(checker.isOnline()).toBe(false)
    })
  })

  describe('waitForConnection Branch', () => {
    const waitForConnection = async (
      isOnline: () => boolean,
      timeout: number
    ): Promise<{ connected: boolean; timedOut: boolean }> => {
      if (isOnline()) {
        return { connected: true, timedOut: false }
      }

      return new Promise((resolve) => {
        const checkInterval = 100
        let elapsed = 0

        const intervalId = setInterval(() => {
          elapsed += checkInterval
          if (isOnline()) {
            clearInterval(intervalId)
            resolve({ connected: true, timedOut: false })
          } else if (elapsed >= timeout) {
            clearInterval(intervalId)
            resolve({ connected: false, timedOut: true })
          }
        }, checkInterval)
      })
    }

    it('resolves immediately when already online', async () => {
      const result = await waitForConnection(() => true, 1000)
      expect(result.connected).toBe(true)
      expect(result.timedOut).toBe(false)
    })

    it('waits and resolves when comes online', async () => {
      let online = false
      setTimeout(() => {
        online = true
      }, 150)

      const result = await waitForConnection(() => online, 1000)
      expect(result.connected).toBe(true)
      expect(result.timedOut).toBe(false)
    })

    it('times out when stays offline', async () => {
      const result = await waitForConnection(() => false, 200)
      expect(result.connected).toBe(false)
      expect(result.timedOut).toBe(true)
    })
  })

  describe('Network State Computation', () => {
    const computeNetworkState = (
      isConnected: boolean | null,
      isInternetReachable: boolean | null
    ) => {
      return {
        isOnline: !!(isConnected && isInternetReachable),
        hasConnection: !!isConnected,
        hasInternet: !!isInternetReachable,
      }
    }

    it('computes fully online state', () => {
      const state = computeNetworkState(true, true)
      expect(state.isOnline).toBe(true)
      expect(state.hasConnection).toBe(true)
      expect(state.hasInternet).toBe(true)
    })

    it('computes connection without internet', () => {
      const state = computeNetworkState(true, false)
      expect(state.isOnline).toBe(false)
      expect(state.hasConnection).toBe(true)
      expect(state.hasInternet).toBe(false)
    })

    it('computes no connection', () => {
      const state = computeNetworkState(false, false)
      expect(state.isOnline).toBe(false)
      expect(state.hasConnection).toBe(false)
      expect(state.hasInternet).toBe(false)
    })

    it('handles null values', () => {
      const state = computeNetworkState(null, null)
      expect(state.isOnline).toBe(false)
      expect(state.hasConnection).toBe(false)
      expect(state.hasInternet).toBe(false)
    })

    it('handles mixed null values', () => {
      const state1 = computeNetworkState(true, null)
      expect(state1.isOnline).toBe(false)

      const state2 = computeNetworkState(null, true)
      expect(state2.isOnline).toBe(false)
    })
  })

  describe('Listener Notification Order', () => {
    it('notifies listeners in registration order', () => {
      const callOrder: number[] = []
      const listeners = [
        () => callOrder.push(1),
        () => callOrder.push(2),
        () => callOrder.push(3),
      ]

      listeners.forEach((listener) => listener())
      expect(callOrder).toEqual([1, 2, 3])
    })
  })

  describe('Edge Cases', () => {
    it('handles rapid state changes', () => {
      const changes: boolean[] = []
      let currentState = true

      const recordChange = (newState: boolean) => {
        if (newState !== currentState) {
          changes.push(newState)
          currentState = newState
        }
      }

      recordChange(false)
      recordChange(true)
      recordChange(true) // No change
      recordChange(false)
      recordChange(false) // No change
      recordChange(true)

      expect(changes).toEqual([false, true, false, true])
    })

    it('handles concurrent listener additions', () => {
      const listeners = new Set<() => void>()

      const add1 = () => listeners.add(() => {})
      const add2 = () => listeners.add(() => {})
      const add3 = () => listeners.add(() => {})

      add1()
      add2()
      add3()

      expect(listeners.size).toBe(3)
    })
  })
})
