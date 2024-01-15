import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ClinicSlice from "./ClinicSlice";

const store = configureStore({
    reducer : {
        authInfo : AuthSlice,
        clinicInfo: ClinicSlice
    }
})
export default store