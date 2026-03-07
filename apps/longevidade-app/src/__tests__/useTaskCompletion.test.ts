import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCompletionHistory } from '../hooks/useTaskCompletion'

describe('getCompletionHistory', () => {
  beforeEach(async () => {
    await AsyncStorage.clear()
  })

  it('should return empty completion for days without data', async () => {
    const history = await getCompletionHistory(1, 3)

    expect(history.length).toBe(3)
    history.forEach((day) => {
      expect(day.completed).toBe(0)
    })
  })

  it('should return correct completion counts', async () => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    const todayKey = today.toISOString().split('T')[0]
    const yesterdayKey = yesterday.toISOString().split('T')[0]

    await AsyncStorage.setItem(
      `@longevidade:completed_tasks:month_1:${todayKey}`,
      JSON.stringify([0, 1, 2])
    )
    await AsyncStorage.setItem(
      `@longevidade:completed_tasks:month_1:${yesterdayKey}`,
      JSON.stringify([0, 1])
    )

    const history = await getCompletionHistory(1, 2)

    expect(history.length).toBe(2)
    // History is reversed, so oldest first
    expect(history[0].completed).toBe(2) // yesterday
    expect(history[1].completed).toBe(3) // today
  })

  it('should return requested number of days', async () => {
    const history = await getCompletionHistory(1, 7)
    expect(history.length).toBe(7)
  })

  it('should include dates in YYYY-MM-DD format', async () => {
    const history = await getCompletionHistory(1, 1)

    expect(history[0].date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('should handle different months', async () => {
    const today = new Date().toISOString().split('T')[0]

    await AsyncStorage.setItem(
      `@longevidade:completed_tasks:month_1:${today}`,
      JSON.stringify([0, 1])
    )
    await AsyncStorage.setItem(
      `@longevidade:completed_tasks:month_2:${today}`,
      JSON.stringify([0, 1, 2, 3])
    )

    const month1History = await getCompletionHistory(1, 1)
    const month2History = await getCompletionHistory(2, 1)

    expect(month1History[0].completed).toBe(2)
    expect(month2History[0].completed).toBe(4)
  })
})
