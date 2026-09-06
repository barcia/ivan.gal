import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import getCollectionArticles from "@/utils/getCollectionArticles";

export async function GET(context: APIContext) {
	const site = context.site;
	if (!site) {
		throw new Error("`site` must be set in astro.config.mjs to build the RSS feed.");
	}

	const articles = await getCollectionArticles();

	return rss({
		title: "Iván Barcia",
		description: "Artigos de Iván Barcia",
		site,
		items: articles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.pubDate,
			link: `/artigos/${article.id}`,
			description: article.data.description,
		})),
		customData: `<language>gl-es</language>`,
	});
}
