/**
 * SmartSenior Design System - Token Exports
 *
 * Typed token accessors for JavaScript/TypeScript usage.
 * All values reference CSS custom properties for runtime theming.
 */

// =============================================================================
// PRIMITIVE TOKENS (Layer 1)
// =============================================================================

export const primitiveColors = {
  // Azuis Institucionais
  blue900: "var(--color-blue-900)",
  blue700: "var(--color-blue-700)",

  // Cianos e Verdes
  cyan500: "var(--color-cyan-500)",
  teal800: "var(--color-teal-800)",
  teal500: "var(--color-teal-500)",

  // Laranjas e Amarelos
  orange600: "var(--color-orange-600)",
  orange500: "var(--color-orange-500)",
  orange400: "var(--color-orange-400)",
  amber400: "var(--color-amber-400)",
  yellow400: "var(--color-yellow-400)",

  // Neutros
  white: "var(--color-white)",
  gray50: "var(--color-gray-50)",
  gray100: "var(--color-gray-100)",
  gray200: "var(--color-gray-200)",
  gray300: "var(--color-gray-300)",
  gray400: "var(--color-gray-400)",
  gray500: "var(--color-gray-500)",
  gray600: "var(--color-gray-600)",
  gray700: "var(--color-gray-700)",
  gray800: "var(--color-gray-800)",
  gray900: "var(--color-gray-900)",
  black: "var(--color-black)",
} as const;

export const primitiveFontFamily = {
  heading: "var(--font-family-heading)",
  body: "var(--font-family-body)",
  mono: "var(--font-family-mono)",
} as const;

export const primitiveFontSize = {
  xs: "var(--font-size-xs)",
  sm: "var(--font-size-sm)",
  base: "var(--font-size-base)",
  lg: "var(--font-size-lg)",
  xl: "var(--font-size-xl)",
  "2xl": "var(--font-size-2xl)",
  "3xl": "var(--font-size-3xl)",
  "4xl": "var(--font-size-4xl)",
  "5xl": "var(--font-size-5xl)",
  "6xl": "var(--font-size-6xl)",
} as const;

export const primitiveFontWeight = {
  normal: "var(--font-weight-normal)",
  medium: "var(--font-weight-medium)",
  semibold: "var(--font-weight-semibold)",
  bold: "var(--font-weight-bold)",
  extrabold: "var(--font-weight-extrabold)",
} as const;

export const primitiveLineHeight = {
  tight: "var(--line-height-tight)",
  snug: "var(--line-height-snug)",
  normal: "var(--line-height-normal)",
  relaxed: "var(--line-height-relaxed)",
  loose: "var(--line-height-loose)",
} as const;

export const primitiveSpacing = {
  0: "var(--spacing-0)",
  px: "var(--spacing-px)",
  0.5: "var(--spacing-0\\.5)",
  1: "var(--spacing-1)",
  1.5: "var(--spacing-1\\.5)",
  2: "var(--spacing-2)",
  2.5: "var(--spacing-2\\.5)",
  3: "var(--spacing-3)",
  3.5: "var(--spacing-3\\.5)",
  4: "var(--spacing-4)",
  5: "var(--spacing-5)",
  6: "var(--spacing-6)",
  7: "var(--spacing-7)",
  8: "var(--spacing-8)",
  9: "var(--spacing-9)",
  10: "var(--spacing-10)",
  11: "var(--spacing-11)",
  12: "var(--spacing-12)",
  14: "var(--spacing-14)",
  16: "var(--spacing-16)",
  20: "var(--spacing-20)",
  24: "var(--spacing-24)",
} as const;

export const primitiveRadius = {
  none: "var(--radius-none)",
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "var(--radius-full)",
} as const;

export const primitiveShadow = {
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  xl: "var(--shadow-xl)",
} as const;

export const primitiveZIndex = {
  hide: "var(--z-index-hide)",
  base: "var(--z-index-base)",
  dropdown: "var(--z-index-dropdown)",
  sticky: "var(--z-index-sticky)",
  fixed: "var(--z-index-fixed)",
  drawer: "var(--z-index-drawer)",
  modal: "var(--z-index-modal)",
  popover: "var(--z-index-popover)",
  toast: "var(--z-index-toast)",
  tooltip: "var(--z-index-tooltip)",
  max: "var(--z-index-max)",
} as const;

export const primitiveBreakpoint = {
  xs: "var(--breakpoint-xs)",
  sm: "var(--breakpoint-sm)",
  md: "var(--breakpoint-md)",
  lg: "var(--breakpoint-lg)",
  xl: "var(--breakpoint-xl)",
  "2xl": "var(--breakpoint-2xl)",
} as const;

export const primitiveTransition = {
  duration: {
    instant: "var(--transition-instant)",
    fast: "var(--transition-fast)",
    normal: "var(--transition-normal)",
    slow: "var(--transition-slow)",
    slower: "var(--transition-slower)",
  },
  easing: {
    default: "var(--ease-default)",
    in: "var(--ease-in)",
    out: "var(--ease-out)",
    inOut: "var(--ease-in-out)",
    linear: "var(--ease-linear)",
  },
} as const;

export const primitiveOpacity = {
  0: "var(--opacity-0)",
  5: "var(--opacity-5)",
  10: "var(--opacity-10)",
  20: "var(--opacity-20)",
  30: "var(--opacity-30)",
  40: "var(--opacity-40)",
  50: "var(--opacity-50)",
  60: "var(--opacity-60)",
  70: "var(--opacity-70)",
  80: "var(--opacity-80)",
  90: "var(--opacity-90)",
  100: "var(--opacity-100)",
  disabled: "var(--opacity-disabled)",
  hover: "var(--opacity-hover)",
} as const;

export const primitiveBorderWidth = {
  0: "var(--border-width-0)",
  1: "var(--border-width-1)",
  2: "var(--border-width-2)",
  4: "var(--border-width-4)",
  8: "var(--border-width-8)",
} as const;

// =============================================================================
// SEMANTIC TOKENS (Layer 2)
// =============================================================================

export const semanticColors = {
  // Backgrounds
  background: "var(--background)",
  backgroundSubtle: "var(--background-subtle)",
  backgroundMuted: "var(--background-muted)",
  backgroundEmphasis: "var(--background-emphasis)",

  // Foreground (Text)
  foreground: "var(--foreground)",
  foregroundMuted: "var(--foreground-muted)",
  foregroundSubtle: "var(--foreground-subtle)",
  foregroundInverse: "var(--foreground-inverse)",

  // Primary
  primary: "var(--primary)",
  primaryHover: "var(--primary-hover)",
  primaryForeground: "var(--primary-foreground)",

  // Accent (CTA)
  accent: "var(--accent)",
  accentHover: "var(--accent-hover)",
  accentForeground: "var(--accent-foreground)",

  // Semantic States
  success: "var(--success)",
  successForeground: "var(--success-foreground)",
  warning: "var(--warning)",
  warningForeground: "var(--warning-foreground)",
  error: "var(--error)",
  errorForeground: "var(--error-foreground)",
  info: "var(--info)",
  infoForeground: "var(--info-foreground)",

  // Borders
  border: "var(--border)",
  borderMuted: "var(--border-muted)",
  borderEmphasis: "var(--border-emphasis)",

  // Focus
  focusRing: "var(--focus-ring)",
  focusRingOffset: "var(--focus-ring-offset)",
} as const;

// =============================================================================
// COMPONENT TOKENS (Layer 3)
// =============================================================================

export const buttonTokens = {
  variants: {
    primary: {
      background: "var(--primary)",
      backgroundHover: "var(--primary-hover)",
      foreground: "var(--primary-foreground)",
    },
    secondary: {
      background: "var(--background-subtle)",
      backgroundHover: "var(--background-muted)",
      foreground: "var(--foreground)",
    },
    accent: {
      background: "var(--accent)",
      backgroundHover: "var(--accent-hover)",
      foreground: "var(--accent-foreground)",
    },
    destructive: {
      background: "var(--error)",
      backgroundHover: "oklch(0.48 0.22 25)",
      foreground: "var(--error-foreground)",
    },
    ghost: {
      background: "transparent",
      backgroundHover: "var(--background-muted)",
      foreground: "var(--foreground)",
    },
    outline: {
      background: "transparent",
      backgroundHover: "var(--background-subtle)",
      foreground: "var(--primary)",
    },
  },
  sizes: {
    sm: {
      height: "var(--spacing-10)",
      paddingX: "var(--spacing-4)",
      fontSize: "var(--font-size-sm)",
    },
    md: {
      height: "var(--spacing-12)",
      paddingX: "var(--spacing-6)",
      fontSize: "var(--font-size-base)",
    },
    lg: {
      height: "var(--spacing-14)",
      paddingX: "var(--spacing-8)",
      fontSize: "var(--font-size-lg)",
    },
  },
} as const;

export const inputTokens = {
  background: "var(--input-background)",
  foreground: "var(--foreground)",
  border: "var(--input-border)",
  borderFocus: "var(--primary)",
  placeholder: "var(--foreground-subtle)",
  height: "var(--spacing-12)",
  paddingX: "var(--spacing-4)",
  radius: "var(--radius-md)",
} as const;

export const cardTokens = {
  background: "var(--card-background)",
  foreground: "var(--card-foreground)",
  border: "var(--border)",
  radius: "var(--radius-lg)",
  padding: "var(--spacing-6)",
  shadow: "var(--shadow-md)",
} as const;

// =============================================================================
// COMBINED EXPORT
// =============================================================================

export const tokens = {
  primitive: {
    color: primitiveColors,
    fontFamily: primitiveFontFamily,
    fontSize: primitiveFontSize,
    fontWeight: primitiveFontWeight,
    lineHeight: primitiveLineHeight,
    spacing: primitiveSpacing,
    radius: primitiveRadius,
    shadow: primitiveShadow,
    zIndex: primitiveZIndex,
    breakpoint: primitiveBreakpoint,
    transition: primitiveTransition,
    opacity: primitiveOpacity,
    borderWidth: primitiveBorderWidth,
  },
  semantic: {
    color: semanticColors,
  },
  component: {
    button: buttonTokens,
    input: inputTokens,
    card: cardTokens,
  },
} as const;

export type Tokens = typeof tokens;
export type PrimitiveColors = keyof typeof primitiveColors;
export type SemanticColors = keyof typeof semanticColors;
export type ButtonVariant = keyof typeof buttonTokens.variants;
export type ButtonSize = keyof typeof buttonTokens.sizes;
export type ZIndex = keyof typeof primitiveZIndex;
export type Breakpoint = keyof typeof primitiveBreakpoint;
export type TransitionDuration = keyof typeof primitiveTransition.duration;
export type TransitionEasing = keyof typeof primitiveTransition.easing;
export type Opacity = keyof typeof primitiveOpacity;
export type BorderWidth = keyof typeof primitiveBorderWidth;
