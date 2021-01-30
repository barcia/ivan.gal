// Limit filter to nunjucks.
// Slice the number of elements in an array
// {{ myArray | limit(3) }}

const site = require("../../_data/site");

module.exports = (relativeUrl, slug) => site.baseURL + (slug ? slug : '') + relativeUrl;
