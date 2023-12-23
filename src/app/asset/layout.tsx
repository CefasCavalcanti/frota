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
  return <div>{children}</div>
}
