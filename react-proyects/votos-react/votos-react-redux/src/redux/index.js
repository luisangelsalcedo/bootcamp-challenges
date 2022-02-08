import { configureStore } from "@reduxjs/toolkit";
import candidatosReducer from "./features/candidatosSlice";

export default configureStore({
  reducer: {
    candidatos: candidatosReducer,
  },
});
