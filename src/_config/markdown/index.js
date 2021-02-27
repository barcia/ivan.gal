const markdownIt = require("markdown-it");
const images = require("./images");

module.exports = customMarkdown = () => {
    let options = {
      html: true,
      linkify: true,
      typographer: true,
      quotes: '«»‘’',
    };
    return markdownIt(options).use(images);
}
