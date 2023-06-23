import classes from "../../styles/_reviewItem.module.scss";
const ReviewItem = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.review}>
        <p className={`${classes.p} ${classes.details}`}>{props.item.text}</p>
        <h4 className={classes.h4}>{props.item.name}</h4>
        <p className={classes.p}>{props.item.title}</p>
      </div>
      <div className={classes.imgContainer}>
        <img src={props.item.imageUrl} alt="client_img" loading="lazy" />
      </div>
    </div>
  );
};

export default ReviewItem;
