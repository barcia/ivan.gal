const pluginRss = require("@11ty/eleventy-plugin-rss");
const now = new Date();



module.exports = function(config) {

	// Plugins
	config.addPlugin(pluginRss);



	// Layouts
	config.addLayoutAlias('base', 'base.html');
	config.addLayoutAlias('page', 'page.html');
	config.addLayoutAlias('blog', 'blog.html');
	config.addLayoutAlias('tag', 'tag.html');



	// Collections
	const livePosts = post => post.date <= now && !post.data.draft;

	// Collections - blog
	config.addCollection('blog', collection => {
		return collection.getFilteredByGlob(`./src/content/posts/**/*.md`).filter(livePosts).reverse();
	})

	// Collections - pages
	config.addCollection('pages', collection => {
		return collection.getFilteredByGlob([`./src/pages/**/*.html`, `./src/pages/**/*.md`]).filter(livePosts);
	})

	// Collections - tags
	config.addCollection("tagList", require("./collections/tags"));



	// Filters
	config.addFilter( 'limit', require("./filters/limit") );
	config.addFilter( 'date', require("./filters/date") );
	config.addFilter( 'absoluteUrl', require("./filters/absoluteUrl") );
	config.addFilter( 'imageUrl', require("./filters/imageUrl") );
	config.addFilter( 'prependSlug', require("./filters/prependSlug") );


	// Shortcodes
	config.addShortcode("img", require("./shortcodes/img") );
	config.addShortcode("youtube", require("./shortcodes/youtube"));
	config.addShortcode("vimeo", require("./shortcodes/vimeo"));
	config.addShortcode("album", require("./shortcodes/album"));
	config.addShortcode("listen", require("./shortcodes/listen"));
	config.addPairedShortcode("details", require("./shortcodes/details"));
	config.addPairedShortcode("blockquote", require("./shortcodes/blockquote"));



	config.addPassthroughCopy({
		'src/public': '/'
	});



	return {
			dir: {
				input: 'src',
				output: 'dist',
				layouts: '_layouts',
			},
			dataTemplateEngine: "njk",
			markdownTemplateEngine: "njk",
			htmlTemplateEngine: "njk"
	}
}
