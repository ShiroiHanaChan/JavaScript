import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "[Chat] Messages", // Identificador do slice
    initialState: { // State inicial desta slice, desta feature da app
        messages: [],
    },
    reducers: { // Action creators, definir actions e de que forma o state desta slice é atualizado
        addMessage: (state, action) => {
            // const newState = {... state, action payload}
            state.messages.push(action.payload) // No RTK, foi acrescentado uma biblioteca IMMER que me garante a imutabilidade do state
        },
        deleteMessage: (state, action) => {
            state.messages = state.messages.filter((msg, i) => i !== action.payload)
        },
        clearChat: (state) => {
            state.messages = []
        }
    }
});

export const {addMessage, deleteMessage, clearChat} = messageSlice.actions;
export default messageSlice.reducer;