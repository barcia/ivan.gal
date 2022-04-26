const fs = require('fs')

const pluginRss = require("@11ty/eleventy-plugin-rss");


const mdLibrary = require('./src/_config/markdown')


/**
 * Return true if the published date is earlier than now
 * and if it does not have the 'draft: true' attribute
 * @param {*} item - An eleventy collection array
 */
const isPublished = item => {
	const now = new Date();
	return item.date <= now && !item.data.draft;
}



module.exports = function(config) {

	config.addPlugin(pluginRss);

	config.setLibrary("md", mdLibrary());

	config.addFilter("formatDate", require("./src/_filters/formatDate") );
	config.addFilter("limit", require("./src/_filters/limit") );
	config.addFilter("absUrl", require("./src/_filters/absoluteUrl") );
	config.addFilter("getYear", dateObj => dateObj.getFullYear());
	config.addFilter("getMonth", dateObj =>
		String(dateObj.getMonth() + 1).padStart(2, "0")
	);

	config.addShortcode("youtube", require("./src/_shortcodes/youtube"));
	config.addShortcode("vimeo", require("./src/_shortcodes/vimeo"));
	config.addPairedShortcode("figure", require("./src/_shortcodes/figure") );
// 	config.addShortcode("img", require("./src/_shortcodes/img") );
// 	config.addPairedShortcode("blockquote", require("./src/_shortcodes/blockquote") );
//   config.addPairedShortcode("details", require("./src/_shortcodes/details"));

	config.addPassthroughCopy({ "_content/files/": "./" });

	config.addCollection('articles', collection => collection.getFilteredByGlob(`./_content/articles/*.md`).filter(isPublished))
	config.addCollection('notes', collection => collection.getFilteredByGlob(`./_content/notes/**/*.md`).filter(isPublished))
	config.addCollection('content', collection => collection.getFilteredByGlob(`./_content/**/*.md`).filter(isPublished))

// 	config.addCollection('postTags', collection => {
//     const tagSet = new Set();
//     const posts = collection.getFilteredByGlob(`./content/posts/**/*.md`);
//     posts.forEach(item => { if( "tags" in item.data ) item.data.tags.forEach(tag => tagSet.add(tag)) })
//     return tagSet;
//   })

// 	config.addCollection('photos', collection => collection.getFilteredByGlob(`./content/photos/**/*.md`).filter(isPublished))

//   config.addCollection('photoTags', collection => {
//     const tagSet = new Set();
//     const posts = collection.getFilteredByGlob(`./content/photos/**/*.md`);
//     posts.forEach(item => { if( "tags" in item.data ) item.data.tags.forEach(tag => tagSet.add(tag)) })
//     return tagSet;
//   })

//   config.addPassthroughCopy({ "src/_assets/font": "font" });

	config.addWatchTarget("./src/_assets/");

	// config.on('beforeBuild', () => {
	//     fs.rm('_site', { recursive: true }, (err) => { if (err) throw err });
	//     // fs.mkdirSync('dist', 0744);
	//     // css()
	// });

//   config.on('beforeWatch', () => {
//       css()
//   });


		return {
			dir: {
				// output: "dist",
				layouts: "src/_layouts",
				includes: "src/_includes",
				data: "_data",
			},
			dataTemplateEngine: "njk",
			markdownTemplateEngine: "njk",
			htmlTemplateEngine: "njk"
		};
	};
