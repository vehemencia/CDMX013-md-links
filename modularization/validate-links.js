const axios = require('axios');
const obtainLinks = require('./obtain-links.js');

function validateLinks(givenPath) {
        let arrayWithObjects = obtainLinks(givenPath);
        if (typeof arrayWithObjects === 'string') {
            return `This document contains exactly zero links, go get some ice cream & enjoy your day`;
        } else {
        const linksInside = arrayWithObjects.map(linkProperty => {
            const request = axios.get(linkProperty.href);
            return request
                .then((response) => {
                    let validStatus = {
                        ...linkProperty,
                        status: response.status,
                        message: 'ok'
                    };
                    return validStatus
                })
                .catch((error) => {
                    let brokenStatus = {
                        ...linkProperty,
                        status: error.response.status,
                        message: 'fail'
                    };
                    return brokenStatus
                })
        })
        return Promise.all(linksInside).then(result => console.log(result))
    }
}

module.exports = validateLinks;