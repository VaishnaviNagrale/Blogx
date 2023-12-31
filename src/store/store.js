import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../fectures/authSlice";
// import postSlice from "../fectures/postSlice";
// import fileSlice from "../fectures/fileSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        // post: postSlice,
        // file: fileSlice,
    }
})

export default store