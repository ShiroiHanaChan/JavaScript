import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "../features/chat/messageSlice.js";

export default configureStore({
    reducer: {
        // Add slices here
        chat: messageSlice,
    }
})