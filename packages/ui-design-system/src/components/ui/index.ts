// SmartSenior Design System - UI Components

// ============================================
// FORMS
// ============================================
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'

export { Input } from './input'
export type { InputProps } from './input'

export { Textarea } from './textarea'
export type { TextareaProps } from './textarea'

export { Checkbox } from './checkbox'
export type { CheckboxProps } from './checkbox'

export { Radio, RadioGroup } from './radio'
export type { RadioProps, RadioGroupProps } from './radio'

export { Select, SelectOption } from './select'
export type { SelectProps, SelectOptionProps } from './select'

export { Switch } from './switch'
export type { SwitchProps } from './switch'

export { Slider } from './slider'
export type { SliderProps } from './slider'

export { DatePicker } from './datepicker'
export type { DatePickerProps } from './datepicker'

export { TimePicker } from './timepicker'
export type { TimePickerProps } from './timepicker'

export { FileUpload } from './file-upload'
export type { FileUploadProps } from './file-upload'

// ============================================
// DATA DISPLAY
// ============================================
export { Badge, badgeVariants } from './badge'
export type { BadgeProps } from './badge'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'

export { Avatar, AvatarImage, AvatarFallback, getInitials } from './avatar'
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps } from './avatar'

export { Progress, CircularProgress } from './progress'
export type { ProgressProps, CircularProgressProps } from './progress'

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from './skeleton'
export type { SkeletonProps, SkeletonTextProps } from './skeleton'

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from './table'
export type { TableProps, TableHeadProps } from './table'

export { List, ListItem, ListItemIcon, ListItemContent, ListItemTitle, ListItemDescription, ListItemAction } from './list'
export type { ListProps, ListItemProps } from './list'

export { Timeline, TimelineItem, TimelineTitle, TimelineDescription, TimelineTime } from './timeline'
export type { TimelineProps, TimelineItemProps } from './timeline'

export { StatCard, MiniStat } from './stat-card'
export type { StatCardProps, MiniStatProps } from './stat-card'

export { Tag, Chip, TagGroup } from './tag'
export type { TagProps, TagGroupProps } from './tag'

// ============================================
// NAVIGATION
// ============================================
export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs'
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from './tabs'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from './accordion'

export { Breadcrumb } from './breadcrumb'
export type { BreadcrumbProps, BreadcrumbItem } from './breadcrumb'

export { Pagination } from './pagination'
export type { PaginationProps } from './pagination'

export { Stepper } from './stepper'
export type { StepperProps, StepperStep } from './stepper'

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from './dropdown-menu'
export type { DropdownMenuProps, DropdownMenuTriggerProps, DropdownMenuContentProps, DropdownMenuItemProps } from './dropdown-menu'

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarItem } from './sidebar'
export type { SidebarProps, SidebarItemProps } from './sidebar'

export { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, NavbarMobileToggle, NavbarMobileMenu } from './navbar'
export type { NavbarProps, NavbarItemProps, NavbarLinkProps, NavbarMobileToggleProps, NavbarMobileMenuProps } from './navbar'

// ============================================
// LAYOUT
// ============================================
export { Divider, Separator } from './divider'
export type { DividerProps } from './divider'

export { Container } from './container'
export type { ContainerProps } from './container'

export { Grid, GridItem } from './grid'
export type { GridProps, GridItemProps } from './grid'

// ============================================
// FEEDBACK
// ============================================
export { Alert, AlertTitle, AlertDescription, Banner } from './alert'
export type { AlertProps, BannerProps } from './alert'

export { Spinner, Loading, LoadingDots } from './spinner'
export type { SpinnerProps, LoadingProps } from './spinner'

export { EmptyState, EmptyStateNoResults, EmptyStateNoData } from './empty-state'
export type { EmptyStateProps } from './empty-state'

export { ErrorState, NotFoundState, ServerErrorState, NetworkErrorState } from './error-state'
export type { ErrorStateProps } from './error-state'

export { Toast, ToastContainer, useToast } from './toast'
export type { ToastProps, ToastContainerProps } from './toast'

// ============================================
// OVERLAY
// ============================================
export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose } from './modal'
export type { ModalProps } from './modal'

export { Dialog, AlertDialog } from './dialog'
export type { DialogProps, AlertDialogProps } from './dialog'

export { Drawer, DrawerHeader, DrawerTitle, DrawerDescription, DrawerContent, DrawerFooter, DrawerClose } from './drawer'
export { Sheet, SheetHeader, SheetTitle, SheetDescription, SheetContent, SheetFooter, SheetClose } from './drawer'
export type { DrawerProps } from './drawer'

export { Popover, PopoverTrigger, PopoverContent, PopoverClose } from './popover'
export type { PopoverProps, PopoverTriggerProps, PopoverContentProps } from './popover'

export { Command, CommandGroup, CommandItem, CommandSeparator, CommandEmpty } from './command'
export type { CommandProps, CommandGroupProps, CommandItemProps } from './command'

// ============================================
// INFORMATION
// ============================================
export { Tooltip } from './tooltip'
export type { TooltipProps } from './tooltip'

export { Calendar } from './calendar'
export type { CalendarProps } from './calendar'

// ============================================
// CHARTS
// ============================================
export { BarChart } from './charts/bar-chart'
export type { BarChartProps, BarChartDataPoint } from './charts/bar-chart'

export { LineChart } from './charts/line-chart'
export type { LineChartProps, LineChartSeries, LineChartDataPoint } from './charts/line-chart'

export { PieChart, DonutChart } from './charts/pie-chart'
export type { PieChartProps, PieChartDataPoint } from './charts/pie-chart'

export { Sparkline } from './charts/sparkline'
export type { SparklineProps } from './charts/sparkline'

// ============================================
// AI / CHAT
// ============================================
export { AIChat, ChatBubble, ChatInput, TypingIndicator } from './ai-chat'
export type { AIChatProps, ChatMessage, ChatBubbleProps, ChatInputProps } from './ai-chat'

// ============================================
// TYPOGRAPHY
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
} from './typography'
export type {
  TypographyProps,
  HeadingProps,
  TextProps,
  LabelProps,
  CaptionProps,
  HighlightProps,
  BlockquoteProps,
  GradientTextProps,
  ProseProps,
} from './typography'

// ============================================
// BRAND
// ============================================
export { Logo, LogoIcon, LogoVertical, LogoHorizontal, LogoFavicon } from './logo'
export type { LogoProps } from './logo'

// ============================================
// ICONOGRAPHY
// ============================================
export {
  Icon,
  iconVariants,
  SmartSeniorIcons,
  // Convenience exports - Health
  IconHeart,
  IconHeartPulse,
  IconActivity,
  IconPill,
  IconThermometer,
  // Convenience exports - Hydration
  IconDroplets,
  IconGlassWater,
  // Convenience exports - Movement
  IconFootprints,
  // Convenience exports - Time
  IconClock,
  IconCalendar,
  IconAlarm,
  // Convenience exports - Communication
  IconBell,
  IconPhone,
  IconMessage,
  // Convenience exports - Care
  IconUsers,
  IconUser,
  IconCare,
  IconHome,
  // Convenience exports - Safety
  IconWarning,
  IconAlert,
  IconSuccess,
  IconError,
  IconInfo,
  IconHelp,
  IconShield,
  // Convenience exports - Navigation
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronDown,
  IconMenu,
  IconClose,
  // Convenience exports - Actions
  IconPlus,
  IconMinus,
  IconEdit,
  IconTrash,
  IconSearch,
  IconSettings,
  IconRefresh,
  // Convenience exports - Status
  IconLoader,
  IconCheck,
} from './icon'
export type { IconProps, IconSize, IconColor, LucideIcon } from './icon'
