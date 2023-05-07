import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
  fadeInTitleStep?: number
}

export const CVSection = ({ title, children, fadeInTitleStep = 10 }: Props) => (
  <section
    id={title.toLowerCase().replace(/\s+/g, '-')}
    className="mt-10"
    style={{
      '--fade-in-step': fadeInTitleStep,
    }}
  >
    <h2 className="mb-4 animate-fade-in border-t-[1.5px] border-gray-700 pt-2 text-sm font-light italic">
      {title}
    </h2>
    {children}
  </section>
)
