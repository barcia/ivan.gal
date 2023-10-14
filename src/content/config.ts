import { defineCollection, z } from 'astro:content'
// import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
	// Type-check frontmatter using a schema
    type: 'content',
	schema: () =>
		z.object({
			title: z.string().max(80),
			tags: z.array(z.string()).optional(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }