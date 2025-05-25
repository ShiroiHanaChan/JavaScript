import React from 'react';

function Book({book, deleteBook}) {

    let {id, title, author, imageUrl, alreadyRead} = book
    console.log(book);

    const handleDelete = () => {
        deleteBook(id)
    }

    return (
        <>
            <article data-bookid={id}>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <img src={`livros/${imageUrl}`} alt={title}/>
                <p>Already read: {alreadyRead ? '✅' : '❌'}</p>
                <button
                    onClick={handleDelete}
                    id="bookDeleteButton" data-bookid={id}>
                    Delete
                </button>
            </article>
        </>
    );
}

export default Book;