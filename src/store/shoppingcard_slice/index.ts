import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IDataShoppingCard, IState } from "./types";

const initialState: IState = {
  shoppingCard: [],
};

const shopCartSlice = createSlice({
  name: "shop-cart",
  initialState,
  reducers: {
    postProducts: (state, action: PayloadAction<IDataShoppingCard>) => {
      const findProduct = state.shoppingCard.find(
        (item) => item.id === action.payload.id
      );

      if (findProduct) {
        if (findProduct.quantity === findProduct.count) return;
        findProduct.count = action.payload.count;
        toast.error("Товар уже в корзине");
      } else {
        toast.success("Товар добавлен в корзину");
        state.shoppingCard.push(action.payload);
      }
    },
  },
});

export const { postProducts } = shopCartSlice.actions;
export default shopCartSlice.reducer;
