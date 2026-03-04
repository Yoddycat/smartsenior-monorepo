import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  showValue?: boolean
  formatValue?: (value: number) => string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Slider component following SmartSenior Design System
 *
 * Range input with large touch target for senior users
 */
const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({
    className,
    label,
    showValue = false,
    formatValue = (v) => String(v),
    size = 'md',
    min = 0,
    max = 100,
    value,
    defaultValue,
    onChange,
    disabled,
    id,
    ...props
  }, ref) => {
    const inputId = id || React.useId()
    const [internalValue, setInternalValue] = React.useState(Number(defaultValue) || Number(min))
    const currentValue = value !== undefined ? Number(value) : internalValue

    const percentage = ((currentValue - Number(min)) / (Number(max) - Number(min))) * 100

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(e)
    }

    const sizeClasses = {
      sm: { track: 'h-1', thumb: 'h-4 w-4' },
      md: { track: 'h-2', thumb: 'h-5 w-5' },
      lg: { track: 'h-3', thumb: 'h-6 w-6' },
    }

    const sizes = sizeClasses[size]

    return (
      <div className={cn("w-full", className)}>
        {(label || showValue) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <label
                htmlFor={inputId}
                className="text-base font-medium text-[var(--foreground)]"
              >
                {label}
              </label>
            )}
            {showValue && (
              <span className="text-base font-medium text-[var(--foreground-muted)]">
                {formatValue(currentValue)}
              </span>
            )}
          </div>
        )}
        <div className="relative">
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 w-full rounded-full",
              "bg-[var(--background-muted)]",
              sizes.track
            )}
          />
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 rounded-full",
              "bg-[var(--primary)]",
              sizes.track
            )}
            style={{ width: `${percentage}%` }}
          />
          <input
            type="range"
            ref={ref}
            id={inputId}
            min={min}
            max={max}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            className={cn(
              "relative w-full appearance-none bg-transparent cursor-pointer",
              "focus-visible:outline-none",
              "[&::-webkit-slider-thumb]:appearance-none",
              "[&::-webkit-slider-thumb]:rounded-full",
              "[&::-webkit-slider-thumb]:bg-[var(--primary)]",
              "[&::-webkit-slider-thumb]:border-2",
              "[&::-webkit-slider-thumb]:border-white",
              "[&::-webkit-slider-thumb]:shadow-md",
              "[&::-webkit-slider-thumb]:cursor-pointer",
              "[&::-webkit-slider-thumb]:transition-transform",
              "[&::-webkit-slider-thumb]:hover:scale-110",
              "[&::-moz-range-thumb]:rounded-full",
              "[&::-moz-range-thumb]:bg-[var(--primary)]",
              "[&::-moz-range-thumb]:border-2",
              "[&::-moz-range-thumb]:border-white",
              "[&::-moz-range-thumb]:shadow-md",
              "[&::-moz-range-thumb]:cursor-pointer",
              "disabled:cursor-not-allowed disabled:opacity-50",
              size === 'sm' && "[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",
              size === 'md' && "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5",
              size === 'lg' && "[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6"
            )}
            style={{ height: size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px' }}
            {...props}
          />
        </div>
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
