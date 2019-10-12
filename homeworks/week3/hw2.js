function alphaSwap(str) {
	let newStr = str.split('').reduce((acc, cur)=>{
    let code = cur.charCodeAt(0) 
		if(code>=97 && code<=122){
      return acc + String.fromCharCode(code-32)
    }else if(code>=65 && code<=90){
      return acc + String.fromCharCode(code+32)
    }else{
      return acc + cur
    }
  },'')

  return newStr
}

module.exports = alphaSwap;
