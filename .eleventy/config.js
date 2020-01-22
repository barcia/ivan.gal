const pluginRss = require("@11ty/eleventy-plugin-rss");
const now = new Date();



module.exports = function(config) {

	// Plugins
	config.addPlugin(pluginRss);



	// Layouts
	config.addLayoutAlias('default', 'base.html');
	config.addLayoutAlias('page', 'page.html');



	// Collections
	const livePosts = post => post.date <= now && !post.data.draft;

	// Collections - notes
	config.addCollection('notes', collection => {
		return collection.getFilteredByGlob(`./src/notes/**/*.md`).filter(livePosts).reverse();
	})

	// Collections - articles
	config.addCollection('articles', collection => {
		return collection.getFilteredByGlob(`.src/articles/**/*.md`).filter(livePosts).reverse();
	})

	// Collections - articles and notes
	config.addCollection('posts', collection => {
		return collection.getFilteredByGlob([`.src/articles/**/*.md`, `.src/notes/**/*.md`]).filter(livePosts).reverse();
	})

	// Collections - pages
	config.addCollection('pages', collection => {
		return collection.getFilteredByGlob([`.src/pages/**/*.html`, `.src/pages/**/*.md`]).filter(livePosts);
	})



	// Filters
	config.addFilter( 'limit', require("./filters/limit") );
	config.addFilter( 'date', require("./filters/date") );


	// Shortcodes
	config.addShortcode("img", require("./shortcodes/img") );
	config.addShortcode("vimeo", require("./shortcodes/vimeo"));



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
