import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const appStore = configureStore({
  reducer: {
    cartItem: cartReducer,
  },
});

export default appStore;
