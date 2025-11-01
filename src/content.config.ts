// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const articles = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content/articles" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.string().transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.transform((val) => new Date(val))
				.optional(),
			image: z.string().optional(),
			draft: z.boolean().default(false),
			cover: image().optional(),
		}),
});

const photos = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content/photos" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.string().transform((val) => new Date(val)),
			cover: image().optional(),
			draft: z.boolean().default(false),
		}),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { articles, photos };
