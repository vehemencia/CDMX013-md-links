const { it } = require('node:test');
const isItMarkdown = require('../modularization/verify-markdown-file.js')

describe('isItMarkdown', () => {
    it('should be a function', () => {
      expect(typeof isItMarkdown).toBe('function');
    });

    // it('should only verify markdown files', () => {
      
    // });
  });
