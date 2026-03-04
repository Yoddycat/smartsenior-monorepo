import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  centered?: boolean
  padding?: boolean
}

/**
 * Container component following SmartSenior Design System
 *
 * Responsive container for page content
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', centered = true, padding = true, ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-screen-sm', // 640px
      md: 'max-w-screen-md', // 768px
      lg: 'max-w-screen-lg', // 1024px
      xl: 'max-w-screen-xl', // 1280px
      full: 'max-w-full',
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          sizeClasses[size],
          centered && "mx-auto",
          padding && "px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }
