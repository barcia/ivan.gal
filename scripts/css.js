const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")
const autoprefixer = require("autoprefixer")

const entry = process.cwd()+'/src/_assets/css/main.css';
const dist = process.cwd()+'/dist/app';

module.exports = () => { fs.readFile(entry, (err, css) => {
  // Default
  postcss([atImport, autoprefixer])
    .process(css, { from: entry, to: `${dist}.css` })
    .then(result => {
        fs.writeFile(`${dist}.css`, result.css, () => true)
        if ( result.map ) fs.writeFile(`${dist}.css.map`, result.map.toString(), () => true)
    })
})}
