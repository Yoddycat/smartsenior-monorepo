/**
 * useRecovery Hook
 *
 * Manages recovery status based on HRV analysis.
 * Compares today's HRV with 7-day average to determine if user needs rest.
 */

import { useState, useEffect, useCallback } from 'react'
import {
  analyzeRecoveryStatus,
  type RecoveryAnalysis,
} from '../services/health'

interface UseRecoveryState {
  analysis: RecoveryAnalysis | null
  isLoading: boolean
  error: string | null
}

interface UseRecoveryReturn extends UseRecoveryState {
  refresh: () => Promise<void>
  isRecoveryMode: boolean
  needsAttention: boolean
}

export function useRecovery(): UseRecoveryReturn {
  const [state, setState] = useState<UseRecoveryState>({
    analysis: null,
    isLoading: true,
    error: null,
  })

  const refresh = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      const analysis = await analyzeRecoveryStatus()

      setState({
        analysis,
        isLoading: false,
        error: null,
      })
    } catch {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Falha ao analisar status de recuperação',
      }))
    }
  }, [])

  // Analyze on mount
  useEffect(() => {
    refresh()
  }, [refresh])

  // Computed values
  const isRecoveryMode = state.analysis?.status === 'recovery'
  const needsAttention = state.analysis?.status === 'recovery' || state.analysis?.status === 'moderate'

  return {
    ...state,
    refresh,
    isRecoveryMode,
    needsAttention,
  }
}

export default useRecovery
