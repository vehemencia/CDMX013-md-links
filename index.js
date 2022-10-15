const fs = require('fs');
const path = require('path');
const process = require('process');

// Reading content from a file
fs.readFile('documents/music-sources.md', 'utf-8', (error, data) => {
    if (!error) {
        console.log(data);
    } else console.log(error);
});

// Determining the extension from a document
// console.log(path.extname('documents/music-sources.md'));

// Reading content inside a folder
// fs.readdir('C:/Users/Maria A. Ramirez/Documents/Laboratoria/Proyecto 4/CDMX013-md-links/documents', (error, files) => {
//     console.log(files);
//     files.forEach(document => {
//         if (path.extname(document) == '.md') {
//             console.log(document);
//         };
//     })
// });

// function mdLinks(path, options){

// }