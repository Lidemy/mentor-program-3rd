const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books/',
  (error, response, body) => {
    console.log(`${JSON.parse(body)[1].id}${' '}${JSON.parse(body)[1].name}`);
    for (let i = 0; i <= 9; i += 1) {
      console.log(`${JSON.parse(body)[i].id}${' '}${JSON.parse(body)[i].name}`);
    }
  });
