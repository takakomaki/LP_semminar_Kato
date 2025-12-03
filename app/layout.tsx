import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "薬ゼロ革命セミナー | 加藤雅俊",
  description:
    "薬に頼らず、自分の力で健康を取り戻す。加藤雅俊先生による特別セミナー。経営者のための本質的な健康法をお伝えします。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
