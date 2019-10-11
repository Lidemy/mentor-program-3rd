function reverse(str) {

  let arr = []
  str.split("").forEach((item, index)=>{
    arr[str.length - index] = item
  });
  console.log(arr.join(''))
}

reverse('1,2,3,2,1')
