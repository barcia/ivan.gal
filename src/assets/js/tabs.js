document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('#tabs');

	if (tabs) {
		const menu = tabs.querySelector('#tabs-menu');
		const menuItems = menu.querySelectorAll('[data-content]');
		const content = tabs.querySelector('#tabs-content');
		const contentItems = content.querySelectorAll('[id^="content"]');

		menuItems.forEach((item, index) => {
			const element = content.querySelector(`#${item.dataset.content}`);

			index === 1 ? item.classList.add('is-active') : element.hidden = true;

			item.addEventListener('click', () => {
				hiddeAll(menuItems, contentItems);
				item.classList.add('is-active');
				element.hidden = false;
			});
		});
	}
});

function hiddeAll(menuItems, contentItems) {
	menuItems.forEach((item) => {
		item.classList.remove('is-active');
	});

	contentItems.forEach((item) => {
		item.hidden = true;
	});
}
