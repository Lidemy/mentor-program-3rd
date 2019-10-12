function stars(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    const text = '*'.repeat(i);
    arr.push(text);
  }
  return arr;
}

module.exports = stars;
