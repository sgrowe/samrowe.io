export const CvH3 = ({ text }: { text: string }) => (
  <h3
    id={text.toLowerCase().replace(/\s+/g, "-")}
    className="mb-1.5 text-sm+ font-bold"
  >
    {text}
  </h3>
)
