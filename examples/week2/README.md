### 第一題：printStars

這題比較沒難度就不解釋了，照著做就行了。有很多人會把字串拼好再印出來，也是 ok

``` js
function printStars(n) {
  for (let i = 0; i < n; i += 1) {
    console.log('*');
  }
}
```

### 第二題：capitalize

有很多人都會用 charAt 或是先把字串用 split 變成陣列再來做這題，但其實在 JS 裡面你本來就可以用 str[0] 取到第一個字，不需要用 chatAt。  
另一個常見問題是會檢查第一個字是否是小寫再轉，但內建的 toUpperCase 如果本來就是大寫，轉完也還是大寫，想一下之後會發現根本不需要檢查。

``` js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
```

### 第三題：reverse

迴圈倒著做就好

``` js
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  console.log(result);
}
```

### 第四題：printFactor

這題的迴圈不要從 0 開始，因為語意上是不通的，你不會想拿數字去除以 0

``` js
function printFactor(n) {
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
```

### 第五題：內建函式自己做

join 這題之前跟大家說過第一個參數應該是陣列，這邊我在檔案裡面忘記改到。  
然後一大堆人都沒看清楚範例輸出入，所以最常見的錯誤是最後面多了一個連接的字串。  
另外，當陣列是空的的時候可以特別處理，在這情形下應該要回傳空字串

``` js
function join(arr, concatStr) {
  if (arr.length === 0) { // special case
    return '';
  }

  let result = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    result += concatStr + arr[i];
  }
  return result;
}
```

repeat 比較容易，就迴圈一下

``` js
function repeat(str, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}
```