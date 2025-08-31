import { ComponentProps, ReactNode } from "react"
import { VariantProps } from "class-variance-authority"
import { dropdownVariants } from "./dropdown.utils"

export type DropdownVariantProps = VariantProps<typeof dropdownVariants>

export interface DropdownOption {
  value: string
  label: string
  icon?: ReactNode
  disabled?: boolean
  category?: string
  description?: string
  count?: number
}

export interface DropdownProps extends ComponentProps<"div">, DropdownVariantProps {
  trigger?: ReactNode
  placeholder?: string
  options?: DropdownOption[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  searchable?: boolean
  multiple?: boolean
  disabled?: boolean
  loading?: boolean
  error?: string
  helperText?: string
  label?: string
}

export interface DropdownTriggerProps extends ComponentProps<"button"> {
  asChild?: boolean
}

export interface DropdownContentProps extends ComponentProps<"div"> {
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
}

export interface DropdownItemProps extends ComponentProps<"div"> {
  disabled?: boolean
  selected?: boolean
}

export interface DropdownSearchProps extends ComponentProps<"input"> {
  placeholder?: string
}