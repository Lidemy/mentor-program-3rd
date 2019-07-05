const request = require('request');
const process = require('process');


if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      for (let i = 7; i < 20; i += 1) {
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
if (process.argv[2] === 'delete') {
  const id = process.argv[3];
  console.log(`https://lidemy-book-store.herokuapp.com/books/${id}`);
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error, response, body) => {
      console.log('id:', id);
      console.log('body:', body);
      console.log('response.statusCode:', response.statusCode);
    });
}
if (process.argv[2] === 'create') {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books/',
    form: {
      id: '',
      name: `${process.argv[3]}`,
    },
  });
}

/*
var a = 1; console.log('一共有'+a+'個雞蛋！')

那麼現在你只要console.log(`一共有${a}個雞蛋！`)

*/

if (process.argv[2] === 'update') {
  const id = process.argv[3];
  const newName = process.argv[4];
  const url = 'https://lidemy-book-store.herokuapp.com/books';
  console.log('https://lidemy-book-store.herokuapp.com/books/');
  console.log(`id:${id}`);
  console.log(`newName:${newName}`);
  request.put(
    {
      url: `${url}`,
      form: {
        id: 1,
        name: newName,
      },
    },
    (error, response, body) => {
      console.log('id:', id);
      console.log('body:', body);
      console.log('response.statusCode:', response.statusCode);
    },
  );
}
