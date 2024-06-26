import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducers/reducers";
const store = configureStore({
  reducer: {
    quizReducer: quizReducer,
  },
});
export default store;
