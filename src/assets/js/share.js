document.addEventListener('DOMContentLoaded', () => {
	const share = document.querySelector('#share');

	if (share) {
		const button = document.querySelector('button');

		if (navigator.share && button) {
			button.addEventListener('click', () => {
				navigator.share({
					title: button.dataset.shareTitle,
					text: button.dataset.shareText,
					url: button.dataset.shareUrl,
				})
					.then(() => console.log('Successful share'))
					.catch((error) => console.log('Error sharing', error));
			});
		} else {
			share.hidden = true;
		}
	}
});
