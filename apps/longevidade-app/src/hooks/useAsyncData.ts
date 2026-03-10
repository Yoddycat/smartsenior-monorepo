/**
 * useAsyncData Hook
 *
 * Generic hook for async data fetching with loading, error, and refresh states.
 * Handles component unmounting to prevent state updates on unmounted components.
 *
 * Usage:
 * ```tsx
 * const { data, isLoading, error, refresh } = useAsyncData(
 *   () => fetchUserData(userId),
 *   [userId]
 * )
 * ```
 */

import { useState, useEffect, useCallback, useRef } from 'react'

interface UseAsyncDataState<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

interface UseAsyncDataReturn<T> extends UseAsyncDataState<T> {
  refresh: () => Promise<void>
  setData: (data: T | null) => void
}

export function useAsyncData<T>(
  fetchFn: () => Promise<T>,
  deps: React.DependencyList = [],
  options?: {
    initialData?: T | null
    onError?: (error: Error) => void
    onSuccess?: (data: T) => void
  }
): UseAsyncDataReturn<T> {
  const [state, setState] = useState<UseAsyncDataState<T>>({
    data: options?.initialData ?? null,
    isLoading: true,
    error: null,
  })

  const mountedRef = useRef(true)

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      const result = await fetchFn()

      if (mountedRef.current) {
        setState({
          data: result,
          isLoading: false,
          error: null,
        })
        options?.onSuccess?.(result)
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')

      if (mountedRef.current) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }))
        options?.onError?.(error)
      }
    }
  }, [fetchFn, ...deps])

  useEffect(() => {
    mountedRef.current = true
    fetchData()

    return () => {
      mountedRef.current = false
    }
  }, [fetchData])

  const setData = useCallback((data: T | null) => {
    setState((prev) => ({ ...prev, data }))
  }, [])

  return {
    ...state,
    refresh: fetchData,
    setData,
  }
}

export default useAsyncData
