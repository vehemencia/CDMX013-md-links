const fs = require('fs');
const path = require('path');
const relativeToAbsolute = require('./modularization/relative-to-absolute-path.js');
const isItMarkdown = require('./modularization/verify-markdown-file.js');
const obtainLinks = require('./modularization/obtain-links.js')

function mdLinks(givenPath) {
    try {
        relativeToAbsolute(givenPath);
        if (fs.lstatSync(givenPath).isDirectory() === true) {
            console.log('This is a folder')
        } else {
            isItMarkdown(givenPath);
            obtainLinks(givenPath)
        }
    } catch (error) {
        console.log(`Something happened, but it isn't your fault, the document you are looking for is missing or the path doesn't exist`);
    }
}

mdLinks('documents/music-sources.md');
