import classes from "../../styles/_prices.module.scss";
import CartContext from "@/context/cartContext/cartContext";
import { useContext } from "react";

const Prices = () => {
  const cartContext = useContext(CartContext);
  const subTotal = cartContext.totalPrice;
  const shipping = subTotal === 0 ? 0 : 10;
  const tax = subTotal * 0.15;
  const total = subTotal + shipping + tax;
  return (
    <div className={classes.prices}>
      <div className={classes.item}>
        <h3 className={classes.title}>sub total</h3>
        <p className={classes.p}>{`$${subTotal}`}</p>
      </div>
      <div className={classes.item}>
        <h3 className={classes.title}>tax</h3>
        <p className={classes.p}>{`$${tax.toFixed(2)}`}</p>
      </div>
      <div className={classes.item}>
        <h3 className={classes.title}>shipping</h3>
        <p className={classes.p}>{`$${shipping}`}</p>
      </div>
      <div className={classes.item}>
        <h3>total</h3>
        <p>{`$${total.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default Prices;
