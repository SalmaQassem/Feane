import classes from "../../styles/_sideList.module.scss";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import Button from "../UI/Button";
const sideLinks = [
  {
    url: "/",
    class: classes.profile,
    icon: <FaUser />,
    label: "Profile Page",
  },
  {
    url: "",
    class: classes.cart,
    icon: <FaShoppingCart />,
    label: "Cart Page",
  },
  {
    url: "/",
    icon: <FaSearch />,
    label: "Search Page",
  },
];
const SideList = (props) => {
  const dispatch = useDispatch();

  const linkClickHandler = () => {
    props.linkHandler();
  };
  const onCartClickHandler = () => {
    dispatch(cartActions.setIsCartOpenedHandler(true));
  };

  return (
    <div className={classes.user}>
      <ul className={classes.sideList}>
        {sideLinks.map((link) => {
          return (
            <li key={link.label} className={link.class && link.class}>
              <Link
                href={link.url}
                aria-label={link.label}
                onClick={
                  link.class === classes.cart
                    ? onCartClickHandler
                    : linkClickHandler
                }
              >
                {link.icon}
              </Link>
              {/*link.class === classes.profile && (
                <Profile state={profileContext.isProfileOpened} />
              )*/}
            </li>
          );
        })}
      </ul>
      <Button href="/" aria-label="Order Button" onClick={linkClickHandler}>
        order online
      </Button>
    </div>
  );
};

export default SideList;
