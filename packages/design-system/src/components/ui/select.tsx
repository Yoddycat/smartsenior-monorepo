import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  placeholder?: string
}

/**
 * Select component following SmartSenior Design System
 *
 * Accessible select with large touch target for senior users
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, disabled, children, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full h-12 px-4 pr-10 appearance-none",
            "rounded-md border border-[var(--border)]",
            "bg-[var(--background)] text-[var(--foreground)]",
            "text-base font-normal",
            "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--background-muted)]",
            "transition-all duration-200",
            error && "border-[var(--error)] focus:ring-[var(--error)]",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-[var(--foreground-muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    )
  }
)
Select.displayName = "Select"

export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <option
        ref={ref}
        className={cn("py-2", className)}
        {...props}
      />
    )
  }
)
SelectOption.displayName = "SelectOption"

export { Select, SelectOption }
