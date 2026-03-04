import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// ============================================
// TYPOGRAPHY VARIANTS
// ============================================

const typographyVariants = {
  h1: "text-4xl md:text-5xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl font-bold tracking-tight",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-medium",
  h6: "text-base md:text-lg font-medium",
  body: "text-base leading-relaxed",
  "body-lg": "text-lg leading-relaxed",
  "body-sm": "text-sm leading-relaxed",
  caption: "text-xs leading-normal",
  overline: "text-xs uppercase tracking-widest font-medium",
  lead: "text-xl leading-relaxed text-[var(--foreground-muted)]",
} as const

type TypographyVariant = keyof typeof typographyVariants

// ============================================
// TYPOGRAPHY
// ============================================

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  as?: React.ElementType
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error' | 'info'
  align?: 'left' | 'center' | 'right' | 'justify'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  truncate?: boolean | number
  className?: string
  children?: React.ReactNode
}

const colorClasses = {
  default: "text-[var(--foreground)]",
  muted: "text-[var(--foreground-muted)]",
  primary: "text-[var(--primary)]",
  success: "text-[var(--success)]",
  warning: "text-[var(--warning)]",
  error: "text-[var(--error)]",
  info: "text-[var(--info)]",
}

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
}

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
}

const defaultElements: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  'body-lg': 'p',
  'body-sm': 'p',
  caption: 'span',
  overline: 'span',
  lead: 'p',
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body',
      as,
      color = 'default',
      align,
      weight,
      truncate = false,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const Component = as || defaultElements[variant]

    const truncateStyles: React.CSSProperties = truncate
      ? typeof truncate === 'number'
        ? {
            display: '-webkit-box',
            WebkitLineClamp: truncate,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }
        : {}
      : {}

    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants[variant],
          colorClasses[color],
          weight && weightClasses[weight],
          align && alignClasses[align],
          truncate === true && "truncate",
          className
        )}
        style={{ ...truncateStyles, ...style }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = "Typography"

// ============================================
// HEADING
// ============================================

export interface HeadingProps extends Omit<TypographyProps, 'variant'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, ...props }, ref) => {
    const variant = `h${level}` as TypographyVariant
    return <Typography ref={ref} variant={variant} {...props} />
  }
)

Heading.displayName = "Heading"

// ============================================
// TEXT
// ============================================

export interface TextProps extends Omit<TypographyProps, 'variant'> {
  size?: 'sm' | 'base' | 'lg'
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = 'base', ...props }, ref) => {
    const variant = size === 'sm' ? 'body-sm' : size === 'lg' ? 'body-lg' : 'body'
    return <Typography ref={ref} variant={variant} {...props} />
  }
)

Text.displayName = "Text"

// ============================================
// LABEL
// ============================================

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
  disabled?: boolean
  error?: boolean
  className?: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, disabled, error, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none",
          disabled ? "text-[var(--foreground-muted)] cursor-not-allowed" : "text-[var(--foreground)]",
          error && "text-[var(--error)]",
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-1 text-[var(--error)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
    )
  }
)

Label.displayName = "Label"

// ============================================
// CAPTION
// ============================================

export interface CaptionProps extends Omit<TypographyProps, 'variant'> {}

const Caption = React.forwardRef<HTMLSpanElement, CaptionProps>((props, ref) => {
  return <Typography ref={ref} variant="caption" color="muted" {...props} />
})

Caption.displayName = "Caption"

// ============================================
// HIGHLIGHT
// ============================================

export interface HighlightProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'mark' | 'code' | 'kbd'
  className?: string
}

const Highlight = React.forwardRef<HTMLElement, HighlightProps>(
  ({ variant = 'mark', className, children, ...props }, ref) => {
    if (variant === 'mark') {
      return (
        <mark
          ref={ref as React.Ref<HTMLElement>}
          className={cn(
            "bg-[var(--warning)] bg-opacity-30 text-[var(--foreground)] px-1 rounded",
            className
          )}
          {...props}
        >
          {children}
        </mark>
      )
    }

    if (variant === 'code') {
      return (
        <code
          ref={ref as React.Ref<HTMLElement>}
          className={cn(
            "bg-[var(--background-muted)] text-[var(--primary)] px-1.5 py-0.5 rounded text-sm font-mono",
            className
          )}
          {...props}
        >
          {children}
        </code>
      )
    }

    if (variant === 'kbd') {
      return (
        <kbd
          ref={ref as React.Ref<HTMLElement>}
          className={cn(
            "inline-flex items-center justify-center px-2 py-1 text-xs font-medium",
            "bg-[var(--background-muted)] text-[var(--foreground)]",
            "border border-[var(--border)] rounded shadow-sm",
            "font-mono",
            className
          )}
          {...props}
        >
          {children}
        </kbd>
      )
    }

    return null
  }
)

Highlight.displayName = "Highlight"

// ============================================
// BLOCKQUOTE
// ============================================

export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  cite?: string
  author?: string
  className?: string
}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ cite, author, className, children, ...props }, ref) => {
    return (
      <figure className={cn("my-4", className)}>
        <blockquote
          ref={ref}
          cite={cite}
          className={cn(
            "border-l-4 border-[var(--primary)] pl-4 py-2",
            "text-lg italic text-[var(--foreground)]"
          )}
          {...props}
        >
          {children}
        </blockquote>
        {author && (
          <figcaption className="mt-2 text-sm text-[var(--foreground-muted)]">
            — {author}
          </figcaption>
        )}
      </figure>
    )
  }
)

Blockquote.displayName = "Blockquote"

// ============================================
// GRADIENT TEXT
// ============================================

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string
  via?: string
  to?: string
  direction?: 'left' | 'right' | 'top' | 'bottom'
  className?: string
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  (
    {
      from = 'var(--primary)',
      via,
      to = 'var(--accent)',
      direction = 'right',
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const directionMap = {
      left: 'to left',
      right: 'to right',
      top: 'to top',
      bottom: 'to bottom',
    }

    const gradient = via
      ? `linear-gradient(${directionMap[direction]}, ${from}, ${via}, ${to})`
      : `linear-gradient(${directionMap[direction]}, ${from}, ${to})`

    return (
      <span
        ref={ref}
        className={cn("bg-clip-text text-transparent font-bold", className)}
        style={{
          backgroundImage: gradient,
          ...style,
        }}
        {...props}
      >
        {children}
      </span>
    )
  }
)

GradientText.displayName = "GradientText"

// ============================================
// PROSE (for rich text content)
// ============================================

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'base' | 'lg'
  className?: string
}

const Prose = React.forwardRef<HTMLDivElement, ProseProps>(
  ({ size = 'base', className, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "prose-sm",
      base: "prose-base",
      lg: "prose-lg",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "prose max-w-none",
          sizeClasses[size],
          // Custom prose styling
          "[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-[var(--foreground)]",
          "[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:text-[var(--foreground)]",
          "[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:text-[var(--foreground)]",
          "[&_p]:mb-4 [&_p]:text-[var(--foreground)] [&_p]:leading-relaxed",
          "[&_a]:text-[var(--primary)] [&_a]:underline [&_a]:hover:text-[var(--primary-hover)]",
          "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4",
          "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4",
          "[&_li]:mb-1 [&_li]:text-[var(--foreground)]",
          "[&_blockquote]:border-l-4 [&_blockquote]:border-[var(--primary)] [&_blockquote]:pl-4 [&_blockquote]:italic",
          "[&_code]:bg-[var(--background-muted)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm",
          "[&_pre]:bg-[var(--background-muted)] [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto",
          "[&_hr]:border-[var(--border)] [&_hr]:my-6",
          "[&_img]:rounded-lg [&_img]:my-4",
          "[&_table]:w-full [&_table]:border-collapse",
          "[&_th]:border [&_th]:border-[var(--border)] [&_th]:p-2 [&_th]:bg-[var(--background-muted)]",
          "[&_td]:border [&_td]:border-[var(--border)] [&_td]:p-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Prose.displayName = "Prose"

// ============================================
// EXPORTS
// ============================================

export {
  Typography,
  Heading,
  Text,
  Label,
  Caption,
  Highlight,
  Blockquote,
  GradientText,
  Prose,
  typographyVariants,
}
