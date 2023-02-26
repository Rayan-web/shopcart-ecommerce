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
    filtredProducts: [],
  },
  reducers: {
    filtedProducts(state, action) {
      try {
        const filter = state.data.filter(
          (product) => product.category === action.payload
        );

        state.filtredProducts = filter;
      } catch (error) {}
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [fetchProductsById.fulfilled]: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    // filtedProducts(state, action) {
    //   try {
    //     const filter = data.filter(
    //       (product) => product.category === action.payload
    //     );
    //     state.filtedProducts = filter;
    //   } catch (error) {}
    // },
  },
});

export const { addData, filtedProducts } = dataSlice.actions;
export const getSelectedProduct = (state) => state.products.selectedProduct;
export default dataSlice.reducer;
