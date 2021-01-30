// Img shortcode.
// Defaults to format of LLLL d, y unless an
// alternate is passed as a parameter.
// {% img "image.jpg", "alternate text" %}

const site = require("../../src/_data/site");

module.exports = function(src, alt) {
	if (!src || !alt) {
		throw new Error("O shorthand 'img' debe ter 'src' e 'alt'")
	}
	return `<p><img src="${site.imagesURL}${src}" alt="${alt}"></p>`
};
