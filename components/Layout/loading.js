import classes from "../../styles/_loading.module.scss";
import { MdOutlineBakeryDining } from "react-icons/md";
import { GiHamburger, GiNoodles } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { useState, useEffect } from "react";

const Loading = () => {
  const [active, setActive] = useState(1);
  useEffect(() => {
    const load = setInterval(() => {
      setActive((prevState) => {
        if (prevState === 5) {
          return 1;
        } else {
          return prevState + 1;
        }
      });
    }, 400);
  }, []);
  return (
    <div className={classes.loading}>
      <ul className={classes.ul}>
        <li className={active === 1 ? classes.active : ""}>
          <MdOutlineBakeryDining />
        </li>
        <li className={active === 2 ? classes.active : ""}>
          <BiCoffeeTogo />
        </li>
        <li className={active === 3 ? classes.active : ""}>
          <GiHamburger />
        </li>
        <li className={active === 4 ? classes.active : ""}>
          <GiNoodles />
        </li>
        <li className={active === 5 ? classes.active : ""}>
          <FaPizzaSlice />
        </li>
      </ul>
      <p className={classes.text}>Loading...</p>
    </div>
  );
};
export default Loading;
