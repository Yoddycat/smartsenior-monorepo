import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

interface PopoverContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null)

function usePopover() {
  const context = React.useContext(PopoverContext)
  if (!context) {
    throw new Error('Popover components must be used within a Popover provider')
  }
  return context
}

export interface PopoverProps {
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * Popover component following SmartSenior Design System
 *
 * Floating content panel
 */
const Popover: React.FC<PopoverProps> = ({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const setIsOpen = React.useCallback((newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }, [isControlled, onOpenChange])

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative inline-block">
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

export interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const { isOpen, setIsOpen } = usePopover()

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
        onClick: () => setIsOpen(!isOpen),
      })
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={() => setIsOpen(!isOpen)}
        className={cn("", className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
PopoverTrigger.displayName = "PopoverTrigger"

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({
    className,
    align = 'center',
    side = 'bottom',
    sideOffset = 8,
    children,
    ...props
  }, _ref) => {
    const { isOpen, setIsOpen } = usePopover()
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

    const sideClasses = {
      top: 'bottom-full mb-2',
      bottom: 'top-full mt-2',
      left: 'right-full mr-2',
      right: 'left-full ml-2',
    }

    return (
      <div
        ref={contentRef}
        role="dialog"
        className={cn(
          "absolute z-50 min-w-[200px] p-4",
          "bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg",
          "animate-in fade-in-50 zoom-in-95 duration-150",
          side === 'top' || side === 'bottom' ? alignClasses[align] : "",
          sideClasses[side],
          className
        )}
        style={{ [side === 'top' || side === 'bottom' ? 'marginTop' : 'marginLeft']: sideOffset }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
PopoverContent.displayName = "PopoverContent"

const PopoverClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { setIsOpen } = usePopover()

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setIsOpen(false)}
        className={cn("", className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
PopoverClose.displayName = "PopoverClose"

export { Popover, PopoverTrigger, PopoverContent, PopoverClose }
