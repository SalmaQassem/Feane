"use client";
import { createSlice } from "@reduxjs/toolkit";

const menuInitialState = { items: [] };
const menuSlice = createSlice({
  name: "menu",
  initialState: menuInitialState,
  reducers: {
    setMenuData(state, action) {
      state.items = action.payload;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice;
