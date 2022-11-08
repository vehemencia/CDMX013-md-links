const isItMarkdown = require('../modularization/verify-markdown-file.js')

describe('isItMarkdown', () => {
    it('should be a function', () => {
      expect(typeof isItMarkdown).toBe('function');
    });

    it('should only verify markdown files', () => {
      expect(isItMarkdown('documents/music-sources.md')).toBe(true)
    });

    it('should reject files with an extension other than .md', () => {
      expect(isItMarkdown('documents/music-sources.txt')).toBe(false)
    });
  });
