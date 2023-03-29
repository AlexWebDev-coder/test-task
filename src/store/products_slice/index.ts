import { IProducts } from "@/src/assets/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./types";

const initialState: IState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
