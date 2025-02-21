import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../feature/shop/ProductType";

export interface CartItemsType {
  product: ProductType;
  count: number;
}

export interface CartStateType {
  cart: CartItemsType[];
}

const initialState: CartStateType = {
  cart: [],
};
type ActionAddCart = { payload: CartItemsType };
type ActionRemoveCart = { payload: number };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: ActionAddCart) {
      state.cart = [...state.cart, action.payload];
    },
    removeCart(state, action: ActionRemoveCart) {
      state.cart = state.cart.filter((cart, index) => index !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
