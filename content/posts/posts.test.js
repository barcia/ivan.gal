const { promises: fs } = require('fs');
const path = require('path');
const grayMatter = require('gray-matter');
const { matchers } = require('jest-json-schema');
expect.extend(matchers);




async function getFiles(route = `${process.cwd()}/content/posts/`) {
  const entries = await fs.readdir(route, { withFileTypes: true });

  // Get files within the current directory and add a path key to the file objects

  const files = entries
      .filter(file => !file.isDirectory())
      .filter(file => path.extname(file.name) === '.md')
      .map(file => ({ ...file, path: route + file.name }));

  // Get folders within the current directory
  const folders = entries.filter(folder => folder.isDirectory());

  for (const folder of folders)
      /*
        Add the found files within the subdirectory to the files array by calling the
        current function itself
      */
      files.push(...await getFiles(`${route}${folder.name}/`));

  return files;
}



// test('schema is valid', () => {

//   schema2.then( data => {
//     const myschema = JSON.parse(data);
//     expect(myschema).toBeValidSchema();
//   })

// });


// test('post frontmatter', () => {


//   return getFiles().then(files => {

//     schema2.then( data => {
//       const myschema = JSON.parse(data);

//       files.forEach(file => {
//         const myitem = fs.readFile(file.path)

//         myitem.then(data => {
//           const matter = grayMatter(data.toString())

//           // expect('3').toBe('3');
//           try {
//             expect(matter.data).toMatchSchema(myschema);
//           } catch (error) {
//             expect(error).toEqual(new Error());
//           }

//         })

//       });
//     })

//   });

// });



test('All post front-matters are valid', () => {

  const schema = async () => fs.readFile(path.join(__dirname, 'posts.schema.json')).then( data => JSON.parse(data));

  schema.then( mySchema => {

    const files = getFiles();

    files.then(myFiles => {
      myFiles.forEach(file => {
        const archive = fs.readFile(file.path).toString()

        archive.then(data => {
          const matter = grayMatter(data)
          expect(matter).toMatchSchema(mySchema);
        })
      })
    })

  })

});


// test('post frontmatter', () => {

//   schema().then( data => {
//     console.log(data);
//   })

//   const invalidData = {
//     name: null,
//     dob: '02-29-2000',
//   };

//   expect(invalidData).toMatchSchema(schema);
// });
