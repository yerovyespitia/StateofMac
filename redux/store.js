import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import loadingReducer from "./loadingSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
})
