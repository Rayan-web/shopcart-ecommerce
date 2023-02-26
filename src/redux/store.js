import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counter";
import navbarOpen from "./reducers/navbarOpen";
import dataSlice from "./reducers/products";
import wishListSlice from "./reducers/wishlist";
export const store = configureStore({
  reducer: {
    products: dataSlice,
    counter: counterSlice,
    navbar: navbarOpen,
    wishlist: wishListSlice,
  },
});
