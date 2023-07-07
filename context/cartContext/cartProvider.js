import CartContext from "./cartContext";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState({
    isCartOpened: false,
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const setIsCartOpenedHandler = (state) => {
    setCartState((currentState) => {
      return { ...currentState, isCartOpened: state };
    });
  };

  const addItemHandler = (newItem) => {
    setCartState((currentState) => {
      const item = currentState.items.find((obj) => {
        return obj.id === newItem.id;
      });
      const newItems = currentState.items;
      if (item) {
        const index = currentState.items.findIndex((obj) => {
          return obj.id === newItem.id;
        });
        newItems[index].quantity += 1;
        newItems[index].totalPrice += newItems[index].price;
      } else {
        newItems.push({
          id: newItem.id,
          imageUrl: newItem.imageUrl,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      return {
        ...currentState,
        items: newItems,
        totalAmount: currentState.totalAmount + 1,
        totalPrice: currentState.totalPrice + newItem.price,
      };
    });
  };

  const decreaseItemHandler = (newItem) => {
    setCartState((currentState) => {
      const index = currentState.items.findIndex((object) => {
        return object.id === newItem.id;
      });
      let newItems = currentState.items;
      if (currentState.items[index].quantity > 1) {
        newItems[index].quantity -= 1;
        newItems[index].totalPrice -= currentState.items[index].price;
      } else {
        newItems.splice(index, 1);
      }
      return {
        ...currentState,
        items: newItems,
        totalAmount: currentState.totalAmount - 1,
        totalPrice: currentState.totalPrice - newItem.price,
      };
    });
  };
  const removeItemHandler = (newItem) => {
    setCartState((currentState) => {
      const index = currentState.items.findIndex((object) => {
        return object.id === newItem.id;
      });
      const newItems = currentState.items;
      newItems.splice(index, 1);
      return {
        ...currentState,
        items: newItems,
        totalAmount: currentState.totalAmount - newItem.quantity,
        totalPrice: currentState.totalPrice - newItem.totalPrice,
      };
    });
  };
  const removeAllHandler = () => {
    setCartState((currentState) => {
      return { ...currentState, items: [], totalAmount: 0, totalPrice: 0 };
    });
  };

  const cartContext = {
    isCartOpened: cartState.isCartOpened,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    setIsCartOpened: setIsCartOpenedHandler,
    addItem: addItemHandler,
    decreaseItem: decreaseItemHandler,
    removeItem: removeItemHandler,
    removeAll: removeAllHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
