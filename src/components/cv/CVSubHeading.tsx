export const CvH3 = ({ text, href }: { text: string; href: string }) => (
  <h3
    id={text.toLowerCase().replace(/\s+/g, '-')}
    className="mb-2 text-sm+ font-bold"
  >
    <a href={href}>{text}</a>
  </h3>
)
