/**
 * Components Index Tests
 * Tests for component exports
 */

// Mock hooks
jest.mock('../../hooks/useHealth', () => ({
  useHealth: () => ({
    isAvailable: true,
    permissions: { steps: true, heartRate: true, hrv: true, sleep: true },
    isLoading: false,
    requestPermissions: jest.fn(),
    hasAnyPermission: true,
    hasAllPermissions: true,
  }),
}))

jest.mock('../../hooks/useRecovery', () => ({
  useRecovery: () => ({
    recoveryStatus: 'good',
    hrv: 45,
    isLoading: false,
    suggestion: null,
  }),
}))

jest.mock('../../hooks/useOffline', () => ({
  useOffline: () => ({
    isOnline: true,
    pendingActions: 0,
    isSyncing: false,
    forceSync: jest.fn(),
  }),
}))

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}))

describe('components index', () => {
  describe('card components', () => {
    it('exports HealthPermissionsCard', () => {
      const components = require('../../components')
      expect(components.HealthPermissionsCard).toBeDefined()
    })

    it('exports RecoveryCard', () => {
      const components = require('../../components')
      expect(components.RecoveryCard).toBeDefined()
    })
  })

  describe('animated components', () => {
    it('exports FadeInView', () => {
      const components = require('../../components')
      expect(components.FadeInView).toBeDefined()
    })

    it('exports AnimatedProgressBar', () => {
      const components = require('../../components')
      expect(components.AnimatedProgressBar).toBeDefined()
    })

    it('exports AnimatedCheckbox', () => {
      const components = require('../../components')
      expect(components.AnimatedCheckbox).toBeDefined()
    })

    it('exports AnimatedCounter', () => {
      const components = require('../../components')
      expect(components.AnimatedCounter).toBeDefined()
    })

    it('exports PulseView', () => {
      const components = require('../../components')
      expect(components.PulseView).toBeDefined()
    })

    it('exports SuccessAnimation', () => {
      const components = require('../../components')
      expect(components.SuccessAnimation).toBeDefined()
    })
  })

  describe('offline components', () => {
    it('exports OfflineBanner', () => {
      const components = require('../../components')
      expect(components.OfflineBanner).toBeDefined()
    })

    it('exports OfflineIndicator', () => {
      const components = require('../../components')
      expect(components.OfflineIndicator).toBeDefined()
    })
  })

  describe('utility components', () => {
    it('exports TimeInputModal', () => {
      const components = require('../../components')
      expect(components.TimeInputModal).toBeDefined()
    })
  })
})

describe('component types', () => {
  it('all exports are functions', () => {
    const components = require('../../components')
    const exportNames = [
      'HealthPermissionsCard',
      'RecoveryCard',
      'FadeInView',
      'AnimatedProgressBar',
      'AnimatedCheckbox',
      'AnimatedCounter',
      'PulseView',
      'SuccessAnimation',
      'OfflineBanner',
      'OfflineIndicator',
      'TimeInputModal',
    ]

    exportNames.forEach((name) => {
      expect(typeof components[name]).toBe('function')
    })
  })
})
