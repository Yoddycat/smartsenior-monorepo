// SmartSenior Design System - Cores e Tema

import { Platform, ViewStyle } from 'react-native'

export const colors = {
  // Brand Colors
  primary: '#FF7A00',      // Laranja SmartSenior
  primaryLight: '#FF9A3C',
  primaryDark: '#E66A00',

  secondary: '#1A365D',    // Azul Marinho SmartSenior
  secondaryLight: '#2D4A73',
  secondaryDark: '#0F1F35',

  // Semantic Colors
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  error: '#EF4444',   // Alias for danger
  info: '#3B82F6',

  // Neutral Colors
  white: '#FFFFFF',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  black: '#000000',

  // Category Colors
  nutrition: '#22C55E',     // Verde
  movement: '#3B82F6',      // Azul
  sleep: '#8B5CF6',         // Roxo
  hydration: '#06B6D4',     // Ciano
  supplements: '#F59E0B',   // Amarelo
  mindfulness: '#EC4899',   // Rosa
  social: '#F97316',        // Laranja
  cognitive: '#6366F1',     // Indigo
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
}

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
}

export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
}

// Legacy shadows (deprecated - use createShadow instead)
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
}

// Cross-platform shadow helper
// Uses boxShadow for web, native shadow props for iOS/Android
export type ShadowLevel = 'sm' | 'md' | 'lg'

const webShadows: Record<ShadowLevel, string> = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 2px 4px rgba(0, 0, 0, 0.1)',
  lg: '0 4px 8px rgba(0, 0, 0, 0.15)',
}

export const createShadow = (level: ShadowLevel): ViewStyle => {
  if (Platform.OS === 'web') {
    return {
      boxShadow: webShadows[level],
    } as ViewStyle
  }

  return shadows[level]
}

// Pre-created shadow styles for convenience
export const shadowStyles = {
  sm: createShadow('sm'),
  md: createShadow('md'),
  lg: createShadow('lg'),
}

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  shadowStyles,
  createShadow,
}

export type Theme = typeof theme
