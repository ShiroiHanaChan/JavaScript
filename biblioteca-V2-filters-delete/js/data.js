// Globally declared
class Livro {
    constructor (id, title, author, alreadyRead, imageUrl, imageUrlGr) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
        this.imageUrl = imageUrl;
        this.imageUrlGr = imageUrlGr;
    }
}

// Book parameters
let bookId;
let bookTitle = document.querySelector('#bookTitle');
let bookAuthor = document.querySelector('#bookAuthor');
let bookThumbnail = document.querySelector('#bookThumbnail');
let bookPopup = document.querySelector('#bookPopup');
let bookCheckbox = document.querySelector('#formCheckbox');

// IIFE will return the new object livros
let livros;

(async function getBooksDB() {
    const URL = 'https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books'
    try {
        const response = await fetch(URL);
        if (!response.ok)
            throw new Error(`${response.status}`);
        livros = await response.json();
    } catch (error) {
        console.error(error.message);
    }
    return livros;
})();

let livrosOld = [
    {
        id: 0,
        title: 'Angular Com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
        imageUrlGr: 'angularGr.png',
    },
    {
        id: 1,
        title: 'Blockchain com JS',
        author: "Bina Ramamurthy",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
        imageUrlGr: 'blockchainGr.png',
    },
    {
        id: 2,
        title: 'Deep Learning com JS',
        author: "Various Authors",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
        imageUrlGr: 'deeplearningGr.png',
    },
    {
        id: 3,
        title: 'Joy Of Javascript',
        author: "Luis Ascencio",
        alreadyRead: false,
        imageUrl: 'joj.jpg',
        imageUrlGr: 'jojGr.png',
    },
    {
        id: 4,
        title: 'React Hooks in Action',
        author: "John Larsen",
        alreadyRead: true,
        imageUrl: 'reacthooks.jpg',
        imageUrlGr: 'reacthooksGr.png',
    },
];