function printStars(n) {
  let start = ''
  for(let i=0; i<n; i++){
    i+1 == n ? start += '*' : start += '*\n'
  }
  console.log(start);
}

printStars(1);
