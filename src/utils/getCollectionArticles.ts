import { getCollection } from "astro:content";

const getCollectionArticles = async (slice?: number) => {
	let articles = await getCollection("articles");
	articles.sort(
		(a, b) =>
			new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
	);
	articles = articles.filter((article) => !article.data.draft);
	const articlesList = slice ? articles.slice(0, slice) : articles;
	return articlesList;
}
export default getCollectionArticles;
