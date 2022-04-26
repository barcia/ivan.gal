// Blockquote shortcode.
// {% figure "figcaption" %}
// img
// {% endfigure %}

module.exports = function(img, figcaption) {

	return `
<figure>
${img}
<figcaption>${figcaption}</figcaption>
</figure>
`
};
