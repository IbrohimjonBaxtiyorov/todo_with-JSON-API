import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setAddMoadl(state) {
      state.addModal = !state.addModal;
    },
  },
});

export const { setAddMoadl } = modalSlice.actions;

export default modalSlice.reducer;
