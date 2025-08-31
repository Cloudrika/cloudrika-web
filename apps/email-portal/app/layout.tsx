import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"

import { Providers } from "@/lib/providers"
import { SidebarTrigger } from "@workspace/ui/components"
import { EmailPortalDashboardSideBar } from "@/lib/layouts/dashboard/side-bar"


const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <SidebarTrigger />
          <EmailPortalDashboardSideBar />
          {children}</Providers>
      </body>
    </html>
  )
}
