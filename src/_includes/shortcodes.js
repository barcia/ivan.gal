module.exports = {
	vimeo: function(id, description) {
		return `
<figure>
	<iframe src="https://player.vimeo.com/video/${id}" width="100%" height="368" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
	${ description ? description : 'ooo' }
</figure>
		`
	}
}
