const fs = require('fs');

fs.readFile('documents/music-sources.md', 'utf-8', (error, data)=> {
    if (!error) {
        console.log(data);
    } else console.log(error);
})