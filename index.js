const fs = require('fs');
const path = require('path');
const relativeToAbsolute = require('./modularization/relative-to-absolute-path.js');
const isItMarkdown = require('./modularization/verify-markdown-file.js');
const obtainLinks = require('./modularization/obtain-links.js');
const validateLinks = require('./modularization/validate-links.js');

function mdLinks(givenPath, options) {
    const mdLinksPromise = new Promise((resolve, reject) => {
        const absolutePath = relativeToAbsolute(givenPath);
        if (fs.existsSync(givenPath) === false) {
            reject(`This path or file doesn't exist, try with a valid one`)
        } else if (fs.lstatSync(absolutePath).isDirectory() === true) {
            reject('This is a folder, try with a .md document');
        } else if (fs.lstatSync(absolutePath).isDirectory() === false) {
            if (options === undefined || options.validate === false) {
                if (isItMarkdown(absolutePath) === true) {
                    resolve(obtainLinks(givenPath))
                } else reject(`This isn't a .md file, try with a markdown one`)
            } else if (options.validate === true) {
                if (isItMarkdown(absolutePath) === true) {
                    resolve(validateLinks(givenPath))
                } else reject(`This isn't a .md file, try with a markdown one`)
            } else {
                reject('Something happened, but it is not your fault, try again')
            }
        }
    })
    return mdLinksPromise;
}

mdLinks('documents/music-sources.md', {validate: true}).then(console.log).catch(console.log);