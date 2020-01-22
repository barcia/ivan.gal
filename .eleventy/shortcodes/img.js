// Img shortcode.
// Defaults to format of LLLL d, y unless an
// alternate is passed as a parameter.
// {% img "image.jpg", "alternate text" %}

module.exports = function(src, alt) {
	if (!src || !alt) {
		throw new Error("O shorthand 'img' debe ter 'src' e 'alt'")
	}
	return `<p><img src="https://d286ud17kp7omm.cloudfront.net/imaxes/${src}" alt="${alt}"></p>`
};
