import {createSlice} from "@reduxjs/toolkit";
const bookSlice = createSlice({
    name: "[Book] Slice",
    initialState: {
        books: [],
    },
    reducers: {
        fetchBooks: (state, action) => {
            state.books = [...action.payload];
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== Number(action.payload));
        }
    }
})

export const {fetchBooks, deleteBook} = bookSlice.actions;

export default bookSlice.reducer;