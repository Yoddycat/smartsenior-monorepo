/**
 * Notification Service
 * Handles local push notifications for daily reminders
 */

import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NOTIFICATION_SETTINGS_KEY = '@longevidade:notification_settings'

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
})

export interface NotificationSettings {
  enabled: boolean
  morningReminderTime: string // HH:MM format
  eveningReminderTime: string // HH:MM format
  morningEnabled: boolean
  eveningEnabled: boolean
}

export const defaultNotificationSettings: NotificationSettings = {
  enabled: true,
  morningReminderTime: '08:00',
  eveningReminderTime: '20:00',
  morningEnabled: true,
  eveningEnabled: true,
}

/**
 * Request notification permissions
 */
export async function requestNotificationPermissions(): Promise<boolean> {
  if (!Device.isDevice) {
    console.warn('Notifications require a physical device')
    return false
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync()
  let finalStatus = existingStatus

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }

  if (finalStatus !== 'granted') {
    console.warn('Notification permission not granted')
    return false
  }

  // Configure Android channel
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('daily-reminders', {
      name: 'Lembretes Diários',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF7A00',
    })
  }

  return true
}

/**
 * Load notification settings from storage
 */
export async function loadNotificationSettings(): Promise<NotificationSettings> {
  try {
    const stored = await AsyncStorage.getItem(NOTIFICATION_SETTINGS_KEY)
    if (stored) {
      return { ...defaultNotificationSettings, ...JSON.parse(stored) }
    }
  } catch (error) {
    console.error('Error loading notification settings:', error)
  }
  return defaultNotificationSettings
}

/**
 * Save notification settings to storage
 */
export async function saveNotificationSettings(settings: NotificationSettings): Promise<void> {
  try {
    await AsyncStorage.setItem(NOTIFICATION_SETTINGS_KEY, JSON.stringify(settings))
    await scheduleNotifications(settings)
  } catch (error) {
    console.error('Error saving notification settings:', error)
  }
}

/**
 * Parse time string to hours and minutes
 */
function parseTime(timeString: string): { hour: number; minute: number } {
  const [hour, minute] = timeString.split(':').map(Number)
  return { hour, minute }
}

/**
 * Schedule daily notifications based on settings
 */
export async function scheduleNotifications(settings: NotificationSettings): Promise<void> {
  // Cancel all existing notifications first
  await Notifications.cancelAllScheduledNotificationsAsync()

  if (!settings.enabled) {
    return
  }

  const hasPermission = await requestNotificationPermissions()
  if (!hasPermission) {
    return
  }

  // Schedule morning reminder
  if (settings.morningEnabled) {
    const { hour, minute } = parseTime(settings.morningReminderTime)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Bom dia! ☀️',
        body: 'Hora de começar suas tarefas do protocolo de longevidade.',
        data: { type: 'morning_reminder' },
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour,
        minute,
      },
    })
  }

  // Schedule evening reminder
  if (settings.eveningEnabled) {
    const { hour, minute } = parseTime(settings.eveningReminderTime)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Boa noite! 🌙',
        body: 'Não esqueça de completar suas tarefas antes de dormir.',
        data: { type: 'evening_reminder' },
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour,
        minute,
      },
    })
  }
}

/**
 * Send an immediate test notification
 */
export async function sendTestNotification(): Promise<void> {
  const hasPermission = await requestNotificationPermissions()
  if (!hasPermission) {
    return
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Teste de Notificação ✅',
      body: 'As notificações estão funcionando corretamente!',
      data: { type: 'test' },
      sound: true,
    },
    trigger: null, // Send immediately
  })
}

/**
 * Get all scheduled notifications
 */
export async function getScheduledNotifications(): Promise<Notifications.NotificationRequest[]> {
  return await Notifications.getAllScheduledNotificationsAsync()
}

/**
 * Cancel all scheduled notifications
 */
export async function cancelAllNotifications(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync()
}

/**
 * Initialize notifications on app start
 */
export async function initializeNotifications(): Promise<void> {
  const settings = await loadNotificationSettings()
  if (settings.enabled) {
    await scheduleNotifications(settings)
  }
}
