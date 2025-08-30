import { cva } from "class-variance-authority";

export const ACCORDION_VARIANTS = {
  primary: `
    bg-red-800 hover:bg-red-700 active:bg-red-700
  `,
  secondary: `
    bg-secondary text-secondary-foreground
    hover:bg-secondary-hover active:bg-secondary-active
    focus-visible:ring-secondary
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
  tertiary: `
    bg-secondary text-secondary-foreground
    hover:bg-secondary-hover active:bg-secondary-active
    focus-visible:ring-secondary
    disabled:bg-interactive-disabled disabled:text-content-disabled
  `,
}

export const ACCORDION_SIZES = {
  sm: `
     px-3 text-sm rounded-md gap-1.5
  `,
  md: `
     px-4 py-2 text-sm rounded-md
  `,
  lg: `
    0 px-6 text-base rounded-md
  `,
}


export const accordionVariants = cva(
  "inline-flex focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-accent-foreground",
  {
    variants: {
      variant: ACCORDION_VARIANTS,
      size: ACCORDION_SIZES
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    },
  }
)