// Vimeo shortcode.
// {% vimeo "13dfnsksa" %}

module.exports = function(id, figcaption, aspectRatio) {
  return `
<figure class="Embed">
<iframe ${aspectRatio ? `style="aspect-ratio: ${aspectRatio};"` : ''} src="https://player.vimeo.com/video/${id}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>
${figcaption ? `<figcaption>${figcaption}</figcaption>` : ''}
</figure>
	`
};
