const request = require('request');

const BATCH_LIMIT = 4;
const TOTAL_STREAMS = 13;
const CLIENT_ID = 'ylx39xtx1ne6q7my9p4m50aadd190z';
const BASE_URL = 'https://api.twitch.tv/helix';

/*
  搜尋遊戲
*/
function searchGame(name, callback) {
  request({
    method: 'GET',
    url: `${BASE_URL}/games?name=${name}`,
    headers: {
      'Client-ID': CLIENT_ID
    }
  }, callback)
}

/*
  callback 會回傳「全部」的實況列表
  gameId: 遊戲 id
  limit: 一次要抓幾筆
  total: 總共要抓幾筆
  callback: 抓完之後要呼叫的 function
*/
function getAllStreams(gameId, limit, total, callback) {
  let streams = [];
  function handleStreams(err, res, body) {
    // 錯誤發生的話直接把 err 傳回去
    if (err) {
      return callback(err)
    }

    const json = JSON.parse(body);
    const cursor = json.pagination.cursor;

    // 拼接上新的資料
    streams = streams.concat(json.data);

    // 如果還沒抓夠的話
    if (streams.length < total) {
      // 就再抓一次，這次傳進 cursor
      getStreams(gameId, limit, cursor, handleStreams)
    } else {
      // 抓完了，把 streams 傳回去，記得用 slice 切出正確數量
      // 如果沒有 slice 的話，一次抓 10 筆，要抓 21 筆，最後會回傳 30 筆
      callback(null, streams.slice(0, total));
    }
  }

  // 抓第一次資料
  getStreams(gameId, limit, null, handleStreams);
}

/*
  callback 會根據參數回傳部分實況列表
*/
function getStreams(gameId, first, after, callback) {
  let url = `${BASE_URL}/streams?game_id=${gameId}&first=${first}`
  if (after) {
    url += '&after=' + after
  }
  request({
    method: 'GET',
    url: url,
    headers: {
      'Client-ID': CLIENT_ID
    }
  }, callback)
}

// 先搜尋遊戲
// node twitch.js "league of legends"
searchGame(process.argv[2], (err, res, body) => {
  if (err) {
    return console.log(err);
  }

  // 再利用 gameId 去獲得所有 streams
  const gameId = JSON.parse(body).data[0].id;
  getAllStreams(gameId, BATCH_LIMIT, TOTAL_STREAMS, (err, streams) => {
    if (err) {
      return console.log(err);
    }
    for (let i = 0; i < streams.length; i += 1) {
      console.log(streams[i].user_name, streams[i].id);
    }
  })
})
