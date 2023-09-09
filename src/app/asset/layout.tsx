import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assets',
  description: 'Assets controller'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <main className="flex box-border  justify-start">{children}</main>
}
