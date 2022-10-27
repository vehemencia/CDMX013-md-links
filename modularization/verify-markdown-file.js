const path = require('path');

function isItMarkdown(givenPath){
    if (path.extname(givenPath) === '.md' || path.extname(givenPath) === '.markdown' ) {
        console.log('This is a .md file');
        return true;
    } else {
        console.log(`This isn't a .md file, please try again`);
        return false;
    }
}

module.exports = isItMarkdown;