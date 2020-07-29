const fs = require('fs');
const prompt = require('prompt');

prompt.start();

prompt.get(['title', 'excerpt'], function (err, result) {
    if (err) { return onErr(err); }

    writefile(result.title, result.excerpt )
});



function writefile(title, excerpt) {

    const date = new Date();
    const ISODate = date.toISOString();

    const filetitle = title.replace(/\s+/g, '-').toLowerCase();
    const filename = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${filetitle}.md`

    const content =
`---
title: ${title}
date: ${ISODate}
excerpt: ${excerpt}
---
`

    fs.writeFileSync(filename, content);
}


function onErr(err) {
    console.log(err);
    return 1;
}
