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
type ActionRemoveSome = { payload: string[] };

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
    removeSomeFavorites(state, action: ActionRemoveSome) {
      const isOne = action.payload.length === 1;
      if (isOne) {
        state.favorites = state.favorites.filter(
          (fav) => fav.id !== action.payload.at(0)
        );
      } else {
        state.favorites = state.favorites.filter(
          (fav) => !action.payload.includes(fav.id)
        );
      }
    },
    removeAll(state) {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, removeSomeFavorites, removeAll } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
