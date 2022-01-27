import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
    user: userReducer,
  },
});
