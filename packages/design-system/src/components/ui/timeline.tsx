import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal'
}

/**
 * Timeline component following SmartSenior Design System
 *
 * Chronological event display
 */
const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, orientation = 'vertical', children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        orientation === 'vertical' ? "flex flex-col" : "flex flex-row overflow-x-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
Timeline.displayName = "Timeline"

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'completed' | 'current' | 'upcoming'
  icon?: React.ReactNode
  orientation?: 'vertical' | 'horizontal'
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, status = 'upcoming', icon, orientation = 'vertical', children, ...props }, ref) => {
    const statusColors = {
      completed: 'bg-[var(--success)] text-[var(--success-foreground)]',
      current: 'bg-[var(--primary)] text-[var(--primary-foreground)]',
      upcoming: 'bg-[var(--background-muted)] text-[var(--foreground-muted)]',
    }

    const lineColors = {
      completed: 'bg-[var(--success)]',
      current: 'bg-[var(--primary)]',
      upcoming: 'bg-[var(--border)]',
    }

    const defaultIcon = status === 'completed' ? (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ) : null

    if (orientation === 'horizontal') {
      return (
        <div
          ref={ref}
          className={cn("flex flex-col items-center min-w-[150px]", className)}
          {...props}
        >
          <div className="flex items-center w-full">
            <div className={cn("flex-1 h-0.5", lineColors[status])} />
            <div
              className={cn(
                "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                statusColors[status]
              )}
            >
              {icon || defaultIcon}
            </div>
            <div className={cn("flex-1 h-0.5", status === 'upcoming' ? 'bg-[var(--border)]' : lineColors[status])} />
          </div>
          <div className="mt-3 text-center">{children}</div>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("flex gap-4", className)}
        {...props}
      >
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
              statusColors[status]
            )}
          >
            {icon || defaultIcon}
          </div>
          <div className={cn("flex-1 w-0.5 my-2", lineColors[status])} />
        </div>
        <div className="flex-1 pb-8">{children}</div>
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

const TimelineTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn("text-base font-semibold text-[var(--foreground)]", className)}
      {...props}
    />
  )
)
TimelineTitle.displayName = "TimelineTitle"

const TimelineDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-[var(--foreground-muted)] mt-1", className)}
      {...props}
    />
  )
)
TimelineDescription.displayName = "TimelineDescription"

const TimelineTime = React.forwardRef<HTMLTimeElement, React.TimeHTMLAttributes<HTMLTimeElement>>(
  ({ className, ...props }, ref) => (
    <time
      ref={ref}
      className={cn("text-xs text-[var(--foreground-muted)]", className)}
      {...props}
    />
  )
)
TimelineTime.displayName = "TimelineTime"

export { Timeline, TimelineItem, TimelineTitle, TimelineDescription, TimelineTime }
