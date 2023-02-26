import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const openNabSlice = createSlice({
  name: "openNab",
  initialState,
  reducers: {
    close: (state) => {
      state.value = false;
    },
    open: (state) => {
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { close, open } = openNabSlice.actions;
// export const getCount = (state) => state.counter.selectedProduct;

export default openNabSlice.reducer;
