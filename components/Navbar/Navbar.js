import classes from "../../styles/_navbar.module.scss";
import StyledContainer from "../UI/StyledContainer";
import Link from "next/link";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import LinkList from "./LinksList";
import SideList from "./SideList";

const NavBar = () => {
  const [isTogglerOpened, setIsTogglerOpened] = useState(false);

  const onClickTogglerHandler = useCallback(() => {
    setIsTogglerOpened((prevToggler) => {
      return !prevToggler;
    });
  }, []);

  const linkClickHandler = () => {
    if (isTogglerOpened) {
      setIsTogglerOpened(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width >= 769) {
        setIsTogglerOpened(false);
      }
    });
  }, []);

  return (
    <nav className={classes.navbar}>
      <StyledContainer>
        <section className={classes.items}>
          <Link href="/" aria-label="Home Page" className={classes.logo}>
            <span>feane</span>
          </Link>
          <div
            className={
              isTogglerOpened
                ? `${classes.toggler} ${classes.open}`
                : classes.toggler
            }
            onClick={onClickTogglerHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={
              isTogglerOpened
                ? `${classes.collapse} ${classes.opened}`
                : classes.collapse
            }
          >
            <LinkList linkHandler={linkClickHandler} />
            <SideList linkHandler={linkClickHandler} />
          </div>
        </section>
      </StyledContainer>
    </nav>
  );
};

export default NavBar;
