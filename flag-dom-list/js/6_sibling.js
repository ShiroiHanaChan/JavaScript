let item2 = document.querySelector('#two');
/*let itemAnterior = item2.previousElementSibling; // Property*/
let itemAnterior = item2.previousSibling; // Whitespace between siblings will mess this up!!!! Because whitespace is a text node

itemAnterior.className = 'cool';

let itemSeguinte = item2.nextElementSibling; // Property

itemSeguinte.className = 'cool';