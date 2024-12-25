import { RootState } from "../../store";

const selfSelector = (state: RootState) => state.products;

export const productsLoadingSelector = (state: RootState) =>
  selfSelector(state).isLoading;

export const productsErrorSelector = (state: RootState) =>
  selfSelector(state).error;

export const productsSelector = (state: RootState) =>
  selfSelector(state).products;

export const newArrivalProductsSelector = (state: RootState) =>
  selfSelector(state).products.filter(({ isNewArrival }) => isNewArrival);

export const bestSellersProductsSelector = (state: RootState) =>
  selfSelector(state).products.filter(({ isBestSellers }) => isBestSellers);
