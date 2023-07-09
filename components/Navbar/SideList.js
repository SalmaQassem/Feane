import classes from "../../styles/_sideList.module.scss";
import { useContext } from "react";
import CartContext from "@/context/cartContext/cartContext";
import ProfileContext from "@/context/profileContext/profileContext";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import Profile from "../Profile";
import Button from "../UI/Button";
const sideLinks = [
  {
    url: "Login",
    class: classes.profile,
    icon: <FaUser />,
    label: "Profile Page",
  },
  {
    url: "/",
    class: classes.cart,
    icon: <FaShoppingCart />,
    label: "Cart Page",
  },
  {
    url: "/",
    class: "",
    icon: <FaSearch />,
    label: "Search Page",
  },
];
const SideList = (props) => {
  const cartContext = useContext(CartContext);
  const profileContext = useContext(ProfileContext);

  const linkClickHandler = () => {
    props.linkHandler();
  };
  const onCartClickHandler = (e) => {
    e.preventDefault();
    cartContext.setIsCartOpened(true);
  };
  const onProfileHoverHandler = () => {
    profileContext.setIsProfileOpened(true);
  };
  const onProfileBlurHandler = () => {
    profileContext.setIsProfileOpened(false);
  };
  return (
    <div className={classes.user}>
      <ul className={classes.sideList}>
        {sideLinks.map((link) => {
          return (
            <li
              key={link.label}
              className={link.class}
              data-before={
                link.class === classes.cart && cartContext.totalAmount
              }
              onMouseOver={
                link.class === classes.profile
                  ? onProfileHoverHandler
                  : () => {}
              }
              onMouseOut={
                link.class === classes.profile ? onProfileBlurHandler : () => {}
              }
            >
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
              {link.class === classes.profile && (
                <Profile state={profileContext.isProfileOpened} />
              )}
            </li>
          );
        })}
      </ul>
      <Button href="Menu" aria-label="Order Button" onClick={linkClickHandler}>
        order online
      </Button>
    </div>
  );
};

export default SideList;
