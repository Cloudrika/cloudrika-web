import { ComponentProps } from "react"
import { VariantProps } from "class-variance-authority"
import { tabsListVariants, tabsTriggerVariants } from "./tabs.utils"

export type TabsListVariantProps = VariantProps<typeof tabsListVariants>
export type TabsTriggerVariantProps = VariantProps<typeof tabsTriggerVariants>

export interface TabsProps extends ComponentProps<"div"> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

export interface TabsListProps extends ComponentProps<"div">, TabsListVariantProps {}

export interface TabsTriggerProps extends ComponentProps<"button">, TabsTriggerVariantProps {
  value: string
}

export interface TabsContentProps extends ComponentProps<"div"> {
  value: string
}