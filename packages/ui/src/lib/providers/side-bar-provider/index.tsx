import { HTMLAttributes } from "react"
import { useIsMobile } from "../../hooks"
import { SideBarOpenState } from "@workspace/ui/utils/enums"
import { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"
import { useCallback } from "react"
import {
    SIDEBAR_COOKIE_MAX_AGE,
    SIDEBAR_COOKIE_NAME,
    SIDEBAR_KEYBOARD_SHORTCUT,
    SIDEBAR_WIDTH,
    SIDEBAR_WIDTH_ICON
} from "@workspace/ui/utils/constants"
import { useEffect } from "react"
import { useMemo } from "react"
import { TooltipProvider } from "@workspace/ui/components"
import { CSSProperties } from "react"
import { cn } from "../../utils"

interface SidebarContextProps {
    state: SideBarOpenState
    open: boolean
    setOpen: (open: boolean) => void
    openMobile: boolean
    setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

export const SidebarProvider = ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
}) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = useCallback(
        (value: boolean | ((value: boolean) => boolean)) => {
            const openState = typeof value === "function" ? value(open) : value
            if (setOpenProp) {
                setOpenProp(openState)
            } else {
                _setOpen(openState)
            }

            // This sets the cookie to keep the sidebar state.
            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
        },
        [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = useCallback(() => {
        return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                (event.metaKey || event.ctrlKey)
            ) {
                event.preventDefault()
                toggleSidebar()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = useMemo<SidebarContextProps>(
        () => ({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar,
        }),
        [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
        <SidebarContext.Provider value={contextValue}>
            <TooltipProvider delayDuration={0}>
                <div
                    data-slot="sidebar-wrapper"
                    style={
                        {
                            "--sidebar-width": SIDEBAR_WIDTH,
                            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                            ...style,
                        } as CSSProperties
                    }
                    className={cn(
                        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </TooltipProvider>
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.")
    }

    return context
}