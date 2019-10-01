# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 關於五子棋判斷邏輯

如果某方下了一顆棋子然後產生勝負的話，就代表最後一顆落子一定在連成一線當中，才會產生勝負，因此只要朝那顆棋子的周邊去搜就可以了。

可以寫一個很 general 的 function，能夠傳入最後一個的 x, y 以及要判斷的方向：

``` js
function countTotal(currentX, currentY, directionX, directionY) {

  // 現在要檢查的棋子是什麼顏色
  const now = board[currentX][currentY]

  let tempX = currentX
  let tempY = currentY
  let total = 0
  do {
    tempX += directionX // 檢查下一顆棋子
    tempY += directionY

    // 如果新的棋子等於我現在要檢查的（意思就是連續啦）
    if (board[tempX][tempY] === now) {

      // 連續的棋子數 + 1
      total++
    } else {
      break
    }
  }
  return total
}
```

這樣就可以得到某個方向的總數，於是判斷勝負的程式碼就可以這樣寫：

``` js
if (
  countTotal(x, y, 1, 0) + countTotal(x, y, -1, 0) >= 4 ||
  countTotal(x, y, 0, 1) + countTotal(x, y, 0, -1) >= 4 ||
  countTotal(x, y, 1, 1) + countTotal(x, y, -1, -1) >= 4 ||
  countTotal(x, y, 1, -1) + countTotal(x, y, -1, 1) >= 4
) {
    // do something
}
```

優雅地解決了這一題，而且程式碼可能還比窮舉法少XD

然後如果你是用一維陣列去存棋盤的話，建議不要，因為會變得很麻煩，用二維方便很多。