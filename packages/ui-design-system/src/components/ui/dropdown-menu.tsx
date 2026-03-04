import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

interface DropdownMenuContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | null>(null)

function useDropdownMenu() {
  const context = React.useContext(DropdownMenuContext)
  if (!context) {
    throw new Error('DropdownMenu components must be used within a DropdownMenu provider')
  }
  return context
}

export interface DropdownMenuProps {
  children: React.ReactNode
  defaultOpen?: boolean
}

/**
 * DropdownMenu component following SmartSenior Design System
 *
 * Accessible dropdown menu with keyboard navigation
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative inline-block">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  )
}

export interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen } = useDropdownMenu()

    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen(!isOpen)}
        className={cn("", className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, align = 'start', sideOffset = 4, children, ...props }, ref) => {
    const { isOpen, setIsOpen } = useDropdownMenu()
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
          setIsOpen(false)
        }
      }

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleEscape)
      }
    }, [isOpen, setIsOpen])

    if (!isOpen) return null

    const alignClasses = {
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0',
    }

    return (
      <div
        ref={contentRef}
        role="menu"
        className={cn(
          "absolute z-50 min-w-[180px] py-1",
          "bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg",
          "animate-in fade-in-50 zoom-in-95 duration-150",
          alignClasses[align],
          className
        )}
        style={{ marginTop: sideOffset }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DropdownMenuContent.displayName = "DropdownMenuContent"

export interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive'
}

const DropdownMenuItem = React.forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ className, variant = 'default', children, onClick, ...props }, ref) => {
    const { setIsOpen } = useDropdownMenu()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      setIsOpen(false)
    }

    return (
      <button
        ref={ref}
        role="menuitem"
        onClick={handleClick}
        className={cn(
          "w-full flex items-center gap-2 px-4 py-2.5",
          "text-base text-left",
          "transition-colors duration-150",
          "focus:outline-none focus:bg-[var(--background-muted)]",
          variant === 'default' && "text-[var(--foreground)] hover:bg-[var(--background-muted)]",
          variant === 'destructive' && "text-[var(--error)] hover:bg-[var(--error)]/10",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn("my-1 h-px bg-[var(--border)]", className)}
      {...props}
    />
  )
)
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

const DropdownMenuLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("px-4 py-2 text-sm font-semibold text-[var(--foreground-muted)]", className)}
      {...props}
    />
  )
)
DropdownMenuLabel.displayName = "DropdownMenuLabel"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
}
