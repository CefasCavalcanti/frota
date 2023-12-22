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
          <main className="relative min-h-screen bg-slate-200">
            <ResposiveLayout>
              <Header />
              <div className="shadow-lg min-h-[calc(100vh-140px)] p-4 mx-10 rounded-lg bg-white">
                {children}
              </div>
            </ResposiveLayout>
          </main>
        </Providers>
      </body>
    </html>
  )
}
