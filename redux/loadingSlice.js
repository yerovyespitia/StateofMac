import { createSlice } from "@reduxjs/toolkit"

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    value: { loaded: false },
  },
  reducers: {
    load: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { load } = loadingSlice.actions
export default loadingSlice.reducer
