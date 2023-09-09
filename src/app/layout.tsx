import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './client/providers'
import Header from './components/navbar/Header'

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
        <main className="relative h-screen pt-28 bg-green-50 rounded-md">
          <Providers>
            <Header />
            <div className="shadow-lg h-full mx-10 bg-white">{children}</div>
          </Providers>
        </main>
      </body>
    </html>
  )
}
