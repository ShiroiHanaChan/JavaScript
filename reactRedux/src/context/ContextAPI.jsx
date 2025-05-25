import React, {useContext, useState} from 'react';

const appContext = React.createContext();

export default function ContextAPI() {

    const [nome, setNome] = useState('Marina');

    return (
        <appContext.Provider value={
            {nome: nome, setNome} // Ou simplesmente {nome} como o key/value pair são iguais
        }>
            <section>
                <h1>Context API</h1>
                <Hello />
            </section>
        </appContext.Provider>
    );
}

function Hello(props) {
    return (
        <section>
            <h1>Hello</h1>
            <Greetings />
        </section>
    )
}

function Greetings(props) {

    const context = useContext(appContext);

    return (
        <section>
            <h1>Greetings {context.nome}</h1>
            <button onClick={() => context.setNome('Hana')}>Change name</button>
        </section>
    )
}