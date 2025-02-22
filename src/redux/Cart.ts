import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../feature/shop/ProductType";

export interface CartItemsType {
  product: ProductType;
  count: number;
}

export interface CartStateType {
  cart: CartItemsType[];
  isShowCart: boolean;
}

const initialState: CartStateType = {
  cart: [],
  isShowCart: false,
};
type ActionAddCart = { payload: CartItemsType };
type ActionRemoveCart = { payload: number };
type ActionSetIsShowCart = { payload: boolean };
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
    setIsShow(state, action: ActionSetIsShowCart) {
      state.isShowCart = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeCart, setIsShow } = cartSlice.actions;
