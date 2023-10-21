import rss from '@astrojs/rss';
import { SITE } from '../../config.js'
import { getBlogCollection } from '../../utils/blog.js';

export async function GET(context) {
    const blog = getBlogCollection();

  return rss({
    title: 'Iván Barcia - Blog',
    description: SITE.description,
    site: context.site,
    items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.summary,
        link: `/blog/${post.slug}/`
      })),
    customData: `<language>${SITE.lang}</language>`,
  });
}