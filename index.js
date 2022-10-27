const fs = require('fs');
const path = require('path');
const relativeToAbsolute = require('./modularization/relative-to-absolute-path.js');
const isItMarkdown = require('./modularization/verify-markdown-file.js');
const obtainLinks = require('./modularization/obtain-links.js')

// function mdLinks(givenPath) {
//     try {
//         relativeToAbsolute(givenPath);
//         if (fs.lstatSync(givenPath).isDirectory() === true) {
//             console.log('This is a folder')
//         } else {
//             isItMarkdown(givenPath);
//             obtainLinks(givenPath)
//         }
//     } catch (error) {
//         console.log(`Something happened, but it isn't your fault, the document you are looking for is missing or the path doesn't exist`);
//     }
// }

function mdLinks(givenPath, options) {
    const mdLinksPromise = new Promise((resolve, reject) => {
        if (options === '{validate: false}' || options === undefined) {
            relativeToAbsolute(givenPath);
            if (fs.lstatSync(givenPath).isDirectory() === true) {
                resolve('This is a folder')
            } else {
                if (isItMarkdown(givenPath) === true){
                    resolve(obtainLinks(givenPath))
                } else {
                    reject('This is not a md file')
                }
            } 
        } else {
            reject(new Error ('Error'));
        }
    });
    return mdLinksPromise;
}

const myPromise = mdLinks('documents/music-sources.md');

myPromise.then(console.log)
