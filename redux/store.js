import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import userReducer from "./userSlice";
import loadingReducer from "./loadingSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
    user: userReducer,
    skeleton: loadingReducer,
  },
});
