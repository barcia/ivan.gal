import { getCollection } from "astro:content";

const getCollectionPhotos = async (slice?: number) => {
	let sessions = await getCollection("photos");
	sessions.sort(
		(a, b) =>
			new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
	);
	sessions = sessions.filter((post) => !post.data.draft);
	const postsList = slice ? sessions.slice(0, slice) : sessions;
	return postsList;
};

export default getCollectionPhotos;
