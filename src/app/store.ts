import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/auth/loginSlice";
import cartSlice from "./features/shop/cartSlice";
import globalSlice from "./features/globalSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsApiSlice } from "./services/products";

const persistCartConfig = {
  key: "product",
  storage,
};

const persistedCart = persistReducer(persistCartConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persistedCart,
    login: loginSlice,
    global: globalSlice,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([productsApiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
