const fs = require('fs')

const pluginRss = require("@11ty/eleventy-plugin-rss");
const now = new Date();

const mdLibrary = require('./src/_config/markdown/index')
const css = require('./scripts/css.js');


module.exports = function(config) {

  config.addPlugin(pluginRss);

  config.setLibrary("md", mdLibrary());

  config.addFilter( 'formatDate', require("./src/_filters/formatDate") );
  config.addFilter( 'limit', require("./src/_filters/limit") );
  config.addFilter( 'absoluteUrl', require("./src/_filters/absoluteUrl") );

  config.addShortcode("youtube", require("./src/_shortcodes/youtube"));
	config.addShortcode("vimeo", require("./src/_shortcodes/vimeo"));
	config.addShortcode("img", require("./src/_shortcodes/img") );
	config.addPairedShortcode("blockquote", require("./src/_shortcodes/blockquote") );
	config.addPairedShortcode("figure", require("./src/_shortcodes/figure") );
  config.addPairedShortcode("details", require("./src/_shortcodes/details"));

	config.addCollection('posts', collection => collection.getFilteredByGlob(`./content/posts/**/*.md`).filter(isPublished))

	config.addCollection('postTags', collection => {
    const tagSet = new Set();
    const posts = collection.getFilteredByGlob(`./content/posts/**/*.md`);
    posts.forEach(item => { if( "tags" in item.data ) item.data.tags.forEach(tag => tagSet.add(tag)) })
    return tagSet;
  })

	config.addCollection('photos', collection => collection.getFilteredByGlob(`./content/photos/**/*.md`).filter(isPublished))

  config.addCollection('photoTags', collection => {
    const tagSet = new Set();
    const posts = collection.getFilteredByGlob(`./content/photos/**/*.md`);
    posts.forEach(item => { if( "tags" in item.data ) item.data.tags.forEach(tag => tagSet.add(tag)) })
    return tagSet;
  })


  config.addWatchTarget("./src/_assets/");


  config.on('beforeBuild', () => {
      fs.rmdir('dist', { recursive: true }, (err) => { if (err) throw err });
      // fs.mkdirSync('dist', 0744);
      css()
  });

  config.on('beforeWatch', () => {
      css()
  });


    return {
      dir: {
        output: "dist",
        layouts: "src/_layouts",
        includes: "src/_includes",
        data: "src/_data",
      },
      dataTemplateEngine: "njk",
			markdownTemplateEngine: "njk",
			htmlTemplateEngine: "njk"
    };
  };




/**
 * Return true if the published date is earlier than now
 * and if it does not have the 'draft: true' attribute
 * @param {*} item - An eleventy collection array
 */
function isPublished(item) {
  return item.date <= now && !item.data.draft;
}
