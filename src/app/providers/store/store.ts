import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/products/slice";
import { cartReducer } from "./slices/cart/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
