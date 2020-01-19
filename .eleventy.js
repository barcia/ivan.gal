const pluginRss = require("@11ty/eleventy-plugin-rss");
const now = new Date();

config = {
  dir: {
		input: 'src/',
		output: 'dist/',
		layouts: '_layouts',
  }
}

module.exports = function(eleventyConfig) {

	// Plugins
	eleventyConfig.addPlugin(pluginRss);



	// Collections
	// Collections - notes
	eleventyConfig.addCollection('notes', collection => {
		return collection.getFilteredByGlob(`${config.dir.input}notes/**/*.md`).filter(page => page.date <= now && !page.data.draft).reverse();
	})

	// Collections - articles
	eleventyConfig.addCollection('articles', collection => {
		return collection.getFilteredByGlob(`${config.dir.input}articles/**/*.md`).filter(page => page.date <= now && !page.data.draft).reverse();
	})

	// Collections - articles and notes
	eleventyConfig.addCollection('posts', collection => {
		return collection.getFilteredByGlob([`${config.dir.input}articles/**/*.md`, `${config.dir.input}notes/**/*.md`]).filter(page => page.date <= now && !page.data.draft).reverse();
	})

	// Collections - pages
	eleventyConfig.addCollection('pages', collection => {
		return collection.getFilteredByGlob([`${config.dir.input}pages/**/*.html`, `${config.dir.input}pages/**/*.md`]).filter(page => !page.data.draft);
	})



	// Shortcodes
	// vimeo
	eleventyConfig.addShortcode("vimeo", function(id, description) {
		return `
<figure class="Embed">
	<iframe src="https://player.vimeo.com/video/${id}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</figure>
		`
});

	// img
	eleventyConfig.addShortcode("img", function(src, alt) {
		if (!src || !alt) {
			throw Error("O shorthand 'img' debe ter 'src' e 'alt'")
		}
		return `<p><img src="https://d286ud17kp7omm.cloudfront.net/imaxes/${src}" alt="${alt}"></p>`
});



	eleventyConfig.addPassthroughCopy({
		'src/assets/img': 'img'
	});



	return {
			dir: {
					input: config.dir.input,
					output: config.dir.output,
					layouts: config.dir.layouts,
			}
	}
}
