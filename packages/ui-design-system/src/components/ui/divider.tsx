import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  label?: string
}

/**
 * Divider component following SmartSenior Design System
 *
 * Visual separator for content sections
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', variant = 'solid', label, ...props }, ref) => {
    const variantClasses = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    }

    if (label && orientation === 'horizontal') {
      return (
        <div
          ref={ref}
          className={cn("flex items-center gap-4 w-full", className)}
          role="separator"
          aria-orientation={orientation}
          {...props}
        >
          <div
            className={cn(
              "flex-1 border-t border-[var(--border)]",
              variantClasses[variant]
            )}
          />
          <span className="text-sm text-[var(--foreground-muted)] shrink-0">
            {label}
          </span>
          <div
            className={cn(
              "flex-1 border-t border-[var(--border)]",
              variantClasses[variant]
            )}
          />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          orientation === 'horizontal'
            ? cn("w-full border-t border-[var(--border)]", variantClasses[variant])
            : cn("h-full border-l border-[var(--border)]", variantClasses[variant]),
          className
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

// Alias for semantic clarity
const Separator = Divider

export { Divider, Separator }
