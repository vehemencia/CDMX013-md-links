const fs = require('fs');
const path = require('path');
const process = require('process');

// Reading content from a file
// fs.readFile('documents/music-sources.md', 'utf-8', (error, data) => {
//     if (!error) {
//         console.log(data);
//     } else console.log(error);
// });

// Determining the extension from a document
// console.log(path.extname('documents/music-sources.md'));

// Reading content inside a folder
// fs.readdir('C:/Users/Maria A. Ramirez/Documents/Laboratoria/Proyecto 4/CDMX013-md-links/documents', (error, files) => {
//     console.log(files);
//     files.forEach(document => {
//         if (path.extname(document) == '.md') {
//             console.log(document);
//         };
//     });
// });


// Knowing if a path is absolute or relative,
// console.log(path.isAbsolute('/index.js'));

// The next function will verify if a path is absolute or relative; in case that it isn't absolute, it will convert it into one
function verifyTypeOfPath(givenPath) {
    let definePathType = path.isAbsolute(givenPath);
    console.log(path.isAbsolute(givenPath))
    if (definePathType === false) {
        let conversionToRelativePath = path.resolve();
        console.log(path.basename(conversionToRelativePath), path.isAbsolute(conversionToRelativePath));
    }
};

// This function will verify if it is a folder or a file
function folderOrFile(givenPath) {
    if (fs.lstatSync(givenPath).isDirectory() === true) {
        console.log('Sí es una carpeta, ahora enumeraré los archivos y otras carpetas')
        fs.readdir(givenPath, (error, files) => {
            console.log(files);
            files.forEach(document => {
                if (path.extname(document) === '.md') {
                    console.log(document);
                }
                if (path.extname(document) === '') {
                    console.log(document);
                };
            });
        });
    } else {
        console.log('No es una carpeta');
    }
}

function mdLinks(givenPath) {
    verifyTypeOfPath(givenPath);
    folderOrFile(givenPath)
};

mdLinks('documents/music-sources.md');