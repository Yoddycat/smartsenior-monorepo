import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface DrawerProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  side?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

/**
 * Drawer/Sheet component following SmartSenior Design System
 *
 * Slide-out panel overlay
 */
const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ open, onClose, children, side = 'right', size = 'md', className }, ref) => {
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
      left: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[480px]', full: 'w-full' },
      right: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[480px]', full: 'w-full' },
      top: { sm: 'h-48', md: 'h-64', lg: 'h-96', xl: 'h-[480px]', full: 'h-full' },
      bottom: { sm: 'h-48', md: 'h-64', lg: 'h-96', xl: 'h-[480px]', full: 'h-full' },
    }

    const positionClasses = {
      left: 'inset-y-0 left-0 animate-in slide-in-from-left duration-300',
      right: 'inset-y-0 right-0 animate-in slide-in-from-right duration-300',
      top: 'inset-x-0 top-0 animate-in slide-in-from-top duration-300',
      bottom: 'inset-x-0 bottom-0 animate-in slide-in-from-bottom duration-300',
    }

    return (
      <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 animate-in fade-in duration-300"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          ref={ref}
          className={cn(
            "fixed bg-[var(--background)] shadow-xl flex flex-col",
            positionClasses[side],
            sizeClasses[side][size],
            className
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
Drawer.displayName = "Drawer"

const DrawerHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-between p-6 border-b border-[var(--border)]", className)}
      {...props}
    />
  )
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-xl font-semibold text-[var(--foreground)]", className)}
      {...props}
    />
  )
)
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base text-[var(--foreground-muted)]", className)}
      {...props}
    />
  )
)
DrawerDescription.displayName = "DrawerDescription"

const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex-1 overflow-y-auto p-6", className)}
      {...props}
    />
  )
)
DrawerContent.displayName = "DrawerContent"

const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-end gap-3 p-6 border-t border-[var(--border)]", className)}
      {...props}
    />
  )
)
DrawerFooter.displayName = "DrawerFooter"

interface DrawerCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void
}

const DrawerClose = React.forwardRef<HTMLButtonElement, DrawerCloseProps>(
  ({ className, onClose, ...props }, ref) => (
    <button
      ref={ref}
      onClick={onClose}
      className={cn(
        "p-2 rounded-md",
        "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
        "hover:bg-[var(--background-muted)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
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
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
)
DrawerClose.displayName = "DrawerClose"

// Alias
const Sheet = Drawer
const SheetHeader = DrawerHeader
const SheetTitle = DrawerTitle
const SheetDescription = DrawerDescription
const SheetContent = DrawerContent
const SheetFooter = DrawerFooter
const SheetClose = DrawerClose

export {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerContent,
  DrawerFooter,
  DrawerClose,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetFooter,
  SheetClose,
}
