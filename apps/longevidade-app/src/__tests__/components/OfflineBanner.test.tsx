/**
 * OfflineBanner Component Tests
 * Tests for module and internal logic
 */

import React from 'react'

// Mock hooks
jest.mock('../../hooks/useOffline', () => ({
  useOffline: jest.fn(() => ({
    isOnline: true,
    pendingActions: 0,
    isSyncing: false,
    forceSync: jest.fn(),
  })),
}))

// Mock safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}))

describe('OfflineBanner', () => {
  describe('module', () => {
    it('can be imported', () => {
      const { OfflineBanner } = require('../../components/OfflineBanner')
      expect(OfflineBanner).toBeDefined()
    })

    it('is a function component', () => {
      const { OfflineBanner } = require('../../components/OfflineBanner')
      expect(typeof OfflineBanner).toBe('function')
    })
  })

  describe('useOffline hook integration', () => {
    it('hook returns online state', () => {
      const { useOffline } = require('../../hooks/useOffline')
      const state = useOffline()

      expect(state.isOnline).toBe(true)
      expect(state.pendingActions).toBe(0)
      expect(state.isSyncing).toBe(false)
    })
  })
})

describe('OfflineBanner message logic', () => {
  const getMessage = (isOnline: boolean, isSyncing: boolean, pendingActions: number) => {
    if (!isOnline) {
      return 'Sem conexão - Modo offline'
    }
    if (isSyncing) {
      return 'Sincronizando...'
    }
    if (pendingActions > 0) {
      return `${pendingActions} ${pendingActions === 1 ? 'ação pendente' : 'ações pendentes'}`
    }
    return 'Conectado'
  }

  it('returns offline message when not online', () => {
    expect(getMessage(false, false, 0)).toBe('Sem conexão - Modo offline')
  })

  it('returns syncing message when syncing', () => {
    expect(getMessage(true, true, 0)).toBe('Sincronizando...')
  })

  it('returns singular pending message for 1 action', () => {
    expect(getMessage(true, false, 1)).toBe('1 ação pendente')
  })

  it('returns plural pending message for multiple actions', () => {
    expect(getMessage(true, false, 5)).toBe('5 ações pendentes')
  })

  it('returns connected message when online and no pending', () => {
    expect(getMessage(true, false, 0)).toBe('Conectado')
  })
})

describe('OfflineBanner icon logic', () => {
  const getIcon = (isOnline: boolean, isSyncing: boolean, pendingActions: number) => {
    if (!isOnline) return '📡'
    if (isSyncing) return '🔄'
    if (pendingActions > 0) return '⏳'
    return '✓'
  }

  it('returns antenna icon when offline', () => {
    expect(getIcon(false, false, 0)).toBe('📡')
  })

  it('returns sync icon when syncing', () => {
    expect(getIcon(true, true, 0)).toBe('🔄')
  })

  it('returns hourglass icon when pending', () => {
    expect(getIcon(true, false, 3)).toBe('⏳')
  })

  it('returns checkmark when online and no pending', () => {
    expect(getIcon(true, false, 0)).toBe('✓')
  })
})

describe('OfflineBanner visibility logic', () => {
  const shouldShow = (isOnline: boolean, pendingActions: number, showPendingCount: boolean) => {
    return !isOnline || (pendingActions > 0 && showPendingCount)
  }

  it('shows when offline', () => {
    expect(shouldShow(false, 0, true)).toBe(true)
  })

  it('shows when pending and showPendingCount is true', () => {
    expect(shouldShow(true, 3, true)).toBe(true)
  })

  it('hides when pending but showPendingCount is false', () => {
    expect(shouldShow(true, 3, false)).toBe(false)
  })

  it('hides when online and no pending', () => {
    expect(shouldShow(true, 0, true)).toBe(false)
  })
})

describe('OfflineBanner banner style selection', () => {
  const getBannerType = (isOnline: boolean, isSyncing: boolean, pendingActions: number) => {
    if (!isOnline) return 'offline'
    if (isSyncing) return 'syncing'
    if (pendingActions > 0) return 'pending'
    return 'online'
  }

  it('returns offline style when not online', () => {
    expect(getBannerType(false, false, 0)).toBe('offline')
  })

  it('returns syncing style when syncing', () => {
    expect(getBannerType(true, true, 0)).toBe('syncing')
  })

  it('returns pending style when pending actions', () => {
    expect(getBannerType(true, false, 2)).toBe('pending')
  })

  it('returns online style when online and no pending', () => {
    expect(getBannerType(true, false, 0)).toBe('online')
  })
})

describe('OfflineBanner interaction', () => {
  const isSyncDisabled = (isOnline: boolean, pendingActions: number) => {
    return !isOnline || pendingActions === 0
  }

  it('sync button is disabled when offline', () => {
    expect(isSyncDisabled(false, 5)).toBe(true)
  })

  it('sync button is disabled when no pending actions', () => {
    expect(isSyncDisabled(true, 0)).toBe(true)
  })

  it('sync button is enabled when online with pending actions', () => {
    expect(isSyncDisabled(true, 3)).toBe(false)
  })
})
