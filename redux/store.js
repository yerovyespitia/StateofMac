import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
  },
});
