import React, {useEffect, useState} from 'react';
import BookList from "./BookList.jsx";
import {useDispatch, useSelector} from "react-redux";
import { fetchBooks, deleteBook } from '../app/bookSlice.js';
import {dataURL} from "../config.js";

function BookDashboard() {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Fetching...');
        fetch(dataURL)
            .then(response => response.json())
            .then(data => dispatch(fetchBooks([...data])));
        console.log('Done!');
    }, []);

    return (
            <>
                <h1>Book Dashboard</h1>
                <section className={'grid'} id={'grid'}>
                    <BookList/>
                </section>
            </>
        );
}

export default BookDashboard;
