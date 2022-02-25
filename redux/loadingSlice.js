import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "skeleton",
  initialState: {
    value: { loading: true },
  },
  reducers: {
    skeletonLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { skeletonLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
