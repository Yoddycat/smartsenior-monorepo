import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  siblingCount?: number
  className?: string
}

/**
 * Pagination component following SmartSenior Design System
 *
 * Page navigation with large touch targets
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  siblingCount = 1,
  className,
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }

  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3 // siblings + current + first + last
    const totalBlocks = totalNumbers + 2 // + 2 for ellipsis

    if (totalPages <= totalBlocks) {
      return range(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const showLeftDots = leftSiblingIndex > 2
    const showRightDots = rightSiblingIndex < totalPages - 1

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)
      return [...leftRange, '...', totalPages]
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPages - rightItemCount + 1, totalPages)
      return [1, '...', ...rightRange]
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [1, '...', ...middleRange, '...', totalPages]
  }

  const pages = getPageNumbers()

  const buttonClass = cn(
    "inline-flex items-center justify-center",
    "min-w-[44px] h-11 px-3",
    "text-base font-medium rounded-md",
    "transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
  )

  return (
    <nav
      role="navigation"
      aria-label="Paginação"
      className={cn("flex items-center justify-center gap-1", className)}
    >
      {/* First */}
      {showFirstLast && (
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={cn(
            buttonClass,
            "text-[var(--foreground-muted)] hover:bg-[var(--background-muted)]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          aria-label="Primeira página"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="11 17 6 12 11 7" />
            <polyline points="18 17 13 12 18 7" />
          </svg>
        </button>
      )}

      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          buttonClass,
          "text-[var(--foreground-muted)] hover:bg-[var(--background-muted)]",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        aria-label="Página anterior"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Pages */}
      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="min-w-[44px] h-11 flex items-center justify-center text-[var(--foreground-muted)]"
            >
              ...
            </span>
          )
        }

        const pageNumber = page as number
        const isActive = pageNumber === currentPage

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={cn(
              buttonClass,
              isActive
                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                : "text-[var(--foreground)] hover:bg-[var(--background-muted)]"
            )}
            aria-label={`Página ${pageNumber}`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNumber}
          </button>
        )
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          buttonClass,
          "text-[var(--foreground-muted)] hover:bg-[var(--background-muted)]",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        aria-label="Próxima página"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Last */}
      {showFirstLast && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={cn(
            buttonClass,
            "text-[var(--foreground-muted)] hover:bg-[var(--background-muted)]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          aria-label="Última página"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </button>
      )}
    </nav>
  )
}

Pagination.displayName = "Pagination"

export { Pagination }
