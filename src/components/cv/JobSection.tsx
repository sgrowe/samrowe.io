import type { ReactNode } from 'react'
import { CvH3 } from './CVSubHeading'
import { JobTitle } from './JobTitle'

type Props = {
  company: string
  roles: ReadonlyArray<Role>
  fadeInStep: number
  children: ReactNode
}

type Role = {
  title: string
  from: string
  to: string
}

export const JobSection = ({ company, roles, fadeInStep, children }: Props) => (
  <section
    className="group relative mb-8 animate-fade-in"
    style={{
      '--fade-in-step': fadeInStep,
    }}
  >
    <CvH3 text={company} />

    <div className="pb-2">
      {roles.map(({ title, from, to }, i) => (
        <JobTitle key={i} title={title} from={from} to={to} />
      ))}
    </div>

    {children}
  </section>
)
