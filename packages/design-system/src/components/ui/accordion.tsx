import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (id: string) => void
  type: 'single' | 'multiple'
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion provider')
  }
  return context
}

export interface AccordionProps {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: React.ReactNode
  className?: string
}

/**
 * Accordion component following SmartSenior Design System
 *
 * Accessible accordion with smooth animations
 */
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = 'single', defaultValue, value, onValueChange, children, className }, ref) => {
    const getInitialValue = () => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      }
      return []
    }

    const [internalValue, setInternalValue] = React.useState<string[]>(getInitialValue)
    const openItems = value !== undefined
      ? (Array.isArray(value) ? value : [value])
      : internalValue

    const toggleItem = React.useCallback((id: string) => {
      let newValue: string[]

      if (type === 'single') {
        newValue = openItems.includes(id) ? [] : [id]
      } else {
        newValue = openItems.includes(id)
          ? openItems.filter((item) => item !== id)
          : [...openItems, id]
      }

      if (value === undefined) {
        setInternalValue(newValue)
      }

      if (onValueChange) {
        onValueChange(type === 'single' ? (newValue[0] || '') : newValue)
      }
    }, [openItems, type, value, onValueChange])

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
        <div ref={ref} className={cn("w-full divide-y divide-[var(--border)]", className)}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} data-value={value} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<{ itemValue?: string }>, {
              itemValue: value,
            })
          }
          return child
        })}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemValue?: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, itemValue, ...props }, ref) => {
    const { openItems, toggleItem } = useAccordionContext()
    const isOpen = itemValue ? openItems.includes(itemValue) : false

    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={isOpen}
        onClick={() => itemValue && toggleItem(itemValue)}
        className={cn(
          "flex w-full items-center justify-between py-4 px-1",
          "text-left text-base font-medium",
          "text-[var(--foreground)]",
          "hover:text-[var(--primary)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] rounded-md",
          "transition-colors",
          className
        )}
        {...props}
      >
        {children}
        <svg
          className={cn(
            "w-5 h-5 shrink-0 text-[var(--foreground-muted)] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  itemValue?: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, itemValue, ...props }, ref) => {
    const { openItems } = useAccordionContext()
    const isOpen = itemValue ? openItems.includes(itemValue) : false
    const contentRef = React.useRef<HTMLDivElement>(null)
    const [height, setHeight] = React.useState<number | undefined>(0)

    React.useEffect(() => {
      if (contentRef.current) {
        setHeight(isOpen ? contentRef.current.scrollHeight : 0)
      }
    }, [isOpen])

    return (
      <div
        ref={ref}
        role="region"
        className={cn(
          "overflow-hidden transition-all duration-200",
          className
        )}
        style={{ height }}
        {...props}
      >
        <div ref={contentRef} className="pb-4 px-1 text-base text-[var(--foreground-muted)]">
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
