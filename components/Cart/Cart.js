import classes from "../../styles/_cart.module.scss";
import Overlay from "../UI/Overlay";
import Button from "../UI/Button";
import RemoveButton from "../UI/RemoveButton";
import { useContext, useCallback } from "react";
import CartItem from "./CartItem";
import CartContext from "@/context/cartContext/cartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const onRemoveAllHandler = useCallback(() => {
    cartContext.removeAll();
  }, [cartContext]);

  const onClickCancelHandler = useCallback(
    (e) => {
      e.preventDefault();
      cartContext.setIsCartOpened(false);
    },
    [cartContext]
  );
  const onClickCheckoutHandler = useCallback(() => {
    cartContext.setIsCartOpened(false);
  }, [cartContext]);

  return (
    <>
      <Overlay
        className={
          cartContext.isCartOpened === true
            ? `${classes.overlay} ${classes.opened}`
            : classes.overlay
        }
      ></Overlay>
      <section
        className={
          cartContext.isCartOpened === true
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
              {cartContext.items.length > 0 &&
                cartContext.items.map((item) => {
                  return <CartItem data={item} key={item.id} />;
                })}
            </div>
          </div>
        </div>
        <div className={classes.checkout}>
          <div className={classes.checkoutContent}>
            <div className={classes.total}>
              <h1>sub-total</h1>
              <p>{cartContext.totalAmount} items</p>
            </div>
            <h1>${cartContext.totalPrice}</h1>
          </div>
          <div className={classes.checkoutButtons}>
            <Button href="" onClick={onClickCancelHandler}>
              cancel
            </Button>
            <Button href="Checkout" onClick={onClickCheckoutHandler}>
              checkout
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
