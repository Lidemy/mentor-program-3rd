function alphaSwap(str) {
  const newStr = str.split('').reduce((acc, cur) => {
    const code = cur.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      return acc + String.fromCharCode(code - 32);
    }
    if (code >= 65 && code <= 90) {
      return acc + String.fromCharCode(code + 32);
    }
    return acc + cur;
  }, '');

  return newStr;
}

module.exports = alphaSwap;
