import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "data/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);
export const fetchProductsById = createAsyncThunk(
  "data/fetchProductsById",
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    selectedProduct: [],
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [fetchProductsById.fulfilled]: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

export const { addData } = dataSlice.actions;
export const getSelectedProduct = (state) => state.products.selectedProduct;
export default dataSlice.reducer;
