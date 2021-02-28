// Details shortcode.
// {% details "My summary" %}
// Content
// {% enddetails %}

module.exports = function(content, summary) {
	if (!summary) {
		throw new Error("Details shortcode needs a summary")
	}

	return `
<details>
<summary>${summary}</summary>
${content}
</details>
	`
};
