// Convert to absolute URL.
// {{ myRelativeURL | absoluteUrl }}

const site = require(`${process.cwd()}/src/_data/site`);

module.exports = (relativeUrl, slug) => site.baseURL + (slug ? slug : '') + relativeUrl;
