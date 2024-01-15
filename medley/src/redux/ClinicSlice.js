import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "clinicDetails",
  initialState: {
    value: [],
    upData:undefined,
  },
  reducers: {
    listClinicReducer: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    },
    deleteClinicReducer: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    },
    updateClinicReducer: (state, action) => {
      state.upData = action.payload;
      console.log(action.payload);
    },
  },
});
export const { listClinicReducer , deleteClinicReducer , updateClinicReducer   } = slice.actions;
export default slice.reducer;
