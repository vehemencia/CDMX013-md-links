const fs = require('fs');
const path = require('path');

function readingFileContent(givenPath){
    fs.readFile(givenPath, 'utf-8', (error, data) => {
         if (!error) {
             const myRegex = /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_&#\/]+)([.a-z0-9]+)/gi;
             const searchingAnURL = data.match(myRegex);
             if (searchingAnURL){
                console.log(searchingAnURL);
             } else console.log (`This document contains exactly zero links, go get some ice cream & enjoy your day`);        
         } else console.log(error);
     });
 }

function mdLinks(givenPath) {
    try {
        if (path.isAbsolute(givenPath) === false) {
            const transformIntoAbsolutePath = path.resolve(givenPath);
            givenPath = transformIntoAbsolutePath;
        };
        if (fs.lstatSync(givenPath).isDirectory() === true) {
            console.log('This is a folder')
        } else {
            if (path.extname(givenPath) === '.md') {
                console.log('This is a .md file');
                readingFileContent(givenPath);
            } else {
                console.log('This is not a .md file, please try again')
            };
        };
    } catch (error) {
        console.log(`Something happened, but it isn't your fault, the document you are looking for is missing or the path doesn't exist`);
    }
};

mdLinks('documents/without-links.md');
