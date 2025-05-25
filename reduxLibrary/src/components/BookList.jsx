import React from 'react';
import Book from "./Book.jsx";
import {useSelector} from "react-redux";

function BookList() {

    const {books} = useSelector(state => state.bookStore);
    console.log('Livros:', books);

    if (books.length > 0)
    return (
        <>
            {
                books.map( book => <Book
                    key={book.id}
                    book={book}
                    />
                )
            }
        </>
    );

    return (
        <>
            <br/>
            <h1>Loading...</h1>
        </>
    );
}

export default BookList;