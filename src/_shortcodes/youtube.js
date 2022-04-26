// Youtube shortcode.
// {% youtube "3RqqnbmG58A" %}

module.exports = function(id, figcaption, aspectRatio) {
return `
<figure class="Embed">
<iframe ${aspectRatio ? `style="aspect-ratio: ${aspectRatio};"` : ''} src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
${figcaption ? `<figcaption>${figcaption}</figcaption>` : ''}
</figure>
`
};
