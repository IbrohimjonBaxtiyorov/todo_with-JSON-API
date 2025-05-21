import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
  filter: {
    priority: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setData(state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    addData(state, { payload }) {
      state.data.unshift(payload);
    },
    deleteData(state, { payload }) {
      state.data = state.data.filter((item) => item.id !== payload);
    },
  },
});

export const { setData, setLoading, setFilter, addData, deleteData } =
  todoSlice.actions;

export default todoSlice.reducer;
