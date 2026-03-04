import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Error state */
  error?: boolean
  /** Left icon/element */
  leftElement?: React.ReactNode
  /** Right icon/element */
  rightElement?: React.ReactNode
}

/**
 * Input component following SmartSenior Design System
 *
 * Features:
 * - Senior-optimized sizing (larger height, bigger text)
 * - High contrast focus states
 * - Error state support
 * - Optional left/right elements
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, leftElement, rightElement, ...props }, ref) => {
    const baseClasses = [
      "flex h-12 w-full rounded-md border bg-[var(--background)]",
      "px-4 py-3 text-base text-[var(--foreground)]",
      "placeholder:text-[var(--foreground-subtle)]",
      "transition-colors duration-150",
      "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)]",
      "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--focus-ring-offset)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    ]

    const borderClasses = error
      ? "border-[var(--error)] focus-visible:ring-[var(--error)]"
      : "border-[var(--border)] focus-visible:border-[var(--primary)]"

    if (leftElement || rightElement) {
      return (
        <div className="relative flex items-center w-full">
          {leftElement && (
            <div className="absolute left-3 flex items-center pointer-events-none text-[var(--foreground-muted)]">
              {leftElement}
            </div>
          )}
          <input
            type={type}
            className={cn(
              ...baseClasses,
              borderClasses,
              leftElement && "pl-10",
              rightElement && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-3 flex items-center text-[var(--foreground-muted)]">
              {rightElement}
            </div>
          )}
        </div>
      )
    }

    return (
      <input
        type={type}
        className={cn(...baseClasses, borderClasses, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
