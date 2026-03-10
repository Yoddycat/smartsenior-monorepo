import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  maxItems?: number
}

/**
 * Breadcrumb component following SmartSenior Design System
 *
 * Navigation trail with accessible markup
 */
const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, separator, maxItems, ...props }, ref) => {
    const defaultSeparator = (
      <svg
        className="w-4 h-4 text-[var(--foreground-muted)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    )

    let displayItems = items
    let showEllipsis = false

    if (maxItems && items.length > maxItems) {
      const firstItem = items[0]
      const lastItems = items.slice(-(maxItems - 1))
      displayItems = [firstItem, ...lastItems]
      showEllipsis = true
    }

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("", className)}
        {...props}
      >
        <ol className="flex items-center flex-wrap gap-2">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1

            return (
              <React.Fragment key={index}>
                {showEllipsis && index === 1 && (
                  <>
                    <li className="flex items-center">
                      <span className="text-base text-[var(--foreground-muted)]">...</span>
                    </li>
                    <li className="flex items-center" aria-hidden="true">
                      {separator || defaultSeparator}
                    </li>
                  </>
                )}
                <li className="flex items-center gap-2">
                  {item.icon && (
                    <span className="text-[var(--foreground-muted)]">{item.icon}</span>
                  )}
                  {item.href && !isLast ? (
                    <a
                      href={item.href}
                      className={cn(
                        "text-base text-[var(--foreground-muted)]",
                        "hover:text-[var(--foreground)] hover:underline",
                        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] rounded"
                      )}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className={cn(
                        "text-base",
                        isLast ? "font-medium text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
                      )}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
                {!isLast && (
                  <li className="flex items-center" aria-hidden="true">
                    {separator || defaultSeparator}
                  </li>
                )}
              </React.Fragment>
            )
          })}
        </ol>
      </nav>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb }
