import classes from "../../styles/_sideList.module.scss";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Button } from "../UI/Button";

const SideList = (props) => {
  const linkClickHandler = () => {
    props.linkHandler();
  };
  const onCartClickHandler = () => {
    //cartContext.setIsCartOpened(true);
  };

  return (
    <div className={classes.user}>
      <ul className={classes.sideList}>
        <li className={classes.profile}>
          <Link href="/" aria-label="Profile Page" onClick={linkClickHandler}>
            <FaUser />
          </Link>
          {/*<Profile state={profileContext.isProfileOpened} />*/}
        </li>
        <li className={classes.cart}>
          <Link href="" aria-label="Cart Page" onClick={onCartClickHandler}>
            <FaShoppingCart />
          </Link>
        </li>
        <li>
          <Link href="/" aria-label="Search Page" onClick={linkClickHandler}>
            <FaSearch />
          </Link>
        </li>
      </ul>
      <Button href="/" aria-label="Order Button" onClick={linkClickHandler}>
        order online
      </Button>
    </div>
  );
};

export default SideList;
