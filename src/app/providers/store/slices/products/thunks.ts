import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../../../../api/models/main-api";
import { GetProductsResponse } from "./types";

export const fetchProducts = createAsyncThunk<
  GetProductsResponse,
  undefined,
  { rejectValue: Error }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    return await mainApi.get<GetProductsResponse>(`/products`, {});
  } catch (error) {
    return rejectWithValue(error as Error);
  }
});
