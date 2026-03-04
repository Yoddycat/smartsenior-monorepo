import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Avatar component following SmartSenior Design System
 *
 * User avatar with fallback support
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8 text-sm',
      md: 'w-12 h-12 text-base',
      lg: 'w-16 h-16 text-lg',
      xl: 'w-24 h-24 text-2xl',
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full",
          "bg-[var(--background-muted)]",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Avatar.displayName = "Avatar"

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onLoadingStatusChange?: (status: 'loading' | 'loaded' | 'error') => void
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, alt, onLoadingStatusChange, ...props }, ref) => {
    const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading')

    React.useEffect(() => {
      if (!src) {
        setStatus('error')
        return
      }

      const img = new Image()
      img.src = src

      img.onload = () => {
        setStatus('loaded')
        onLoadingStatusChange?.('loaded')
      }

      img.onerror = () => {
        setStatus('error')
        onLoadingStatusChange?.('error')
      }
    }, [src, onLoadingStatusChange])

    if (status !== 'loaded') {
      return null
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        {...props}
      />
    )
  }
)
AvatarImage.displayName = "AvatarImage"

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center",
          "font-medium text-[var(--foreground-muted)]",
          "bg-[var(--background-muted)]",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
AvatarFallback.displayName = "AvatarFallback"

// Utility to generate initials from name
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase()
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export { Avatar, AvatarImage, AvatarFallback }
