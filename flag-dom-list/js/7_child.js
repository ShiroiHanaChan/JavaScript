let lista = document.querySelector('ul');
let items = lista.querySelectorAll('li');

let primeiroItem = lista.firstElementChild;
primeiroItem.className = 'cool';

let ultimoItem = lista.lastElementChild;
ultimoItem.className = 'complete';
