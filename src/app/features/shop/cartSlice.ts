import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
import { IProduct } from "../../../interfaces";
import { addItemToShopingCart } from "../../../utils";

interface cartState {
  product: IProduct[];
}

const initialState: cartState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.product = addItemToShopingCart(action.payload, state.product);
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    clearAllFromCart: (state) => {
      state.product = [];
    },
  },
});

export const { addToCart, removeFromCart, clearAllFromCart } =
  cartSlice.actions;

export const selectCart = ({ cart }) => cart;

export default cartSlice.reducer;
