const obtainLinks = require('../modularization/obtain-links.js')

describe('obtainLinks', () => {
    it('should be a function', () => {
        expect(typeof obtainLinks).toBe('function')
    });

    it('should return a message if it does not contain any links', () => {
        expect(obtainLinks('documents/without-links.md').length).toBe(81)
    });

    it('should return an array with an object for each URL it finds', () => {
        expect(obtainLinks('documents/music-sources.md').length).toBe(5)
    });
})