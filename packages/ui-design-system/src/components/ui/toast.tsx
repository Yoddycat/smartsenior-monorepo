import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface ToastProps {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  duration?: number
  onClose?: (id: string) => void
}

/**
 * Toast component following SmartSenior Design System
 *
 * Notification toast with auto-dismiss
 */
const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ id, title, description, variant = 'default', duration = 5000, onClose }, ref) => {
    React.useEffect(() => {
      if (duration > 0 && onClose) {
        const timer = setTimeout(() => {
          onClose(id)
        }, duration)
        return () => clearTimeout(timer)
      }
    }, [id, duration, onClose])

    const variantClasses = {
      default: "bg-[var(--background)] border-[var(--border)]",
      success: "bg-[var(--success)] text-[var(--success-foreground)] border-[var(--success)]",
      warning: "bg-[var(--warning)] text-[var(--warning-foreground)] border-[var(--warning)]",
      error: "bg-[var(--error)] text-[var(--error-foreground)] border-[var(--error)]",
      info: "bg-[var(--info)] text-[var(--info-foreground)] border-[var(--info)]",
    }

    const iconByVariant = {
      default: null,
      success: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
      warning: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      error: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      ),
      info: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "flex items-start gap-3 w-full max-w-sm p-4",
          "rounded-lg border shadow-lg",
          "animate-in slide-in-from-top-2 fade-in duration-300",
          variantClasses[variant]
        )}
      >
        {iconByVariant[variant] && (
          <div className="shrink-0 mt-0.5">{iconByVariant[variant]}</div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-base">{title}</p>
          {description && (
            <p className="mt-1 text-sm opacity-90">{description}</p>
          )}
        </div>
        {onClose && (
          <button
            onClick={() => onClose(id)}
            className={cn(
              "shrink-0 p-1 rounded-md",
              "hover:bg-black/10 dark:hover:bg-white/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]",
              "transition-colors"
            )}
            aria-label="Fechar"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    )
  }
)
Toast.displayName = "Toast"

export interface ToastContainerProps {
  toasts: ToastProps[]
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  onClose: (id: string) => void
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = 'top-right',
  onClose,
}) => {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  }

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-2",
        positionClasses[position]
      )}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  )
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const addToast = React.useCallback((toast: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
    return id
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const clearToasts = React.useCallback(() => {
    setToasts([])
  }, [])

  return {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  }
}

export { Toast, ToastContainer }
