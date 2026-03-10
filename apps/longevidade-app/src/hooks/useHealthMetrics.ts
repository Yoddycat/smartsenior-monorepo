/**
 * useHealthMetrics Hook
 *
 * Combines health data fetching with formatted display values.
 * Provides easy access to steps, heart rate, HRV, and sleep data.
 *
 * Usage:
 * ```tsx
 * const { metrics, isLoading, error, refresh } = useHealthMetrics()
 *
 * // Access formatted values
 * <Text>{metrics.steps.display}</Text> // "8,432"
 * <Text>{metrics.heartRate.display}</Text> // "72 bpm"
 * ```
 */

import { useState, useEffect, useCallback, useMemo } from 'react'
import { getHealthSummary, HealthDataSummary } from '../services/health'

interface MetricValue {
  value: number
  display: string
  unit: string
  trend: 'up' | 'down' | 'stable'
  secondary?: string
}

interface HealthMetrics {
  steps: MetricValue
  heartRate: MetricValue
  hrv: MetricValue
  sleep: MetricValue
}

interface UseHealthMetricsReturn {
  metrics: HealthMetrics
  raw: HealthDataSummary | null
  isLoading: boolean
  error: string | null
  refresh: () => Promise<void>
}

const defaultMetric: MetricValue = {
  value: 0,
  display: '--',
  unit: '',
  trend: 'stable',
}

const defaultMetrics: HealthMetrics = {
  steps: { ...defaultMetric, unit: 'passos' },
  heartRate: { ...defaultMetric, unit: 'bpm' },
  hrv: { ...defaultMetric, unit: 'ms' },
  sleep: { ...defaultMetric, unit: 'h' },
}

function formatNumber(num: number): string {
  return num.toLocaleString('pt-BR')
}

function formatSleepHours(hours: number): string {
  const wholeHours = Math.floor(hours)
  const mins = Math.round((hours - wholeHours) * 60)
  if (mins === 0) return `${wholeHours}h`
  return `${wholeHours}h ${mins}m`
}

export function useHealthMetrics(): UseHealthMetricsReturn {
  const [data, setData] = useState<HealthDataSummary | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const summary = await getHealthSummary()
      setData(summary)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch health data'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const metrics = useMemo<HealthMetrics>(() => {
    if (!data) return defaultMetrics

    return {
      steps: {
        value: data.steps.today,
        display: formatNumber(data.steps.today),
        unit: 'passos',
        trend: data.steps.trend,
        secondary: `Média: ${formatNumber(data.steps.weekAverage)}`,
      },
      heartRate: {
        value: data.heartRate.latest,
        display: `${data.heartRate.latest}`,
        unit: 'bpm',
        trend: data.heartRate.trend,
        secondary: `Repouso: ${data.heartRate.restingAverage}`,
      },
      hrv: {
        value: data.hrv.latest,
        display: `${data.hrv.latest}`,
        unit: 'ms',
        trend: data.hrv.trend,
        secondary: `Média: ${data.hrv.weekAverage}`,
      },
      sleep: {
        value: data.sleep.lastNightHours,
        display: formatSleepHours(data.sleep.lastNightHours),
        unit: 'h',
        trend: data.sleep.trend,
        secondary: `Média: ${formatSleepHours(data.sleep.weekAverage)}`,
      },
    }
  }, [data])

  return {
    metrics,
    raw: data,
    isLoading,
    error,
    refresh: fetchData,
  }
}

export default useHealthMetrics
