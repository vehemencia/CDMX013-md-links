const fs = require('fs');
const path = require('path');
const relativeToAbsolute = require('./modularization/relative-to-absolute-path.js');
const isItMarkdown = require('./modularization/verify-markdown-file.js');
const obtainLinks = require('./modularization/obtain-links.js');
const validateLinks = require('./modularization/validate-links.js');

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
                resolve(validateLinks(givenPath))
            } else {
                reject('Something happened, but it is not your fault, try again')
            }
        }
    })
    return mdLinksPromise;
}

mdLinks('documents/without-links.md', '{validate: true}').then(console.log).catch(console.log);