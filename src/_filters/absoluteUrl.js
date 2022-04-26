// Convert to absolute URL.
// {{ myRelativeURL | absoluteUrl }}

const site = require(`${process.cwd()}/_data/site`);

module.exports = (relativeUrl, slug) => site.baseURL + (slug ? slug : '') + relativeUrl;
