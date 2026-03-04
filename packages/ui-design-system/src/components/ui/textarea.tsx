import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
}

/**
 * Textarea component following SmartSenior Design System
 *
 * Multi-line text input with accessible styling
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, resize = 'vertical', disabled, ...props }, ref) => {
    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    }

    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(
          "w-full min-h-[120px] px-4 py-3",
          "rounded-md border border-[var(--border)]",
          "bg-[var(--background)] text-[var(--foreground)]",
          "text-base font-normal leading-relaxed",
          "placeholder:text-[var(--foreground-muted)]",
          "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--background-muted)]",
          "transition-all duration-200",
          error && "border-[var(--error)] focus:ring-[var(--error)]",
          resizeClasses[resize],
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
