import { cva } from "class-variance-authority";

export const DROPDOWN_VARIANTS = {
    default: "border-input bg-background text-foreground hover:bg-accent",
    ghost: "border-transparent bg-transparent hover:bg-accent",
    outline: "border-input bg-background hover:bg-accent",
    secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",
} as const

export const DROPDOWN_SIZES = {
    sm: "h-8 px-3 py-1 text-sm",
    default: "h-10 px-3 py-2 text-sm", 
    lg: "h-12 px-4 py-3 text-base",
} as const

export const DROPDOWN_SHAPES = {
    rect: "rounded-md",
    pill: "rounded-full",
    square: "rounded-none"
} as const

export const dropdownVariants = cva(
    "flex items-center justify-between w-full border shadow-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: DROPDOWN_VARIANTS,
            size: DROPDOWN_SIZES,
            shape: DROPDOWN_SHAPES
        },
        defaultVariants: {
            variant: "default",
            size: "default", 
            shape: "rect"
        },
    }
)
