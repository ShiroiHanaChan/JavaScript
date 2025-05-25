import React, {useEffect, useState} from 'react';

function SayHello() {

    const greetings = ['Óla', 'Hola', 'Bonjour', 'Ciao', 'Good Morning'];

    const [index, setIndex] = useState(0);

    // useEffect sempre que tiver um side effect, executa sempre que o state for alterado.
    // Neste caso, atualiza sempre que um state é alterado.
    useEffect(
        () => {
            document.title = greetings[index];
        }
    );

    const updateGreetings = () => {
        setIndex(Math.floor(Math.random() * greetings.length));
    }

    return (
        <section>
            <p>{greetings[index]}</p>
            <button onClick={updateGreetings}>Say Hello</button>
        </section>
    );
}

export default SayHello;