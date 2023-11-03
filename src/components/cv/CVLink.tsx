type Props = {
  href: string
  text: string
}

export const CVLink = ({ href, text }: Props) => (
  <a className="text-blue-500 hover:underline" href={href}>
    {text}
  </a>
)
