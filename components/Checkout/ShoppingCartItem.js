import classes from "../../styles/_shoppingCartItem.module.scss";
import QuantityButton from "../UI/QuantityButton";
import RemoveButton from "../UI/RemoveButton";
import { IoClose } from "react-icons/io5";
import CartContext from "@/context/cartContext/cartContext";
import { useContext, useCallback } from "react";

const ShoppingCartItem = (props) => {
  const cartContext = useContext(CartContext);

  const clickDecreaseHandler = useCallback(() => {
    cartContext.decreaseItem(props.data);
  }, [props, cartContext]);
  const clickIncreaseHandler = useCallback(() => {
    cartContext.addItem(props.data);
  }, [props, cartContext]);
  const clickRemoveHandler = useCallback(() => {
    cartContext.removeItem(props.data);
  }, [props, cartContext]);

  return (
    <li className={classes.item}>
      <img src={props.data.imageUrl} alt="" className={classes.tempImg}></img>
      <div className={classes.info}>
        <div className={classes.product}>
          <img src={props.data.imageUrl} alt="" className={classes.img}></img>
          <span className={classes.title}>{props.data.name}</span>
        </div>
        <span className={classes.price}>{`$${props.data.price}`}</span>
        <div className={classes.quantity}>
          <div className={classes.box}>
            <QuantityButton type="button" onClick={clickDecreaseHandler}>
              -
            </QuantityButton>
            <span>{props.data.quantity}</span>
            <QuantityButton type="button" onClick={clickIncreaseHandler}>
              +
            </QuantityButton>
          </div>
          <RemoveButton
            type="button"
            className={classes.remove}
            onClick={clickRemoveHandler}
          >
            <div className={classes.icon}>
              <IoClose />
            </div>
            remove
          </RemoveButton>
        </div>
        <span className={classes.total}>{`$${props.data.totalPrice}`}</span>
      </div>
    </li>
  );
};

export default ShoppingCartItem;
