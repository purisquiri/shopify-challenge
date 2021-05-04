import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNominated: false,
  nominations: [],
};

export const nominationsSlice = createSlice({
  name: "nominations",
  initialState: initialState,
  reducers: {
    updateNominations: (state, action) => {
      const { payload } = action;
      return { ...state, nominations: [...state.nominations, payload] };
    },
  },
});

export const { updateNominations } = nominationsSlice.actions;

export const selectNominations = (state) => state.Nominations;

export default nominationsSlice.reducer;
