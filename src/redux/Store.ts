import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import favoritesReducer, { FavoritesStateType } from "./Favorite";
import cartReducer, { CartStateType } from "./Cart";
import { configureStore } from "@reduxjs/toolkit";
const persistConfigFavorites = {
  key: "favoritesProducts",
  storage,
};
const persistConfigCart = {
  key: "cart",
  storage,
};
const persistedFavoitesReducer = persistReducer(
  persistConfigFavorites,
  favoritesReducer
);
const persistedCartReducer = persistReducer(persistConfigCart, cartReducer);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoitesReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["register"],
      },
    }),
});
export const persistor = persistStore(store);

export type DispatchType = typeof store.dispatch;
export type StoreType = ReturnType<typeof store.getState>;

interface SelectorType {
  favorites: FavoritesStateType;
  cart: CartStateType;
}

export const getFavorites = (store: SelectorType) => store.favorites.favorites;

export const getFavorite = (id: string) => (store: StoreType) =>
  store.favorites.favorites.find((fav) => fav.id === id);
export const getFavoritesCount = (store: SelectorType) =>
  store.favorites.favorites.length;

export const getCartItems = (store: SelectorType) => store.cart.cart;
