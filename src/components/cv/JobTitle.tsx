type Props = {
  title: string
  from: string
  to: string
}

export const JobTitle = ({ title, from, to }: Props) => (
  <div className="mb-4">
    <p>{title}</p>
    <p className="text-xs font-light">
      {from} – {to}
    </p>
  </div>
)
