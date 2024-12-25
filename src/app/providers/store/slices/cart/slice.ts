import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  products: string[];
  totalPrice: number;
};

const initialState: State = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<string>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
