import "@workspace/styles/globals.css"
import { Providers } from "@/lib/providers"
import { Button, SheetTrigger } from "@workspace/ui/components"
import { EmailPortalDashboardSideBar } from "@/lib/layouts/dashboard/side-bar"
import { PanelLeftIcon } from "lucide-react"
import { ReactNode } from "react"

export const EmailPortalRootLayout = ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    return (
        <Providers>
            <div className="flex">
                <div className="flex">
                    <EmailPortalDashboardSideBar />

                </div>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </Providers>
    )
}
