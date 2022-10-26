const path = require('path');

function isItMarkdown(givenPath){
    if (path.extname(givenPath) === '.md' || path.extname(givenPath) === '.markdown' ) {
        console.log('This is a .md file');
    } else {
        console.log(`This isn't a .md file, please try again`);
    }
}

module.exports = isItMarkdown;