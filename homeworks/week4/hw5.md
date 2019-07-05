請以自己的話解釋 API 是什麼？

我去銀行 ATM 領一筆錢 (資料)，透過 ATM ( API ) ，

用提款卡 (參數) 插入 ATM ，按按按之後，我領到了一筆錢 (刪除資料)。

結果太害怕有沒有人在看我的錢，就按錯了，結果發現我按的數字太多了，我根本沒麼多錢啊~

只好修改一下數字金額 (修改資料)，領出來一看，咦？好像不對啊，結果又領太多了，

只好又存了一些錢進去 (新增資料)，最後順便看一下存款餘額查詢看對不對 (查詢資料)，以免網購沒錢了~



ATM 的機器就是 API；錢，就是我要的資料；銀行，就是我的對象

我透過 ATM 的機器 (API) 來和銀行存錢 (新增) 、領錢 (刪除)、查詢剩餘金額 (查詢)

提款卡 (參數)就是我用的不同參數，放入不同的提款卡，就能查詢不同銀行的資料




請找出三個課程沒教的 HTTP status code 並簡單介紹

201 Created
請求成功且新的資源成功被創建，通常用於 POST 或一些 PUT 請求後的回應。

202 Accepted
此請求已經被接受但尚未處理。此狀態為非承諾性，代表 HTTP 無法在之後傳送一個非同步的回應告知請求的處理結果。
最初目的為外部程序或其他伺服器處理請求的情況，或用於批次處理中。


403 Forbidden
用戶端並無訪問權限，例如未被授權，所以伺服器拒絕給予應有的回應。不同於 401，伺服端知道用戶端的身份。


假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，
包括：回
所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，
你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://www.jing-restaurants.com


| 說明              | Method   |path              | 參數                    | 範例                   | 
| ------------------|----------|------------------|-------------------------|------------------------|
| 獲取所有餐廳資料  | GET      | /restaurants     | _limit:限制回傳資料數量 | /restaurants?_limit=5  |
| 獲取單一餐廳資料  | GET      | /restaurants/:id | 無                      | /restaurants/10        |
| 新增書籍          | POST     | /restaurants     | name: 餐廳名稱          | 無                     |
| 刪除書籍          | DELETE   | /restaurants/:id | 無                      | 無                     |
| 更改書籍資訊      | PATCH    | /restaurants/:id | name: 餐廳名稱          | 無                     |


獲取所有餐廳資料
GET https://www.jing-restaurants.com/restaurant


取得前六家餐廳資料
GET https://www.jing-restaurants.com/restaurant?_limit=6

獲取單一餐廳資料 ( 獲取第二家餐廳 )
GET https://www.jing-restaurants.com/restaurant/2


新增餐廳餐廳
POST https://www.jing-restaurants.com/restaurant/


刪除餐廳 ( 刪除第七家 )
DELETE https://www.jing-restaurants.com/restaurant/7


變更餐廳資訊 ( 刪除第七家 )
PATCH https://www.jing-restaurants.com/restaurant/7


[
  {
    "id": 1,
    "name": "逸廊大堂酒吧",
    "arrd":"Taipei",
    "tel":"0911123456"	
  },
  {
    "id": 2,
    "name": "Asia 49亞洲料理及酒廊",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 3,
    "name": "原燒",
    "arrd":"Yunlin",
    "tel":"0911987654"	
  },
  {
    "id": 4,
    "name": "這一鍋皇室秘藏鍋物",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 5,
    "name": "藝奇",
    "arrd":" Taoyuan",
    "tel":"0911987654"	
  },
  {
    "id": 6,
    "name": "鼎泰豐",
    "arrd":"Tainan",
    "tel":"0911987654"	
  },
  {
    "id": 7,
    "name": "文岩文 岩燒蜀辣鴛鴦鍋",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 8,
    "name": "Prime One牛排館 ",
    "arrd":"Panchiao",
    "tel":"0911987654"	
  },
  {
    "id": 9,
    "name": "TGI Fridays 星期五餐廳",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 10,
    "name": "青雅中餐廳",
    "arrd":"Taitung",
    "tel":"0911987654"	
  }
]

