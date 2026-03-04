import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
  error?: boolean
}

/**
 * Checkbox component following SmartSenior Design System
 *
 * Accessible checkbox with large touch target for senior users
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, disabled, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              "peer appearance-none shrink-0",
              "w-6 h-6 rounded-md border-2",
              "border-[var(--border)] bg-[var(--background)]",
              "checked:bg-[var(--primary)] checked:border-[var(--primary)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-all duration-200",
              error && "border-[var(--error)]"
            )}
            {...props}
          />
          <svg
            className="absolute w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-[var(--primary-foreground)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
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
Checkbox.displayName = "Checkbox"

export { Checkbox }
