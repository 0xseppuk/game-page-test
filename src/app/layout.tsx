import type { Metadata } from "next"
import { inter } from "@/shared/config/fonts"
import { SiteFooter } from "@/widgets/site-footer"
import { SiteHeader } from "@/widgets/site-header"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Game page test",
  description: "Frontend test task",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
