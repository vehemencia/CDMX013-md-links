const fs = require('fs');
const path = require('path');
const relativeToAbsolute = require('./modularization/relative-to-absolute-path.js');
const isItMarkdown = require('./modularization/verify-markdown-file.js');
const obtainLinks = require('./modularization/obtain-links.js');
//const validateLinks = require('./modularization/validate-links.js');
const axios = require('axios');

function mdLinks(givenPath, options) {
    const mdLinksPromise = new Promise((resolve, reject) => {
        const absolutePath = relativeToAbsolute(givenPath);
        if (fs.lstatSync(absolutePath).isDirectory() === true) {
            resolve('This is a folder, try with a .md document');
        } else if (fs.lstatSync(absolutePath).isDirectory() === false) {
            if (options === '{validate: false}' || options === undefined) {
                if (isItMarkdown(absolutePath) === true) {
                    resolve(obtainLinks(givenPath))
                } else {
                    reject('This is not a .md file')
                }
            } else if (options === '{validate: true}') {
               resolve('Working on it... beep')
            } else {
                reject('Something happened, but it is not your fault, try again')
            }
        }
    })
    return mdLinksPromise;
}

// const myPromise = mdLinks('documents/without-links.md', '{validate: true}');
// myPromise.then(console.log).catch(console.log)

// function validateLinks(givenPath) {
//     let arrayWithObjects = obtainLinks(givenPath);
//     const linksInside = arrayWithObjects.map(linkProperty => linkProperty.href);
//     linksInside.forEach(element => {
//         const request = axios.get(element);
//         return request
//             .then(response => console.log(response.status))
//             .catch(error => console.log(error.response.status))
//     });
// }

// function validateLink(link){
//     const request = axios.get(link.href);
//     return request
//     .then(response => 
//         {console.log(response)}
//         )
// }


mdLinks('documents/music-sources-1.md', '{validate: true}').then(console.log).catch(console.log);