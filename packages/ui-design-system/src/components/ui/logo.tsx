import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface LogoProps extends React.SVGAttributes<SVGElement> {
  variant?: 'full' | 'icon' | 'wordmark'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'default' | 'white' | 'primary' | 'mono'
  animated?: boolean
  className?: string
}

const sizes = {
  xs: { icon: 24, full: 100, wordmark: 80 },
  sm: { icon: 32, full: 120, wordmark: 96 },
  md: { icon: 40, full: 160, wordmark: 128 },
  lg: { icon: 48, full: 200, wordmark: 160 },
  xl: { icon: 64, full: 240, wordmark: 192 },
  '2xl': { icon: 80, full: 300, wordmark: 240 },
}

/**
 * SmartSenior Logo Component
 *
 * Variants:
 * - full: Icon + wordmark (horizontal)
 * - icon: Icon only (heart with hand)
 * - wordmark: Text only
 */
const Logo = React.forwardRef<SVGSVGElement, LogoProps>(
  (
    {
      variant = 'full',
      size = 'md',
      color = 'default',
      animated = false,
      className,
      ...props
    },
    ref
  ) => {
    const dimensions = sizes[size]

    const colorMap = {
      default: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        text: 'var(--foreground)',
      },
      white: {
        primary: '#ffffff',
        accent: '#ffffff',
        text: '#ffffff',
      },
      primary: {
        primary: 'var(--primary)',
        accent: 'var(--primary)',
        text: 'var(--primary)',
      },
      mono: {
        primary: 'currentColor',
        accent: 'currentColor',
        text: 'currentColor',
      },
    }

    const colors = colorMap[color]

    // Icon - Heart with caring hand
    const IconSVG = () => (
      <svg
        ref={ref}
        viewBox="0 0 48 48"
        width={dimensions.icon}
        height={dimensions.icon}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          animated && "transition-transform hover:scale-105",
          className
        )}
        aria-label="SmartSenior"
        role="img"
        {...props}
      >
        {/* Heart shape */}
        <path
          d="M24 42C24 42 6 30 6 18C6 12 10.5 7 16.5 7C20.5 7 23 9.5 24 11C25 9.5 27.5 7 31.5 7C37.5 7 42 12 42 18C42 30 24 42 24 42Z"
          fill={colors.primary}
          className={animated ? "transition-colors duration-300" : ""}
        />
        {/* Caring hand */}
        <path
          d="M18 24C18 24 20 22 24 22C28 22 30 24 30 24"
          stroke={colors.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M15 28C15 28 18 26 24 26C30 26 33 28 33 28"
          stroke={colors.accent}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Plus/cross symbol for healthcare */}
        <path
          d="M24 14V20M21 17H27"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )

    // Wordmark - SmartSenior text
    const WordmarkSVG = () => (
      <svg
        ref={ref}
        viewBox="0 0 200 40"
        width={dimensions.wordmark}
        height={dimensions.wordmark * 0.2}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          animated && "transition-transform hover:scale-105",
          className
        )}
        aria-label="SmartSenior"
        role="img"
        {...props}
      >
        <text
          x="0"
          y="30"
          fontFamily="var(--font-family-inter, 'Inter', sans-serif)"
          fontSize="28"
          fontWeight="700"
          fill={colors.text}
        >
          <tspan fill={colors.primary}>Smart</tspan>
          <tspan fill={colors.accent}>Senior</tspan>
        </text>
      </svg>
    )

    // Full logo - Icon + Wordmark
    const FullSVG = () => (
      <svg
        ref={ref}
        viewBox="0 0 260 48"
        width={dimensions.full}
        height={dimensions.full * 0.185}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          animated && "transition-transform hover:scale-105",
          className
        )}
        aria-label="SmartSenior"
        role="img"
        {...props}
      >
        {/* Heart icon */}
        <g transform="translate(0, 0)">
          <path
            d="M24 42C24 42 6 30 6 18C6 12 10.5 7 16.5 7C20.5 7 23 9.5 24 11C25 9.5 27.5 7 31.5 7C37.5 7 42 12 42 18C42 30 24 42 24 42Z"
            fill={colors.primary}
          />
          <path
            d="M18 24C18 24 20 22 24 22C28 22 30 24 30 24"
            stroke={colors.accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M15 28C15 28 18 26 24 26C30 26 33 28 33 28"
            stroke={colors.accent}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M24 14V20M21 17H27"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        {/* Wordmark */}
        <text
          x="56"
          y="34"
          fontFamily="var(--font-family-inter, 'Inter', sans-serif)"
          fontSize="28"
          fontWeight="700"
        >
          <tspan fill={colors.primary}>Smart</tspan>
          <tspan fill={colors.accent}>Senior</tspan>
        </text>
      </svg>
    )

    if (variant === 'icon') return <IconSVG />
    if (variant === 'wordmark') return <WordmarkSVG />
    return <FullSVG />
  }
)

Logo.displayName = "Logo"

// Convenience exports
const LogoIcon = React.forwardRef<SVGSVGElement, Omit<LogoProps, 'variant'>>(
  (props, ref) => <Logo ref={ref} variant="icon" {...props} />
)
LogoIcon.displayName = "LogoIcon"

const LogoWordmark = React.forwardRef<SVGSVGElement, Omit<LogoProps, 'variant'>>(
  (props, ref) => <Logo ref={ref} variant="wordmark" {...props} />
)
LogoWordmark.displayName = "LogoWordmark"

const LogoFull = React.forwardRef<SVGSVGElement, Omit<LogoProps, 'variant'>>(
  (props, ref) => <Logo ref={ref} variant="full" {...props} />
)
LogoFull.displayName = "LogoFull"

export { Logo, LogoIcon, LogoWordmark, LogoFull }
