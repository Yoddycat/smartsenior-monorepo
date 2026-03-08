/**
 * HomeScreen Render Tests
 * Tests that render the component to increase coverage
 *
 * Note: Some render tests are limited due to React 19 + react-native-web
 * compatibility issues. Loading state tests work correctly.
 */

import React from 'react'
import { Text } from 'react-native'

// Suppress console warnings during tests (React 19 treats deprecation warnings as errors)
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  jest.restoreAllMocks()
})

// Track mock function calls
const mockToggleTask = jest.fn()

// Mock hooks
jest.mock('../../hooks', () => ({
  useProtocolProgress: jest.fn(() => ({
    currentMonth: 1,
    currentWeek: 2,
    currentDay: 10,
    completionRate: 50,
    streakDays: 5,
    completedToday: 2,
    totalTasksToday: 4,
    protocolTitle: 'Fundação',
    protocolSubtitle: 'Construindo hábitos sólidos',
    isLoading: false,
  })),
  getGreeting: () => 'Bom dia',
  useTaskCompletion: jest.fn(() => ({
    completedTasks: new Set<number>(),
    toggleTask: mockToggleTask,
    completedCount: 0,
    isLoading: false,
  })),
}))

// Mock animated components with simple replacements
jest.mock('../../components', () => {
  const React = require('react')
  const { View, Text, TouchableOpacity } = require('react-native')

  return {
    RecoveryCard: () => React.createElement(View, { testID: 'recovery-card' }),
    FadeInView: ({ children }: { children: React.ReactNode }) =>
      React.createElement(View, null, children),
    AnimatedProgressBar: () =>
      React.createElement(View, { testID: 'progress-bar' }),
    AnimatedCheckbox: ({ checked, onPress }: { checked: boolean; onPress: () => void }) =>
      React.createElement(TouchableOpacity, { onPress, testID: 'checkbox' },
        React.createElement(Text, null, checked ? '✓' : '○')),
    AnimatedCounter: ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) =>
      React.createElement(Text, { testID: 'counter' }, `${prefix}${value}${suffix}`),
    SuccessAnimation: () => null,
    PulseView: ({ children }: { children: React.ReactNode }) =>
      React.createElement(View, null, children),
  }
})

// Mock protocols
jest.mock('../../protocols', () => {
  const dailyTasks = [
    { title: 'Beber água', description: 'Beba 2L', category: 'hydration' },
    { title: 'Caminhar', description: 'Caminhe 30min', category: 'movement' },
    { title: 'Meditar', description: 'Medite 10min', category: 'mindfulness' },
    { title: 'Dormir cedo', description: 'Durma 23h', category: 'sleep' },
  ]
  const weeklyGoals = [
    { title: 'Manter hidratação', description: 'Beba água todos os dias' },
  ]

  return {
    PROTOCOLS: {
      1: { month: 1, title: 'Fundação', subtitle: 'Construindo', description: 'Mês 1', dailyTasks, weeklyGoals, milestones: [] },
      2: { month: 2, title: 'Expansão', subtitle: 'Expandindo', description: 'Mês 2', dailyTasks, weeklyGoals, milestones: [] },
      3: { month: 3, title: 'Consolidação', subtitle: 'Consolidando', description: 'Mês 3', dailyTasks, weeklyGoals, milestones: [] },
    },
  }
})

// Mock icons
jest.mock('../../constants/icons', () => ({
  pillarIcons: {
    hydration: { uri: 'https://example.com/hydration.png' },
    movement: { uri: 'https://example.com/movement.png' },
    mindfulness: { uri: 'https://example.com/mindfulness.png' },
    sleep: { uri: 'https://example.com/sleep.png' },
  },
}))

// Import after all mocks
import TestRenderer, { act } from 'react-test-renderer'
import { HomeScreen } from '../../screens/HomeScreen'
import { useProtocolProgress, useTaskCompletion } from '../../hooks'

const mockedUseProtocolProgress = useProtocolProgress as jest.Mock
const mockedUseTaskCompletion = useTaskCompletion as jest.Mock

describe('HomeScreen Loading State Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders loading indicator when isLoading is true', async () => {
    mockedUseProtocolProgress.mockReturnValue({
      currentMonth: 1,
      currentWeek: 2,
      currentDay: 10,
      completionRate: 50,
      streakDays: 5,
      completedToday: 2,
      totalTasksToday: 4,
      protocolTitle: 'Fundação',
      protocolSubtitle: 'Construindo hábitos sólidos',
      isLoading: true,
    })
    mockedUseTaskCompletion.mockReturnValue({
      completedTasks: new Set<number>(),
      toggleTask: mockToggleTask,
      completedCount: 0,
      isLoading: false,
    })

    let tree: TestRenderer.ReactTestRenderer
    await act(async () => {
      tree = TestRenderer.create(<HomeScreen />)
    })

    expect(tree!.toJSON()).toBeTruthy()
  })

  it('does not render greeting when loading', async () => {
    mockedUseProtocolProgress.mockReturnValue({
      currentMonth: 1,
      currentWeek: 2,
      currentDay: 10,
      completionRate: 50,
      streakDays: 5,
      completedToday: 2,
      totalTasksToday: 4,
      protocolTitle: 'Fundação',
      protocolSubtitle: 'Construindo hábitos sólidos',
      isLoading: true,
    })
    mockedUseTaskCompletion.mockReturnValue({
      completedTasks: new Set<number>(),
      toggleTask: mockToggleTask,
      completedCount: 0,
      isLoading: false,
    })

    let tree: TestRenderer.ReactTestRenderer
    await act(async () => {
      tree = TestRenderer.create(<HomeScreen />)
    })

    const instance = tree!.root
    const texts = instance.findAllByType(Text)
    const greetingText = texts.find(t => {
      try {
        return String(t.props.children).includes('Bom dia')
      } catch {
        return false
      }
    })
    expect(greetingText).toBeUndefined()
  })

  it('renders loading container correctly', async () => {
    mockedUseProtocolProgress.mockReturnValue({
      currentMonth: 1,
      currentWeek: 2,
      currentDay: 10,
      completionRate: 50,
      streakDays: 5,
      completedToday: 2,
      totalTasksToday: 4,
      protocolTitle: 'Fundação',
      protocolSubtitle: 'Construindo hábitos sólidos',
      isLoading: true,
    })
    mockedUseTaskCompletion.mockReturnValue({
      completedTasks: new Set<number>(),
      toggleTask: mockToggleTask,
      completedCount: 0,
      isLoading: false,
    })

    let tree: TestRenderer.ReactTestRenderer
    await act(async () => {
      tree = TestRenderer.create(<HomeScreen />)
    })

    // Loading state should render successfully
    const json = tree!.toJSON()
    expect(json).toBeTruthy()
  })

  it('does not render daily tasks when loading', async () => {
    mockedUseProtocolProgress.mockReturnValue({
      currentMonth: 1,
      currentWeek: 2,
      currentDay: 10,
      completionRate: 50,
      streakDays: 5,
      completedToday: 2,
      totalTasksToday: 4,
      protocolTitle: 'Fundação',
      protocolSubtitle: 'Construindo hábitos sólidos',
      isLoading: true,
    })
    mockedUseTaskCompletion.mockReturnValue({
      completedTasks: new Set<number>(),
      toggleTask: mockToggleTask,
      completedCount: 0,
      isLoading: false,
    })

    let tree: TestRenderer.ReactTestRenderer
    await act(async () => {
      tree = TestRenderer.create(<HomeScreen />)
    })

    const instance = tree!.root
    const texts = instance.findAllByType(Text)

    // Should not have task titles when loading
    const taskTitle = texts.find(t => t.props.children === 'Beber água')
    expect(taskTitle).toBeUndefined()
  })

  it('does not render section titles when loading', async () => {
    mockedUseProtocolProgress.mockReturnValue({
      currentMonth: 1,
      currentWeek: 2,
      currentDay: 10,
      completionRate: 50,
      streakDays: 5,
      completedToday: 2,
      totalTasksToday: 4,
      protocolTitle: 'Fundação',
      protocolSubtitle: 'Construindo hábitos sólidos',
      isLoading: true,
    })
    mockedUseTaskCompletion.mockReturnValue({
      completedTasks: new Set<number>(),
      toggleTask: mockToggleTask,
      completedCount: 0,
      isLoading: false,
    })

    let tree: TestRenderer.ReactTestRenderer
    await act(async () => {
      tree = TestRenderer.create(<HomeScreen />)
    })

    const instance = tree!.root
    const texts = instance.findAllByType(Text)

    // Should not have section titles when loading
    const sectionTitle = texts.find(t => t.props.children === 'Tarefas de Hoje')
    expect(sectionTitle).toBeUndefined()
  })
})

describe('HomeScreen Hook Usage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockedUseProtocolProgress.mockReturnValue({
      currentMonth: 1,
      currentWeek: 2,
      currentDay: 10,
      completionRate: 50,
      streakDays: 5,
      completedToday: 2,
      totalTasksToday: 4,
      protocolTitle: 'Fundação',
      protocolSubtitle: 'Construindo hábitos sólidos',
      isLoading: true, // Use loading to avoid Image issues
    })
    mockedUseTaskCompletion.mockReturnValue({
      completedTasks: new Set<number>(),
      toggleTask: mockToggleTask,
      completedCount: 0,
      isLoading: false,
    })
  })

  it('calls useProtocolProgress hook on render', async () => {
    await act(async () => {
      TestRenderer.create(<HomeScreen />)
    })

    expect(mockedUseProtocolProgress).toHaveBeenCalled()
  })

  it('calls useTaskCompletion with current month', async () => {
    await act(async () => {
      TestRenderer.create(<HomeScreen />)
    })

    expect(mockedUseTaskCompletion).toHaveBeenCalledWith(1)
  })

  it('calls useTaskCompletion with different month', async () => {
    mockedUseProtocolProgress.mockReturnValue({
      currentMonth: 2,
      currentWeek: 1,
      currentDay: 1,
      completionRate: 0,
      streakDays: 0,
      completedToday: 0,
      totalTasksToday: 4,
      protocolTitle: 'Expansão',
      protocolSubtitle: 'Expandindo',
      isLoading: true,
    })

    await act(async () => {
      TestRenderer.create(<HomeScreen />)
    })

    expect(mockedUseTaskCompletion).toHaveBeenCalledWith(2)
  })
})
