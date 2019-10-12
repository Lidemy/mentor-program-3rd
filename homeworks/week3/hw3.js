// 7
// 7/6, 7/5, 7/4, 7/3, 7/22 取餘數都不是 0

// 6
// 6/5, 6/4 取餘數不是 0
// 6/3 取餘數是0， return 不是質數


function isPrime(n) {
  if (n === 1) { return false; }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
