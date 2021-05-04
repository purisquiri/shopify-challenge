//Modules
import { configureStore } from "@reduxjs/toolkit";
import nominations from "../components/Nominations/nominationsSlice";

//Reducers

export default configureStore({
  reducer: {
    nominations,
  },
});
