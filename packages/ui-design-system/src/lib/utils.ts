/**
 * SmartSenior Design System - Utility Functions
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 * Handles conditional classes and deduplicates Tailwind utilities
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Get CSS custom property value at runtime
 *
 * @example
 * getCssVar("--primary") // "oklch(0.38 0.11 245)"
 */
export function getCssVar(name: string, element?: HTMLElement): string {
  const target = element ?? document.documentElement;
  return getComputedStyle(target).getPropertyValue(name).trim();
}

/**
 * Set CSS custom property value at runtime
 *
 * @example
 * setCssVar("--primary", "oklch(0.5 0.15 250)")
 */
export function setCssVar(
  name: string,
  value: string,
  element?: HTMLElement
): void {
  const target = element ?? document.documentElement;
  target.style.setProperty(name, value);
}

/**
 * Toggle between light and dark theme
 *
 * @example
 * toggleTheme() // switches between light/dark
 * toggleTheme("dark") // explicitly set dark
 */
export function toggleTheme(theme?: "light" | "dark"): "light" | "dark" {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");

  const newTheme = theme ?? (current === "dark" ? "light" : "dark");
  root.setAttribute("data-theme", newTheme);

  // Persist preference
  localStorage.setItem("smartsenior-theme", newTheme);

  return newTheme;
}

/**
 * Initialize theme from localStorage or system preference
 * Call this on app initialization
 *
 * @example
 * // In your app entry point:
 * initializeTheme()
 */
export function initializeTheme(): "light" | "dark" {
  const stored = localStorage.getItem("smartsenior-theme") as
    | "light"
    | "dark"
    | null;

  if (stored) {
    document.documentElement.setAttribute("data-theme", stored);
    return stored;
  }

  // Fall back to system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = prefersDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);

  return theme;
}

/**
 * Check if current theme is dark mode
 */
export function isDarkMode(): boolean {
  return document.documentElement.getAttribute("data-theme") === "dark";
}

/**
 * Generate a unique ID for accessibility attributes
 *
 * @example
 * const id = generateId("input") // "input-abc123"
 */
export function generateId(prefix = "id"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Semantic spacing scale (maps to CSS custom properties)
 */
export const spacing = {
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

/**
 * Semantic color tokens (for JS/TS usage)
 */
export const colors = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  primary: "var(--primary)",
  primaryHover: "var(--primary-hover)",
  primaryForeground: "var(--primary-foreground)",
  accent: "var(--accent)",
  accentHover: "var(--accent-hover)",
  accentForeground: "var(--accent-foreground)",
  muted: "var(--foreground-muted)",
  subtle: "var(--foreground-subtle)",
  border: "var(--border)",
  success: "var(--success)",
  warning: "var(--warning)",
  error: "var(--error)",
  info: "var(--info)",
} as const;
