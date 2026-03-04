import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: 'default' | 'bordered' | 'divided'
}

/**
 * List component following SmartSenior Design System
 *
 * Flexible list with various styles
 */
const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: "",
      bordered: "border border-[var(--border)] rounded-lg overflow-hidden",
      divided: "divide-y divide-[var(--border)]",
    }

    return (
      <ul
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    )
  }
)
List.displayName = "List"

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  interactive?: boolean
  selected?: boolean
  disabled?: boolean
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, interactive, selected, disabled, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        "flex items-center gap-3 p-4",
        interactive && !disabled && "cursor-pointer hover:bg-[var(--background-muted)] transition-colors",
        selected && "bg-[var(--primary)]/10",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
)
ListItem.displayName = "ListItem"

const ListItemIcon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("shrink-0 text-[var(--foreground-muted)]", className)}
      {...props}
    />
  )
)
ListItemIcon.displayName = "ListItemIcon"

const ListItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex-1 min-w-0", className)}
      {...props}
    />
  )
)
ListItemContent.displayName = "ListItemContent"

const ListItemTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base font-medium text-[var(--foreground)] truncate", className)}
      {...props}
    />
  )
)
ListItemTitle.displayName = "ListItemTitle"

const ListItemDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-[var(--foreground-muted)] truncate", className)}
      {...props}
    />
  )
)
ListItemDescription.displayName = "ListItemDescription"

const ListItemAction = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
)
ListItemAction.displayName = "ListItemAction"

export {
  List,
  ListItem,
  ListItemIcon,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemAction,
}
