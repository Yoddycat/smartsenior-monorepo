/**
 * Offline Components Tests
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import { OfflineBanner } from '../components/OfflineBanner'
import { OfflineIndicator } from '../components/OfflineIndicator'

// Mock useOffline hook with mutable state
const mockOfflineState = {
  isOnline: true,
  networkStatus: 'online' as const,
  connectionType: 'wifi',
  pendingActions: 0,
  isSyncing: false,
  lastSyncTime: null,
  syncError: null,
  forceSync: jest.fn(() => Promise.resolve(true)),
  queueAction: jest.fn(() => Promise.resolve('id')),
}

jest.mock('../hooks/useOffline', () => ({
  useOffline: () => mockOfflineState,
}))

// Reset state before each test
const resetMockState = () => {
  mockOfflineState.isOnline = true
  mockOfflineState.networkStatus = 'online'
  mockOfflineState.pendingActions = 0
  mockOfflineState.isSyncing = false
  mockOfflineState.syncError = null
  mockOfflineState.forceSync.mockClear()
}

describe('OfflineBanner', () => {
  beforeEach(() => {
    resetMockState()
  })

  describe('rendering', () => {
    it('renders without crashing when online', () => {
      expect(() => render(<OfflineBanner />)).not.toThrow()
    })

    it('renders without crashing when offline', () => {
      mockOfflineState.isOnline = false
      expect(() => render(<OfflineBanner />)).not.toThrow()
    })

    it('renders without crashing when syncing', () => {
      mockOfflineState.isSyncing = true
      mockOfflineState.pendingActions = 1
      expect(() => render(<OfflineBanner />)).not.toThrow()
    })

    it('renders without crashing with pending actions', () => {
      mockOfflineState.pendingActions = 5
      expect(() => render(<OfflineBanner />)).not.toThrow()
    })
  })

  describe('content', () => {
    it('contains offline message when offline', () => {
      mockOfflineState.isOnline = false
      const { toJSON } = render(<OfflineBanner />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Sem conexão')
      expect(json).toContain('📡')
    })

    it('contains syncing message when syncing', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.isSyncing = true
      mockOfflineState.pendingActions = 1
      const { toJSON } = render(<OfflineBanner />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Sincronizando')
      expect(json).toContain('🔄')
    })

    it('contains pending actions count', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 3
      const { toJSON } = render(<OfflineBanner />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('3')
      expect(json).toContain('pendentes')
    })

    it('shows singular form for 1 action', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 1
      const { toJSON } = render(<OfflineBanner />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('1')
      expect(json).toContain('pendente')
    })

    it('contains sync hint when has pending actions', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 2
      const { toJSON } = render(<OfflineBanner />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Toque para sincronizar')
    })

    it('shows hourglass icon for pending actions', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 2
      const { toJSON } = render(<OfflineBanner />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('⏳')
    })
  })

  describe('props', () => {
    it('accepts showPendingCount prop', () => {
      expect(() => render(<OfflineBanner showPendingCount={false} />)).not.toThrow()
      expect(() => render(<OfflineBanner showPendingCount={true} />)).not.toThrow()
    })
  })
})

describe('OfflineIndicator', () => {
  beforeEach(() => {
    resetMockState()
  })

  describe('visibility', () => {
    it('returns null when online with no pending actions', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 0
      const { toJSON } = render(<OfflineIndicator />)

      expect(toJSON()).toBeNull()
    })

    it('renders when showWhenOnline is true', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 0
      const { toJSON } = render(<OfflineIndicator showWhenOnline={true} />)

      expect(toJSON()).not.toBeNull()
    })

    it('renders when offline', () => {
      mockOfflineState.isOnline = false
      const { toJSON } = render(<OfflineIndicator />)

      expect(toJSON()).not.toBeNull()
    })

    it('renders when has pending actions', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 3
      const { toJSON } = render(<OfflineIndicator />)

      expect(toJSON()).not.toBeNull()
    })
  })

  describe('content', () => {
    it('shows Offline text when not connected', () => {
      mockOfflineState.isOnline = false
      const { toJSON } = render(<OfflineIndicator />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Offline')
    })

    it('shows Sincronizando when syncing', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.isSyncing = true
      mockOfflineState.pendingActions = 1
      const { toJSON } = render(<OfflineIndicator />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Sincronizando')
    })

    it('shows pending count', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 5
      const { toJSON } = render(<OfflineIndicator />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('5')
      expect(json).toContain('pendentes')
    })

    it('shows singular pendente for 1 action', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 1
      const { toJSON } = render(<OfflineIndicator />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('1')
      expect(json).toContain('pendente')
      expect(json).not.toContain('pendentes')
    })

    it('shows Online when connected and showWhenOnline', () => {
      mockOfflineState.isOnline = true
      mockOfflineState.pendingActions = 0
      const { toJSON } = render(<OfflineIndicator showWhenOnline={true} />)
      const json = JSON.stringify(toJSON())

      expect(json).toContain('Online')
    })
  })

  describe('compact mode', () => {
    it('renders in compact mode when offline', () => {
      mockOfflineState.isOnline = false
      const { toJSON } = render(<OfflineIndicator compact={true} />)

      expect(toJSON()).not.toBeNull()
    })

    it('does not show text in compact mode', () => {
      mockOfflineState.isOnline = false
      const { toJSON } = render(<OfflineIndicator compact={true} />)
      const json = JSON.stringify(toJSON())

      // Compact mode should not contain status text
      expect(json).not.toContain('Offline')
      expect(json).not.toContain('Online')
    })
  })

  describe('props', () => {
    it('accepts showWhenOnline prop', () => {
      expect(() => render(<OfflineIndicator showWhenOnline={false} />)).not.toThrow()
      expect(() => render(<OfflineIndicator showWhenOnline={true} />)).not.toThrow()
    })

    it('accepts compact prop', () => {
      mockOfflineState.isOnline = false
      expect(() => render(<OfflineIndicator compact={true} />)).not.toThrow()
      expect(() => render(<OfflineIndicator compact={false} />)).not.toThrow()
    })

    it('accepts both props together', () => {
      mockOfflineState.isOnline = false
      expect(() => render(
        <OfflineIndicator showWhenOnline={true} compact={true} />
      )).not.toThrow()
    })
  })
})
