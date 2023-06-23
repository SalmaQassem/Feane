import classes from "../../styles/_menuItem.module.scss";
import Image from "next/image";
import AddButton from "../UI/AddButton";
import { useCallback } from "react";
//import { useDispatch } from "react-redux";
//import { cartActions } from "../../store/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = (props) => {
  //const dispatch = useDispatch();
  const onFormSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const item = props.menu.find((obj) => {
        return obj.id === parseInt(e.target.id);
      });
      if (item) {
        const selectedItem = {
          id: item.id,
          imageUrl: item.imageUrl,
          name: item.name,
          price: item.price,
        };
        //dispatch(cartActions.addItems(selectedItem));
      }
    }
    //[props, dispatch]
  );

  return (
    <form
      className={
        props.activeCategory === props.item.category ||
        props.activeCategory === "all"
          ? `${classes.item} ${classes.active}`
          : classes.item
      }
      onSubmit={onFormSubmitHandler}
      id={props.item.id}
      key={props.item.id}
    >
      <div className={classes.imageContainer}>
        <Image
          src={props.item.imageUrl}
          alt="menu_img"
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <div className={classes.description}>
        <h3 className={classes.h3}>{props.item.name}</h3>
        <p className={classes.p}>{props.item.description}</p>
        <div className={classes.priceContainer}>
          <h3 className={classes.price}>${props.item.price}</h3>
          <AddButton type="submit" aria-label="add">
            <FaShoppingCart />
          </AddButton>
        </div>
      </div>
    </form>
  );
};

export default MenuItem;
