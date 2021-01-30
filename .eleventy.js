const markdownIt = require("markdown-it");
const images = require("./src/images");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const now = new Date();

const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const path = require('path');

const fs = require('fs')

module.exports = function(config) {

  config.addPlugin(pluginRss);

  config.setLibrary("md", customMarkdown());


  config.addFilter( 'formatDate', require("./src/lib/filters/formatDate") );
  config.addFilter( 'limit', require("./src/lib/filters/limit") );
  config.addFilter( 'absoluteUrl', require("./src/lib/filters/absoluteUrl") );

  config.addShortcode("youtube", require("./src/_shortcodes/youtube"));
	config.addShortcode("vimeo", require("./src/_shortcodes/vimeo"));
	config.addShortcode("img", require("./src/_shortcodes/img") );
	config.addPairedShortcode("blockquote", require("./src/_shortcodes/blockquote") );
  config.addPairedShortcode("details", require("./src/_shortcodes/details"));

	config.addCollection('posts', collection => collection.getFilteredByGlob(`./content/posts/**/*.md`).filter(isPublished))

	config.addCollection('postTags', collection => {
    const tagSet = new Set();
    const posts = collection.getFilteredByGlob(`./content/posts/**/*.md`);
    posts.forEach(item => {
      if( "tags" in item.data ) {
        item.data.tags.forEach(tag => tagSet.add(tag));
      }
    })
    return tagSet;
  })

	config.addCollection('photos', collection => collection.getFilteredByGlob(`./content/photos/**/*.md`).filter(isPublished))








  // const entryFiles = path.join(__dirname, './src/index.js');

    config.on('beforeBuild', () => {

        console.log('WEBPACK HERE');

      fs.readFile('./src/style.css', (err, css) => {
        postcss([precss, autoprefixer])
          .process(css, { from: './src/style.css', to: './dist/app.css' })
          .then(result => {
            fs.writeFile('./dist/app.css', result.css, () => true)
            if ( result.map ) {
              fs.writeFile('./dist/app.css.map', result.map.toString(), () => true)
            }
          })
      })

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


function customMarkdown() {
  let markdownItTitle = require("markdown-it-title");
  let options = {
    html: true,
    typographer: true
  };
  return markdownIt(options).use(markdownItTitle).use(images);
}
