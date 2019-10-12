function stars(n) {
  let arr = []
  for(let i=1; i<= n; i++){
    let text = '*'.repeat(i)
    arr.push(text)
  }
  return arr
}

module.exports = stars;
