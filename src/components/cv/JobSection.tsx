import type { ReactNode } from 'react'
import { CvH3 } from './CVSubHeading'
import { JobTitle } from './JobTitle'

type Props = {
  company: string
  children: ReactNode
  roles: ReadonlyArray<Role>
}

type Role = {
  title: string
  from: string
  to: string
}

export const JobSection = ({ company, roles, children }: Props) => (
  <section className="group relative mb-8">
    <CvH3 text={company} />

    <div className="pb-2">
      {roles.map(({ title, from, to }, i) => (
        <JobTitle key={i} title={title} from={from} to={to} />
      ))}
    </div>

    {children}
  </section>
)
