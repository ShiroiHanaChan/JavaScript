import React, {useEffect, useState} from 'react';
import BookList from "./BookList.jsx";

function BookDashboard() {

    const [livros, setLivros] = useState(null);
    console.log('Dashboard:', livros)

    const handleDeleteBook = (id) => {
        setLivros(livros.filter(book => book.id !== Number(id)));
    }

    const URL = 'https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books';

    useEffect(() => {
        (
            async () => {

                try {
                    const response = await fetch(URL);
                    if (!response.ok)
                        throw Error(`Data fetch error! ${response.status}`);
                    const data = await response.json();
                    setLivros(data);
                } catch (error) {
                    console.log('Error:', error)
                }
            }
        )();
    }, []);

    if (livros !== null)
    return (
        <>
            <h1>Book Dashboard</h1>
            <section className={'grid'} id={'grid'}>
                <BookList
                    books={livros}
                    deleteBook={handleDeleteBook}
                />
            </section>
        </>
    );

    return (
        <>
            <br/>
            <h1>Loading...</h1>
        </>
    )
}

export default BookDashboard;