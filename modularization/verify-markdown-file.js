const path = require('path');

function isItMarkdown(givenPath){
    if (path.extname(givenPath) === '.md' || path.extname(givenPath) === '.markdown' ) {
        return true;
    } else {
        return false;
    }
}

module.exports = isItMarkdown;