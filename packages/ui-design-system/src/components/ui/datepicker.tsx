import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface DatePickerProps {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  error?: boolean
  minDate?: Date
  maxDate?: Date
  className?: string
}

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

/**
 * DatePicker component following SmartSenior Design System
 *
 * Calendar date picker with accessible navigation
 */
const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({
    value,
    defaultValue,
    onChange,
    placeholder = 'Selecione uma data',
    disabled,
    error,
    minDate,
    maxDate,
    className,
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState<Date | undefined>(defaultValue)
    const [viewDate, setViewDate] = React.useState(value || defaultValue || new Date())

    const selectedDate = value !== undefined ? value : internalValue

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear()
      const month = date.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const daysInMonth = lastDay.getDate()
      const startingDay = firstDay.getDay()

      const days: (Date | null)[] = []

      // Add empty slots for days before the first day of the month
      for (let i = 0; i < startingDay; i++) {
        days.push(null)
      }

      // Add all days of the month
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(year, month, i))
      }

      return days
    }

    const isDateDisabled = (date: Date) => {
      if (minDate && date < minDate) return true
      if (maxDate && date > maxDate) return true
      return false
    }

    const isSameDay = (date1: Date, date2: Date) => {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      )
    }

    const handleDateSelect = (date: Date) => {
      if (isDateDisabled(date)) return

      if (value === undefined) {
        setInternalValue(date)
      }
      onChange?.(date)
      setIsOpen(false)
    }

    const goToPreviousMonth = () => {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
    }

    const goToNextMonth = () => {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
    }

    const formatDate = (date: Date) => {
      return date.toLocaleDateString('pt-BR')
    }

    const days = getDaysInMonth(viewDate)

    return (
      <div ref={ref} className={cn("relative w-full", className)}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "w-full h-12 px-4 flex items-center justify-between",
            "rounded-md border border-[var(--border)]",
            "bg-[var(--background)] text-[var(--foreground)]",
            "text-base text-left",
            "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--background-muted)]",
            "transition-all duration-200",
            error && "border-[var(--error)] focus:ring-[var(--error)]"
          )}
        >
          <span className={selectedDate ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}>
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </span>
          <svg
            className="w-5 h-5 text-[var(--foreground-muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>

        {isOpen && (
          <div
            className={cn(
              "absolute z-50 mt-2 p-4 w-full min-w-[300px]",
              "bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={goToPreviousMonth}
                className="p-2 rounded-md hover:bg-[var(--background-muted)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span className="text-base font-semibold">
                {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
              </span>
              <button
                type="button"
                onClick={goToNextMonth}
                className="p-2 rounded-md hover:bg-[var(--background-muted)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-[var(--foreground-muted)] py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((date, index) => (
                <div key={index} className="aspect-square">
                  {date ? (
                    <button
                      type="button"
                      onClick={() => handleDateSelect(date)}
                      disabled={isDateDisabled(date)}
                      className={cn(
                        "w-full h-full flex items-center justify-center",
                        "text-base rounded-md transition-colors",
                        "hover:bg-[var(--background-muted)]",
                        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
                        selectedDate && isSameDay(date, selectedDate)
                          ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]"
                          : "text-[var(--foreground)]",
                        isSameDay(date, new Date()) && !selectedDate && "font-bold",
                        isDateDisabled(date) && "opacity-30 cursor-not-allowed"
                      )}
                    >
                      {date.getDate()}
                    </button>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Today button */}
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <button
                type="button"
                onClick={() => handleDateSelect(new Date())}
                className="w-full py-2 text-base text-[var(--primary)] hover:bg-[var(--background-muted)] rounded-md transition-colors"
              >
                Hoje
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
)
DatePicker.displayName = "DatePicker"

export { DatePicker }
