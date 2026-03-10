/**
 * useAsyncStorage Hook
 *
 * Hook for managing AsyncStorage with automatic JSON serialization.
 * Provides get, set, remove operations with loading and error states.
 *
 * Usage:
 * ```tsx
 * const { value, setValue, isLoading, error } = useAsyncStorage<UserProfile>(
 *   '@app:user_profile',
 *   defaultProfile
 * )
 *
 * // Update value
 * setValue({ ...value, name: 'New Name' })
 * ```
 */

import { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface UseAsyncStorageReturn<T> {
  value: T
  setValue: (newValue: T) => Promise<void>
  remove: () => Promise<void>
  isLoading: boolean
  error: string | null
  refresh: () => Promise<void>
}

export function useAsyncStorage<T>(
  key: string,
  defaultValue: T
): UseAsyncStorageReturn<T> {
  const [value, setValueState] = useState<T>(defaultValue)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadValue = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const stored = await AsyncStorage.getItem(key)
      if (stored !== null) {
        const parsed = JSON.parse(stored) as T
        setValueState(parsed)
      } else {
        setValueState(defaultValue)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load data'
      setError(errorMessage)
      setValueState(defaultValue)
    } finally {
      setIsLoading(false)
    }
  }, [key, defaultValue])

  useEffect(() => {
    loadValue()
  }, [loadValue])

  const setValue = useCallback(async (newValue: T) => {
    setError(null)

    try {
      const serialized = JSON.stringify(newValue)
      await AsyncStorage.setItem(key, serialized)
      setValueState(newValue)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save data'
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }, [key])

  const remove = useCallback(async () => {
    setError(null)

    try {
      await AsyncStorage.removeItem(key)
      setValueState(defaultValue)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to remove data'
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }, [key, defaultValue])

  return {
    value,
    setValue,
    remove,
    isLoading,
    error,
    refresh: loadValue,
  }
}

/**
 * useAsyncStorageItem Hook
 *
 * Simpler hook for reading/writing a single async storage item.
 * Returns tuple similar to useState.
 *
 * Usage:
 * ```tsx
 * const [theme, setTheme] = useAsyncStorageItem('@app:theme', 'light')
 * ```
 */
export function useAsyncStorageItem<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => Promise<void>, boolean] {
  const { value, setValue, isLoading } = useAsyncStorage(key, defaultValue)
  return [value, setValue, isLoading]
}

export default useAsyncStorage
