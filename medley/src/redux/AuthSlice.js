import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name: "userDetails",
    initialState:{
        value:{token:undefined , name:undefined , type:undefined , isLogin:false}
    },
    reducers:{
        authReducer:(state,action) => {
            state.value= action.payload;
            console.log(action.payload);
        }
    }
})
export const {authReducer} = slice.actions
export default slice.reducer