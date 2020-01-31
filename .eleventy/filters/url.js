// Limit filter to nunjucks.
// Slice the number of elements in an array
// {{ url | limit(3) }}

const site = require("../../src/_data/site");

module.exports = (relativeUrl, type, slug) => {

	switch (type) {
		case 'absolute':
			const baseURL = site.baseURL;
			break;
		case 'tag':
			const baseURL = '/temas/';
			break;
		case 'image':
			const baseURL = site.imagesURL;
			break;
		default:
			break;
	}

	return baseURL + (slug ? slug : '') + relativeUrl;
}
