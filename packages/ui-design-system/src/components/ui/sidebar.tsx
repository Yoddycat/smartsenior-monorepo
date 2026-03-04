import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  collapsible?: boolean
  width?: string
  collapsedWidth?: string
}

/**
 * Sidebar component following SmartSenior Design System
 *
 * Collapsible navigation sidebar
 */
const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({
    className,
    collapsed = false,
    onCollapsedChange,
    collapsible = true,
    width = '280px',
    collapsedWidth = '72px',
    children,
    ...props
  }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col h-full",
          "bg-[var(--background)] border-r border-[var(--border)]",
          "transition-all duration-300 ease-in-out",
          className
        )}
        style={{ width: collapsed ? collapsedWidth : width }}
        {...props}
      >
        {children}
        {collapsible && (
          <button
            onClick={() => onCollapsedChange?.(!collapsed)}
            className={cn(
              "absolute -right-3 top-6 z-10",
              "w-6 h-6 flex items-center justify-center",
              "bg-[var(--background)] border border-[var(--border)] rounded-full",
              "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            )}
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
          >
            <svg
              className={cn("w-4 h-4 transition-transform", collapsed && "rotate-180")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}
      </aside>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center h-16 px-4 border-b border-[var(--border)]", className)}
      {...props}
    />
  )
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex-1 overflow-y-auto py-4", className)}
      {...props}
    />
  )
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-4 border-t border-[var(--border)]", className)}
      {...props}
    />
  )
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("px-3 py-2", className)}
      {...props}
    />
  )
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("px-3 mb-2 text-xs font-semibold uppercase text-[var(--foreground-muted)]", className)}
      {...props}
    />
  )
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

export interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  active?: boolean
  collapsed?: boolean
}

const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ className, icon, active, collapsed, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5",
        "text-base font-medium rounded-md",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
        active
          ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
          : "text-[var(--foreground)] hover:bg-[var(--background-muted)]",
        collapsed && "justify-center",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {!collapsed && <span className="truncate">{children}</span>}
    </button>
  )
)
SidebarItem.displayName = "SidebarItem"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
}
