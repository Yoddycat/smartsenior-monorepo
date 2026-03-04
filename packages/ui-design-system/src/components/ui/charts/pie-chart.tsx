import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface PieChartDataPoint {
  label: string
  value: number
  color?: string
}

export interface PieChartProps {
  data: PieChartDataPoint[]
  size?: number
  donut?: boolean
  donutWidth?: number
  showLabels?: boolean
  showLegend?: boolean
  showValues?: boolean
  animated?: boolean
  className?: string
}

/**
 * PieChart component following SmartSenior Design System
 *
 * Pie/Donut chart with SVG
 */
const PieChart: React.FC<PieChartProps> = ({
  data,
  size = 200,
  donut = false,
  donutWidth = 40,
  showLabels = false,
  showLegend = true,
  showValues = true,
  animated = true,
  className,
}) => {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const radius = size / 2
  const innerRadius = donut ? radius - donutWidth : 0
  const center = size / 2

  const defaultColors = [
    'var(--primary)',
    'var(--accent)',
    'var(--success)',
    'var(--warning)',
    'var(--info)',
    'var(--error)',
  ]

  const getCoordinates = (angle: number, r: number) => {
    const radians = ((angle - 90) * Math.PI) / 180
    return {
      x: center + r * Math.cos(radians),
      y: center + r * Math.sin(radians),
    }
  }

  const createArc = (startAngle: number, endAngle: number, outerR: number, innerR: number) => {
    const start = getCoordinates(startAngle, outerR)
    const end = getCoordinates(endAngle, outerR)
    const innerStart = getCoordinates(endAngle, innerR)
    const innerEnd = getCoordinates(startAngle, innerR)

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

    if (innerR === 0) {
      return `
        M ${center} ${center}
        L ${start.x} ${start.y}
        A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
        Z
      `
    }

    return `
      M ${start.x} ${start.y}
      A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
      L ${innerStart.x} ${innerStart.y}
      A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${innerEnd.x} ${innerEnd.y}
      Z
    `
  }

  let currentAngle = 0
  const slices = data.map((item, index) => {
    const sliceAngle = (item.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    currentAngle = endAngle

    const midAngle = (startAngle + endAngle) / 2
    const labelRadius = radius * 0.7
    const labelPos = getCoordinates(midAngle, labelRadius)

    return {
      ...item,
      startAngle,
      endAngle,
      midAngle,
      labelPos,
      percentage: ((item.value / total) * 100).toFixed(1),
      color: item.color || defaultColors[index % defaultColors.length],
    }
  })

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {slices.map((slice, index) => (
          <g key={index}>
            <path
              d={createArc(slice.startAngle, slice.endAngle, radius - 2, innerRadius)}
              fill={slice.color}
              className={cn(
                "hover:opacity-80 transition-opacity cursor-pointer",
                animated && "transition-all duration-500"
              )}
            />
            {showLabels && slice.endAngle - slice.startAngle > 20 && (
              <text
                x={slice.labelPos.x}
                y={slice.labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] font-medium fill-white pointer-events-none"
              >
                {slice.percentage}%
              </text>
            )}
          </g>
        ))}

        {/* Center text for donut */}
        {donut && showValues && (
          <g>
            <text
              x={center}
              y={center - 8}
              textAnchor="middle"
              className="text-[24px] font-bold fill-[var(--foreground)]"
            >
              {total}
            </text>
            <text
              x={center}
              y={center + 12}
              textAnchor="middle"
              className="text-[10px] fill-[var(--foreground-muted)]"
            >
              Total
            </text>
          </g>
        )}
      </svg>

      {/* Legend */}
      {showLegend && (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {slices.map((slice, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: slice.color }}
              />
              <span className="text-sm text-[var(--foreground)]">{slice.label}</span>
              {showValues && (
                <span className="text-sm text-[var(--foreground-muted)]">
                  ({slice.percentage}%)
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

PieChart.displayName = "PieChart"

// Alias
const DonutChart = (props: Omit<PieChartProps, 'donut'>) => <PieChart {...props} donut />
DonutChart.displayName = "DonutChart"

export { PieChart, DonutChart }
