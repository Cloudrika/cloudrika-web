import { VariantProps } from "class-variance-authority"
import { accordionVariants } from "./accordion.utils"
import { AsChild } from "@workspace/ui/utils/types"
// import { ButtonHTMLAttributes } from "react"

export type AccordionVariantProps = VariantProps<typeof accordionVariants> & AsChild

export type AccordionProps = HTMLDivElement & AccordionVariantProps