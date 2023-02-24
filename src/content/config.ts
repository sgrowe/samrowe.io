import { defineCollection, z } from 'astro:content'

const thoughts = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
  }),
})

export const collections = {
  thoughts,
}
