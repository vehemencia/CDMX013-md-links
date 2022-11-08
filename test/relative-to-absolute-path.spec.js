const relativeToAbsolute = require('../modularization/relative-to-absolute-path.js');
const path = require('path');

describe('relativeToAbsolute', () => {
    it('should be a function', () => {
      expect(typeof relativeToAbsolute).toBe('function');
    });

    it('should transform a relative path to an absolute one', () => {
       expect(relativeToAbsolute('documents/music-sources.md')).toEqual('C:\\Users\\Maria A. Ramirez\\Documents\\Laboratoria\\Proyecto 4\\CDMX013-md-links\\documents\\music-sources.md')
     });

    it('should return false if a path is relative', () => {
      expect(relativeToAbsolute('documents/music-sources.md') === false).not.toBe(true)
    });
  });
