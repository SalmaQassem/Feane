import classes from "../../styles/_coupon.module.scss";

const Coupon = () => {
  return (
    <div className={classes.coupon}>
      <label className={classes.label} htmlFor="coupon-id">
        gift card / discount code
      </label>
      <div className={classes.box}>
        <input type="text" id="coupon-id" />
        <button className={classes.apply} type="button">
          apply
        </button>
      </div>
    </div>
  );
};

export default Coupon;
