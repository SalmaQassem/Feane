import { createContext } from "react";

const CartContext = createContext({
  isCartOpened: false,
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  setIsCartOpened: (state) => {},
  addItem: (item) => {},
  decreaseItem: (item) => {},
  removeItem: (item) => {},
  removeAll: () => {},
});

export default CartContext;
