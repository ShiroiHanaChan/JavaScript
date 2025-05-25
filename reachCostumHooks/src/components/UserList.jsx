import React, {useEffect, useState} from 'react';

function UserList() {

    const [users, setUsers] = useState([]);

    /*
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/JoaoGoncalves/bookables/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(() => console.log('Error'));
    }, []); // Somente no início da construção da componente.
    */

    useEffect(() => {

        (async () => {
            const response = await fetch('https://my-json-server.typicode.com/JoaoGoncalves/bookables/users');
            const data = await response.json();
            setUsers(data);
        })();

    }, []);

    if (users.length > 0)
        return (
            <ul>
                {
                    users.map(u => (
                        <li key={u.id}>{u.name}</li>
                    ))
                }
            </ul>
        )

    return (
        <>
            <h1>Loading...</h1>
        </>
    );
}

export default UserList;