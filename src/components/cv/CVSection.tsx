import type { ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
}

export const CVSection = ({ title, children }: Props) => (
  <section className="mt-6 border-t-2 border-gray-900 pt-2">
    <h2 className="mb-4 italic">{title}</h2>
    {children}
  </section>
)
