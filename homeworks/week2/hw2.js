// ASCII 美國資訊交換標準程式碼
/*
charCodeAt()
method returns an integer between 0 and 65535 
representing the UTF-16 code unit at the given index.
Syntax: str.charCodeAt(index)
Examples: 'ABC'.charCodeAt(1); // returns 66
Examples: "\n".charCodeAt(0);; // returns 10
*/
/*
String.fromCharCode() 
method returns a string created from the s
pecified sequence of UTF-16 code units.
Syntax: String.fromCharCode(num1[, ...[, numN]])
Examples: String.fromCharCode(65, 66, 67);   // returns "ABC"
*/

function capitalize(str) {
  let code = str.charCodeAt(0)
  if(code >= 97 && code <= 122){
    let newText = String.fromCharCode(code-32); 
    return newText + str.slice(1, str.length)
  } 
  return str;
}

console.log(capitalize('$$gdfg'));
