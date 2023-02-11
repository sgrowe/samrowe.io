import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export const CVSection = ({ title, children }: Props) => (
  <section
    id={title.toLowerCase().replace(/\s+/g, '-')}
    className="mt-10 border-t-[1.5px] border-gray-700 pt-2"
  >
    <h2 className="mb-4 text-sm font-light italic">{title}</h2>
    {children}
  </section>
)
