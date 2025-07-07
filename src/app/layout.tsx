import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Quote Generator',
  description: 'Generate motivational quotes based on your topic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={inter.variable}
    >
      <head />
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
