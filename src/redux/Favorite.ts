import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../feature/shop/ProductType";

export interface FavoritesStateType {
  favorites: ProductType[];
}

const initialState: FavoritesStateType = {
  favorites: [],
};
type ActionAddType = { payload: ProductType };
type ActionRemoveType = { payload: string };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action: ActionAddType) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite(state, action: ActionRemoveType) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});


export const {addFavorite,removeFavorite}=favoriteSlice.actions

export default favoriteSlice.reducer