import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "./button.utils"
import { AsChild } from "@workspace/ui/utils/types"
import { ButtonHTMLAttributes } from "react"

export type ButtonVariantProps = VariantProps<typeof buttonVariants> & AsChild

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps