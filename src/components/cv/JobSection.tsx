import type React from 'react'
import type { ReactNode } from 'react'
import { CvH3 } from './CVSubHeading'
import { JobTitle } from './JobTitle'

type Props = {
  company: string
  companyLink: string
  techLogos?: ReadonlyArray<React.FC<{}>>
  techUsed?: ReadonlyArray<string>
  roles: ReadonlyArray<Role>
  fadeInStep: number
  children: ReactNode
}

type Role = {
  title: string
  from: string
  to: string
}

export const JobSection = ({
  company,
  companyLink,
  techLogos,
  techUsed,
  roles,
  fadeInStep,
  children,
}: Props) => (
  <section
    className="group relative mb-8 animate-fade-in"
    style={{
      '--fade-in-step': fadeInStep,
    }}
  >
    <div className="grid grid-cols-2">
      <div>
        <CvH3 text={company} href={companyLink} />

        <div className="pb-2">
          {roles.map(({ title, from, to }, i) => (
            <JobTitle key={i} title={title} from={from} to={to} />
          ))}
        </div>
      </div>

      {/* <div className="mb-4 grid grid-cols-[repeat(auto-fill,_3rem)] transition-[opacity,_filter] duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:duration-700"> */}
      <div className="mb-4 flex flex-row flex-wrap justify-end">
        {techLogos?.map((T, i) => (
          <div className="h-12 w-12" key={i}>
            <T />
          </div>
        ))}
      </div>
    </div>

    {techUsed?.length ? (
      <p className="mb-4">
        <strong>Technologies used:</strong> {techUsed.join(', ')}.
      </p>
    ) : null}

    {children}
  </section>
)
