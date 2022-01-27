import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      user:
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("user"))
          : null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    userLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
