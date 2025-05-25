import React from 'react';
import MessageView from "./MessageView.jsx";
import MessageInput from "./MessageInput.jsx";
import {useDispatch} from "react-redux";
import {clearChat} from "../messageSlice.js";

function Chat(props) {

    const dispatch = useDispatch();

    return (
        <section className={'chat'}>
            <h1>Chat</h1>
            <button onClick={() => dispatch(clearChat())}>Clear chat</button>
            <MessageView />
            <MessageInput />
        </section>
    );
}

export default Chat;