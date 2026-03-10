import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View, ActivityIndicator } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  HomeScreen,
  ProtocolScreen,
  MonthDetailScreen,
  ProgressScreen,
  ProfileScreen,
  OnboardingScreen,
} from './src/screens'
import { colors } from './src/constants/theme'
import { initializeNotifications } from './src/services/notifications'
import { networkService, syncQueueService } from './src/services'
import { OfflineBanner } from './src/components'

const ONBOARDING_COMPLETE_KEY = '@longevidade:onboarding_complete'

// Stack navigator for Protocol tab
type ProtocolStackParamList = {
  ProtocolList: undefined
  MonthDetail: { month: number }
}

const ProtocolStack = createStackNavigator<ProtocolStackParamList>()
const Tab = createBottomTabNavigator()

function ProtocolStackScreen() {
  return (
    <ProtocolStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <ProtocolStack.Screen
        name="ProtocolList"
        component={ProtocolScreen}
        options={{ headerShown: false }}
      />
      <ProtocolStack.Screen
        name="MonthDetail"
        component={MonthDetailScreen}
        options={({ route }) => ({
          title: `Mês ${route.params.month}`,
          headerShown: true,
        })}
      />
    </ProtocolStack.Navigator>
  )
}

function MainApp() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <OfflineBanner />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray400,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.gray200,
            paddingBottom: 8,
            paddingTop: 8,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Início"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Protocolo"
          component={ProtocolStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>📋</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Progresso"
          component={ProgressScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>📊</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>👤</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    checkOnboardingStatus()
    initializeNotifications()

    // Initialize offline support services
    networkService.initialize()
    syncQueueService.initialize()

    return () => {
      networkService.destroy()
      syncQueueService.destroy()
    }
  }, [])

  const checkOnboardingStatus = async () => {
    try {
      const onboardingComplete = await AsyncStorage.getItem(ONBOARDING_COMPLETE_KEY)
      setShowOnboarding(onboardingComplete !== 'true')
    } catch (error) {
      console.error('Error checking onboarding status:', error)
      setShowOnboarding(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
  }

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.secondary }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaProvider>
    )
  }

  if (showOnboarding) {
    return (
      <SafeAreaProvider>
        <StatusBar style="light" />
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      </SafeAreaProvider>
    )
  }

  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  )
}
