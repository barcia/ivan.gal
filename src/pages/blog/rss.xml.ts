import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
	console.log("Generating RSS feed", context);
	let posts = await getCollection("blog");
	posts.sort(
		(a, b) =>
			new Date(b.data.pubDate).getTime() -
			new Date(a.data.pubDate).getTime(),
	);
	posts = posts.filter((post) => !post.data.draft);
	return rss({
		title: "Iván Barcia",
		description: "Blog de Iván Barcia",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}`,
			description: post.data.description,
		})),
		customData: `<language>gl-es</language>`,
	});
}
