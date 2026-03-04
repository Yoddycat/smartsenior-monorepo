import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
  error?: boolean
}

/**
 * Radio component following SmartSenior Design System
 *
 * Accessible radio button with large touch target for senior users
 */
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, error, disabled, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              "peer appearance-none shrink-0",
              "w-6 h-6 rounded-full border-2",
              "border-[var(--border)] bg-[var(--background)]",
              "checked:border-[var(--primary)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-all duration-200",
              error && "border-[var(--error)]"
            )}
            {...props}
          />
          <div
            className="absolute w-3 h-3 rounded-full bg-[var(--primary)] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
          />
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
Radio.displayName = "Radio"

export interface RadioGroupProps {
  children: React.ReactNode
  name: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, name, value, defaultValue, onChange, className, orientation = 'vertical' }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || '')
    const currentValue = value !== undefined ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          "flex",
          orientation === 'vertical' ? "flex-col gap-3" : "flex-row flex-wrap gap-6",
          className
        )}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioProps>(child)) {
            return React.cloneElement(child, {
              name,
              checked: child.props.value === currentValue,
              onChange: handleChange,
            })
          }
          return child
        })}
      </div>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

export { Radio, RadioGroup }
