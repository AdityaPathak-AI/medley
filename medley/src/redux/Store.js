import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ClinicSlice from "./ClinicSlice";
import PatientSlice from "./PatientSlice";

const store = configureStore({
    reducer : {
        authInfo : AuthSlice,
        clinicInfo: ClinicSlice,
        patientInfo : PatientSlice
    }
})
export default store