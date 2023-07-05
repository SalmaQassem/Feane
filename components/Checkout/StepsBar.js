import classes from "../../styles/_stepsBar.module.scss";
import { FiCheck } from "react-icons/fi";
const StepsBar = (props) => {
  return (
    <section className={classes.stepsBar}>
      <ul>
        <li
          className={
            props.progress === 1
              ? classes.current
              : props.progress > 1
              ? classes.active
              : ""
          }
        >
          <span>{props.progress > 1 ? <FiCheck /> : 1}</span>
          <p>shipping</p>
        </li>
        <li
          className={
            props.progress === 2
              ? classes.current
              : props.progress > 2
              ? classes.active
              : ""
          }
        >
          <span>{props.progress > 2 ? <FiCheck /> : 2}</span>
          <p>personal details</p>
        </li>
        <li
          className={
            props.progress === 3
              ? classes.current
              : props.progress > 3
              ? classes.active
              : ""
          }
        >
          <span>{props.progress > 3 ? <FiCheck /> : 3}</span>
          <p>payment</p>
        </li>
        <li
          className={
            props.progress === 4
              ? classes.current
              : props.progress > 4
              ? classes.active
              : ""
          }
        >
          <span>{props.progress > 4 ? <FiCheck /> : 4}</span>
          <p>confirmation</p>
        </li>
      </ul>
    </section>
  );
};

export default StepsBar;
