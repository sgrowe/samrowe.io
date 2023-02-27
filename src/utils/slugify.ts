export const slugify = (s: string): string =>
  s.toLowerCase().replaceAll(/\W+/g, '-')
