/*
1 - esconder o form, e deixar visível somente o botão NewItem
2 - Ao clicar no botão NewItem mostrar o form e esconder o botão
3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo “item” á lista, voltar a esconder o form e mostrar botão NovoItem
4 - ao clicar num “item”, verificar se tem a class 'complete', se tiver que eliminar o “item”, senão aplicar a class complete, e mover para o final da lista
5 - apresentar no <h2>, inserindo numa 'tag' <span> o número de “items” por comprar
6- após apagar se fizer cmd → Z, repõe o “item” eliminado
*/

const numbersInWords = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty"
];

const removedItemList = [];

// Object factory

function objFactory(target, innerHTML) {
    return {
        target: target,
        innerHTML: innerHTML,
    }
}

/* REMOVE LI REMOVE LI REMOVE LI REMOVE LI REMOVE LI REMOVE LI REMOVE LI REMOVE LI */

let ul = document.querySelector('ul');
    ul.addEventListener('click', removeListItems, false);

function removeListItems(eventObj) {
    if (eventObj.target.classList.contains('complete')) {
        removedItemList.push(objFactory(eventObj.target, eventObj.target.innerHTML));
        eventObj.target.remove();
    }
    eventObj.target.classList.add('complete');
}

/* SECTION END */

/* ADD LI ADD LI ADD LI ADD LI ADD LI ADD LI ADD LI ADD LI ADD LI ADD LI ADD LI ADD LI */
// Form

let itemForm = document.querySelector('#newItemForm');

// Show/hide form
let buttonForm = document.querySelector('#showForm');
    buttonForm.addEventListener('click', () => itemForm.classList.replace('hide', 'show'), false);

let buttonAdd = document.querySelector('#addButton');
    buttonAdd.addEventListener('click', (eventObj) => addListItems(eventObj, numbersInWords), false);

function addListItems(eventObj, numbersInWords) {
    eventObj.preventDefault();
    const newUl = document.createElement('li');
    newUl.innerHTML = `${eventObj.target.previousElementSibling.value}`;
    /*newUl.setAttribute('id', numbersInWords[ul.childElementCount]); -- UNSAFE */
    ul.appendChild(newUl);
    // Reset
    eventObj.target.previousElementSibling.value = ``;
    itemForm.classList.replace('show', 'hide')
}

/* SECTION END */

/* CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z CMD Z */

let cmdVar = false; let zVar = false;
document.addEventListener('keydown', (eventObj) => {
        if (eventObj.key === 'Meta') {
            zVar = false;
            cmdVar = true;
        } else if (eventObj.key === 'z') {
            zVar = true;
        } else {
            cmdVar = false;
            zVar = false;
        }
        if ( zVar === true && cmdVar === true ) {
            // Add last indexed removed list item
            function restore(removedItemList) {
                const newUl = document.createElement('li');
                newUl.innerHTML = removedItemList[removedItemList.length - 1].innerHTML;
                ul.appendChild(newUl);
                removedItemList.pop();
            }
            restore(removedItemList);
            cmdVar = false;
            zVar = false;
        }
    }, false);

/* SECTION END */