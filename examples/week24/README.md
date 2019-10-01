# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 有關 Redux middleware

先來說說 Redux 為什麼要有 middleware，以及 middleware 到底是什麼。

簡單來說呢，你的 action 在 dispatch 以後，在抵達 reducer 之前，就會經過 middleware，因此流程是這樣的：

action -> middleware1 -> middleware2 -> reducer

所以你可以透過 middleware 對某些 action 做一些事情。

那為什麼需要 middleware？因為有些東西不適合放在 component 裡面去做，例如說直接去 call API。為什麼呢？因為這樣子 component 的邏輯就跟 api 的邏輯綁在一起了，很難拆分開來。或是從另一個角度去講，你很難測試。

考慮底下這個簡單的 component：

``` js
class Posts extends React.Component {
  componentDidMount() {
    WebAPI.getPosts().then((posts) => {
      this.setState({
        posts
      })
    })
  }

  render() {
    return (
      this.props.posts.map(post => <Post {...post}/>)
    )
  }
}
```

只要這個 component mount，就會去呼叫 API。

我剛剛提到的測試是什麼意思？

我們可能會想測試說：「這個 component render 以後是不是真的會去呼叫 API」。

你可能會想說：「那現在這樣不是很好嗎？」

No no no，我們其實不用真的去測試「送出 request」這一塊，只要能確定「WebAPI.getPosts」這個 fucntion 有被呼叫就行了。為什麼呢？因為我們還會對「WebAPI.getPosts」這個 function 寫另外的測試，確保它有送出 request。

簡單來說，測試是會分層的，你不應該把所有層次都混在一起。

以上面的例子來說，混在一起就是代表說當我測試 Posts 會不會呼叫 API 的時候，我測了兩個東西：

1. Posts 會不會呼叫 WebAPI.getPosts
2. WebAPI.getPosts 是否真的會送出 request

但其實我們只要測試第一個就好了，因為第二個是 WebAPI 這個 module 的事情，不關我們的事。

那怎樣比較好？我們來看個範例：

``` js
class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      this.props.posts.map(post => <Post {...post}/>)
    )
  }
}
```

這邊不是直接去呼叫 API，而是利用 props 提供的 function 去做呼叫。

這樣的好處是什麼？

好處是我只要檢查 component 是不是有呼叫 `getPosts` 就好了，一切就結束了。

那 getPosts 又要怎麼寫呢？最簡單的寫法是這樣：

``` js
const mapDispatchToProps = dispatch => {
  return {
    getPosts: function() {
      WebAPI.getPosts().then((posts) => {
        dispatch(actions.setPosts(posts))
      })
    }
  }
}
```

把邏輯寫在這個地方，這樣就可以在呼叫 action 的時候去 call API 了。

可是這樣也很奇怪啊，會造成呼叫 API 的邏輯跟 mapDispatchToProps 綁在一起了，而且四散各地，假設你有 10 個不同的 component 都要呼叫各自的 API，你的呼叫 API 的邏輯就散佈在十個檔案之中。

那要怎樣才能夠拆開呢？

這就要靠 redux 的 middleware 啦，先來介紹耳熟能詳的 [redux-thunk](https://github.com/reduxjs/redux-thunk)，概念很簡單，就是把 action 變成 function，然後 thunk 會幫你執行這個 function。

以上面的例子來改寫，會變成這樣：

``` js
const mapDispatchToProps = dispatch => {
  return {
    getPosts: function() {
      dispatch(actions.getPosts())
    }
  }
}

// actions.js
function getPosts() {
  // redux-thunk 會幫你把 dispatch 傳進來
  return function(dispatch) {
    WebAPI.getPosts.then(posts => {
      dispatch(actions.setPosts(posts))
    })
  }
}
```

如此一來，你就把 call API 的邏輯移到了 action 裡面，就不會四散於各地，不會存在於 component 當中。

其實很推薦大家可以看看 redux-thunk 的[原始碼](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js)，只有 14 行而已：

``` js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

重點在第三行，判斷如果 action 是個 function 就幫你執行，然後把參數傳給你，就是這麼簡單而已。

好，看起來 redux-thunk 的解法不錯啊，把 action 變成一個 function，就可以把相關邏輯都放在這邊了。

但其實還可以更好，那就是把邏輯從 action 裡面拿掉，再拆分出來一層。這樣就可以保持 action 都是 pure action（純 JS 物件），會更方便測試。

而這樣做的 middleware 有兩套，一套叫做 [redux-saga](https://github.com/redux-saga/redux-saga)，另一套叫做 [redux-observable](https://redux-observable.js.org/)。

其實這兩套的底層概念是一樣的，就是 pure action in, pure action out。

再次舉上面同樣的例子，改寫成 redux-saga 或是 redux-observable 之後，action 不再是個 function，而是純粹物件形式的 action：

``` js
const mapDispatchToProps = dispatch => {
  return {
    getPosts: function() {
      dispatch(actions.getPosts())
    }
  }
}

// actions.js
// pure action object
function getPosts() {
  return {
    type: 'GET_POSTS'
  }
}
```

那要在哪邊呼叫 API 呢？在 middleware 裡面去針對不同的 action 來做出反應。middleware 的概念會像這樣（非正式程式碼）：

``` js
function handleAction(action, dispatch) {
  if (action.type === 'GET_POSTS') {
    WebAPI.getPosts.then(posts => {
      dispatch(actions.setPosts(posts))
    })
  }
}
```

在 middleware 裡面執行任何會造成 side effect 的程式碼（side effect 就是副作用，以程式來講就是像 call API、寫 cookie 或是寫入 local storage 這些額外的操作）

如此一來，在 component 裡面就只需要 dispatch 一個 pure action，而非同步的處理就在 middleware 裡面處理就好，就不需要再把 action 變成 function。

這是 redux-saga 與 redux-observable 這兩套與 redux-thunk 跟 redux-promise 最不一樣的地方。在這兩套裡面，action 一定是 pure action，不會是 function 也不會是 promise。

其實我原本沒有預期大家用 redux-saga 跟 redux-observable 這兩套啦，因為這兩套的門檻我自己覺得頗高，我當初研究的時候研究老半天還是不知道 saga 在衝三小。

不過我看到有同學去研究而且使用了，就想說順便提一下這幾個 middleware 的差異。

更多細節可以參考我之前 Modern Web 2018 的演講：[輕鬆應付複雜的非同步操作：RxJS Redux Observable - 胡立 (huli)](https://hackmd.io/c/MW18/%2F2X5MCfKoQxWOCOpZ7tqsgA)，裡面有附上投影片，可以直接跳到最後面的地方（113~119 頁），忽略前面 RxJS 的部分。