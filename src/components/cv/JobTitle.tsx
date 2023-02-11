type Props = {
  title: string
  from: string
  to: string
}

export const JobTitle = ({ title, from, to }: Props) => (
  <div>
    <p>{title}</p>
    <p className="mb-4 text-xs font-light">
      {from} – {to}
    </p>
  </div>
)
