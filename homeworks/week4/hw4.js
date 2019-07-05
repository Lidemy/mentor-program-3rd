const request = require('request');

request.get(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': 'gj5v0163xj32lp3w24mcdb4z2bc12u',
    },
  },
  (error, response, body) => {
    console.log(body);
    const gameList = JSON.parse(body).data;
    console.log(`${gameList[0].id} ${gameList[0].name}`);
  },
);
