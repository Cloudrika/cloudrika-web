import { cva } from "class-variance-authority";

export const BUTTON_VARIANTS = {
  primary: `
    bg-primary text-primary-foreground
    hover:bg-primary-hover active:bg-primary-active
    focus-visible:ring-primary
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  secondary: `
    bg-secondary text-secondary-foreground
    hover:bg-secondary-hover active:bg-secondary-active
    focus-visible:ring-secondary
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  success: `
    bg-success text-success-foreground
    hover:bg-success-hover active:bg-success-active
    focus-visible:ring-success
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  destructive: `
    bg-destructive text-destructive-foreground
    hover:bg-destructive-hover active:bg-destructive-active
    focus-visible:ring-destructive
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  warning: `
    bg-warning text-warning-foreground
    hover:bg-warning-hover active:bg-warning-active
    focus-visible:ring-warning
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  info: `
    bg-info text-info-foreground
    hover:bg-info-hover active:bg-info-active
    focus-visible:ring-info
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  accent: `
    bg-accent text-accent-foreground
    hover:bg-accent hover:text-accent-foreground
    focus-visible:ring-accent
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  outline: `
    border border-border bg-background text-foreground
    hover:bg-accent hover:text-accent-foreground
    focus-visible:ring-ring
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  ghost: `
    bg-transparent text-foreground
    hover:bg-accent hover:text-accent-foreground
    focus-visible:ring-ring
    disabled:bg-transparent disabled:text-content-disabled
  `,
  link: `
    text-primary underline-offset-4
    hover:underline
    focus-visible:ring-ring
    disabled:text-content-disabled
  `,
}

export const BUTTON_SIZES = {
  xs: `
    h-7 px-2 text-xs rounded-md
    has-[>svg]:px-1.5 has-[>svg]:size-3
  `,
  sm: `
    h-8 px-3 text-sm rounded-md gap-1.5
    has-[>svg]:px-2.5 has-[>svg]:size-3.5
  `,
  md: `
    h-9 px-4 py-2 text-sm rounded-md
    has-[>svg]:px-3 has-[>svg]:size-4
  `,
  lg: `
    h-10 px-6 text-base rounded-md
    has-[>svg]:px-4 has-[>svg]:size-5
  `,
  xl: `
    h-12 px-8 text-lg rounded-lg
    has-[>svg]:px-6 has-[>svg]:size-5
  `,
  icon: `
    size-9 rounded-md
    [&_svg]:size-4
  `,
}


export const BUTTON_SHAPES = {
  rect: "",
  pill: "rounded-full"
}


export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all  cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-accent-foreground",
  {
    variants: {
      variant: BUTTON_VARIANTS,
      size: BUTTON_SIZES,
      shape: BUTTON_SHAPES
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "rect"
    },
  }
)