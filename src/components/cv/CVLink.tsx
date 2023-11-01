import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
}

export const CVLink = ({ href, children }: Props) => (
  <a className="text-blue-500 hover:underline" href={href}>
    {children}
  </a>
)
