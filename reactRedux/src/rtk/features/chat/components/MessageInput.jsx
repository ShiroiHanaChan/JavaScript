import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addMessage} from "../messageSlice.js";

function MessageInput(props) {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addMessage(value));
        setValue('')
    };

    return (
        <section className={'chat'}>
            <h1>Message Input</h1>
            <input
                type="text"
                name="" id=""
                placeholder={'Message:'}
                value={value}
                onChange={(eventObj) => setValue(eventObj.target.value)}
            />
            <button onClick={handleSubmit}>Bombs away!</button>
        </section>
    );
}

export default MessageInput;