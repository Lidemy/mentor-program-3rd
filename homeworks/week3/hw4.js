// index 相加等於 length - 1 的 2 個值要相等
function isPalindromes(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
    return true;
  }
  return false;
}

module.exports = isPalindromes;
