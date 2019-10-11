<!-- 在學程式的時候有一個能力很重要，你必須靜下心來一行一行在看這個程式到底在幹嘛，
並且在腦中模擬出這個程式執行的樣子，意思就是你要假裝自己就是JS引擎。 -->

``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 5 行，設定 arr 是 [3, 5, 8, 13, 22, 35]
2. 進入第 6 行迴圈
3. 執行第 7 行判斷，如果陣列裡的元素有小於等於 0 的 就回傳 invalid，跳出 function
4. 進入第 9 行迴圈，迴圈從 i=2 開始 
5. 執行第 10 行判斷，如果陣列裡 index = 2 之後的元素，本身的值（arr[i]）不等於他前一個元素（arr[i-1]）與前前元素（arr[i-2]）的總和，就回傳 invalid，跳出 function
6. 進入第 12 行，回傳 valid，跳出 function