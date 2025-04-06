const livros = [
    {
        title: 'Angular Com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
    },
    {
        title: 'Blockchain com JS',
        author: "Bina Ramamurthy",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
    },
    {
        title: 'Deep Learning com JS',
        author: "Various Authors",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
    },
    {
        title: 'Joy Of Javascript',
        author: "Luis Ascencio",
        alreadyRead: false,
        imageUrl: 'joj.jpg',
    },
    {
        title: 'React Hooks in Action',
        author: "John Larsen",
        alreadyRead: true,
        imageUrl: 'reacthooks.jpg',
    },
];

const cardOrder = ['h1', 'h2', 'div', 'p'];
const cardElements = ['title', 'author', 'alreadyRead', 'imageUrl',];

let bodyElement = document.querySelector('body');
let title = document.querySelector('#title');

// Create an article and declare a grid inside of it
createArticle = document.createElement('article');
bodyElement.append(createArticle);

// Target newly created article
articleElement = document.querySelector('article');

function makeCards(livros, cardOrder) {
    // Each card must be iterated through so they aren't overwritten
    let gridCardOrder;
    for (const nth of livros) {
        /*let cardIterator = 0;*/
        // Create a card
        let gridCard = document.createElement('section');
        articleElement.append(gridCard);
        // Select it
        let gridCardElement = document.querySelector('section:last-of-type');
        // Add iterated info from the array
        for (const nth of cardOrder) {
            gridCardOrder = document.createElement(nth);
            gridCardElement.append(gridCardOrder);
        }
    }
}

function populateCards(livros, cardOrder, cardElements) {
    let iterator = 1;
    let card = 0;
    for (const nth of livros) {
        // Access desired card
        console.log('Iteration: ',iterator);
        console.log(nth);
        let gridCardElement = document.querySelector(`section:nth-of-type(${iterator})`);
        gridCardElement.style.border = '1px solid black';
        for (const nth of cardOrder) {
            let cardElement = gridCardElement.querySelector(nth);
            if (card < 2) {
                cardElement.textContent = livros[iterator-1][cardElements[card]];
            } else if (card === 2) {
                cardElement.innerHTML += `<img src="livros/${livros[iterator-1].imageUrl}" alt="A book called ${livros[iterator-1].title}">`;
                console.log('img added');
            } else {
                if (livros[iterator-1].alreadyRead === true) {
                    cardElement.textContent = `Already read: ✅`;
                } else {
                    cardElement.textContent = `Already read: ❌`;
                }
            }
            console.log('Card: ', card);
            card++;
            console.log('---------------');
        }
        // Add to iterator
        iterator++;
        // Reset card counter
        card = 0;
    }
}

function stylePage() {
    // Select body, so we can make text-align centered
    const bodyElement = document.querySelector('body');
    bodyElement.style.textAlign = 'center';
    bodyElement.style.margin = 'auto';
    bodyElement.style.maxInlineSize = '760px';

    // Select article
    articleElement.style.display = 'grid';
    articleElement.style.gridTemplateColumns = 'repeat(4, 1fr)';
    articleElement.style.gap = '20px';

    // Additional section style to look cooler
    const gridCardElement = document.querySelectorAll('section');
    for (const nth of gridCardElement) {
        nth.style.gridColumn = 'span 2';
    }
    const lastCardElement = document.querySelector(`section:last-of-type:nth-child(odd)`);
    lastCardElement.style.gridColumn = '2 / 4';
}

makeCards(livros, cardOrder);
populateCards(livros, cardOrder, cardElements);
stylePage();



















