const fs = require('fs');

// This must return an object with each property: href, text and file
function obtainLinks(givenPath) {
    const myRegex = /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_&#\/]+)([.a-z0-9]+)/gi;
    const myRegexForText = /(?<=\[).+?(?=\])/gi;
    let eachLink = [];
    let linkInfo = {};
    const document = fs.readFile(givenPath, 'utf-8', (error, data) => {
        if (!error) {
            const itIsAnURL = data.match(myRegex);
            const thisIsTheText = data.match(myRegexForText);
            if (itIsAnURL){
                console.log(itIsAnURL);
                for(let i = 0; i < itIsAnURL.length; i++){
                    linkInfo = {
                        href: itIsAnURL[i],
                        text: thisIsTheText[i].slice(0,49),
                        file: givenPath
                    }
                    console.log(linkInfo)
                }
            } else console.log(`This document contains exactly zero links, go get some ice cream & enjoy your day`);
        }
    })
}

module.exports = obtainLinks;