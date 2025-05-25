import React from 'react';
import Book from "./Book.jsx";

function BookList({books, deleteBook}) {

    console.log('BookList:', books)

    return (
        <>
            {
                books.map( book => <Book
                    key={book.id}
                    deleteBook={deleteBook}
                    book={book}
                    />
                )
            }
        </>
    );
}

export default BookList;