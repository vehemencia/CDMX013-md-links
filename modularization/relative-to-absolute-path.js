const path = require('path');

function relativeToAbsolute(givenPath) {
    if (path.isAbsolute(givenPath) === false) {
        givenPath = path.resolve(givenPath);
    }
    return givenPath;
}

module.exports = relativeToAbsolute;