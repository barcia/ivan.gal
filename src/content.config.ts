// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content/blog" }),
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

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
