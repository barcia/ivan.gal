import rss from '@astrojs/rss';
import { SITE } from '../config.js'
import { getBlogCollection } from '../utils/blog.js';

export async function GET(context) {
    const blog = getBlogCollection();

  return rss({
    // `<title>` field in output xml
    title: 'Iván Barcia - Blog',
    // `<description>` field in output xml
    description: SITE.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: 'sadsdfsdf',
        // customData: post.data.customData,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/blog/${post.slug}/`
      })),
    // (optional) inject custom xml
    customData: `<language>${SITE.lang}</language>`,
  });
}