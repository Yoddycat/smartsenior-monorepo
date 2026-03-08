/* global global, setTimeout, clearTimeout, window */
// Mock requestAnimationFrame for animated components
global.requestAnimationFrame = (callback) => setTimeout(callback, 0)
global.cancelAnimationFrame = (id) => clearTimeout(id)

// Mock window.Image for react-native-web image loading
if (typeof window !== 'undefined') {
  window.Image = class MockImage {
    constructor() {
      this.onload = null
      this.onerror = null
      this.src = ''
    }
    set src(value) {
      this._src = value
      // Simulate async load
      setTimeout(() => {
        if (this.onload) this.onload()
      }, 0)
    }
    get src() {
      return this._src
    }
  }
}

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// Mock expo-notifications
jest.mock('expo-notifications', () => ({
  setNotificationHandler: jest.fn(),
  getPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  requestPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  setNotificationChannelAsync: jest.fn(() => Promise.resolve()),
  scheduleNotificationAsync: jest.fn(() => Promise.resolve('notification-id')),
  cancelAllScheduledNotificationsAsync: jest.fn(() => Promise.resolve()),
  getAllScheduledNotificationsAsync: jest.fn(() => Promise.resolve([])),
  AndroidImportance: {
    HIGH: 4,
  },
  SchedulableTriggerInputTypes: {
    DAILY: 'daily',
  },
}))

// Mock expo-device
jest.mock('expo-device', () => ({
  isDevice: true,
}))

// Mock Platform
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn((obj) => obj.ios),
}))

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 44, bottom: 34, left: 0, right: 0 }),
  SafeAreaProvider: ({ children }) => children,
  SafeAreaView: ({ children }) => children,
}))

// Mock Image component to avoid asset loading issues in tests
jest.mock('react-native/Libraries/Image/Image', () => {
  const React = require('react')
  return {
    __esModule: true,
    default: (props) => React.createElement('Image', { ...props, testID: 'mock-image' }),
  }
})

// Mock react-native-web Image to avoid asset resolution issues
jest.mock('react-native-web/dist/cjs/exports/Image', () => {
  const React = require('react')
  const MockImage = (props) => React.createElement('View', { ...props, testID: 'mock-image' })
  MockImage.getSize = jest.fn()
  MockImage.prefetch = jest.fn()
  MockImage.resolveAssetSource = jest.fn(() => ({ uri: 'mock-uri' }))
  return {
    __esModule: true,
    default: MockImage,
  }
}, { virtual: true })

// Mock @react-native-community/netinfo
jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(() => jest.fn()),
  fetch: jest.fn(() => Promise.resolve({
    isConnected: true,
    isInternetReachable: true,
    type: 'wifi',
  })),
}))
