import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import favoritesReducer, { FavoritesStateType } from "./Favorite";
import { configureStore } from "@reduxjs/toolkit";
const persistConfigFavorites = {
  key: "favoritesProducts",
  storage,
};

const persistedFavoitesReducer = persistReducer(
  persistConfigFavorites,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoitesReducer,
  },
});
export const persistor = persistStore(store);

export type DispatchType = typeof store.dispatch;
export type StoreType = ReturnType<typeof store.getState>;

interface SelectorType {
  favorites: FavoritesStateType;
}

export const getFavorites = (store: SelectorType) => store.favorites.favorites;

export const getFavorite = (id: string) => (store: StoreType) =>
  store.favorites.favorites.find((fav) => fav.id === id);
