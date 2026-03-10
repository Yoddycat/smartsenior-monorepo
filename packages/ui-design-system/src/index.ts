/**
 * SmartSenior Design System
 *
 * A design system focused on accessibility and clarity for senior users.
 * Built with Tailwind CSS v4, shadcn/ui patterns, and OKLCH color space.
 *
 * @packageDocumentation
 */

// Utilities
export { cn, getCssVar, setCssVar, toggleTheme, initializeTheme, isDarkMode, generateId, spacing, colors } from "./lib/utils";

// Tokens (typed exports)
export {
  tokens,
  primitiveColors,
  primitiveFontFamily,
  primitiveFontSize,
  primitiveFontWeight,
  primitiveLineHeight,
  primitiveSpacing,
  primitiveRadius,
  primitiveShadow,
  primitiveZIndex,
  primitiveBreakpoint,
  primitiveTransition,
  primitiveOpacity,
  primitiveBorderWidth,
  semanticColors,
  buttonTokens,
  inputTokens,
  cardTokens,
} from "./tokens";

export type {
  Tokens,
  PrimitiveColors,
  SemanticColors,
  ButtonVariant,
  ButtonSize,
  ZIndex,
  Breakpoint,
  TransitionDuration,
  TransitionEasing,
  Opacity,
  BorderWidth,
} from "./tokens";

// Re-export commonly used dependencies
export { cva, type VariantProps } from "class-variance-authority";
export { Slot } from "@radix-ui/react-slot";

// UI Components
export * from "./components/ui";
