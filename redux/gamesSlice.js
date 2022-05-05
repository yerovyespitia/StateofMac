import { createSlice } from "@reduxjs/toolkit"

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    value: { searchGame: "" },
  },
  reducers: {
    search: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { search } = gamesSlice.actions
export default gamesSlice.reducer
