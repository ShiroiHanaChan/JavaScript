import React, {useEffect, useState} from 'react';

function UsingLocalStorage() {

    // localStorage.setItem('name', 'Marina');
    // localStorage.setItem('age', '25');

    // console.log(localStorage.getItem('name'));

    // localStorage.clear();

    const [user, setUser] = useState('');

    useEffect(() => {
        // Início na construção da componente, verificar se tenho um ‘user’ guardado.
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('user', user)
    }, [user]);

    return (
        <>
            <h1>Local Storage API - Dependencies in Effects</h1>
            <select name="" id="" value={user} onChange={(eventObj => setUser(eventObj.target.value))}>
                <option value="">Marina</option>
                <option value="">Salem</option>
                <option value="">Luna</option>
                <option value="">Artemis</option>
                <option value="">Celeste</option>
            </select>
        </>
    );
}

export default UsingLocalStorage;