const axios = require('axios');
const obtainLinks = require('./obtain-links.js');

function validateLinks(givenPath) {
        let arrayWithObjects = obtainLinks(givenPath);
        if (typeof arrayWithObjects === 'string') {
            return 'uwu';
        } else {
        const linksInside = arrayWithObjects.forEach(linkProperty => {
            const request = axios.get(linkProperty.href);
            return request
                .then((response) => {
                    let validStatus = {
                        ...linkProperty,
                        status: response.status,
                        message: 'ok'
                    };
                    console.log(validStatus)
                })
                .catch((error) => {
                    let brokenStatus = {
                        ...linkProperty,
                        status: error.response.status,
                        message: 'fail'
                    };
                    console.log(brokenStatus)
                })
        })
        return linksInside;
    }
}

module.exports = validateLinks;