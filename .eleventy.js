// const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const now = new Date();

const shortcodes = require('./src/_includes/shortcodes.js');


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
	eleventyConfig.addCollection('notes', collection => {
		return collection.getFilteredByGlob(`${config.dir.input}notes/**/*.md`).filter(page => page.date <= now && !page.data.draft).reverse();
	})

	eleventyConfig.addCollection('articles', collection => {
		return collection.getFilteredByGlob(`${config.dir.input}articles/**/*.md`).filter(page => page.date <= now && !page.data.draft).reverse();
	})


	// Shortcodes
	eleventyConfig.addShortcode("vimeo", function(id, description) {
		return `
<figure class="Embed">
	<iframe src="https://player.vimeo.com/video/${id}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</figure>
		`
});

	eleventyConfig.addShortcode("img", function(src, alt) {
		if (!src || !alt) {
			throw Error("El shorthand 'img' debe ter 'src' y 'alt'")
		}
		return `<p><img src="https://d286ud17kp7omm.cloudfront.net/imaxes/${src}" alt="${alt}"></p>`
});

  // Shortcodes
  // Object.keys(shortcodes).forEach(shortCodeName => {
  //   eleventyConfig.addShortcode(shortCodeName, shortcodes[shortCodeName]);
  // });

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
