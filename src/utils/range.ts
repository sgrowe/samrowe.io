export const range = (min: number, max: number): readonly number[] => {
  const items = []

  for (let i = min; i <= max; i++) {
    items.push(i)
  }

  return items
}
