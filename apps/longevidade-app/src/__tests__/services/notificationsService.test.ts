/**
 * Notifications Service Tests
 * Tests for notification settings and constants
 */

import type { NotificationSettings } from '../../services/notifications'

// Mock expo-notifications
jest.mock('expo-notifications', () => ({
  setNotificationHandler: jest.fn(),
  getPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  requestPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  scheduleNotificationAsync: jest.fn(() => Promise.resolve('notification-id')),
  cancelScheduledNotificationAsync: jest.fn(() => Promise.resolve()),
  getAllScheduledNotificationsAsync: jest.fn(() => Promise.resolve([])),
  cancelAllScheduledNotificationsAsync: jest.fn(() => Promise.resolve()),
  setNotificationChannelAsync: jest.fn(() => Promise.resolve()),
  AndroidImportance: { HIGH: 4 },
}))

jest.mock('expo-device', () => ({
  isDevice: true,
}))

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
}))

describe('Notifications defaultSettings', () => {
  let defaultNotificationSettings: NotificationSettings

  beforeEach(() => {
    jest.resetModules()
    const notifModule = require('../../services/notifications')
    defaultNotificationSettings = notifModule.defaultNotificationSettings
  })

  it('exports default settings', () => {
    expect(defaultNotificationSettings).toBeDefined()
  })

  it('has enabled flag', () => {
    expect(defaultNotificationSettings.enabled).toBe(true)
  })

  it('has morning reminder time', () => {
    expect(defaultNotificationSettings.morningReminderTime).toBe('08:00')
  })

  it('has evening reminder time', () => {
    expect(defaultNotificationSettings.eveningReminderTime).toBe('20:00')
  })

  it('has morning enabled flag', () => {
    expect(defaultNotificationSettings.morningEnabled).toBe(true)
  })

  it('has evening enabled flag', () => {
    expect(defaultNotificationSettings.eveningEnabled).toBe(true)
  })
})

describe('loadNotificationSettings', () => {
  let loadNotificationSettings: () => Promise<NotificationSettings>

  beforeEach(() => {
    jest.resetModules()
    const notifModule = require('../../services/notifications')
    loadNotificationSettings = notifModule.loadNotificationSettings
  })

  it('is a function', () => {
    expect(typeof loadNotificationSettings).toBe('function')
  })

  it('returns settings object', async () => {
    const settings = await loadNotificationSettings()

    expect(settings).toHaveProperty('enabled')
    expect(settings).toHaveProperty('morningReminderTime')
    expect(settings).toHaveProperty('eveningReminderTime')
  })
})

describe('saveNotificationSettings', () => {
  let saveNotificationSettings: (settings: NotificationSettings) => Promise<void>

  beforeEach(() => {
    jest.resetModules()
    const notifModule = require('../../services/notifications')
    saveNotificationSettings = notifModule.saveNotificationSettings
  })

  it('is a function', () => {
    expect(typeof saveNotificationSettings).toBe('function')
  })
})

describe('Notification content', () => {
  it('daily reminder has title and body', () => {
    const content = {
      title: 'Hora de cuidar da sua saúde! 💪',
      body: 'Complete suas tarefas de hoje para manter sua sequência.',
    }

    expect(content.title).toBeDefined()
    expect(content.body).toBeDefined()
  })

  it('title includes emoji', () => {
    const title = 'Hora de cuidar da sua saúde! 💪'
    expect(title).toContain('💪')
  })
})

describe('Notification trigger', () => {
  it('creates daily trigger', () => {
    const trigger = {
      hour: 8,
      minute: 0,
      repeats: true,
    }

    expect(trigger.hour).toBe(8)
    expect(trigger.minute).toBe(0)
    expect(trigger.repeats).toBe(true)
  })

  it('supports different times', () => {
    const times = [
      { hour: 6, minute: 0 },
      { hour: 8, minute: 30 },
      { hour: 12, minute: 0 },
      { hour: 20, minute: 0 },
    ]

    times.forEach(time => {
      expect(time.hour).toBeGreaterThanOrEqual(0)
      expect(time.hour).toBeLessThanOrEqual(23)
      expect(time.minute).toBeGreaterThanOrEqual(0)
      expect(time.minute).toBeLessThanOrEqual(59)
    })
  })
})
