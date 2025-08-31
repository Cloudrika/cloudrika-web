import { cva } from "class-variance-authority";

export const TABS_LIST_VARIANTS = {
    default: "bg-muted text-muted-foreground",
    outline: "bg-background border border-border",
    ghost: "bg-transparent",
    pills: "bg-background",
    underline: "bg-transparent border-b border-border",
} as const

export const TABS_LIST_SIZES = {
    sm: "h-8 p-1",
    default: "h-10 p-1", 
    lg: "h-12 p-1.5",
} as const

export const TABS_LIST_SHAPES = {
    rect: "rounded-md",
    pill: "rounded-full",
    square: "rounded-none"
} as const

export const TABS_TRIGGER_VARIANTS = {
    default: "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
    outline: "border border-transparent data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:shadow-sm",
    ghost: "data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",
    pills: "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",
    underline: "border-b-2 border-transparent data-[state=active]:border-primary rounded-none",
} as const

export const TABS_TRIGGER_SIZES = {
    sm: "px-2 py-1 text-xs",
    default: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
} as const

export const TABS_TRIGGER_SHAPES = {
    rect: "rounded-sm",
    pill: "rounded-full",
    square: "rounded-none"
} as const

export const tabsListVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      variant: TABS_LIST_VARIANTS,
      size: TABS_LIST_SIZES,
      shape: TABS_LIST_SHAPES,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rect"
    },
  }
)

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: TABS_TRIGGER_VARIANTS,
      size: TABS_TRIGGER_SIZES,
      shape: TABS_TRIGGER_SHAPES,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rect"
    },
  }
)