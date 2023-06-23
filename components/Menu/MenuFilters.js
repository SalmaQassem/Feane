import classes from "../../styles/_menuFilters.module.scss";
import { useState } from "react";

const filters = [
  {
    id: "f1",
    text: "all",
  },
  {
    id: "f2",
    text: "burger",
  },
  {
    id: "f3",
    text: "pizza",
  },
  {
    id: "f4",
    text: "pasta",
  },
  {
    id: "f5",
    text: "fries",
  },
];
const MenuFilters = (props) => {
  const [isActive, setIsActive] = useState("f1");

  const clickFilterHandler = (e) => {
    setIsActive(e.target.id);
    props.onFilter(e.target);
  };
  return (
    <ul className={classes.filters}>
      {filters.map((filter) => {
        return (
          <li
            key={filter.id}
            id={filter.id}
            className={
              isActive === filter.id
                ? `${classes.filter} ${classes.active}`
                : classes.filter
            }
            onClick={clickFilterHandler}
          >
            {filter.text}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuFilters;
