import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface CalendarProps {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date) => void
  onMonthChange?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[]
  highlightedDates?: Date[]
  showOutsideDays?: boolean
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  locale?: string
  className?: string
}

const DAYS_PT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const DAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS_PT = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/**
 * Calendar component following SmartSenior Design System
 *
 * Accessible calendar with navigation and date selection
 */
const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue,
  onChange,
  onMonthChange,
  minDate,
  maxDate,
  disabledDates = [],
  highlightedDates = [],
  showOutsideDays = true,
  weekStartsOn = 0,
  locale = 'pt-BR',
  className,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value || defaultValue)
  const [viewDate, setViewDate] = React.useState<Date>(value || defaultValue || new Date())

  const isPt = locale.startsWith('pt')
  const DAYS = isPt ? DAYS_PT : DAYS_EN
  const MONTHS = isPt ? MONTHS_PT : MONTHS_EN

  // Reorder days based on weekStartsOn
  const orderedDays = [...DAYS.slice(weekStartsOn), ...DAYS.slice(0, weekStartsOn)]

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value)
      setViewDate(value)
    }
  }, [value])

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return (day - weekStartsOn + 7) % 7
  }

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }

  const isToday = (date: Date) => {
    return isSameDay(date, new Date())
  }

  const isDisabled = (date: Date) => {
    if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) return true
    if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))) return true
    return disabledDates.some((d) => isSameDay(d, date))
  }

  const isHighlighted = (date: Date) => {
    return highlightedDates.some((d) => isSameDay(d, date))
  }

  const isSelected = (date: Date) => {
    return selectedDate ? isSameDay(date, selectedDate) : false
  }

  const handlePrevMonth = () => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
    setViewDate(newDate)
    onMonthChange?.(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)
    setViewDate(newDate)
    onMonthChange?.(newDate)
  }

  const handleDateClick = (date: Date) => {
    if (isDisabled(date)) return
    setSelectedDate(date)
    onChange?.(date)
  }

  const handleKeyDown = (e: React.KeyboardEvent, date: Date) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleDateClick(date)
    }
  }

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(viewDate)
    const firstDay = getFirstDayOfMonth(viewDate)
    const prevMonthDays = getDaysInMonth(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))

    const days: React.ReactNode[] = []

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      const date = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, day)

      if (showOutsideDays) {
        days.push(
          <button
            key={`prev-${day}`}
            type="button"
            onClick={() => handleDateClick(date)}
            onKeyDown={(e) => handleKeyDown(e, date)}
            disabled={isDisabled(date)}
            className={cn(
              "h-11 w-11 rounded-lg text-sm font-medium transition-colors",
              "text-[var(--foreground-muted)] opacity-50",
              "hover:bg-[var(--background-muted)]",
              "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-30"
            )}
          >
            {day}
          </button>
        )
      } else {
        days.push(<div key={`prev-${day}`} className="h-11 w-11" />)
      }
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
      const disabled = isDisabled(date)
      const selected = isSelected(date)
      const today = isToday(date)
      const highlighted = isHighlighted(date)

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateClick(date)}
          onKeyDown={(e) => handleKeyDown(e, date)}
          disabled={disabled}
          aria-selected={selected}
          aria-current={today ? 'date' : undefined}
          className={cn(
            "h-11 w-11 rounded-lg text-sm font-medium transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-30",
            selected && "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",
            !selected && today && "border-2 border-[var(--primary)] text-[var(--primary)]",
            !selected && !today && highlighted && "bg-[var(--accent)] text-[var(--accent-foreground)]",
            !selected && !today && !highlighted && "text-[var(--foreground)] hover:bg-[var(--background-muted)]"
          )}
        >
          {day}
        </button>
      )
    }

    // Next month days
    const remainingDays = 42 - days.length // 6 rows * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, day)

      if (showOutsideDays) {
        days.push(
          <button
            key={`next-${day}`}
            type="button"
            onClick={() => handleDateClick(date)}
            onKeyDown={(e) => handleKeyDown(e, date)}
            disabled={isDisabled(date)}
            className={cn(
              "h-11 w-11 rounded-lg text-sm font-medium transition-colors",
              "text-[var(--foreground-muted)] opacity-50",
              "hover:bg-[var(--background-muted)]",
              "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-30"
            )}
          >
            {day}
          </button>
        )
      } else {
        days.push(<div key={`next-${day}`} className="h-11 w-11" />)
      }
    }

    return days
  }

  return (
    <div
      className={cn(
        "p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-sm",
        className
      )}
      role="application"
      aria-label="Calendar"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={handlePrevMonth}
          className={cn(
            "h-10 w-10 rounded-lg flex items-center justify-center",
            "text-[var(--foreground)] hover:bg-[var(--background-muted)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
            "transition-colors"
          )}
          aria-label={isPt ? "Mês anterior" : "Previous month"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
        </h2>

        <button
          type="button"
          onClick={handleNextMonth}
          className={cn(
            "h-10 w-10 rounded-lg flex items-center justify-center",
            "text-[var(--foreground)] hover:bg-[var(--background-muted)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
            "transition-colors"
          )}
          aria-label={isPt ? "Próximo mês" : "Next month"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {orderedDays.map((day) => (
          <div
            key={day}
            className="h-10 w-11 flex items-center justify-center text-sm font-medium text-[var(--foreground-muted)]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1" role="grid">
        {renderDays()}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
