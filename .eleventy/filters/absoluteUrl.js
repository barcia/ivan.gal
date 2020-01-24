// Limit filter to nunjucks.
// Slice the number of elements in an array
// {{ myArray | limit(3) }}

const site = require("../../src/_data/site");

module.exports = (relativeUrl) => site.baseURL + relativeUrl;
