# Codewar 練習題

Codewar 是一個程式解題平台，上面充滿著各種開發者出的題目，會使用這個平台的理由為：

1. 可以自己寫測試驗證基本測資
2. 過關後可以看到其他人的解答
3. 方便導師追蹤解題成效

## 注意事項

解題最重要的一點就是：絕對不要輕易看答案。為什麼解題能夠成長？是因為你有思考，思考過後想出來的答案才是你的，如果你放棄了然後去看別人的答案，那就始終是別人的，不會是你自己的。

想了一陣子還是想不出來的話，不用急，去洗個澡或是散個步搞不好就想通了（真心不騙）

若是認真想過還是想不出來，這時候可以先尋求一些提示，如果還是沒頭緒，這時候才能去查解答。但看完解答之後務必理解，並且重新再測驗一遍。

做完之後請自行把標題的 ❌ 換成 ✅。

## 題目列表

以下按照題目難度分類

## 零顆星（超簡單）

### ❌ Opposite number
題目連結：https://www.codewars.com/kata/opposite-number/javascript  
題目說明：正數變負數，反之亦然

### ❌ Even or Odd
題目連結：https://www.codewars.com/kata/even-or-odd/javascript  
題目說明：判斷是奇數或是偶數

## 一顆星（熟悉語法）

### ❌ Number-Star ladder
題目連結：https://www.codewars.com/kata/number-star-ladder/javascript  
題目說明：
這題就是依照規律輸出文字，沒什麼好講的

### ❌ Who likes it
題目連結：https://www.codewars.com/kata/who-likes-it  
題目說明：模擬 Facebook 按讚時或出現的文字

### ❌ String repeat
題目連結：https://www.codewars.com/kata/string-repeat/javascript  
題目說明：回傳重複 n 遍的字串

### ❌ Build Tower
題目連結：https://www.codewars.com/kata/build-tower  
題目說明：
也是依照規律輸出文字即可

### ❌ Reversed Strings
題目連結：https://www.codewars.com/kata/reversed-strings/javascript  
題目說明：
把輸入的文字反轉過後回傳，如果想挑戰自己的話，可以試試看用陣列的各種內建函式組合完成

### ❌ Reversed Words
題目連結：https://www.codewars.com/kata/reversed-words  
題目說明：
這一題是進階版的字串反轉，原本的只要把每個「字元」反轉，這個則是要把每個「單字」反轉。

### ❌ Alternate case
題目連結：https://www.codewars.com/kata/alternate-case  
題目說明：把大寫字母轉成小寫，小寫字母轉成大寫

### ❌ You only need one - Beginner
題目連結：https://www.codewars.com/kata/you-only-need-one-beginner/javascript  
題目說明：回傳要找的元素是否在陣列裡面

### ❌ Find the capitals
題目連結：https://www.codewars.com/kata/find-the-capitals-1/javascript  
題目說明：回傳大寫字母所在的 index

### ❌ Sum arrays
題目連結：https://www.codewars.com/kata/sum-arrays/javascript  
題目說明：把陣列加總回傳結果

### ❌ Find the smallest integer in the array
題目連結：https://www.codewars.com/kata/find-the-smallest-integer-in-the-array   
題目說明：找出陣列中最小的數字

## 兩顆星（需要花點時間思考）

### ❌ Shortest Word
題目連結：https://www.codewars.com/kata/shortest-word/javascript  
題目說明：回傳最短的單字的長度

### ❌ Bit Counting
題目連結：https://www.codewars.com/kata/bit-counting/javascript  
題目說明：計算 bit 的總數

### ❌ Find The Parity Outlier
題目連結：https://www.codewars.com/kata/find-the-parity-outlier/javascript   
題目說明：全部的數字裡，只有一個的奇偶跟其他的不一樣，你要找出這個數字

### ❌ Take a Ten Minute Walk
題目連結：https://www.codewars.com/kata/take-a-ten-minute-walk/javascript  
題目說明：有一個人他可以往東南西北這四個方向走，請幫他計算它能否剛好在十步的時候回到原點

### ❌ Tribonacci Sequence
題目連結：https://www.codewars.com/kata/tribonacci-sequence/javascript  
題目說明：費式數列的進階版

### ❌ A Man and his Umbrellas
題目連結：https://www.codewars.com/kata/a-man-and-his-umbrellas/javascript  
題目說明：  
這題需要花多一點時間去思考。

input 會給你每天的氣象預報，基本上就是下雨跟沒下雨。如果早上下雨，那就會從家裡帶一把傘去公司，如果家裡沒傘的話需要買一把。如果晚上下雨，必須要從公司帶一把傘回家。如果公司沒傘，必須去買一支傘。

你要輸出的結果就是：總共需要買幾支傘才行。

舉例來說：`["rainy", "clear", "rainy", "cloudy"]`，就是第一天早上下雨，所以要買第一把傘到公司，回家的時候沒下雨，所以把傘放在公司。而第二天早上又下雨，家裡沒傘，需要買第二把傘，因此答案是 2。

`["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]`的話，每一天的早上跟晚上都在下雨，所以只要買一把傘就可以從家裡到公司，再從公司帶回家裡。

### ❌ Check if two words are isomorphic to each other
題目連結：https://www.codewars.com/kata/check-if-two-words-are-isomorphic-to-each-other  
題目說明：  
這題比較複雜一點，如果兩個字串 A 跟 B 存在「一對一關係」，那我們就可以說這兩個字串是同構（isomorphic）的。  

舉例來說，ABB 跟 CDD，A 對應到 C，B 對應到 D，存在一對一的關係，所以是同構的。
