const validateLinks = require('../modularization/validate-links.js');
const axios = require('axios');

//jest.mock('axios');

describe('validateLinks', () => {
    it('should be a function', () => {
        expect(typeof validateLinks).toBe('function')
    });

    it('should return a message if not a single URL to validate is found', () => {
        expect(validateLinks('documents/without-links.md')).toEqual(`This document contains exactly zero links, go get some ice cream & enjoy your day`)
    });

    it('returns -undefined- if the promise is still pending', () => {
        expect(validateLinks('documents/music-sources.md').length).toBe(undefined)
    })

})