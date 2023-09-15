import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configureStore()-> to create store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
