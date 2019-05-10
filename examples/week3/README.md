### 第一題：stars

比較平易近人的解法：

``` js
function stars (n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans[i] = '*'.repeat(i + 1);
  }
  return ans
}
```

比較帥氣（？）的解法，先產生一個長度是 n 的 array，然後用 map 與 repeat 來填值。

``` js
function stars (n) {
  return Array.from({length: n}).map((item, index) => '*'.repeat(index + 1))
}
```

### 第二題：alphaSwap

比較平易近人的解法：

``` js
function alphaSwap(str) {
  let ans = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      ans += str[i].toUpperCase();
    } else {
      ans += str[i].toLowerCase();
    }
  }
  return ans;
}
```

一樣利用 map，先把 str 切成陣列然後做轉換：

``` js
function alphaSwap(str) {
  return str.split('').map(item => item >= 'a' && item <= 'z' ? item.toUpperCase() : item.toLowerCase()).join('');
}
```

### 第三題：isPrime

可以利用上一週學過的找因數，直接回傳因數數目是否等於 2 即可，但數字 1 要額外做處理。

或是也可以用迴圈去判斷。

``` js
function isPrime(n) {
  // 一行的時候可以偷省略括號，雖然我不知道 eslint 會不會給過就是了XD
  if (n === 1) return false;

  // 找根號以內的數就好，這是數學小知識
  // 先把開根號的值存好，否則每一圈迴圈都會運算一次
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

### 第四題：isPalindromes

把字串拿去跟 reverse 之後的比較，看是不是一樣即可。

``` js
function isPalindromes(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed=== str;
}
```

或是也可以帥氣的用一行解決：

``` js
function isPalindromes(str) {
  return str.split('').reverse().join('') === str;
}
```

### 第五題：add

最難的一題，但說穿了就是直式加法。這邊提供一個我看到最精簡的解法：https://github.com/Lidemy/mentor-program-3rd-KilluaZDK/pull/3。

``` js
function add(a, b) {
  let toAdd = 0;
  let answer = '';
  for (let i = 1, j = 1; a.length - i >= 0 || b.length - j >= 0 || toAdd; i += 1, j += 1) {
    const tmp = toAdd + parseInt(a[a.length - i] || 0, 10) + parseInt(b[b.length - i] || 0, 10);
    if (tmp < 10) {
      answer = tmp + answer;
      toAdd = 0;
    } else {
      answer = (tmp - 10) + answer;
      toAdd = 1;
    }
  }
  return answer;
}
```
