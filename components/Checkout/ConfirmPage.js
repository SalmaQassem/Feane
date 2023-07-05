import { useSelector } from "react-redux";
import classes from "../../styles/_confirmPage.module.scss";
import ShoppingCartItem from "./ShoppingCartItem";

const ConfirmPage = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className={classes.container}>
      <h1>shopping cart</h1>
      {cart.length === 0 && <p>Your cart is currently empty.</p>}
      {cart.length > 0 && (
        <ul className={classes.items}>
          <li className={classes.header}>
            <span className={classes.product}>product</span>
            <span className={classes.price}>price</span>
            <span className={classes.quantity}>quantity</span>
            <span className={classes.total}>total</span>
          </li>
          {cart.map((item) => (
            <ShoppingCartItem data={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConfirmPage;
