const fs = require('fs');

// This must return an object with each property: href, text and file
function obtainLinks(givenPath) {
    const myRegex = /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_&#\/]+)([.a-z0-9]+)/gi;
    const myRegexForText = /(?<=\[).+?(?=\])/gi;
    let eachLink = [];
    let linkInfo = {};
    const document = fs.readFileSync(givenPath, 'utf-8');
    const itIsAnURL = document.match(myRegex);
    const thisIsTheText = document.match(myRegexForText);
    if (itIsAnURL) {
        for (let i = 0; i < itIsAnURL.length; i++) {
            linkInfo = {
                href: itIsAnURL[i],
                text: thisIsTheText[i].slice(0, 50),
                file: givenPath
            }
            eachLink.push(linkInfo);
        }
    }
    if (eachLink.length == 0) {
        return `This document contains exactly zero links, go get some ice cream & enjoy your day`;
    } else return eachLink;
}

module.exports = obtainLinks;