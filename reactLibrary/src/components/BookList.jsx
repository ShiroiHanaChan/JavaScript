import React, {useEffect, useState} from 'react';
import Book from "./Book.jsx";
import {path} from "../config.js";

function BookList() {

    const [bookData, setBookData] = useState(null);
    console.log(bookData);

    useEffect(() => {
        fetch(path)
            .then(response => response.json())
            .then( data => setBookData(data))
            .catch(()=> console.log('Ocorreu um erro de comunicação'));
        }, []
    )

    const deleteBook = (id) => {
        setBookData(bookData.filter(book => book.id !== Number(id)))
    }

    if (bookData !== null && bookData !== undefined)
        return (
            <>
                <section className={'grid'} id={'grid'}>
                    {
                        bookData.map(book => (
                        /*const {id, title, author, alreadyRead, imageUrl, imageUrlGR} = book;*/
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                alreadyRead={book.alreadyRead}
                                imageUrl={book.imageUrl}
                                imageUrlGR={book.imageUrlGR}
                                function={deleteBook}
                            />
                        ))
                    }
                </section>
            </>
        );
    }

export default BookList;