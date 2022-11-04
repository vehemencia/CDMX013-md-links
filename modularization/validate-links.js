const axios = require('axios');
const obtainLinks = require('./obtain-links.js');

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

module.exports = validateLinks;