const fs = require('fs');
const path = require('path');

function mdLinks(givenPath) {
    try {
        if (path.isAbsolute(givenPath) === false) {
            const transformIntoAbsolutePath = path.resolve(givenPath);
            givenPath = transformIntoAbsolutePath;
        };
        if (fs.lstatSync(givenPath).isDirectory() === true) {
            console.log('This is a folder')
        } else {
            console.log('This is a file');
            if (path.extname(givenPath) === '.md') {
                fs.readFile(givenPath, 'utf-8', (error, data) => {
                    if (!error) {
                        console.log(data);
                    } else console.log(error);
                });
            } else {
                console.log('This is not a .md file, please try again')
            };
        };
    } catch (error) {
        console.log(`Something happened, but it isn't your fault, the document you are looking for is missing or the path doesn't exist`);
    }
};

mdLinks('documentss');
