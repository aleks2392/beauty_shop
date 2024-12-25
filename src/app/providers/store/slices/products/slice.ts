import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";
import { GetProductsResponse } from "./types";

type State = {
  products: GetProductsResponse;
  isLoading: boolean;
  error: Error | null;
};

const initialState: State = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? action.payload : null;
    });
  },
});

export const productsReducer = productsSlice.reducer;
