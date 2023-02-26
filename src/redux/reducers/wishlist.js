import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  cart: [],
  cartTotal: [],
  cartAmount: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addtolist: (state, action) => {
      const itemindex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.cart[itemindex].cartTotal += 1;
      } else {
        const tempProduct = { ...action.payload, cartTotal: 1 };
        toast.success(` Product added Successfully`);

        state.cart.push(tempProduct);
      }
    },
    removeProduct(state, action) {
      const newArry = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cart = newArry;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtolist, removeProduct } = wishListSlice.actions;
// export const getCount = (state) => state.counter.selectedProduct;

export default wishListSlice.reducer;
