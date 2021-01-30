const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const path = require('path');
const fs = require('fs')


fs.readFile('./src/style.css', (err, css) => {
    postcss([precss, autoprefixer])
      .process(css, { from: './src/style.css', to: './dist/app.css' })
      .then(result => {
        fs.writeFile('./dist/appy.css', result.css, () => true)
        if ( result.map ) {
          fs.writeFile(path.join(__dirname, 'app.css.map'), result.map.toString(), () => true)
        }
      })
  })
