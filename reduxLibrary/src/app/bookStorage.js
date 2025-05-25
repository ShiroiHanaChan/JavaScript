import {configureStore} from "@reduxjs/toolkit";
import bookSlice from "./bookSlice.js";

export default configureStore({
    reducer: {
        bookStore: bookSlice,
    },
})