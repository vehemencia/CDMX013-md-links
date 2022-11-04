const fs = require('fs');
const path = require('path');
const relativeToAbsolute = require('./modularization/relative-to-absolute-path.js');
const isItMarkdown = require('./modularization/verify-markdown-file.js');
const obtainLinks = require('./modularization/obtain-links.js');
//const validateLink = require('./modularization/validate-links.js');
const axios = require('axios');

// function mdLinks(givenPath, options) {
//     const mdLinksPromise = new Promise((resolve, reject) => {
//         const absolutePath = relativeToAbsolute(givenPath);
//         if (fs.lstatSync(absolutePath).isDirectory() === true) {
//             resolve('This is a folder, try with a .md document');
//         } else if (fs.lstatSync(absolutePath).isDirectory() === false) {
//             if (options === '{validate: false}' || options === undefined) {
//                 if (isItMarkdown(absolutePath) === true) {
//                     resolve(obtainLinks(givenPath))
//                 } else {
//                     reject('This is not a .md file')
//                 }
//             } else if (options === '{validate: true}') {
//                 resolve('A :c')
//             } else {
//                 reject('Something happened, but it is not your fault, try again')
//             }
//         }
//     })
//     return mdLinksPromise;
// }

// const myPromise = mdLinks('documents/without-links.md', '{validate: true}');
// myPromise.then(console.log).catch(console.log)

// function validateLinkPrueba(link){
//     const request = axios.get(link);
//     return request
//     .then(response => console.log(response.status))
//     .catch(error => console.log(error.response.message))
// }

function validateLinks(givenPath) {
    let arrayWithObjects = obtainLinks(givenPath);
    const linksInside = arrayWithObjects.forEach(linkProperty => {
        const request = axios.get(linkProperty.href);
        return request
            .then((response) => {
                let arregloParaDevolver = {
                    ...linkProperty,
                    status: response.status,
                    message: 'ok'
                };
                console.log(arregloParaDevolver)
            })
            .catch((error) => {
                let arregloConError = {
                    ...linkProperty,
                    status: error.response.status,
                    message: 'fail'
                };
                console.log(arregloConError)
            })
    })
}

validateLinks('documents/music-sources-1.md')
//mdLinks('documents/music-sources-1.md', '{validate: true}').then(console.log).catch(console.log);