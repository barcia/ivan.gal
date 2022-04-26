const markdownIt = require("markdown-it");

function lazy_loading_plugin(md, options) {
  var defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = function (tokens, idx, options, env, self) {

    const token = tokens[idx];
    const src = token.attrs[0][1]

    // Set absolute path for relative paths
    // if (!isAbsolutePath(src)) token.attrSet('src', `https://cdn.ivan.gal/imaxes/${src}`);

    // Add lazy load
    token.attrSet('loading', 'lazy');

    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};


function isAbsolutePath(path) {
  return /^(?:\/|[a-z]+:\/\/)/.test(path);
}





module.exports = customMarkdown = () => {
    let options = {
      html: true,
      linkify: true,
      typographer: true,
      quotes: '«»‘’',
    };
    return markdownIt(options).use(lazy_loading_plugin);
}
