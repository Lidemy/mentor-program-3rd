const isPalindromes = require('./hw4');

describe('hw4', () => {
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcdcba')).toBe(true);
  });
  it('apple', () => {
    expect(isPalindromes('apple')).toBe(false);
  });
  it('aaaaa', () => {
    expect(isPalindromes('aaaaa')).toBe(true);
  });
  it('applppa', () => {
    expect(isPalindromes('applppa')).toBe(true);
  });
});
