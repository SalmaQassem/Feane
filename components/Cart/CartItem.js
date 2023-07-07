import classes from "../../styles/_cartItem.module.scss";
import { useCallback, useContext } from "react";
import CartContext from "@/context/cartContext/cartContext";
import QuantityButton from "../UI/QuantityButton";
import RemoveButton from "../UI/RemoveButton";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);
  const increaseHandler = useCallback(() => {
    cartContext.addItem(props.data);
  }, [props, cartContext]);

  const onClickDecrease = useCallback(() => {
    cartContext.decreaseItem(props.data);
  }, [props]);

  const onClickRemoveHandler = useCallback(() => {
    cartContext.removeItem(props.data);
  }, [props]);

  return (
    <div className={classes.cartItem}>
      <div className={classes.image}>
        <img src={props.data.imageUrl} alt="cart_item" loading="lazy" />
      </div>
      <p className={classes.name}>{props.data.name}</p>
      <div className={classes.amountButtons}>
        <QuantityButton type="button" onClick={onClickDecrease}>
          -
        </QuantityButton>
        <p className={classes.amount}>{props.data.quantity}</p>
        <QuantityButton type="button" onClick={increaseHandler}>
          +
        </QuantityButton>
      </div>
      <div className={classes.price}>
        <p>${props.data.totalPrice}</p>
        <RemoveButton onClick={onClickRemoveHandler}>remove</RemoveButton>
      </div>
    </div>
  );
};

export default CartItem;
