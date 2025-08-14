import { forwardRef } from "react";
import { ButtonProps } from "./button.types";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "./button.utils";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, variant, size, shape, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp
            ref={ref}
            className={cn(buttonVariants({ variant, size, shape, className }))}
            {...props}
        />
    )
})
Button.displayName = 'Button'
export { Button }