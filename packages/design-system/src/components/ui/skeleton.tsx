import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'circular' | 'rectangular' | 'text'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

/**
 * Skeleton component following SmartSenior Design System
 *
 * Loading placeholder with animation
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({
    className,
    variant = 'default',
    width,
    height,
    animation = 'pulse',
    style,
    ...props
  }, ref) => {
    const variantClasses = {
      default: 'rounded-md',
      circular: 'rounded-full',
      rectangular: 'rounded-none',
      text: 'rounded-md h-4',
    }

    const animationClasses = {
      pulse: 'animate-pulse',
      wave: 'animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]',
      none: '',
    }

    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--background-muted)]",
          variantClasses[variant],
          animationClasses[animation],
          className
        )}
        style={{
          width: width,
          height: height,
          ...style,
        }}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

// Common skeleton patterns for convenience
export interface SkeletonTextProps {
  lines?: number
  className?: string
}

const SkeletonText: React.FC<SkeletonTextProps> = ({ lines = 3, className }) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn(
            "h-4",
            i === lines - 1 && "w-4/5" // Last line is shorter
          )}
        />
      ))}
    </div>
  )
}
SkeletonText.displayName = "SkeletonText"

const SkeletonAvatar: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }> = ({
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }

  return (
    <Skeleton
      variant="circular"
      className={cn(sizeClasses[size], className)}
    />
  )
}
SkeletonAvatar.displayName = "SkeletonAvatar"

const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--border)] p-6 space-y-4",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <SkeletonAvatar size="md" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" className="h-4 w-1/3" />
          <Skeleton variant="text" className="h-3 w-1/2" />
        </div>
      </div>
      <SkeletonText lines={3} />
      <div className="flex gap-2">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  )
}
SkeletonCard.displayName = "SkeletonCard"

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard }
