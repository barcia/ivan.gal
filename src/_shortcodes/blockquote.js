// Vimeo shortcode.
// {% blockquote "cite" %}
// Content
// {% endblockquote %}

module.exports = function(content, cite) {

	return `
<p>
<blockquote>
${content}
<cite>${cite}</cite>
</blockquote>
</p>
	`
};
