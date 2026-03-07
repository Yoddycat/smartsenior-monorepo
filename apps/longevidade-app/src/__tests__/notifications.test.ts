import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import {
  loadNotificationSettings,
  saveNotificationSettings,
  scheduleNotifications,
  sendTestNotification,
  requestNotificationPermissions,
  defaultNotificationSettings,
} from '../services/notifications'

describe('Notification Service', () => {
  beforeEach(async () => {
    await AsyncStorage.clear()
    jest.clearAllMocks()
  })

  describe('loadNotificationSettings', () => {
    it('should return default settings when none are stored', async () => {
      const settings = await loadNotificationSettings()

      expect(settings).toEqual(defaultNotificationSettings)
    })

    it('should return stored settings', async () => {
      const customSettings = {
        enabled: false,
        morningReminderTime: '07:00',
        eveningReminderTime: '21:00',
        morningEnabled: false,
        eveningEnabled: true,
      }

      await AsyncStorage.setItem(
        '@longevidade:notification_settings',
        JSON.stringify(customSettings)
      )

      const settings = await loadNotificationSettings()

      expect(settings).toEqual(customSettings)
    })

    it('should merge with defaults for partial settings', async () => {
      await AsyncStorage.setItem(
        '@longevidade:notification_settings',
        JSON.stringify({ enabled: false })
      )

      const settings = await loadNotificationSettings()

      expect(settings.enabled).toBe(false)
      expect(settings.morningReminderTime).toBe(defaultNotificationSettings.morningReminderTime)
    })
  })

  describe('saveNotificationSettings', () => {
    it('should save settings to storage', async () => {
      const settings = {
        ...defaultNotificationSettings,
        morningReminderTime: '09:00',
      }

      await saveNotificationSettings(settings)

      const stored = await AsyncStorage.getItem('@longevidade:notification_settings')
      expect(stored).not.toBeNull()
      expect(JSON.parse(stored!)).toEqual(settings)
    })

    it('should reschedule notifications after saving', async () => {
      const settings = {
        ...defaultNotificationSettings,
        enabled: true,
      }

      await saveNotificationSettings(settings)

      expect(Notifications.cancelAllScheduledNotificationsAsync).toHaveBeenCalled()
    })
  })

  describe('requestNotificationPermissions', () => {
    it('should return true when permissions are granted', async () => {
      const result = await requestNotificationPermissions()
      expect(result).toBe(true)
    })

    it('should call getPermissionsAsync', async () => {
      await requestNotificationPermissions()
      expect(Notifications.getPermissionsAsync).toHaveBeenCalled()
    })
  })

  describe('scheduleNotifications', () => {
    it('should cancel all notifications first', async () => {
      await scheduleNotifications(defaultNotificationSettings)

      expect(Notifications.cancelAllScheduledNotificationsAsync).toHaveBeenCalled()
    })

    it('should not schedule when disabled', async () => {
      const settings = {
        ...defaultNotificationSettings,
        enabled: false,
      }

      await scheduleNotifications(settings)

      expect(Notifications.scheduleNotificationAsync).not.toHaveBeenCalled()
    })

    it('should schedule morning notification when enabled', async () => {
      const settings = {
        ...defaultNotificationSettings,
        enabled: true,
        morningEnabled: true,
        eveningEnabled: false,
      }

      await scheduleNotifications(settings)

      expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledTimes(1)
      expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledWith(
        expect.objectContaining({
          content: expect.objectContaining({
            title: expect.stringContaining('Bom dia'),
          }),
        })
      )
    })

    it('should schedule evening notification when enabled', async () => {
      const settings = {
        ...defaultNotificationSettings,
        enabled: true,
        morningEnabled: false,
        eveningEnabled: true,
      }

      await scheduleNotifications(settings)

      expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledTimes(1)
      expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledWith(
        expect.objectContaining({
          content: expect.objectContaining({
            title: expect.stringContaining('Boa noite'),
          }),
        })
      )
    })

    it('should schedule both notifications when both enabled', async () => {
      const settings = {
        ...defaultNotificationSettings,
        enabled: true,
        morningEnabled: true,
        eveningEnabled: true,
      }

      await scheduleNotifications(settings)

      expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledTimes(2)
    })
  })

  describe('sendTestNotification', () => {
    it('should send immediate notification', async () => {
      await sendTestNotification()

      expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledWith(
        expect.objectContaining({
          trigger: null,
          content: expect.objectContaining({
            title: expect.stringContaining('Teste'),
          }),
        })
      )
    })
  })

  describe('defaultNotificationSettings', () => {
    it('should have correct default values', () => {
      expect(defaultNotificationSettings.enabled).toBe(true)
      expect(defaultNotificationSettings.morningReminderTime).toBe('08:00')
      expect(defaultNotificationSettings.eveningReminderTime).toBe('20:00')
      expect(defaultNotificationSettings.morningEnabled).toBe(true)
      expect(defaultNotificationSettings.eveningEnabled).toBe(true)
    })
  })
})
