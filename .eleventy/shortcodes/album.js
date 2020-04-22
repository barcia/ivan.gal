// Music album shortcode.
//
// {% album "applemusic", "1484552558" %}
// {% album applemusic="1484552558", spotify="1XDHZqg8gN8KaEB8Vk3wJo" %}

module.exports = function(album) {
	if (album.applemusic && album.spotify) {
		return `<p><div id="tabs">
		<nav class="l-marginBottom-16">
			<ul class="Tabs" id="tabs-menu">
				<li><button class="Button Button--small" data-content="content-applemusic">Apple Music</button></li>
				<li><button class="Button Button--small" data-content="content-spotify">Spotify</button></li>
			</ul>
		</nav>
		<div id="tabs-content">
			<div id="content-applemusic">
			<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/es/album/${album.applemusic}"></iframe>
			</div>
			<div id="content-spotify">
			<iframe src="https://open.spotify.com/embed/album/${album.spotify}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			</div>
		</div>
	</div></p>
`
	}

	else if (album.applemusic) {
		return `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/es/album/${album.applemusic}"></iframe>`
	}

	else if (album.spotify) {
		return `<iframe src="https://open.spotify.com/embed/album/${album.spotify}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
	}
};
