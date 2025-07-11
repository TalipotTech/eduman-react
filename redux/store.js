import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import searchSlice from "./features/search-slice";
import wishlistItems from "./features/wishlist-slice";
import cartSlice from "./features/cart-slice";
import productSlice from "./features/product-slice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: ["products"],
};

const rootReducer = combineReducers({
  products: productSlice,
  search: searchSlice,
  cart: cartSlice,
  wishlist: wishlistItems,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
