# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## Stack 與 Queue

這邊其實滿害怕大家把 Stack 與 call stack 搞混，或者是把 Queue 與下週要講的 callback queue 搞混。

Stack 與 Queue 是兩種資料結構，就像陣列也是一種資料結構一樣。當我們提到 Stack 跟 Queue 的時候我們知道資料怎麼進出，所以它是一種比較抽象的概念。

而 Stack 這個後進先出的特性很適合拿來當執行程式時的資料結構，因為就像你 function 呼叫 function 一樣，一定是後面的執行完才跑回來執行前面的，因此底層會利用 Stack 來實作這個呼叫的流程，這個東西就叫做：Call Stack。

所以當有人問你 Stack 是什麼的時候，不要搞混成 Call Stack 了，他想知道的只是這個資料結構在幹嘛而已；當有人問你 Call Stack 的時候，就是想知道你怎麼解釋程式在執行時的底層結構。

簡單來說呢，Stack 是一種資料結構，Call Stack 是 Stack 的一種使用方式。