export const path = 'https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books';

export const bookJSON = '/books.json';

export const getResponse = await fetch(path);
console.log(getResponse);