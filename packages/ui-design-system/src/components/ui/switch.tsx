import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  description?: string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Switch component following SmartSenior Design System
 *
 * Toggle switch with large touch target for senior users
 */
const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, size = 'md', disabled, id, ...props }, ref) => {
    const inputId = id || React.useId()

    const sizeClasses = {
      sm: { track: 'w-9 h-5', thumb: 'w-4 h-4', translate: 'translate-x-4' },
      md: { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
      lg: { track: 'w-14 h-8', thumb: 'w-7 h-7', translate: 'translate-x-6' },
    }

    const sizes = sizeClasses[size]

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            ref={ref}
            id={inputId}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "rounded-full transition-colors duration-200 cursor-pointer",
              "bg-[var(--background-muted)] peer-checked:bg-[var(--primary)]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--focus-ring)] peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              sizes.track
            )}
            onClick={() => {
              const input = document.getElementById(inputId) as HTMLInputElement
              if (input && !disabled) {
                input.click()
              }
            }}
          >
            <div
              className={cn(
                "absolute top-0.5 left-0.5 rounded-full bg-white shadow-sm transition-transform duration-200",
                "peer-checked:bg-white",
                sizes.thumb,
                "peer-checked:" + sizes.translate
              )}
              style={{
                transform: (props.checked || props.defaultChecked) ? `translateX(${size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px'})` : 'translateX(0)',
              }}
            />
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={inputId}
                className={cn(
                  "text-base font-medium leading-tight cursor-pointer",
                  "text-[var(--foreground)]",
                  disabled && "cursor-not-allowed opacity-50"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <span className="text-sm text-[var(--foreground-muted)]">
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
