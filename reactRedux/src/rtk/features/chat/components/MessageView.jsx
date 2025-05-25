import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteMessage} from "../messageSlice.js";

function MessageView(props) {

    const {messages} = useSelector(state => state.chat);

    const dispatch = useDispatch()

    return (
        <section className={'chat'}>
            <h1>Message View</h1>
            {
                messages.map((msg, i)=> (
                    <p key={i} onClick={() => dispatch(deleteMessage(i))}>{msg}</p>
                ))
            }
        </section>
    );
}

export default MessageView;