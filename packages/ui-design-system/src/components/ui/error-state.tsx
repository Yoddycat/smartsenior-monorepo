import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  error?: Error | string
  showDetails?: boolean
  onRetry?: () => void
  retryLabel?: string
  onBack?: () => void
  backLabel?: string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * ErrorState component following SmartSenior Design System
 *
 * Error display with retry action
 */
const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  ({
    className,
    title = "Ocorreu um erro",
    description = "Algo deu errado. Por favor, tente novamente.",
    error,
    showDetails = false,
    onRetry,
    retryLabel = "Tentar novamente",
    onBack,
    backLabel = "Voltar",
    size = 'md',
    ...props
  }, ref) => {
    const [isDetailsOpen, setIsDetailsOpen] = React.useState(false)

    const sizeClasses = {
      sm: { icon: 'w-12 h-12', title: 'text-lg', description: 'text-sm', padding: 'p-6' },
      md: { icon: 'w-16 h-16', title: 'text-xl', description: 'text-base', padding: 'p-8' },
      lg: { icon: 'w-24 h-24', title: 'text-2xl', description: 'text-lg', padding: 'p-12' },
    }

    const sizes = sizeClasses[size]
    const errorMessage = error instanceof Error ? error.message : error

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
          <svg
            className={cn(sizes.icon, "text-[var(--error)]")}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h3
          className={cn(
            "font-semibold text-[var(--foreground)] mb-2",
            sizes.title
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-[var(--foreground-muted)] max-w-md mb-6",
            sizes.description
          )}
        >
          {description}
        </p>

        {showDetails && errorMessage && (
          <div className="w-full max-w-md mb-6">
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            >
              <svg
                className={cn("w-4 h-4 transition-transform", isDetailsOpen && "rotate-90")}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              Ver detalhes do erro
            </button>
            {isDetailsOpen && (
              <pre className="mt-2 p-4 text-left text-sm bg-[var(--background-muted)] rounded-md overflow-auto">
                {errorMessage}
              </pre>
            )}
          </div>
        )}

        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="px-6 py-2.5 text-base font-medium border border-[var(--border)] rounded-md hover:bg-[var(--background-muted)] transition-colors"
            >
              {backLabel}
            </button>
          )}
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-2.5 text-base font-medium bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:bg-[var(--primary-hover)] transition-colors"
            >
              {retryLabel}
            </button>
          )}
        </div>
      </div>
    )
  }
)
ErrorState.displayName = "ErrorState"

// 404 Not Found preset
export const NotFoundState: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <ErrorState
    title="Página não encontrada"
    description="A página que você está procurando não existe ou foi movida."
    onBack={onBack}
    backLabel="Voltar ao início"
    size="lg"
  />
)

// 500 Server Error preset
export const ServerErrorState: React.FC<{ onRetry?: () => void }> = ({ onRetry }) => (
  <ErrorState
    title="Erro do servidor"
    description="Nossos servidores estão com problemas. Por favor, tente novamente em alguns minutos."
    onRetry={onRetry}
    size="lg"
  />
)

// Network Error preset
export const NetworkErrorState: React.FC<{ onRetry?: () => void }> = ({ onRetry }) => (
  <ErrorState
    title="Sem conexão"
    description="Verifique sua conexão com a internet e tente novamente."
    onRetry={onRetry}
    size="lg"
  />
)

export { ErrorState }
