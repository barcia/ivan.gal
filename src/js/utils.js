export const formatPosts = (posts, {
    drafts = false,
    future = false,
    sortByDate = true,
    limit = undefined
} = {}) => {

    const filteredPosts = posts.reduce((acc, post) => {
        console.log(post);
        if (post.data.draft && !drafts) {
            return acc;
        }
        if (post.data.pubDate > Date.now() && !future) {
            return acc;
        }
        acc.push(post);
        return acc;
    }, [])

    if (sortByDate) {
        filteredPosts.sort((a, b) => {
            return new Date(b.data.pubDate) - new Date(a.data.pubDate);
        })
    }

    if (limit) {
        return filteredPosts.slice(0, limit);
    }

    return filteredPosts;
}