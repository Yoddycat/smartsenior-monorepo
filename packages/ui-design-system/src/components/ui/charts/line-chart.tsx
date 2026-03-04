import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface LineChartDataPoint {
  label: string
  value: number
}

export interface LineChartSeries {
  name: string
  data: LineChartDataPoint[]
  color?: string
}

export interface LineChartProps {
  series: LineChartSeries[]
  height?: number
  showDots?: boolean
  showArea?: boolean
  showGrid?: boolean
  showLabels?: boolean
  showLegend?: boolean
  curved?: boolean
  animated?: boolean
  className?: string
}

/**
 * LineChart component following SmartSenior Design System
 *
 * Line/Area chart with SVG
 */
const LineChart: React.FC<LineChartProps> = ({
  series,
  height = 200,
  showDots = true,
  showArea = false,
  showGrid = true,
  showLabels = true,
  showLegend = true,
  curved = true,
  animated = true,
  className,
}) => {
  const allValues = series.flatMap((s) => s.data.map((d) => d.value))
  const maxValue = Math.max(...allValues)
  const minValue = Math.min(...allValues, 0)
  const valueRange = maxValue - minValue || 1

  const defaultColors = [
    'var(--primary)',
    'var(--accent)',
    'var(--success)',
    'var(--warning)',
    'var(--info)',
  ]

  const padding = { top: 10, right: 10, bottom: showLabels ? 30 : 10, left: 10 }
  const chartWidth = 100
  const chartHeight = height

  const getPoint = (index: number, value: number, dataLength: number) => {
    const x = padding.left + (index / (dataLength - 1)) * (chartWidth - padding.left - padding.right)
    const y = padding.top + ((maxValue - value) / valueRange) * (chartHeight - padding.top - padding.bottom)
    return { x, y }
  }

  const createPath = (data: LineChartDataPoint[], isArea: boolean = false) => {
    if (data.length === 0) return ''

    const points = data.map((d, i) => getPoint(i, d.value, data.length))

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
        const bottom = chartHeight - padding.bottom
        path += ` L ${lastPoint.x} ${bottom} L ${firstPoint.x} ${bottom} Z`
      }

      return path
    }

    let path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

    if (isArea) {
      const lastPoint = points[points.length - 1]
      const firstPoint = points[0]
      const bottom = chartHeight - padding.bottom
      path += ` L ${lastPoint.x} ${bottom} L ${firstPoint.x} ${bottom} Z`
    }

    return path
  }

  return (
    <div className={cn("w-full", className)}>
      <svg
        width="100%"
        height={chartHeight}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        preserveAspectRatio="none"
      >
        {/* Grid */}
        {showGrid && (
          <g className="text-[var(--border)]">
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
              const y = padding.top + ratio * (chartHeight - padding.top - padding.bottom)
              return (
                <line
                  key={i}
                  x1={padding.left}
                  y1={y}
                  x2={chartWidth - padding.right}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeDasharray="2,2"
                />
              )
            })}
          </g>
        )}

        {/* Series */}
        {series.map((s, seriesIndex) => {
          const color = s.color || defaultColors[seriesIndex % defaultColors.length]

          return (
            <g key={seriesIndex}>
              {/* Area */}
              {showArea && (
                <path
                  d={createPath(s.data, true)}
                  fill={color}
                  fillOpacity="0.1"
                  className={animated ? "transition-all duration-500" : ""}
                />
              )}

              {/* Line */}
              <path
                d={createPath(s.data)}
                fill="none"
                stroke={color}
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={animated ? "transition-all duration-500" : ""}
              />

              {/* Dots */}
              {showDots &&
                s.data.map((d, i) => {
                  const point = getPoint(i, d.value, s.data.length)
                  return (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="1"
                      fill={color}
                      className={animated ? "transition-all duration-500" : ""}
                    />
                  )
                })}
            </g>
          )
        })}

        {/* Labels */}
        {showLabels && series[0] && (
          <g>
            {series[0].data.map((d, i) => {
              const point = getPoint(i, d.value, series[0].data.length)
              return (
                <text
                  key={i}
                  x={point.x}
                  y={chartHeight - 5}
                  textAnchor="middle"
                  className="text-[3px] fill-[var(--foreground-muted)]"
                >
                  {d.label}
                </text>
              )
            })}
          </g>
        )}
      </svg>

      {/* Legend */}
      {showLegend && series.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          {series.map((s, i) => {
            const color = s.color || defaultColors[i % defaultColors.length]
            return (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm text-[var(--foreground-muted)]">{s.name}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

LineChart.displayName = "LineChart"

export { LineChart }
