document.addEventListener('DOMContentLoaded', () => {
	const privacy = document.querySelector('#privacy');
	const submit = document.querySelector('#submit');

	if (privacy && submit) {
		privacy.addEventListener('change', () => {
			submit.disabled = !privacy.checked;
		});
	}
});
