import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors, spacing, borderRadius, typography } from '../constants/theme'
import {
  loadNotificationSettings,
  saveNotificationSettings,
  sendTestNotification,
  NotificationSettings,
  defaultNotificationSettings,
} from '../services/notifications'

const PROFILE_STORAGE_KEY = '@longevidade:user_profile'

interface UserProfile {
  name: string
  birthYear: number
  protocolStartDate: string
  healthConnected: boolean
}

const defaultProfile: UserProfile = {
  name: 'Usuário',
  birthYear: 1960,
  protocolStartDate: new Date().toISOString().split('T')[0],
  healthConnected: false,
}

export function ProfileScreen() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile)
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(
    defaultNotificationSettings
  )
  const [isLoading, setIsLoading] = useState(true)

  // Calculate age and protocol days
  const currentYear = new Date().getFullYear()
  const age = currentYear - profile.birthYear
  const protocolDays = Math.floor(
    (new Date().getTime() - new Date(profile.protocolStartDate).getTime()) /
      (1000 * 60 * 60 * 24)
  )
  const currentMonth = Math.min(3, Math.floor(protocolDays / 28) + 1)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileData, notifSettings] = await Promise.all([
          AsyncStorage.getItem(PROFILE_STORAGE_KEY),
          loadNotificationSettings(),
        ])

        if (profileData) {
          setProfile(JSON.parse(profileData))
        }
        setNotificationSettings(notifSettings)
      } catch (error) {
        console.error('Error loading profile data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const updateNotificationSettings = async (updates: Partial<NotificationSettings>) => {
    const newSettings = { ...notificationSettings, ...updates }
    setNotificationSettings(newSettings)
    await saveNotificationSettings(newSettings)
  }

  const handleConnectHealth = () => {
    Alert.alert(
      'Conectar Saúde',
      'Deseja conectar com o Apple Health / Google Fit para sincronizar seus dados de saúde?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Conectar',
          onPress: async () => {
            const newProfile = { ...profile, healthConnected: true }
            setProfile(newProfile)
            await AsyncStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(newProfile))
            Alert.alert('Sucesso', 'Conexão com saúde estabelecida!')
          },
        },
      ]
    )
  }

  const handleTestNotification = async () => {
    await sendTestNotification()
    Alert.alert(
      'Notificação Enviada',
      'Uma notificação de teste foi enviada. Verifique a central de notificações.'
    )
  }

  const handleChangeTime = (type: 'morning' | 'evening') => {
    const currentTime =
      type === 'morning'
        ? notificationSettings.morningReminderTime
        : notificationSettings.eveningReminderTime

    Alert.prompt(
      `Horário do Lembrete ${type === 'morning' ? 'Matinal' : 'Noturno'}`,
      'Digite o horário no formato HH:MM (ex: 08:00)',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Salvar',
          onPress: (value: string | undefined) => {
            if (value && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
              const key =
                type === 'morning' ? 'morningReminderTime' : 'eveningReminderTime'
              updateNotificationSettings({ [key]: value })
            } else {
              Alert.alert('Formato inválido', 'Use o formato HH:MM (ex: 08:00)')
            }
          },
        },
      ],
      'plain-text',
      currentTime
    )
  }

  const handleResetProtocol = () => {
    Alert.alert(
      'Reiniciar Protocolo',
      'Tem certeza que deseja reiniciar o protocolo? Todo o progresso será perdido.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Reiniciar',
          style: 'destructive',
          onPress: async () => {
            const newProfile = {
              ...profile,
              protocolStartDate: new Date().toISOString().split('T')[0],
            }
            setProfile(newProfile)
            await AsyncStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(newProfile))
            const keys = await AsyncStorage.getAllKeys()
            const taskKeys = keys.filter((k) =>
              k.startsWith('@longevidade:completed_tasks')
            )
            await AsyncStorage.multiRemove(taskKeys)
            Alert.alert('Protocolo Reiniciado', 'Seu progresso foi resetado.')
          },
        },
      ]
    )
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.subtitle}>Gerencie suas configurações</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {profile.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        </View>
        <Text style={styles.profileName}>{profile.name}</Text>
        <Text style={styles.profileAge}>{age} anos</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{protocolDays}</Text>
            <Text style={styles.statLabel}>Dias no protocolo</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{currentMonth}</Text>
            <Text style={styles.statLabel}>Mês atual</Text>
          </View>
        </View>
      </View>

      {/* Health Connection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conexão de Saúde</Text>

        <TouchableOpacity
          style={styles.healthCard}
          onPress={handleConnectHealth}
          accessibilityRole="button"
          accessibilityLabel={
            profile.healthConnected
              ? 'Apple Health conectado'
              : 'Conectar com Apple Health'
          }
        >
          <View style={styles.healthIconContainer}>
            <Text style={styles.healthIcon}>❤️</Text>
          </View>
          <View style={styles.healthContent}>
            <Text style={styles.healthTitle}>Apple Health / Google Fit</Text>
            <Text style={styles.healthDescription}>
              {profile.healthConnected
                ? 'Conectado e sincronizando'
                : 'Conectar para sincronizar dados'}
            </Text>
          </View>
          <View
            style={[
              styles.connectionStatus,
              profile.healthConnected && styles.connectionStatusActive,
            ]}
          >
            <Text
              style={[
                styles.connectionStatusText,
                profile.healthConnected && styles.connectionStatusTextActive,
              ]}
            >
              {profile.healthConnected ? '✓' : '○'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificações</Text>

        <View style={styles.settingsCard}>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Notificações</Text>
              <Text style={styles.settingDescription}>Receber lembretes do app</Text>
            </View>
            <Switch
              value={notificationSettings.enabled}
              onValueChange={(value) => updateNotificationSettings({ enabled: value })}
              trackColor={{ false: colors.gray300, true: colors.primary }}
              thumbColor={colors.white}
              accessibilityRole="switch"
              accessibilityLabel="Ativar notificações"
              accessibilityState={{ checked: notificationSettings.enabled }}
            />
          </View>

          {notificationSettings.enabled && (
            <>
              <View style={styles.settingDivider} />

              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Lembrete Matinal</Text>
                  <TouchableOpacity onPress={() => handleChangeTime('morning')}>
                    <Text style={styles.settingTime}>
                      {notificationSettings.morningReminderTime} ✏️
                    </Text>
                  </TouchableOpacity>
                </View>
                <Switch
                  value={notificationSettings.morningEnabled}
                  onValueChange={(value) =>
                    updateNotificationSettings({ morningEnabled: value })
                  }
                  trackColor={{ false: colors.gray300, true: colors.primary }}
                  thumbColor={colors.white}
                  accessibilityRole="switch"
                  accessibilityLabel="Ativar lembrete matinal"
                  accessibilityState={{ checked: notificationSettings.morningEnabled }}
                />
              </View>

              <View style={styles.settingDivider} />

              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Lembrete Noturno</Text>
                  <TouchableOpacity onPress={() => handleChangeTime('evening')}>
                    <Text style={styles.settingTime}>
                      {notificationSettings.eveningReminderTime} ✏️
                    </Text>
                  </TouchableOpacity>
                </View>
                <Switch
                  value={notificationSettings.eveningEnabled}
                  onValueChange={(value) =>
                    updateNotificationSettings({ eveningEnabled: value })
                  }
                  trackColor={{ false: colors.gray300, true: colors.primary }}
                  thumbColor={colors.white}
                  accessibilityRole="switch"
                  accessibilityLabel="Ativar lembrete noturno"
                  accessibilityState={{ checked: notificationSettings.eveningEnabled }}
                />
              </View>

              <View style={styles.settingDivider} />

              <TouchableOpacity
                style={styles.testButton}
                onPress={handleTestNotification}
                accessibilityRole="button"
                accessibilityLabel="Testar notificação"
              >
                <Text style={styles.testButtonText}>🔔 Testar Notificação</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      {/* Protocol Management */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Protocolo</Text>

        <View style={styles.protocolCard}>
          <View style={styles.protocolInfo}>
            <Text style={styles.protocolLabel}>Data de início</Text>
            <Text style={styles.protocolValue}>
              {new Date(profile.protocolStartDate).toLocaleDateString('pt-BR')}
            </Text>
          </View>

          <View style={styles.protocolDivider} />

          <View style={styles.protocolInfo}>
            <Text style={styles.protocolLabel}>Progresso</Text>
            <Text style={styles.protocolValue}>Dia {protocolDays + 1} de 84</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetProtocol}
          accessibilityRole="button"
          accessibilityLabel="Reiniciar protocolo"
          accessibilityHint="Isso irá apagar todo o seu progresso"
        >
          <Text style={styles.resetButtonText}>Reiniciar Protocolo</Text>
        </TouchableOpacity>
      </View>

      {/* App Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Versão</Text>
            <Text style={styles.infoValue}>1.0.0</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Desenvolvido por</Text>
            <Text style={styles.infoValue}>SmartSenior</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Alert.alert('Termos de Uso', 'Em breve disponível.')}
          accessibilityRole="link"
          accessibilityLabel="Termos de uso"
        >
          <Text style={styles.linkButtonText}>Termos de Uso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() =>
            Alert.alert('Política de Privacidade', 'Em breve disponível.')
          }
          accessibilityRole="link"
          accessibilityLabel="Política de privacidade"
        >
          <Text style={styles.linkButtonText}>Política de Privacidade</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray50,
  },
  loadingText: {
    fontSize: typography.fontSize.base,
    color: colors.gray500,
  },
  header: {
    padding: spacing.lg,
    paddingTop: spacing['2xl'],
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray300,
    marginTop: spacing.xs,
  },
  profileCard: {
    backgroundColor: colors.white,
    margin: spacing.md,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarContainer: {
    marginBottom: spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  profileName: {
    fontSize: typography.fontSize.xl,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  profileAge: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: spacing.xs,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: spacing.lg,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.gray100,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: spacing.xs,
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.gray200,
    marginHorizontal: spacing.md,
  },
  section: {
    padding: spacing.md,
    paddingTop: spacing.sm,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
    marginBottom: spacing.md,
  },
  healthCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  healthIconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthIcon: {
    fontSize: 24,
  },
  healthContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  healthTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray900,
  },
  healthDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: 2,
  },
  connectionStatus: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.gray300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionStatusActive: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  connectionStatusText: {
    color: colors.gray400,
    fontSize: 18,
  },
  connectionStatusTextActive: {
    color: colors.white,
    fontWeight: 'bold',
  },
  settingsCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },
  settingInfo: {
    flex: 1,
    marginRight: spacing.md,
  },
  settingTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '500',
    color: colors.gray900,
  },
  settingDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: 2,
  },
  settingTime: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    marginTop: 2,
  },
  settingDivider: {
    height: 1,
    backgroundColor: colors.gray100,
    marginVertical: spacing.xs,
  },
  testButton: {
    marginTop: spacing.sm,
    padding: spacing.sm,
    alignItems: 'center',
    backgroundColor: colors.gray50,
    borderRadius: borderRadius.md,
  },
  testButtonText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: '500',
  },
  protocolCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  protocolInfo: {
    flex: 1,
    alignItems: 'center',
  },
  protocolLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
  },
  protocolValue: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray900,
    marginTop: spacing.xs,
  },
  protocolDivider: {
    width: 1,
    backgroundColor: colors.gray200,
  },
  resetButton: {
    marginTop: spacing.md,
    padding: spacing.md,
    alignItems: 'center',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.error,
  },
  resetButtonText: {
    color: colors.error,
    fontSize: typography.fontSize.base,
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },
  infoLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
  },
  infoValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
    color: colors.gray900,
  },
  infoDivider: {
    height: 1,
    backgroundColor: colors.gray100,
  },
  linkButton: {
    marginTop: spacing.sm,
    padding: spacing.md,
    alignItems: 'center',
  },
  linkButtonText: {
    color: colors.primary,
    fontSize: typography.fontSize.base,
    fontWeight: '500',
  },
})
