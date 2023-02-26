import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
export const fetchProducts = createAsyncThunk(
  "data/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const filterSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    filtredProducts: [],
  },
  // reducers: {
  //   filtedProducts(state, action) {
  //     const [data, setData] = useState([]);
  //     try {
  //       const filter = data.filter(
  //         (product) => product.category === action.payload
  //       );
  //       console.log("filter", filter);
  //       state.filtredProducts = filter;
  //     } catch (error) {}
  //   },
  // },
});

export const { filtedProducts } = filterSlice.actions;

export default filterSlice.reducer;
