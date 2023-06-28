import classes from "../../styles/_menuItems.module.scss";
import MenuItem from "./MenuItem";

const MenuItems = (props) => {
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
