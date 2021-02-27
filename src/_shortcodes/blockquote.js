// Blockquote shortcode.
// {% blockquote "cite" %}
// Content
// {% endblockquote %}

module.exports = function(content, cite) {

	return `
<blockquote>
	${content}
	<cite>${cite}</cite>
</blockquote>
`
};
