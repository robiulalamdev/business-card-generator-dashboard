import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const globalsSlice = createSlice({
  name: "global slice",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = globalsSlice.actions;

export default globalsSlice.reducer;
