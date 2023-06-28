import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  isCartOpened: false,
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    setIsCartOpenedHandler(state, action) {
      state.isCartOpened = action.payload;
    },
    addItems(state, action) {
      const newItem = action.payload;
      state.totalAmount += 1;
      state.totalPrice += newItem.price;

      const item = state.items.find((obj) => {
        return obj.id === newItem.id;
      });
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
      } else {
        state.items.push({
          id: newItem.id,
          imageUrl: newItem.imageUrl,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    decreaseItems(state, action) {
      const newItem = action.payload;
      state.totalAmount -= 1;
      state.totalPrice -= newItem.price;
      const index = state.items.findIndex((object) => {
        return object.id === newItem.id;
      });
      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
        state.items[index].totalPrice -= state.items[index].price;
      } else {
        state.items.splice(index, 1);
      }
    },
    removeItems(state, action) {
      const newItem = action.payload;
      const index = state.items.findIndex((object) => {
        return object.id === newItem.id;
      });
      state.items.splice(index, 1);
      state.totalAmount -= newItem.quantity;
      state.totalPrice -= newItem.totalPrice;
    },
    removeAll(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
