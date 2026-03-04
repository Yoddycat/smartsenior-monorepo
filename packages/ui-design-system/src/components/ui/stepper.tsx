import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface StepperStep {
  label: string
  description?: string
  icon?: React.ReactNode
}

export interface StepperProps {
  steps: StepperStep[]
  currentStep: number
  orientation?: 'horizontal' | 'vertical'
  onStepClick?: (step: number) => void
  className?: string
}

/**
 * Stepper component following SmartSenior Design System
 *
 * Multi-step progress indicator
 */
const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  onStepClick,
  className,
}) => {
  return (
    <div
      className={cn(
        orientation === 'horizontal' ? "w-full" : "flex flex-col",
        className
      )}
    >
      <ol
        className={cn(
          "flex",
          orientation === 'horizontal' ? "items-center w-full" : "flex-col"
        )}
      >
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep
          const isClickable = onStepClick && (isCompleted || isCurrent)

          return (
            <li
              key={index}
              className={cn(
                orientation === 'horizontal'
                  ? "flex-1 flex items-center"
                  : "flex items-start",
                index !== steps.length - 1 && orientation === 'vertical' && "pb-8"
              )}
            >
              <div
                className={cn(
                  "flex items-center",
                  orientation === 'vertical' && "flex-col items-start"
                )}
              >
                {/* Step indicator */}
                <button
                  onClick={() => isClickable && onStepClick(stepNumber)}
                  disabled={!isClickable}
                  className={cn(
                    "relative flex items-center justify-center",
                    "w-10 h-10 rounded-full border-2",
                    "text-base font-semibold",
                    "transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2",
                    isCompleted && "bg-[var(--primary)] border-[var(--primary)] text-[var(--primary-foreground)]",
                    isCurrent && "border-[var(--primary)] text-[var(--primary)] bg-[var(--background)]",
                    !isCompleted && !isCurrent && "border-[var(--border)] text-[var(--foreground-muted)] bg-[var(--background)]",
                    isClickable && "cursor-pointer hover:scale-105",
                    !isClickable && "cursor-default"
                  )}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : step.icon ? (
                    step.icon
                  ) : (
                    stepNumber
                  )}
                </button>

                {/* Step content */}
                <div
                  className={cn(
                    orientation === 'horizontal' ? "ml-3 hidden sm:block" : "ml-4"
                  )}
                >
                  <p
                    className={cn(
                      "text-base font-medium",
                      isCurrent || isCompleted ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
                    )}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector line */}
              {index !== steps.length - 1 && (
                <div
                  className={cn(
                    orientation === 'horizontal'
                      ? "flex-1 mx-4 h-0.5"
                      : "absolute left-5 top-10 w-0.5 h-full -translate-x-1/2",
                    isCompleted ? "bg-[var(--primary)]" : "bg-[var(--border)]"
                  )}
                  style={orientation === 'vertical' ? { height: 'calc(100% - 2.5rem)' } : undefined}
                />
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

Stepper.displayName = "Stepper"

export { Stepper }
