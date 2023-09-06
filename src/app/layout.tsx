/* eslint-disable prettier/prettier */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationMenuDemo from './components/navbar/NavigationMenu'
import { Providers } from './client/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frota CBMPE',
  description: 'ADM FROTA'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenuDemo />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
