// 取餘數

function printFactor(n) {

  if(n <= 0){
    console.log('數字不能為0')
    return
  }

  let arr = []
  for(let i=1; i<=n; i++){
    if(!(n%i)){
      arr.push(i)
    }
  }
  console.log(arr.join('\n'))
}

printFactor(0);
