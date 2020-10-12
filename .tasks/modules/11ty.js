const Eleventy = require('@11ty/eleventy')

module.exports = async function() {
	const eleventy = new Eleventy();
	await eleventy.init()
	await eleventy.write()
}
