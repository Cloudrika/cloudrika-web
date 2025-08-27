import { redirect } from "next/navigation"
import { PropsWithChildren } from "react"

export const DashboardLayout = ({ children }: PropsWithChildren) => {
    redirect("/analytics")
    return (
        <div>
            {children}
        </div>
    )
}
