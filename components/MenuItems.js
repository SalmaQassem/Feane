import classes from "../styles/_menuItems.module.scss";
import MenuItem from "./MenuItem";
//import { useSelector } from "react-redux";

const MenuItems = (props) => {
  //const menuItems = useSelector((state) => state.menu.items);
  return (
    <div className={classes.menuItems}>
      {props.menuItems.map((item) => {
        return (
          <MenuItem
            key={item.id}
            item={item}
            activeCategory={props.category}
            menu={props.menuItems}
          />
        );
      })}
    </div>
  );
};

export default MenuItems;
