import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full px-3 py-1",
    "text-sm font-medium",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-[var(--primary-foreground)]",
        secondary: "bg-[var(--background-muted)] text-[var(--foreground)] border border-[var(--border)]",
        accent: "bg-[var(--accent)] text-[var(--accent-foreground)]",
        success: "bg-[var(--success)] text-[var(--success-foreground)]",
        warning: "bg-[var(--warning)] text-[var(--warning-foreground)]",
        error: "bg-[var(--error)] text-[var(--error-foreground)]",
        info: "bg-[var(--info)] text-[var(--info-foreground)]",
        outline: "bg-transparent text-[var(--foreground)] border border-[var(--border)]",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge component following SmartSenior Design System
 *
 * Used for status indicators, labels, and tags
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
