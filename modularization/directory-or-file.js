const fs = require('fs');
const relativeToAbsolute = require('./relative-to-absolute-path.js');

function isDirectoryOrFile(relativeToAbsolutePath) {
    const givenRoute = fs.lstatSync(relativeToAbsolute(relativeToAbsolutePath)).isDirectory();
    if (givenRoute === true) {
        return 'This is a folder'
    } else {
        if (isItMarkdown(givenPath) === true) {
            obtainLinks(givenPath)
        } else {
            console.log('This is not a md file')
        }
    }
}