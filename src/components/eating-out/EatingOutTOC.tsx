import type { Venue } from './EatingOutVenue'

type Props = {
  venues: readonly Venue[]
}

export const EatingOutTOC = ({ venues }: Props) => {
  return (
    <ul className="flex flex-col gap-3">
      {venues.map(({ name, slug }) => (
        <li key={slug}>
          <a href={`#${slug}`} className="group py-1">
            {name}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
