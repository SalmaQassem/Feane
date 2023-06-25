import classes from "../../styles/_cart.module.scss";
import Overlay from "../UI/Overlay";
import Button from "../UI/Button";
import RemoveButton from "../UI/RemoveButton";
import { cartActions } from "../../store/cartSlice";
import { useCallback } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onRemoveAllHandler = useCallback(() => {
    dispatch(cartActions.removeAll());
  }, [dispatch]);

  const onClickCancelHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.setIsCartOpenedHandler(false));
  };
  const onClickCheckoutHandler = (e) => {
    dispatch(cartActions.setIsCartOpenedHandler(false));
  };

  return (
    <>
      <Overlay
        className={
          cart.isCartOpened === true
            ? `${classes.overlay} ${classes.opened}`
            : classes.overlay
        }
      ></Overlay>
      <section
        className={
          cart.isCartOpened === true
            ? `${classes.cart} ${classes.opened}`
            : classes.cart
        }
      >
        <div className={classes.content}>
          <div className={classes.header}>
            <h1>shopping cart</h1>
            <RemoveButton onClick={onRemoveAllHandler}>remove all</RemoveButton>
          </div>
          <div className={classes.body}>
            <div className={classes.items}>
              {cart.items.length > 0 &&
                cart.items.map((item) => {
                  return <CartItem data={item} key={item.id} />;
                })}
            </div>
          </div>
        </div>
        <div className={classes.checkout}>
          <div className={classes.checkoutContent}>
            <div className={classes.total}>
              <h1>sub-total</h1>
              <p>{cart.totalAmount} items</p>
            </div>
            <h1>${cart.totalPrice}</h1>
          </div>
          <div className={classes.checkoutButtons}>
            <Button href="/" onClick={onClickCancelHandler}>
              cancel
            </Button>
            <Button href="/" onClick={onClickCheckoutHandler}>
              checkout
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
