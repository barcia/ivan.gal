const Parcel = require('parcel-bundler')

const entryFiles = ['src/assets/main.js'];

let options;
if (process.env.NODE_ENV === 'development') {
	options = {
		watch: true,
		hmr: true,
		sourceMaps: true,
	}
} else {
	options = {
		watch: false,
		sourceMaps: false,
	}
}

module.exports = async function() {
	const bundler = new Parcel(entryFiles, options);
	const bundle = await bundler.bundle();
};
