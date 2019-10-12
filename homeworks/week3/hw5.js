/*
  反轉文字
  考慮進位：最前與最後
  a,b 的位數會不一定
*/

function add(a, b) {
  let box = 0, 
  total = '', 
  addNum = 0,
  length = a.length >= b.length ? a.length : b.length, 
  newA = a.split('').reverse().join(''),
  newB = b.split('').reverse().join(''),
  numA = 0,
  numB = 0

  for(let i=0; i<=length; i++){
    
    numA = Number(newA[i]) ? Number(newA[i]) : 0
    numB = Number(newB[i]) ? Number(newB[i]) : 0

    addNum = numA + numB
    if(i > 0){ addNum += box }
   
    if(addNum.toString().length > 1){
      box = 1
      total = addNum.toString()[1] + total
    }else{
      box = 0
      total = addNum.toString() + total
    }
  }
  
  if(total[0] == 0){
    total = total.slice(1)
  }

}

module.exports = add;
