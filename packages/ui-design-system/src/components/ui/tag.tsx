import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  removable?: boolean
  onRemove?: () => void
  icon?: React.ReactNode
}

/**
 * Tag/Chip component following SmartSenior Design System
 *
 * Label tag with optional remove action
 */
const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({
    className,
    variant = 'default',
    size = 'md',
    removable,
    onRemove,
    icon,
    children,
    ...props
  }, ref) => {
    const variantClasses = {
      default: "bg-[var(--background-muted)] text-[var(--foreground)] border-[var(--border)]",
      primary: "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/30",
      secondary: "bg-[var(--background-muted)] text-[var(--foreground-muted)] border-[var(--border)]",
      success: "bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/30",
      warning: "bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/30",
      error: "bg-[var(--error)]/10 text-[var(--error)] border-[var(--error)]/30",
      info: "bg-[var(--info)]/10 text-[var(--info)] border-[var(--info)]/30",
    }

    const sizeClasses = {
      sm: "text-xs px-2 py-0.5 gap-1",
      md: "text-sm px-2.5 py-1 gap-1.5",
      lg: "text-base px-3 py-1.5 gap-2",
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full border",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
        {removable && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onRemove?.()
            }}
            className={cn(
              "shrink-0 rounded-full hover:bg-black/10 dark:hover:bg-white/10",
              "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
              "transition-colors",
              size === 'sm' && "p-0.5 -mr-1",
              size === 'md' && "p-0.5 -mr-1",
              size === 'lg' && "p-1 -mr-1"
            )}
            aria-label="Remover"
          >
            <svg
              className={cn(
                size === 'sm' && "w-3 h-3",
                size === 'md' && "w-3.5 h-3.5",
                size === 'lg' && "w-4 h-4"
              )}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </span>
    )
  }
)
Tag.displayName = "Tag"

// Alias for semantic clarity
const Chip = Tag

export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'sm' | 'md' | 'lg'
}

const TagGroup = React.forwardRef<HTMLDivElement, TagGroupProps>(
  ({ className, gap = 'sm', ...props }, ref) => {
    const gapClasses = {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap", gapClasses[gap], className)}
        {...props}
      />
    )
  }
)
TagGroup.displayName = "TagGroup"

export { Tag, Chip, TagGroup }
