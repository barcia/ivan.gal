const fs = require('fs');
const esbuild = require('esbuild')
const swc = require("@swc/core");

// const result =  esbuild.transformSync(, {})


fs.mkdir('./_site', { recursive: true }, (err) => {
	if (err) throw err;
  });

let result = esbuild.buildSync({
	entryPoints: ['src/_assets/js/index.js'],
	bundle: true,
	write: false,
})

// console.log('RESULT', result.outputFiles[0].text);


// console.log('RESULT', process.stdout.write(out.code));




swc.transform(result.outputFiles[0].text, {
	sourceMaps: true,
	isModule: false,
	minify: true,
})
  .then((output) => {
	//   console.log(output.code)

	  fs.writeFileSync( './_site/main.js', output.code )
    // output.code;
    // output.map;
  });





// swc
//   .transform(result, {
//     // Some options cannot be specified in .swcrc
//     sourceMaps: true,
//     // Input files are treated as module by default.
//     isModule: false,

//     // All options below can be configured via .swcrc
//     jsc: {
//       parser: {
//         syntax: "ecmascript",
//       },
//       transform: {},
//     },
//   })
//   .then((output) => {
//     output.code; // transformed code
//     output.map; // source map (in string)
//   });
