import * as React from "react"

// Import logo images
import logoVerticalGradient from '../../assets/logo/PNG_transparente/AF_fenix_curvas_SS_logoV_degrade.png'
import logoVerticalOrange from '../../assets/logo/PNG_transparente/AF_fenix_curvas_AA_logoV_laranja.png'
import logoVerticalWhite from '../../assets/logo/PNG_transparente/AF_fenix_curvas_AA_logoV_negativo.png'
import logoVerticalBlack from '../../assets/logo/PNG_transparente/AF_fenix_curvas_AA_logoV_PB.png'

import logoHorizontalGradient from '../../assets/logo/PNG_transparente/AF_fenix_curvas_SS_logoH_degrade.png'
import logoHorizontalOrange from '../../assets/logo/PNG_transparente/AF_fenix_curvas_SS_logoH_laranja.png'
import logoHorizontalWhite from '../../assets/logo/PNG_transparente/AF_fenix_curvas_SS_logoH_negativo.png'
import logoHorizontalBlack from '../../assets/logo/PNG_transparente/AF_fenix_curvas_SS_logoH_PB.png'

import logoIconGradientLarge from '../../assets/logo/PNG_transparente/AF.png'

import faviconGradient from '../../assets/logo/FAVICON/SS_icone_degradefavicon.png'
import faviconOrange from '../../assets/logo/FAVICON/SS_icone_laranjafavicon.png'
import faviconWhite from '../../assets/logo/FAVICON/SS_icone_negativofavicon.png'
import faviconBlueBg from '../../assets/logo/FAVICON/SS_icone_blueBGfavicon.png'

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Logo layout variant */
  variant?: 'vertical' | 'horizontal' | 'icon' | 'favicon'
  /** Logo size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /** Logo color scheme */
  color?: 'gradient' | 'orange' | 'white' | 'black'
  /** Additional CSS classes */
  className?: string
}

const sizeMap = {
  vertical: {
    xs: { height: 48 },
    sm: { height: 64 },
    md: { height: 80 },
    lg: { height: 120 },
    xl: { height: 160 },
    '2xl': { height: 200 },
  },
  horizontal: {
    xs: { height: 24 },
    sm: { height: 32 },
    md: { height: 40 },
    lg: { height: 56 },
    xl: { height: 72 },
    '2xl': { height: 96 },
  },
  icon: {
    xs: { height: 24, width: 24 },
    sm: { height: 32, width: 32 },
    md: { height: 40, width: 40 },
    lg: { height: 56, width: 56 },
    xl: { height: 72, width: 72 },
    '2xl': { height: 96, width: 96 },
  },
  favicon: {
    xs: { height: 16, width: 16 },
    sm: { height: 24, width: 24 },
    md: { height: 32, width: 32 },
    lg: { height: 48, width: 48 },
    xl: { height: 64, width: 64 },
    '2xl': { height: 96, width: 96 },
  },
}

const logoSources = {
  vertical: {
    gradient: logoVerticalGradient,
    orange: logoVerticalOrange,
    white: logoVerticalWhite,
    black: logoVerticalBlack,
  },
  horizontal: {
    gradient: logoHorizontalGradient,
    orange: logoHorizontalOrange,
    white: logoHorizontalWhite,
    black: logoHorizontalBlack,
  },
  icon: {
    gradient: logoIconGradientLarge,
    orange: logoIconGradientLarge, // Using gradient as fallback
    white: logoIconGradientLarge,
    black: logoIconGradientLarge,
  },
  favicon: {
    gradient: faviconGradient,
    orange: faviconOrange,
    white: faviconWhite,
    black: faviconBlueBg, // Using blue bg as "dark" variant
  },
}

/**
 * SmartSenior Logo Component
 *
 * Uses the official SmartSenior phoenix (fênix) brand identity.
 *
 * Variants:
 * - vertical: Full logo with phoenix icon above "SmartSenior" text
 * - horizontal: Phoenix icon beside "SmartSenior" text
 * - icon: Phoenix icon only
 * - favicon: Small favicon version
 *
 * Colors:
 * - gradient: Orange to yellow gradient (default brand color)
 * - orange: Solid orange
 * - white: White/negative (for dark backgrounds)
 * - black: Black/grayscale
 */
const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  (
    {
      variant = 'horizontal',
      size = 'md',
      color = 'gradient',
      className,
      alt = 'SmartSenior',
      ...props
    },
    ref
  ) => {
    const dimensions = sizeMap[variant][size]
    const src = logoSources[variant][color]

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(
          "object-contain",
          className
        )}
        style={{
          height: dimensions.height,
          width: 'width' in dimensions ? dimensions.width : 'auto',
          ...props.style,
        }}
        {...props}
      />
    )
  }
)

Logo.displayName = "Logo"

// Convenience exports for specific variants
const LogoIcon = React.forwardRef<HTMLImageElement, Omit<LogoProps, 'variant'>>(
  (props, ref) => <Logo ref={ref} variant="icon" {...props} />
)
LogoIcon.displayName = "LogoIcon"

const LogoVertical = React.forwardRef<HTMLImageElement, Omit<LogoProps, 'variant'>>(
  (props, ref) => <Logo ref={ref} variant="vertical" {...props} />
)
LogoVertical.displayName = "LogoVertical"

const LogoHorizontal = React.forwardRef<HTMLImageElement, Omit<LogoProps, 'variant'>>(
  (props, ref) => <Logo ref={ref} variant="horizontal" {...props} />
)
LogoHorizontal.displayName = "LogoHorizontal"

const LogoFavicon = React.forwardRef<HTMLImageElement, Omit<LogoProps, 'variant'>>(
  (props, ref) => <Logo ref={ref} variant="favicon" {...props} />
)
LogoFavicon.displayName = "LogoFavicon"

export { Logo, LogoIcon, LogoVertical, LogoHorizontal, LogoFavicon }
