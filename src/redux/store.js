import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/products";
export const store = configureStore({
  reducer: {
    products: dataSlice,
  },
});
