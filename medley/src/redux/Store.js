import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const store = configureStore({
    reducer : {
        authInfo : AuthSlice
    }
})
export default store