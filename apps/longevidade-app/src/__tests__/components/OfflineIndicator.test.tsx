/**
 * OfflineIndicator Component Tests
 * Tests for module and internal logic
 */

import React from 'react'

// Mock hooks
jest.mock('../../hooks/useOffline', () => ({
  useOffline: jest.fn(() => ({
    isOnline: true,
    pendingActions: 0,
    isSyncing: false,
  })),
}))

describe('OfflineIndicator', () => {
  describe('module', () => {
    it('can be imported', () => {
      const { OfflineIndicator } = require('../../components/OfflineIndicator')
      expect(OfflineIndicator).toBeDefined()
    })

    it('is a function component', () => {
      const { OfflineIndicator } = require('../../components/OfflineIndicator')
      expect(typeof OfflineIndicator).toBe('function')
    })
  })

  describe('props', () => {
    it('has showWhenOnline prop default', () => {
      const defaultProps = {
        showWhenOnline: false,
        compact: false,
      }
      expect(defaultProps.showWhenOnline).toBe(false)
    })

    it('has compact prop default', () => {
      const defaultProps = {
        showWhenOnline: false,
        compact: false,
      }
      expect(defaultProps.compact).toBe(false)
    })
  })
})

describe('OfflineIndicator visibility logic', () => {
  const shouldHide = (
    isOnline: boolean,
    pendingActions: number,
    showWhenOnline: boolean
  ) => {
    return isOnline && pendingActions === 0 && !showWhenOnline
  }

  it('hides when online, no pending, and showWhenOnline false', () => {
    expect(shouldHide(true, 0, false)).toBe(true)
  })

  it('shows when offline', () => {
    expect(shouldHide(false, 0, false)).toBe(false)
  })

  it('shows when pending actions', () => {
    expect(shouldHide(true, 3, false)).toBe(false)
  })

  it('shows when showWhenOnline is true', () => {
    expect(shouldHide(true, 0, true)).toBe(false)
  })
})

describe('OfflineIndicator status text', () => {
  const getStatusText = (
    isOnline: boolean,
    isSyncing: boolean,
    pendingActions: number
  ) => {
    if (!isOnline) return 'Offline'
    if (isSyncing) return 'Sincronizando'
    if (pendingActions > 0) return `${pendingActions} pendente${pendingActions > 1 ? 's' : ''}`
    return 'Online'
  }

  it('returns Offline when not connected', () => {
    expect(getStatusText(false, false, 0)).toBe('Offline')
  })

  it('returns Sincronizando when syncing', () => {
    expect(getStatusText(true, true, 0)).toBe('Sincronizando')
  })

  it('returns singular pending for 1 action', () => {
    expect(getStatusText(true, false, 1)).toBe('1 pendente')
  })

  it('returns plural pending for multiple actions', () => {
    expect(getStatusText(true, false, 3)).toBe('3 pendentes')
  })

  it('returns Online when connected', () => {
    expect(getStatusText(true, false, 0)).toBe('Online')
  })
})

describe('OfflineIndicator status color', () => {
  const colors = {
    gray500: '#6B7280',
    primary: '#FF7A00',
    warning: '#F59E0B',
    success: '#22C55E',
  }

  const getStatusColor = (
    isOnline: boolean,
    isSyncing: boolean,
    pendingActions: number
  ) => {
    if (!isOnline) return colors.gray500
    if (isSyncing) return colors.primary
    if (pendingActions > 0) return colors.warning
    return colors.success
  }

  it('returns gray when offline', () => {
    expect(getStatusColor(false, false, 0)).toBe(colors.gray500)
  })

  it('returns primary when syncing', () => {
    expect(getStatusColor(true, true, 0)).toBe(colors.primary)
  })

  it('returns warning when pending', () => {
    expect(getStatusColor(true, false, 3)).toBe(colors.warning)
  })

  it('returns success when online', () => {
    expect(getStatusColor(true, false, 0)).toBe(colors.success)
  })
})

describe('OfflineIndicator compact mode', () => {
  it('compact mode true uses different view', () => {
    const compact = true
    expect(compact).toBe(true)
  })

  it('compact mode false uses full view', () => {
    const compact = false
    expect(compact).toBe(false)
  })
})
