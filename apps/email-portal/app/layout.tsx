
import { EmailPortalRootLayout } from "@/lib/layouts";
import { Lexend, Lexend_Deca, Poppins, Roboto_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
export const metadata = {
  title: "Cloudrika Email Portal",
  description:
    "Manage your email campaigns with ease. Let Cloudrika Email Portal handle the heavy lifting for you",
  icons: {
    icon: "/favicon.ico", // use leading slash
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

const poppinsSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export default function RootLayout({ children }: PropsWithChildren) {
  return <html lang="en" suppressHydrationWarning>
    <body
      className={`${poppinsSans.variable} ${robotoMono.variable}  antialiased bg-surface-primary`}
    >
      <EmailPortalRootLayout>
        {children}
      </EmailPortalRootLayout>
    </body>
  </html>
};