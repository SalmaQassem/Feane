import classes from "../../styles/_cartItem.module.scss";
import { useCallback } from "react";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import RemoveButton from "../UI/RemoveButton";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const increaseHandler = useCallback(() => {
    dispatch(cartActions.addItems(props.data));
  }, [dispatch, props]);

  const onClickDecrease = useCallback(() => {
    dispatch(cartActions.decreaseItems(props.data));
  }, [dispatch, props]);

  const onClickRemoveHandler = useCallback(() => {
    dispatch(cartActions.removeItems(props.data));
  }, [dispatch, props]);

  return (
    <div className={classes.cartItem}>
      <div className={classes.image}>
        <img src={props.data.imageUrl} alt="cart_item" loading="lazy" />
      </div>
      <p className={classes.name}>{props.data.name}</p>
      <div className={classes.amountButtons}>
        <button
          type="button"
          className={classes.button}
          onClick={onClickDecrease}
        >
          -
        </button>
        <p className={classes.amount}>{props.data.quantity}</p>
        <button
          type="button"
          className={classes.button}
          onClick={increaseHandler}
        >
          +
        </button>
      </div>
      <div className={classes.price}>
        <p>${props.data.totalPrice}</p>
        <RemoveButton onClick={onClickRemoveHandler}>remove</RemoveButton>
      </div>
    </div>
  );
};

export default CartItem;
