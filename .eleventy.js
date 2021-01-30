const markdownIt = require("markdown-it");
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


  config.addFilter( 'formatDate', require("./lib/filters/formatDate") );
  config.addFilter( 'limit', require("./lib/filters/limit") );
  config.addFilter( 'absoluteUrl', require("./lib/filters/absoluteUrl") );


	config.addCollection('posts', collection => {
    const posts = collection.getFilteredByGlob(`./content/posts/**/*.md`).filter(isPublished);
    posts.forEach(post => addTitle(post))
    return posts;
  })

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

	config.addCollection('photos', collection => {
    return collection.getFilteredByGlob(`./content/photos/**/*.md`).filter(isPublished);
	})








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
        layouts: "_layouts"
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
  return markdownIt(options).use(markdownItTitle);
}


/**
 * Add as title the first H1 in the markdown document
 */
function addTitle(post) {
  if (! post.data.title) {
    let env = {}
    customMarkdown().render(post.template.frontMatter.content, env);
    post.data.title = env.title
  }
}
