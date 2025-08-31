import { VariantProps } from "class-variance-authority"
import { inputVariants } from "./input.utils"
import { InputHTMLAttributes } from "react"

export type InputVariantProps = VariantProps<typeof inputVariants>

export type InputProps = InputHTMLAttributes<HTMLInputElement> & 
  InputVariantProps & {
    label?: string
    error?: string
    helperText?: string
    characterCount?: boolean
    maxLength?: number
  }