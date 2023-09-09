import { ReactNode } from 'react'

function ActiveLink({ children, href }: { children: ReactNode; href: string }) {
  const style = {
    marginRight: 10
  }

  return (
    <a href={href} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
