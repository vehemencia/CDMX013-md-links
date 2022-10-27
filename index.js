const fs = require('fs');
const path = require('path');
const relativeToAbsolute = require('./modularization/relative-to-absolute-path.js');
const isItMarkdown = require('./modularization/verify-markdown-file.js');
const obtainLinks = require('./modularization/obtain-links.js');
// const validateLinks = require('./modularization/validate-links.js');
const axios = require('axios');

function mdLinks(givenPath, options) {
    const mdLinksPromise = new Promise((resolve, reject) => {
        const absolutePath = relativeToAbsolute(givenPath);
        if (fs.lstatSync(absolutePath).isDirectory() === true) {
            resolve('This is a folder, try with a .md document');
        } else {
            if (options === '{validate: false}' || options === undefined) {
                if (isItMarkdown(absolutePath) === true) {
                    resolve(obtainLinks(givenPath))
                } else {
                    reject('This is not a .md file')
                }
            } else if (options === '{validate: true}') {
                const httpRequest = axios.get('https://pitchfork.com/');
                return httpRequest
                    .then(response => console.log(response))
            }
        }
    })
    return mdLinksPromise;
}

const myPromise = mdLinks('documents/music-sources.md', '{validate: true}');
myPromise.then(console.log)

// function validateLinks() {
//     const httpRequest = axios.get('https://www.pitchfork.com');
//     return httpRequest
//         .then(response => console.log(response))
// }

// validateLinks()