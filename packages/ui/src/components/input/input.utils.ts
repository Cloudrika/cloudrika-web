import { cva } from "class-variance-authority";

export const INPUT_VARIANTS = {
    default: "border-input bg-background text-foreground focus-visible:ring-ring",
    error: "border-destructive bg-background text-foreground focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
    success: "border-green-500 bg-background text-foreground focus-visible:ring-green-500/20 dark:focus-visible:ring-green-500/40",
    ghost: "border-transparent bg-transparent text-foreground focus-visible:ring-ring focus-visible:border-input",
} as const

export const INPUT_SIZES = {
    sm: "h-8 px-3 py-1 text-sm",
    default: "h-10 px-3 py-2 text-sm", 
    lg: "h-12 px-4 py-3 text-base",
} as const

export const INPUT_SHAPES = {
    rect: "rounded-md",
    pill: "rounded-full",
    square: "rounded-none"
} as const

export const inputVariants = cva(
    "flex w-full border shadow-sm ring-offset-background transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: INPUT_VARIANTS,
            size: INPUT_SIZES,
            shape: INPUT_SHAPES
        },
        defaultVariants: {
            variant: "default",
            size: "default", 
            shape: "rect"
        },
    }
)