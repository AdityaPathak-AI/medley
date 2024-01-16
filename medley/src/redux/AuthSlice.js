import {createSlice} from "@reduxjs/toolkit"

const localValues = JSON.parse(localStorage.getItem("userInfo"))
console.log(localValues);

const initialState = {
    value : localValues || {
        token:undefined , name : undefined , type : undefined , isLogin : false
    }
}
console.log(initialState);

const slice = createSlice({
    name: "userDetails",
    initialState,
    reducers:{
        authReducer:(state,action) => {
            state.value= action.payload;
            console.log(action.payload);
            localStorage.setItem('userInfo' , JSON.stringify(action.payload))
        }
    }
})
export const {authReducer} = slice.actions
export default slice.reducer