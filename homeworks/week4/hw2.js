const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      for (let i = 0; i < 20; i += 1) {
        console.log(`${JSON.parse(body)[i].id}${' '}${JSON.parse(body)[i].name}`);
      }
    });
}
if (process.argv[2] === 'read') {
  request('https://lidemy-book-store.herokuapp.com/books/',
    (error, response, body) => {
      if (process.argv[3] > 0) {
        const i = process.argv[3];
        console.log(`${JSON.parse(body)[i - 1].id}${' '}${JSON.parse(body)[i - 1].name}`);
      }
    });
}
