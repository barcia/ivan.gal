import { defineCollection, z } from 'astro:content'
const categories = ['videos', 'meta'] as const;

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
			category: z.enum(categories),
			summary: z.string().max(200),
			draft: z.boolean().default(false)
		}),
})

const photos = defineCollection({
	// Type-check frontmatter using a schema
    type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			slug: z.string(),
			cover: image(),
			images: z.array( z.object({
				src: image(),
				alt: z.string(),
				title: z.string(),
			})),
		}),
})

export const collections = { blog, photos }
