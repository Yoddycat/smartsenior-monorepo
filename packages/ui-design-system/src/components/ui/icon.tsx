import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  // ============================================
  // HEALTH & WELLNESS (Saúde e Bem-estar)
  // ============================================
  Heart,
  HeartPulse,
  Activity,
  Thermometer,
  Pill,
  Stethoscope,
  Syringe,
  BriefcaseMedical,
  Hospital,
  Ambulance,
  CircleAlert,
  ShieldCheck,
  ShieldPlus,

  // ============================================
  // HYDRATION & NUTRITION (Hidratação e Nutrição)
  // ============================================
  Droplets,
  Droplet,
  GlassWater,
  Apple,
  Soup,
  UtensilsCrossed,
  Coffee,
  Salad,

  // ============================================
  // MOVEMENT & MOBILITY (Movimento e Mobilidade)
  // ============================================
  Footprints,
  PersonStanding,
  Accessibility,
  Move,
  ArrowUpDown,
  StretchHorizontal,

  // ============================================
  // TIME & SCHEDULE (Tempo e Agenda)
  // ============================================
  Clock,
  Calendar,
  CalendarCheck,
  CalendarDays,
  AlarmClock,
  Timer,
  History,
  CalendarPlus,

  // ============================================
  // COMMUNICATION (Comunicação)
  // ============================================
  Phone,
  PhoneCall,
  MessageCircle,
  MessageSquare,
  Bell,
  BellRing,
  Mail,
  Video,

  // ============================================
  // CARE & FAMILY (Cuidado e Família)
  // ============================================
  Users,
  User,
  UserCheck,
  UserPlus,
  UserCog,
  HandHeart,
  Home,
  House,
  Baby,

  // ============================================
  // SAFETY & ALERTS (Segurança e Alertas)
  // ============================================
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  Info,
  HelpCircle,
  CheckCircle,
  CheckCircle2,
  XCircle,
  Ban,
  Lock,
  Unlock,
  Eye,
  EyeOff,

  // ============================================
  // NAVIGATION (Navegação)
  // ============================================
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Menu,
  X,
  MoreHorizontal,
  MoreVertical,
  ExternalLink,
  Link,

  // ============================================
  // ACTIONS (Ações)
  // ============================================
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Download,
  Upload,
  Share,
  Save,
  RefreshCw,
  RotateCcw,
  Search,
  Filter,
  SlidersHorizontal,
  Settings,
  LogOut,
  LogIn,

  // ============================================
  // STATUS & PROGRESS (Status e Progresso)
  // ============================================
  Loader2,
  Check,
  Hourglass,
  Target,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,

  // ============================================
  // DOCUMENTS (Documentos)
  // ============================================
  FileText,
  Files,
  Clipboard,
  ClipboardCheck,
  ClipboardList,
  BookOpen,
  Notebook,

  // ============================================
  // MISC
  // ============================================
  Sun,
  Moon,
  Cloud,
  MapPin,
  Navigation,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  BatteryCharging,
  Smartphone,
  Monitor,
  Camera,
  Image,
  Star,
  StarOff,
  Zap,
  type LucideIcon,
} from "lucide-react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// ============================================
// ICON VARIANTS
// ============================================

const iconVariants = cva(
  [
    "inline-flex shrink-0",
    "transition-colors duration-150",
  ],
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
        "2xl": "w-10 h-10",
        "3xl": "w-12 h-12",
      },
      color: {
        inherit: "text-inherit",
        current: "text-current",
        primary: "text-[var(--primary)]",
        accent: "text-[var(--accent)]",
        muted: "text-[var(--foreground-muted)]",
        subtle: "text-[var(--foreground-subtle)]",
        success: "text-[var(--success)]",
        warning: "text-[var(--warning)]",
        error: "text-[var(--error)]",
        info: "text-[var(--info)]",
        inverse: "text-[var(--foreground-inverse)]",
      },
    },
    defaultVariants: {
      size: "md",
      color: "current",
    },
  }
)

// ============================================
// ICON COMPONENT
// ============================================

export interface IconProps extends VariantProps<typeof iconVariants> {
  /** The Lucide icon component to render */
  icon: LucideIcon
  /** Accessible label for screen readers */
  label?: string
  /** Whether the icon is decorative (hidden from screen readers) */
  decorative?: boolean
  /** Additional CSS class names */
  className?: string
  /** Inline styles */
  style?: React.CSSProperties
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: LucideIconComponent, size, color, label, decorative = false, className, style }, ref) => {
    // Cast to any to avoid TypeScript conflicts between React versions
    const IconElement = LucideIconComponent as React.ComponentType<{
      ref?: React.Ref<SVGSVGElement>
      className?: string
      style?: React.CSSProperties
      'aria-hidden'?: boolean
      'aria-label'?: string
      role?: string
    }>

    return (
      <IconElement
        ref={ref}
        className={cn(iconVariants({ size, color }), className)}
        style={style}
        aria-hidden={decorative || !label}
        aria-label={label}
        role={label ? "img" : undefined}
      />
    )
  }
)
Icon.displayName = "Icon"

// ============================================
// ICON REGISTRY - SmartSenior Domain Icons
// ============================================

/**
 * Categorized icons for the SmartSenior domain.
 * Use these for consistent iconography across the app.
 */
export const SmartSeniorIcons = {
  // Health & Wellness
  health: {
    heart: Heart,
    heartPulse: HeartPulse,
    vitals: Activity,
    temperature: Thermometer,
    medication: Pill,
    checkup: Stethoscope,
    vaccine: Syringe,
    medkit: BriefcaseMedical,
    hospital: Hospital,
    emergency: Ambulance,
    alert: CircleAlert,
    protected: ShieldCheck,
    healthPlus: ShieldPlus,
  },

  // Hydration & Nutrition
  nutrition: {
    hydration: Droplets,
    water: GlassWater,
    drop: Droplet,
    fruit: Apple,
    soup: Soup,
    meal: UtensilsCrossed,
    drink: Coffee,
    salad: Salad,
  },

  // Movement & Mobility
  movement: {
    steps: Footprints,
    standing: PersonStanding,
    accessibility: Accessibility,
    move: Move,
    upDown: ArrowUpDown,
    stretch: StretchHorizontal,
  },

  // Time & Schedule
  schedule: {
    clock: Clock,
    calendar: Calendar,
    calendarCheck: CalendarCheck,
    calendarDays: CalendarDays,
    alarm: AlarmClock,
    timer: Timer,
    history: History,
    scheduleNew: CalendarPlus,
  },

  // Communication
  communication: {
    phone: Phone,
    calling: PhoneCall,
    chat: MessageCircle,
    message: MessageSquare,
    notification: Bell,
    notificationActive: BellRing,
    email: Mail,
    video: Video,
  },

  // Care & Family
  family: {
    family: Users,
    person: User,
    caregiver: UserCheck,
    addPerson: UserPlus,
    settings: UserCog,
    care: HandHeart,
    home: Home,
    house: House,
    baby: Baby,
  },

  // Safety & Alerts
  safety: {
    warning: AlertTriangle,
    alert: AlertCircle,
    critical: AlertOctagon,
    info: Info,
    help: HelpCircle,
    success: CheckCircle,
    successFilled: CheckCircle2,
    error: XCircle,
    blocked: Ban,
    locked: Lock,
    unlocked: Unlock,
    visible: Eye,
    hidden: EyeOff,
  },

  // Navigation
  navigation: {
    back: ChevronLeft,
    forward: ChevronRight,
    up: ChevronUp,
    down: ChevronDown,
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
    menu: Menu,
    close: X,
    moreH: MoreHorizontal,
    moreV: MoreVertical,
    external: ExternalLink,
    link: Link,
  },

  // Actions
  actions: {
    add: Plus,
    remove: Minus,
    edit: Edit,
    delete: Trash2,
    copy: Copy,
    download: Download,
    upload: Upload,
    share: Share,
    save: Save,
    refresh: RefreshCw,
    undo: RotateCcw,
    search: Search,
    filter: Filter,
    adjust: SlidersHorizontal,
    settings: Settings,
    logout: LogOut,
    login: LogIn,
  },

  // Status & Progress
  status: {
    loading: Loader2,
    check: Check,
    pending: Hourglass,
    target: Target,
    trendUp: TrendingUp,
    trendDown: TrendingDown,
    chart: BarChart3,
    pie: PieChart,
  },

  // Documents
  documents: {
    file: FileText,
    files: Files,
    clipboard: Clipboard,
    clipboardCheck: ClipboardCheck,
    checklist: ClipboardList,
    book: BookOpen,
    notebook: Notebook,
  },

  // Environment
  environment: {
    sun: Sun,
    moon: Moon,
    weather: Cloud,
    location: MapPin,
    navigate: Navigation,
    online: Wifi,
    offline: WifiOff,
  },

  // Device
  device: {
    battery: Battery,
    batteryLow: BatteryLow,
    charging: BatteryCharging,
    mobile: Smartphone,
    desktop: Monitor,
    camera: Camera,
    image: Image,
  },

  // Misc
  misc: {
    favorite: Star,
    unfavorite: StarOff,
    flash: Zap,
  },
} as const

// ============================================
// CONVENIENCE EXPORTS
// ============================================

// Re-export commonly used icons directly
export {
  // Health
  Heart as IconHeart,
  HeartPulse as IconHeartPulse,
  Activity as IconActivity,
  Pill as IconPill,
  Thermometer as IconThermometer,

  // Hydration
  Droplets as IconDroplets,
  GlassWater as IconGlassWater,

  // Movement
  Footprints as IconFootprints,

  // Time
  Clock as IconClock,
  Calendar as IconCalendar,
  AlarmClock as IconAlarm,

  // Communication
  Bell as IconBell,
  Phone as IconPhone,
  MessageCircle as IconMessage,

  // Care
  Users as IconUsers,
  User as IconUser,
  HandHeart as IconCare,
  Home as IconHome,

  // Safety
  AlertTriangle as IconWarning,
  AlertCircle as IconAlert,
  CheckCircle as IconSuccess,
  XCircle as IconError,
  Info as IconInfo,
  HelpCircle as IconHelp,
  ShieldCheck as IconShield,

  // Navigation
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
  ChevronUp as IconChevronUp,
  ChevronDown as IconChevronDown,
  Menu as IconMenu,
  X as IconClose,

  // Actions
  Plus as IconPlus,
  Minus as IconMinus,
  Edit as IconEdit,
  Trash2 as IconTrash,
  Search as IconSearch,
  Settings as IconSettings,
  RefreshCw as IconRefresh,

  // Status
  Loader2 as IconLoader,
  Check as IconCheck,
}

// Export types
export type IconSize = VariantProps<typeof iconVariants>["size"]
export type IconColor = VariantProps<typeof iconVariants>["color"]
export type { LucideIcon }

export { Icon, iconVariants }
