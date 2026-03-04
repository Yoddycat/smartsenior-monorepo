import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface CommandProps {
  open: boolean
  onClose: () => void
  placeholder?: string
  className?: string
  children: React.ReactNode
}

/**
 * Command Palette component following SmartSenior Design System
 *
 * Keyboard-driven command search interface
 */
const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ open, onClose, placeholder = "Digite um comando...", className, children }, ref) => {
    const [search, setSearch] = React.useState('')
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Focus input when opened
    React.useEffect(() => {
      if (open) {
        setTimeout(() => inputRef.current?.focus(), 100)
      } else {
        setSearch('')
      }
    }, [open])

    // Close on escape
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open) {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [open, onClose])

    // Prevent body scroll
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

    return (
      <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 animate-in fade-in duration-150"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Command palette */}
        <div className="fixed inset-x-4 top-[20%] mx-auto max-w-xl">
          <div
            ref={ref}
            className={cn(
              "bg-[var(--background)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden",
              "animate-in fade-in-50 zoom-in-95 duration-150",
              className
            )}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 border-b border-[var(--border)]">
              <svg
                className="w-5 h-5 text-[var(--foreground-muted)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
                className={cn(
                  "flex-1 h-14 bg-transparent text-base",
                  "text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]",
                  "focus:outline-none"
                )}
              />
              <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs bg-[var(--background-muted)] rounded">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto p-2">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child as React.ReactElement<{ search?: string }>, {
                    search,
                  })
                }
                return child
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Command.displayName = "Command"

export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string
  search?: string
}

const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ className, heading, search, children, ...props }, ref) => {
    // Filter children based on search
    const filteredChildren = React.Children.toArray(children).filter((child) => {
      if (!search || !React.isValidElement(child)) return true
      const label = child.props.children?.toString().toLowerCase() || ''
      return label.includes(search.toLowerCase())
    })

    if (filteredChildren.length === 0) return null

    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {heading && (
          <div className="px-2 py-1.5 text-xs font-semibold text-[var(--foreground-muted)]">
            {heading}
          </div>
        )}
        {filteredChildren}
      </div>
    )
  }
)
CommandGroup.displayName = "CommandGroup"

export interface CommandItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  shortcut?: string
  onSelect?: () => void
}

const CommandItem = React.forwardRef<HTMLButtonElement, CommandItemProps>(
  ({ className, icon, shortcut, onSelect, children, ...props }, ref) => (
    <button
      ref={ref}
      onClick={onSelect}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-md",
        "text-base text-left text-[var(--foreground)]",
        "hover:bg-[var(--background-muted)]",
        "focus:outline-none focus:bg-[var(--background-muted)]",
        "transition-colors",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0 text-[var(--foreground-muted)]">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <kbd className="shrink-0 px-2 py-0.5 text-xs bg-[var(--background-muted)] rounded">
          {shortcut}
        </kbd>
      )}
    </button>
  )
)
CommandItem.displayName = "CommandItem"

const CommandSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("my-2 h-px bg-[var(--border)]", className)}
      {...props}
    />
  )
)
CommandSeparator.displayName = "CommandSeparator"

const CommandEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children = "Nenhum resultado encontrado.", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("py-6 text-center text-base text-[var(--foreground-muted)]", className)}
      {...props}
    >
      {children}
    </div>
  )
)
CommandEmpty.displayName = "CommandEmpty"

export {
  Command,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandEmpty,
}
