function join(arr, concatStr) {
  newStr = ''
  for(let i = 0; i<arr.length; i++){
    newStr += arr[i] + concatStr
  }
  return newStr.slice(0, newStr.length-1);
}

function repeat(str, times) {
  newStr = ''
  for(let i=0; i<times; i++){
    newStr += str
  }
  return newStr;
}

console.log(join(["a", 1, "b", 2, "c", 3], '-'));
console.log(repeat('12345', 2));
