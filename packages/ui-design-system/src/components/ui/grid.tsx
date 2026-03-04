import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
}

/**
 * Grid component following SmartSenior Design System
 *
 * CSS Grid layout helper
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 'md', responsive = true, ...props }, ref) => {
    const colClasses = {
      1: 'grid-cols-1',
      2: responsive ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2',
      3: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
      4: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4',
      5: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'grid-cols-5',
      6: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6' : 'grid-cols-6',
      12: responsive ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12' : 'grid-cols-12',
    }

    const gapClasses = {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          colClasses[cols],
          gapClasses[gap],
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'full'
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, colSpan, rowSpan, ...props }, ref) => {
    const colSpanClasses = {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      12: 'col-span-12',
      full: 'col-span-full',
    }

    const rowSpanClasses = {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
    }

    return (
      <div
        ref={ref}
        className={cn(
          colSpan && colSpanClasses[colSpan],
          rowSpan && rowSpanClasses[rowSpan],
          className
        )}
        {...props}
      />
    )
  }
)
GridItem.displayName = "GridItem"

export { Grid, GridItem }
