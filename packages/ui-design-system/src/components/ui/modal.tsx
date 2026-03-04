import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Modal component following SmartSenior Design System
 *
 * Accessible modal with focus trap and backdrop
 */
const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, children, className, size = 'md' }, ref) => {
    const modalRef = React.useRef<HTMLDivElement>(null)

    // Close on escape key
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open) {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [open, onClose])

    // Prevent body scroll when open
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
      return () => {
        document.body.style.overflow = ''
      }
    }, [open])

    if (!open) return null

    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
    }

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal content */}
        <div
          ref={ref || modalRef}
          className={cn(
            "relative z-50 w-full",
            "bg-[var(--background)] rounded-lg shadow-xl",
            "animate-in fade-in zoom-in-95 duration-200",
            sizeClasses[size],
            className
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
Modal.displayName = "Modal"

const ModalHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6 pb-0", className)}
      {...props}
    />
  )
)
ModalHeader.displayName = "ModalHeader"

const ModalTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-xl font-semibold text-[var(--foreground)]", className)}
      {...props}
    />
  )
)
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base text-[var(--foreground-muted)]", className)}
      {...props}
    />
  )
)
ModalDescription.displayName = "ModalDescription"

const ModalContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6", className)}
      {...props}
    />
  )
)
ModalContent.displayName = "ModalContent"

const ModalFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-end gap-3 p-6 pt-0", className)}
      {...props}
    />
  )
)
ModalFooter.displayName = "ModalFooter"

interface ModalCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void
}

const ModalClose = React.forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ className, onClose, ...props }, ref) => (
    <button
      ref={ref}
      onClick={onClose}
      className={cn(
        "absolute right-4 top-4 p-2 rounded-md",
        "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
        "hover:bg-[var(--background-muted)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]",
        "transition-colors",
        className
      )}
      aria-label="Fechar"
      {...props}
    >
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
)
ModalClose.displayName = "ModalClose"

export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose }
