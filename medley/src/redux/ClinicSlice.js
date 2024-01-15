import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "clinicDetails",
  initialState: {
    value: []
  },
  reducers: {
    listClinicReducer: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    },
  },
});
export const { listClinicReducer } = slice.actions;
export default slice.reducer;
