import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface TimePickerProps {
  value?: string // HH:mm format
  defaultValue?: string
  onChange?: (time: string) => void
  placeholder?: string
  disabled?: boolean
  error?: boolean
  minuteStep?: number
  className?: string
}

/**
 * TimePicker component following SmartSenior Design System
 *
 * Time selection with accessible controls
 */
const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  ({
    value,
    defaultValue,
    onChange,
    placeholder = 'Selecione um horário',
    disabled,
    error,
    minuteStep = 5,
    className,
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState(defaultValue || '')

    const selectedTime = value !== undefined ? value : internalValue

    const parseTime = (time: string) => {
      const [hours, minutes] = time.split(':').map(Number)
      return { hours: hours || 0, minutes: minutes || 0 }
    }

    const formatTime = (hours: number, minutes: number) => {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }

    const { hours, minutes } = selectedTime ? parseTime(selectedTime) : { hours: 12, minutes: 0 }

    const handleHourChange = (newHours: number) => {
      const time = formatTime(newHours, minutes)
      if (value === undefined) {
        setInternalValue(time)
      }
      onChange?.(time)
    }

    const handleMinuteChange = (newMinutes: number) => {
      const time = formatTime(hours, newMinutes)
      if (value === undefined) {
        setInternalValue(time)
      }
      onChange?.(time)
    }

    const hourOptions = Array.from({ length: 24 }, (_, i) => i)
    const minuteOptions = Array.from({ length: 60 / minuteStep }, (_, i) => i * minuteStep)

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
          <span className={selectedTime ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}>
            {selectedTime || placeholder}
          </span>
          <svg
            className="w-5 h-5 text-[var(--foreground-muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </button>

        {isOpen && (
          <div
            className={cn(
              "absolute z-50 mt-2 p-4",
              "bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg"
            )}
          >
            <div className="flex gap-4">
              {/* Hours */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[var(--foreground-muted)] mb-2 text-center">
                  Hora
                </span>
                <div className="h-48 overflow-y-auto scrollbar-thin">
                  {hourOptions.map((hour) => (
                    <button
                      key={hour}
                      type="button"
                      onClick={() => handleHourChange(hour)}
                      className={cn(
                        "w-12 py-2 text-base text-center rounded-md transition-colors",
                        "hover:bg-[var(--background-muted)]",
                        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
                        hour === hours
                          ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                          : "text-[var(--foreground)]"
                      )}
                    >
                      {hour.toString().padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-2xl font-bold text-[var(--foreground-muted)]">
                :
              </div>

              {/* Minutes */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[var(--foreground-muted)] mb-2 text-center">
                  Minuto
                </span>
                <div className="h-48 overflow-y-auto scrollbar-thin">
                  {minuteOptions.map((minute) => (
                    <button
                      key={minute}
                      type="button"
                      onClick={() => handleMinuteChange(minute)}
                      className={cn(
                        "w-12 py-2 text-base text-center rounded-md transition-colors",
                        "hover:bg-[var(--background-muted)]",
                        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
                        minute === minutes
                          ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                          : "text-[var(--foreground)]"
                      )}
                    >
                      {minute.toString().padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-[var(--border)] flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-base text-[var(--foreground-muted)] hover:bg-[var(--background-muted)] rounded-md transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  const time = formatTime(hours, minutes)
                  if (value === undefined) {
                    setInternalValue(time)
                  }
                  onChange?.(time)
                  setIsOpen(false)
                }}
                className="px-4 py-2 text-base bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:bg-[var(--primary-hover)] transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
)
TimePicker.displayName = "TimePicker"

export { TimePicker }
