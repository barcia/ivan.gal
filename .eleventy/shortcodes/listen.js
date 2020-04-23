// Liste album shortcode.
//
// {% liste "applemusic", "1484552558" %}
// {% liste applemusic="1484552558", spotify="1XDHZqg8gN8KaEB8Vk3wJo" %}

module.exports = function(album) {
	if (album.applemusic && album.spotify) {
		return `<p>
<div class="Listen">
		<a href="https://music.apple.com/es/album/as-catedrais-silenciadas/${album.applemusic}" target="_blank"><img src="/img/apple-music.png"></a>
		<a href="https://open.spotify.com/album/${album.spotify}" target="_blank"><img src="/img/spotify.png"></a>
</div>
</p>
`
	}

	else if (album.applemusic) {
		return `<p>
<div class="Listen">
		<a href="https://music.apple.com/es/album/as-catedrais-silenciadas/${album.applemusic}" target="_blank"><img src="/img/apple-music.png"></a>
</div>
</p>
`
	}

	else if (album.spotify) {
		return `<p>
<div class="Listen">
		<a href="https://open.spotify.com/album/${album.spotify}" target="_blank"><img src="/img/spotify.png"></a>
</div>
</p>
`
	}
};
