import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './client/providers'
import Header from './components/navbar/Header'
import { ResposiveLayout } from './components/sidebar/ResposiveLaiout'

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
        <Providers>
          <main className=" bg-slate-200 h-screen">
            <ResposiveLayout>
              <Header />
              {children}
            </ResposiveLayout>
          </main>
        </Providers>
      </body>
    </html>
  )
}
