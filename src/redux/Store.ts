import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import favoritesReducer, { FavoritesStateType } from "./Favorite";
import cartReducer, { CartItemsType, CartStateType } from "./Cart";
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

export const getIsShowCart = (store: SelectorType) => store.cart.isShowCart;

export const getCart = (id: string) => (store: SelectorType) =>
  store.cart.cart.find((cart) => cart.product.id === id);

export const getLengthOfCartItems = (store: SelectorType) =>
  store.cart.cart.reduce(getSumOfLength, 0);

const getSumOfLength = (total: number, item: CartItemsType) => {
  return total + item.count;
};

export const getTotalPricesOfCart = (store: SelectorType) =>
  store.cart.cart.reduce(getTotalPrice, 0);

const getTotalPrice = (total: number, item: CartItemsType) => {
  return total + item.count * item.product.mainPrice;
};
