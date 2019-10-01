# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 有關 Redux

簡單再來講一下 Redux 是什麼，它其實就是另外一個存放 state 的地方。

為什麼 React component 已經可以存了，卻還要另一個地方呢？因為有些 state 你不知道要放在哪個 component 底下，好像放哪裡都很奇怪，例如說一些 global 的 state。

這時候 Redux 就是一個可以讓你放這些 state 的地方。在 Redux 的運作模式裡面，你要改變 state 就要 dispatch 一個 action，action 到 reducer 之後會產生新的 state，就把 state 改變了。

然後 react-redux 就是把 Redux 的 state 給自動綁定到 component 的 props，也順便把 dispatch 一起傳進去，把 React 跟 Redux 給綁在一起，這樣才能使用。


