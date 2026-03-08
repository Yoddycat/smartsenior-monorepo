import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Logo } from "./logo"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// ============================================
// IMAGE VARIANTS
// ============================================

const imageVariants = cva(
  [
    "block w-full h-auto",
    "object-cover",
    "transition-all duration-300",
  ],
  {
    variants: {
      rounded: {
        none: "rounded-none",
        sm: "rounded-[var(--radius-sm)]",
        md: "rounded-[var(--radius-md)]",
        lg: "rounded-[var(--radius-lg)]",
        xl: "rounded-[var(--radius-xl)]",
        "2xl": "rounded-[var(--radius-2xl)]",
        image: "rounded-[var(--radius-image)]",
        full: "rounded-full",
      },
      aspectRatio: {
        auto: "",
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[4/3]",
        wide: "aspect-[16/9]",
        ultrawide: "aspect-[21/9]",
        feed: "aspect-[4/5]",
        story: "aspect-[9/16]",
      },
    },
    defaultVariants: {
      rounded: "image",
      aspectRatio: "auto",
    },
  }
)

// ============================================
// BASE IMAGE COMPONENT
// ============================================

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  /** Fallback content when image fails to load */
  fallback?: React.ReactNode
  /** Whether to show a loading skeleton */
  showSkeleton?: boolean
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, rounded, aspectRatio, fallback, showSkeleton = true, alt, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [hasError, setHasError] = React.useState(false)

    const handleLoad = () => setIsLoading(false)
    const handleError = () => {
      setIsLoading(false)
      setHasError(true)
    }

    if (hasError && fallback) {
      return <>{fallback}</>
    }

    return (
      <div className={cn("relative overflow-hidden", aspectRatio && imageVariants({ aspectRatio, rounded }))}>
        {isLoading && showSkeleton && (
          <div className="absolute inset-0 bg-[var(--background-muted)] animate-pulse" />
        )}
        <img
          ref={ref}
          className={cn(
            imageVariants({ rounded, aspectRatio: aspectRatio ? undefined : aspectRatio }),
            isLoading && "opacity-0",
            !isLoading && "opacity-100",
            className
          )}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      </div>
    )
  }
)
Image.displayName = "Image"

// ============================================
// IMAGE CARD COMPONENT
// ============================================

const imageCardVariants = cva(
  [
    "relative overflow-hidden",
    "bg-[var(--card-background)]",
    "border border-[var(--border-muted)]",
    "rounded-[var(--radius-card)]",
    "shadow-[var(--shadow-card)]",
    "transition-shadow duration-300",
    "hover:shadow-[var(--shadow-card-hover)]",
  ],
  {
    variants: {
      layout: {
        vertical: "flex flex-col",
        horizontal: "flex flex-row",
        overlay: "relative",
      },
    },
    defaultVariants: {
      layout: "vertical",
    },
  }
)

export interface ImageCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imageCardVariants> {
  /** Image source URL */
  src: string
  /** Image alt text */
  alt: string
  /** Category label */
  category?: string
  /** Card title */
  title: string
  /** Card description */
  description?: string
  /** Primary action button */
  primaryAction?: {
    label: string
    onClick?: () => void
  }
  /** Secondary action button */
  secondaryAction?: {
    label: string
    onClick?: () => void
  }
  /** Image aspect ratio */
  imageAspect?: "square" | "video" | "portrait" | "landscape" | "wide"
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  ({
    className,
    layout,
    src,
    alt,
    category,
    title,
    description,
    primaryAction,
    secondaryAction,
    imageAspect = "landscape",
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(imageCardVariants({ layout }), className)}
        {...props}
      >
        {/* Image Section */}
        <div className={cn(
          "relative overflow-hidden",
          layout === "horizontal" ? "w-1/3 flex-shrink-0" : "w-full"
        )}>
          <Image
            src={src}
            alt={alt}
            aspectRatio={imageAspect}
            rounded="none"
            className="w-full h-full"
          />
          {layout === "overlay" && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#003057] via-[#003057]/60 to-transparent" />
          )}
        </div>

        {/* Content Section */}
        <div className={cn(
          "p-5",
          layout === "overlay" && "absolute bottom-0 left-0 right-0 text-white"
        )}>
          {category && (
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wide mb-1 block",
                layout === "overlay" ? "text-[#FFAA4D]" : "text-[var(--success)]"
              )}
              style={layout === "overlay" ? { textShadow: "0 1px 3px rgba(0,0,0,0.5)" } : undefined}
            >
              {category}
            </span>
          )}
          <h3
            className={cn(
              "text-lg font-bold mb-2",
              layout === "overlay" ? "text-white" : "text-[var(--foreground)]"
            )}
            style={layout === "overlay" ? { textShadow: "0 2px 4px rgba(0,0,0,0.6)" } : undefined}
          >
            {title}
          </h3>
          {description && (
            <p
              className={cn(
                "text-sm leading-relaxed mb-4",
                layout === "overlay" ? "text-white/90" : "text-[var(--foreground-muted)]"
              )}
              style={layout === "overlay" ? { textShadow: "0 1px 3px rgba(0,0,0,0.5)" } : undefined}
            >
              {description}
            </p>
          )}

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="flex gap-3 mt-4">
              {primaryAction && (
                <button
                  onClick={primaryAction.onClick}
                  className="flex-1 px-4 py-3 bg-[#FF6A13] text-white font-semibold text-sm rounded-[var(--radius-button)] shadow-[var(--shadow-button)] hover:bg-[#FE5000] transition-colors"
                >
                  {primaryAction.label}
                </button>
              )}
              {secondaryAction && (
                <button
                  onClick={secondaryAction.onClick}
                  className="px-4 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium text-sm rounded-[var(--radius-button)] hover:bg-[var(--background-subtle)] transition-colors"
                >
                  {secondaryAction.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)
ImageCard.displayName = "ImageCard"

// ============================================
// HERO IMAGE COMPONENT
// ============================================

export interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background image source */
  src: string
  /** Alt text for accessibility */
  alt: string
  /** Hero headline */
  headline?: string
  /** Hero subheadline */
  subheadline?: string
  /** Call to action button */
  cta?: {
    label: string
    onClick?: () => void
  }
  /** Overlay style */
  overlay?: "gradient" | "navy" | "dark" | "none"
  /** Content alignment */
  align?: "left" | "center" | "right"
  /** Minimum height */
  minHeight?: string
}

const HeroImage = React.forwardRef<HTMLDivElement, HeroImageProps>(
  ({
    className,
    src,
    alt,
    headline,
    subheadline,
    cta,
    overlay = "gradient",
    align = "left",
    minHeight = "400px",
    children,
    ...props
  }, ref) => {
    const overlayStyles = {
      gradient: "bg-gradient-to-t from-[#003057]/90 via-[#003057]/40 to-transparent",
      navy: "bg-[#003057]/70",
      dark: "bg-black/50",
      none: "",
    }

    const alignStyles = {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-[var(--radius-2xl)]",
          className
        )}
        style={{ minHeight }}
        {...props}
      >
        {/* Background Image */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        {overlay !== "none" && (
          <div className={cn("absolute inset-0", overlayStyles[overlay])} />
        )}

        {/* Content */}
        <div className={cn(
          "relative z-10 flex flex-col justify-end h-full p-8",
          alignStyles[align]
        )}
        style={{ minHeight }}
        >
          {headline && (
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
            >
              {headline}
            </h1>
          )}
          {subheadline && (
            <p
              className="text-lg text-white/90 mb-6 max-w-xl"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              {subheadline}
            </p>
          )}
          {cta && (
            <button
              onClick={cta.onClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6A13] text-white font-bold text-lg rounded-[var(--radius-button)] shadow-[var(--shadow-button)] hover:bg-[#FE5000] transition-colors"
            >
              {cta.label}
            </button>
          )}
          {children}
        </div>

        {/* Logo Badge */}
        <div className="absolute bottom-6 right-6 z-20">
          <Logo variant="horizontal" color="gradient" size="md" />
        </div>
      </div>
    )
  }
)
HeroImage.displayName = "HeroImage"

// ============================================
// AVATAR IMAGE COMPONENT
// ============================================

export interface AvatarImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source */
  src?: string
  /** Alt text */
  alt: string
  /** Fallback initials or content */
  fallback?: string
  /** Size variant */
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  /** Border color */
  borderColor?: string
}

const avatarSizes = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
  "2xl": "w-24 h-24 text-2xl",
}

const AvatarImage = React.forwardRef<HTMLDivElement, AvatarImageProps>(
  ({ className, src, alt, fallback, size = "md", borderColor, style, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false)

    const getInitials = (name: string) => {
      return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-full overflow-hidden bg-[var(--background-muted)] flex items-center justify-center font-semibold text-[var(--foreground-muted)]",
          avatarSizes[size],
          borderColor && "border-4",
          className
        )}
        style={{ borderColor, ...style }}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <span>{fallback ? getInitials(fallback) : alt.charAt(0).toUpperCase()}</span>
        )}
      </div>
    )
  }
)
AvatarImage.displayName = "AvatarImage"

// ============================================
// EXPORTS
// ============================================

export {
  Image,
  ImageCard,
  HeroImage,
  AvatarImage,
  imageVariants,
  imageCardVariants,
}
