import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface AnimatedCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'> {
  /** Controlled checked state */
  checked?: boolean
  /** Default checked state for uncontrolled usage */
  defaultChecked?: boolean
  /** Callback when checked state changes */
  onCheckedChange?: (checked: boolean) => void
  /** Label text */
  label?: string
  /** Description text */
  description?: string
  /** Error state */
  error?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Color variant */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  /** Animation duration in milliseconds */
  duration?: number
  /** Enable bounce animation on check */
  bounce?: boolean
  /** Enable haptic-style scale animation */
  haptic?: boolean
  /** Called when check animation completes */
  onAnimationComplete?: () => void
}

/**
 * AnimatedCheckbox component following SmartSenior Design System
 *
 * Checkbox with smooth SVG path animation for the checkmark.
 * Senior-friendly with large touch targets and clear visual feedback.
 *
 * @example
 * ```tsx
 * // Basic
 * <AnimatedCheckbox label="Accept terms" />
 *
 * // Controlled with animation
 * <AnimatedCheckbox
 *   checked={agreed}
 *   onCheckedChange={setAgreed}
 *   variant="success"
 *   bounce
 * />
 * ```
 */
const AnimatedCheckbox = React.forwardRef<HTMLInputElement, AnimatedCheckboxProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      label,
      description,
      error,
      size = 'md',
      variant = 'default',
      duration = 200,
      bounce = false,
      haptic = true,
      onAnimationComplete,
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId()
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const checkmarkRef = React.useRef<SVGPathElement>(null)

    const isControlled = controlledChecked !== undefined
    const isChecked = isControlled ? controlledChecked : internalChecked

    // Checkmark path length for stroke animation
    const pathLength = 24

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked

      if (!isControlled) {
        setInternalChecked(newChecked)
      }

      onCheckedChange?.(newChecked)

      // Trigger animation
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        onAnimationComplete?.()
      }, duration + (bounce ? 150 : 0))
    }

    const sizeClasses = {
      sm: {
        box: 'w-5 h-5',
        check: 'w-3 h-3',
        label: 'text-sm',
        description: 'text-xs',
      },
      md: {
        box: 'w-6 h-6',
        check: 'w-4 h-4',
        label: 'text-base',
        description: 'text-sm',
      },
      lg: {
        box: 'w-8 h-8',
        check: 'w-5 h-5',
        label: 'text-lg',
        description: 'text-base',
      },
    }

    const variantColors = {
      default: {
        bg: 'var(--primary)',
        border: 'var(--primary)',
      },
      success: {
        bg: 'var(--success)',
        border: 'var(--success)',
      },
      warning: {
        bg: 'var(--warning)',
        border: 'var(--warning)',
      },
      error: {
        bg: 'var(--error)',
        border: 'var(--error)',
      },
      info: {
        bg: 'var(--info)',
        border: 'var(--info)',
      },
    }

    const colors = variantColors[variant]
    const sizes = sizeClasses[size]

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <div
          className={cn(
            "relative flex items-center justify-center shrink-0",
            haptic && isAnimating && "animate-checkbox-haptic"
          )}
        >
          <input
            type="checkbox"
            ref={ref}
            id={inputId}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className={cn(
              "peer appearance-none shrink-0 cursor-pointer",
              sizes.box,
              "rounded-md border-2",
              "border-[var(--border)] bg-[var(--background)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-all",
              error && "border-[var(--error)]"
            )}
            style={{
              transitionDuration: `${duration}ms`,
              ...(isChecked && {
                backgroundColor: colors.bg,
                borderColor: colors.border,
              }),
            }}
            {...props}
          />
          <svg
            className={cn(
              "absolute pointer-events-none text-white",
              sizes.check,
              bounce && isAnimating && isChecked && "animate-checkbox-bounce"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              ref={checkmarkRef}
              d="M20 6L9 17L4 12"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: isChecked ? 0 : pathLength,
                transition: `stroke-dashoffset ${duration}ms ease-out`,
              }}
            />
          </svg>
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={inputId}
                className={cn(
                  "font-medium leading-tight cursor-pointer",
                  sizes.label,
                  "text-[var(--foreground)]",
                  disabled && "cursor-not-allowed opacity-50"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <span className={cn(
                "text-[var(--foreground-muted)]",
                sizes.description
              )}>
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)
AnimatedCheckbox.displayName = "AnimatedCheckbox"

/**
 * AnimatedCheckboxGroup - Group of checkboxes with animation coordination
 */
export interface AnimatedCheckboxGroupProps {
  /** Group label */
  label?: string
  /** Description for the group */
  description?: string
  /** Children checkboxes */
  children: React.ReactNode
  /** Orientation */
  orientation?: 'horizontal' | 'vertical'
  /** Error state for the group */
  error?: boolean
  /** Error message */
  errorMessage?: string
  /** Additional className */
  className?: string
}

const AnimatedCheckboxGroup = React.forwardRef<HTMLDivElement, AnimatedCheckboxGroupProps>(
  (
    {
      label,
      description,
      children,
      orientation = 'vertical',
      error,
      errorMessage,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-label={label}
        className={cn("flex flex-col gap-2", className)}
      >
        {label && (
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium text-[var(--foreground)]">
              {label}
            </span>
            {description && (
              <span className="text-sm text-[var(--foreground-muted)]">
                {description}
              </span>
            )}
          </div>
        )}
        <div
          className={cn(
            "flex gap-3",
            orientation === 'vertical' ? "flex-col" : "flex-row flex-wrap"
          )}
        >
          {children}
        </div>
        {error && errorMessage && (
          <span className="text-sm text-[var(--error)]">
            {errorMessage}
          </span>
        )}
      </div>
    )
  }
)
AnimatedCheckboxGroup.displayName = "AnimatedCheckboxGroup"

export { AnimatedCheckbox, AnimatedCheckboxGroup }
