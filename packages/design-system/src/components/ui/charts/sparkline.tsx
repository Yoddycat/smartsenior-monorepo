import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SparklineProps {
  data: number[]
  width?: number
  height?: number
  color?: string
  showArea?: boolean
  showDot?: boolean
  curved?: boolean
  className?: string
}

/**
 * Sparkline component following SmartSenior Design System
 *
 * Compact inline chart
 */
const Sparkline: React.FC<SparklineProps> = ({
  data,
  width = 100,
  height = 30,
  color = 'var(--primary)',
  showArea = true,
  showDot = true,
  curved = true,
  className,
}) => {
  if (data.length === 0) return null

  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const valueRange = maxValue - minValue || 1

  const padding = 2
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  const points = data.map((value, index) => ({
    x: padding + (index / (data.length - 1)) * chartWidth,
    y: padding + ((maxValue - value) / valueRange) * chartHeight,
  }))

  const createPath = (isArea: boolean = false) => {
    if (curved && data.length > 2) {
      let path = `M ${points[0].x} ${points[0].y}`

      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[Math.max(0, i - 1)]
        const p1 = points[i]
        const p2 = points[i + 1]
        const p3 = points[Math.min(points.length - 1, i + 2)]

        const cp1x = p1.x + (p2.x - p0.x) / 6
        const cp1y = p1.y + (p2.y - p0.y) / 6
        const cp2x = p2.x - (p3.x - p1.x) / 6
        const cp2y = p2.y - (p3.y - p1.y) / 6

        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
      }

      if (isArea) {
        const lastPoint = points[points.length - 1]
        const firstPoint = points[0]
        path += ` L ${lastPoint.x} ${height - padding} L ${firstPoint.x} ${height - padding} Z`
      }

      return path
    }

    let path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

    if (isArea) {
      const lastPoint = points[points.length - 1]
      const firstPoint = points[0]
      path += ` L ${lastPoint.x} ${height - padding} L ${firstPoint.x} ${height - padding} Z`
    }

    return path
  }

  const lastPoint = points[points.length - 1]

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("inline-block", className)}
    >
      {showArea && (
        <path
          d={createPath(true)}
          fill={color}
          fillOpacity="0.1"
        />
      )}
      <path
        d={createPath()}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showDot && (
        <circle
          cx={lastPoint.x}
          cy={lastPoint.y}
          r="2.5"
          fill={color}
        />
      )}
    </svg>
  )
}

Sparkline.displayName = "Sparkline"

export { Sparkline }
