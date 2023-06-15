import classes from "../styles/_selectorItem.module.scss";

const SelectorItem = (props) => {
  const selectorHandler = (e) => {
    props.clickSelector(e);
  };
  return (
    <li
      className={
        props.selector === props.data
          ? `${classes.li} ${classes.selected}`
          : classes.li
      }
      value={props.data}
      onClick={selectorHandler}
    >
      {props.data}
    </li>
  );
};

export default SelectorItem;
