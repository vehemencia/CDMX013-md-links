function readingFileContent(givenPath){
   fs.readFile(givenPath, 'utf-8', (error, data) => {
        if (!error) {
            const myRegex = /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_&#\/]+)([.a-z0-9]+)/gi;
            const searchingAnURL = data.match(myRegex);
            console.log(searchingAnURL);
        } else console.log(error);
    });
}

module.exports = {readingFileContent}