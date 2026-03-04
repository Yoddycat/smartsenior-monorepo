import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface BarChartDataPoint {
  label: string
  value: number
  color?: string
}

export interface BarChartProps {
  data: BarChartDataPoint[]
  height?: number
  showValues?: boolean
  showLabels?: boolean
  horizontal?: boolean
  animated?: boolean
  className?: string
}

/**
 * BarChart component following SmartSenior Design System
 *
 * Simple bar chart with SVG
 */
const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 200,
  showValues = true,
  showLabels = true,
  horizontal = false,
  animated = true,
  className,
}) => {
  const maxValue = Math.max(...data.map((d) => d.value))
  const barWidth = horizontal ? height : 100 / data.length
  const chartHeight = horizontal ? data.length * 40 : height

  const defaultColors = [
    'var(--primary)',
    'var(--accent)',
    'var(--success)',
    'var(--warning)',
    'var(--info)',
    'var(--error)',
  ]

  if (horizontal) {
    return (
      <div className={cn("w-full", className)}>
        <div className="space-y-3">
          {data.map((item, index) => {
            const percentage = (item.value / maxValue) * 100
            const color = item.color || defaultColors[index % defaultColors.length]

            return (
              <div key={index} className="flex items-center gap-3">
                {showLabels && (
                  <span className="w-20 text-sm text-[var(--foreground-muted)] truncate">
                    {item.label}
                  </span>
                )}
                <div className="flex-1 h-8 bg-[var(--background-muted)] rounded-md overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-md flex items-center justify-end pr-2",
                      animated && "transition-all duration-500 ease-out"
                    )}
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: color,
                    }}
                  >
                    {showValues && percentage > 15 && (
                      <span className="text-sm font-medium text-white">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
                {showValues && percentage <= 15 && (
                  <span className="text-sm font-medium text-[var(--foreground)]">
                    {item.value}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      <svg
        width="100%"
        height={chartHeight + (showLabels ? 40 : 0)}
        viewBox={`0 0 100 ${chartHeight + (showLabels ? 20 : 0)}`}
        preserveAspectRatio="none"
      >
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * chartHeight
          const x = (index * 100) / data.length + 100 / data.length / 4
          const y = chartHeight - barHeight
          const width = 100 / data.length / 2
          const color = item.color || defaultColors[index % defaultColors.length]

          return (
            <g key={index}>
              <rect
                x={`${x}%`}
                y={y}
                width={`${width}%`}
                height={barHeight}
                fill={color}
                rx="2"
                className={animated ? "transition-all duration-500 ease-out" : ""}
              />
              {showValues && (
                <text
                  x={`${x + width / 2}%`}
                  y={y - 5}
                  textAnchor="middle"
                  className="text-[3px] fill-[var(--foreground)]"
                >
                  {item.value}
                </text>
              )}
              {showLabels && (
                <text
                  x={`${x + width / 2}%`}
                  y={chartHeight + 12}
                  textAnchor="middle"
                  className="text-[3px] fill-[var(--foreground-muted)]"
                >
                  {item.label}
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

BarChart.displayName = "BarChart"

export { BarChart }
