import React, {useState} from 'react';

export default function PropDrilling() {

    const [nome, setNome] = useState('Marina');

    return (
        <section>
            <h1>Prop Drilling Component</h1>
            <Hello nome={nome} />
        </section>
    );
}

function Hello(props) {
    return (
        <section>
            <h1>Hello</h1>
            <Greetings nome={props.nome} />
        </section>
    )
}

function Greetings(props) {
    return (
        <section>
            <h1>Greetings {props.nome}</h1>
        </section>
    )
}