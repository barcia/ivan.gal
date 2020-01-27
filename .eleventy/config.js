const pluginRss = require("@11ty/eleventy-plugin-rss");
const now = new Date();



module.exports = function(config) {

	// Plugins
	config.addPlugin(pluginRss);



	// Layouts
	config.addLayoutAlias('base', 'base.html');
	config.addLayoutAlias('page', 'page.html');
	config.addLayoutAlias('tag', 'tag.html');



	// Collections
	const livePosts = post => post.date <= now && !post.data.draft;

	// Collections - blog
	config.addCollection('blog', collection => {
		return collection.getFilteredByGlob(`./src/blog/**/*.md`).filter(livePosts).reverse();
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


	// Shortcodes
	config.addShortcode("img", require("./shortcodes/img") );
	config.addShortcode("vimeo", require("./shortcodes/vimeo"));
	config.addShortcode("album", require("./shortcodes/album"));



	config.addPassthroughCopy({
		'src/assets/img': 'img'
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
