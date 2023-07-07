import classes from "../../styles/_confirmPage.module.scss";
import ShoppingCartItem from "./ShoppingCartItem";
import CartContext from "@/context/cartContext/cartContext";
import { useContext } from "react";

const ConfirmPage = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className={classes.container}>
      <h1>shopping cart</h1>
      {cartContext.items.length === 0 && <p>Your cart is currently empty.</p>}
      {cartContext.items.length > 0 && (
        <ul className={classes.items}>
          <li className={classes.header}>
            <span className={classes.product}>product</span>
            <span className={classes.price}>price</span>
            <span className={classes.quantity}>quantity</span>
            <span className={classes.total}>total</span>
          </li>
          {cartContext.items.map((item) => (
            <ShoppingCartItem data={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConfirmPage;
