/**
 * Hook for managing task completion with persistence
 * Stores completed tasks in AsyncStorage
 */

import { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProtocolMonth } from '../types'

const STORAGE_KEY_PREFIX = '@longevidade:completed_tasks'

// Get storage key for a specific date and month
const getStorageKey = (month: ProtocolMonth, date: string): string => {
  return `${STORAGE_KEY_PREFIX}:month_${month}:${date}`
}

// Get today's date as YYYY-MM-DD
const getTodayKey = (): string => {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

interface UseTaskCompletionReturn {
  completedTasks: Set<number>
  toggleTask: (index: number) => void
  completedCount: number
  isLoading: boolean
}

export function useTaskCompletion(month: ProtocolMonth, _totalTasks: number): UseTaskCompletionReturn {
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  const dateKey = getTodayKey()
  const storageKey = getStorageKey(month, dateKey)

  // Load completed tasks from storage on mount
  useEffect(() => {
    const loadCompletedTasks = async () => {
      try {
        const stored = await AsyncStorage.getItem(storageKey)
        if (stored) {
          const parsed = JSON.parse(stored) as number[]
          setCompletedTasks(new Set(parsed))
        } else {
          setCompletedTasks(new Set())
        }
      } catch (error) {
        console.error('Error loading completed tasks:', error)
        setCompletedTasks(new Set())
      } finally {
        setIsLoading(false)
      }
    }

    loadCompletedTasks()
  }, [month, storageKey])

  const toggleTask = useCallback((index: number) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      // Save to storage
      const array = Array.from(newSet)
      AsyncStorage.setItem(storageKey, JSON.stringify(array)).catch((error) => {
        console.error('Error saving completed tasks:', error)
      })
      return newSet
    })
  }, [storageKey])

  return {
    completedTasks,
    toggleTask,
    completedCount: completedTasks.size,
    isLoading,
  }
}

/**
 * Get historical completion data for statistics
 */
export async function getCompletionHistory(
  month: ProtocolMonth,
  days: number = 7
): Promise<{ date: string; completed: number }[]> {
  const history: { date: string; completed: number }[] = []
  const today = new Date()

  for (let i = 0; i < days; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateKey = date.toISOString().split('T')[0]
    const storageKey = getStorageKey(month, dateKey)

    try {
      const stored = await AsyncStorage.getItem(storageKey)
      if (stored) {
        const parsed = JSON.parse(stored) as number[]
        history.push({ date: dateKey, completed: parsed.length })
      } else {
        history.push({ date: dateKey, completed: 0 })
      }
    } catch {
      history.push({ date: dateKey, completed: 0 })
    }
  }

  return history.reverse()
}
