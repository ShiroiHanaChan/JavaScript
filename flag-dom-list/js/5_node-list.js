let items = document.getElementsByTagName('li');
let itemsHot = document.querySelectorAll('li.hot');

for (const itemsHotElement of itemsHot) {
    itemsHotElement.className = 'cool';
}

let outraLista = Array.from(items);
outraLista.map(lista => lista.className = 'cool');

console.log(items);
console.log(itemsHot);

// Get ... LIVE NODES HTMLCollection
// Query ... STATIC NODES NodeList