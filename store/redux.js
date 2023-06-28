"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import menuSlice from "./menuSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export default store;
