/**
 * Centralized icon mappings for health pillars
 * Eliminates duplication across screens
 */

import { ImageSourcePropType } from 'react-native'
import { TaskCategory } from '../types'
import { colors } from './theme'

// Pillar icons mapping
export const pillarIcons: Record<string, ImageSourcePropType> = {
  hydration: require('../../assets/images/icons/hidratacao.png'),
  nutrition: require('../../assets/images/icons/nutricao.png'),
  movement: require('../../assets/images/icons/movimento.png'),
  sleep: require('../../assets/images/icons/sono.png'),
  supplements: require('../../assets/images/icons/suplementos.png'),
  mindfulness: require('../../assets/images/icons/mindfulness.png'),
  social: require('../../assets/images/icons/social.png'),
  cognitive: require('../../assets/images/icons/cognitivo.png'),
}

// Category colors mapping
export const categoryColors: Record<TaskCategory, string> = {
  hydration: colors.hydration,
  nutrition: colors.nutrition,
  movement: colors.movement,
  sleep: colors.sleep,
  supplements: colors.supplements,
  mindfulness: colors.mindfulness,
  social: colors.social,
  cognitive: colors.cognitive,
}

// Category labels in Portuguese
export const categoryLabels: Record<TaskCategory, string> = {
  hydration: 'Hidratacao',
  nutrition: 'Nutricao',
  movement: 'Movimento',
  sleep: 'Sono',
  supplements: 'Suplementos',
  mindfulness: 'Mindfulness',
  social: 'Social',
  cognitive: 'Cognitivo',
}
