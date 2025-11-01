import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getCollectionArticles from "@/utils/getCollectionArticles";

export async function GET(context: any) {
	console.log("Generating RSS feed", context);
	let articles = await getCollectionArticles();
	return rss({
		title: "Iván Barcia",
		description: "Artigos de Iván Barcia",
		site: context.site,
		items: articles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.pubDate,
			link: `/artigos/${article.id}`,
			description: article.data.description,
		})),
		customData: `<language>gl-es</language>`,
	});
}
