import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

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

export const collections = { articles, photos };
