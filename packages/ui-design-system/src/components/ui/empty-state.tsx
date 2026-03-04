import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

/**
 * EmptyState component following SmartSenior Design System
 *
 * Placeholder for empty lists, search results, etc.
 */
const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: { icon: 'w-12 h-12', title: 'text-lg', description: 'text-sm', padding: 'p-6' },
      md: { icon: 'w-16 h-16', title: 'text-xl', description: 'text-base', padding: 'p-8' },
      lg: { icon: 'w-24 h-24', title: 'text-2xl', description: 'text-lg', padding: 'p-12' },
    }

    const sizes = sizeClasses[size]

    const defaultIcon = (
      <svg
        className={cn(sizes.icon, "text-[var(--foreground-muted)]")}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center",
          sizes.padding,
          className
        )}
        {...props}
      >
        <div className="mb-4">
          {icon || defaultIcon}
        </div>
        <h3
          className={cn(
            "font-semibold text-[var(--foreground)] mb-2",
            sizes.title
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              "text-[var(--foreground-muted)] max-w-md mb-6",
              sizes.description
            )}
          >
            {description}
          </p>
        )}
        {action && <div>{action}</div>}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"

// Common empty state presets
export const EmptyStateNoResults: React.FC<{ onReset?: () => void }> = ({ onReset }) => (
  <EmptyState
    icon={
      <svg className="w-16 h-16 text-[var(--foreground-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    }
    title="Nenhum resultado encontrado"
    description="Tente ajustar os filtros ou termos de busca."
    action={
      onReset && (
        <button
          onClick={onReset}
          className="px-4 py-2 text-base text-[var(--primary)] hover:underline"
        >
          Limpar filtros
        </button>
      )
    }
  />
)

export const EmptyStateNoData: React.FC<{ onCreate?: () => void; createLabel?: string }> = ({
  onCreate,
  createLabel = "Criar novo"
}) => (
  <EmptyState
    icon={
      <svg className="w-16 h-16 text-[var(--foreground-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    }
    title="Nenhum item ainda"
    description="Comece criando seu primeiro item."
    action={
      onCreate && (
        <button
          onClick={onCreate}
          className="px-6 py-2.5 text-base font-medium bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:bg-[var(--primary-hover)] transition-colors"
        >
          {createLabel}
        </button>
      )
    }
  />
)

export { EmptyState }
