import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  sticky?: boolean
  bordered?: boolean
}

/**
 * Navbar component following SmartSenior Design System
 *
 * Top navigation bar
 */
const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, sticky = false, bordered = true, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "w-full h-16 px-4 flex items-center",
          "bg-[var(--background)]",
          sticky && "sticky top-0 z-40",
          bordered && "border-b border-[var(--border)]",
          className
        )}
        {...props}
      >
        {children}
      </header>
    )
  }
)
Navbar.displayName = "Navbar"

const NavbarBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-2 mr-auto", className)}
      {...props}
    />
  )
)
NavbarBrand.displayName = "NavbarBrand"

const NavbarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  )
)
NavbarContent.displayName = "NavbarContent"

export interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
}

const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ className, active, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center",
        active && "font-medium",
        className
      )}
      {...props}
    />
  )
)
NavbarItem.displayName = "NavbarItem"

export interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ className, active, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "px-4 py-2 text-base font-medium rounded-md",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
        active
          ? "text-[var(--primary)]"
          : "text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--background-muted)]",
        className
      )}
      {...props}
    />
  )
)
NavbarLink.displayName = "NavbarLink"

export interface NavbarMobileToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean
}

const NavbarMobileToggle = React.forwardRef<HTMLButtonElement, NavbarMobileToggleProps>(
  ({ className, isOpen, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "md:hidden p-2 rounded-md",
        "text-[var(--foreground)] hover:bg-[var(--background-muted)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
        className
      )}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      {...props}
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </>
        ) : (
          <>
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </>
        )}
      </svg>
    </button>
  )
)
NavbarMobileToggle.displayName = "NavbarMobileToggle"

export interface NavbarMobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
}

const NavbarMobileMenu = React.forwardRef<HTMLDivElement, NavbarMobileMenuProps>(
  ({ className, isOpen, children, ...props }, ref) => {
    if (!isOpen) return null

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-full left-0 w-full md:hidden",
          "bg-[var(--background)] border-b border-[var(--border)]",
          "py-4 px-4",
          "animate-in slide-in-from-top-2 duration-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavbarMobileMenu.displayName = "NavbarMobileMenu"

export {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  NavbarMobileToggle,
  NavbarMobileMenu,
}
