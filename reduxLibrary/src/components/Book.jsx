import React from 'react';
import {useDispatch} from "react-redux";
import {deleteBook} from "../app/bookSlice.js";

function Book({book}) {

    let {id, title, author, imageUrl, alreadyRead} = book

    const dispatch = useDispatch();

    return (
        <>
            <article data-bookid={id}>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <img src={`livros/${imageUrl}`} alt={title}/>
                <p>Already read: {alreadyRead ? '✅' : '❌'}</p>
                <button
                    onClick={() => dispatch(deleteBook(id))}
                    id="bookDeleteButton" data-bookid={id}>
                    Delete
                </button>
            </article>
        </>
    );
}

export default Book;