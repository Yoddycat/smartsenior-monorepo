import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium rounded-md",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--focus-ring-offset)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "whitespace-nowrap select-none",
  ],
  {
    variants: {
      variant: {
        primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]",
        accent: "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)]",
        secondary: "bg-[var(--background-subtle)] text-[var(--foreground)] hover:bg-[var(--background-muted)] border border-[var(--border)]",
        destructive: "bg-[var(--error)] text-[var(--error-foreground)] hover:brightness-90",
        outline: "bg-transparent text-[var(--primary)] hover:bg-[var(--background-subtle)] border border-[var(--primary)]",
        ghost: "bg-transparent text-[var(--foreground)] hover:bg-[var(--background-muted)]",
        link: "bg-transparent text-[var(--primary)] hover:underline underline-offset-4",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
