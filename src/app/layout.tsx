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
        <main className="relative min-h-screen pt-28 pb-5 bg-green-300 ">
          <Providers>
            <Header />
            <div className="shadow-lg min-h-full p-4 mx-10 rounded-lg bg-white">
              {children}
            </div>
          </Providers>
        </main>
      </body>
    </html>
  )
}
