import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactElement
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  delayDuration?: number
  className?: string
}

/**
 * Tooltip component following SmartSenior Design System
 *
 * Accessible tooltip with keyboard support
 */
const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = 'top',
  align = 'center',
  delayDuration = 300,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const gap = 8

    let top = 0
    let left = 0

    // Calculate vertical position
    switch (side) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - gap
        break
      case 'bottom':
        top = triggerRect.bottom + gap
        break
      case 'left':
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
        break
    }

    // Calculate horizontal position
    switch (side) {
      case 'left':
        left = triggerRect.left - tooltipRect.width - gap
        break
      case 'right':
        left = triggerRect.right + gap
        break
      case 'top':
      case 'bottom':
        switch (align) {
          case 'start':
            left = triggerRect.left
            break
          case 'end':
            left = triggerRect.right - tooltipRect.width
            break
          case 'center':
          default:
            left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
            break
        }
        break
    }

    setPosition({ top, left })
  }, [side, align])

  const showTooltip = React.useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true)
    }, delayDuration)
  }, [delayDuration])

  const hideTooltip = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(false)
  }, [])

  React.useEffect(() => {
    if (isOpen) {
      updatePosition()
    }
  }, [isOpen, updatePosition])

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const child = React.Children.only(children)

  const trigger = React.cloneElement(child, {
    ref: triggerRef,
    onMouseEnter: (e: React.MouseEvent) => {
      showTooltip()
      child.props.onMouseEnter?.(e)
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hideTooltip()
      child.props.onMouseLeave?.(e)
    },
    onFocus: (e: React.FocusEvent) => {
      showTooltip()
      child.props.onFocus?.(e)
    },
    onBlur: (e: React.FocusEvent) => {
      hideTooltip()
      child.props.onBlur?.(e)
    },
    'aria-describedby': isOpen ? 'tooltip' : undefined,
  })

  return (
    <>
      {trigger}
      {isOpen && (
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className={cn(
            "fixed z-50 px-3 py-2 max-w-xs",
            "bg-[var(--foreground)] text-[var(--background)]",
            "text-sm font-medium rounded-md shadow-lg",
            "animate-in fade-in-50 zoom-in-95 duration-150",
            className
          )}
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {content}
        </div>
      )}
    </>
  )
}

Tooltip.displayName = "Tooltip"

export { Tooltip }
