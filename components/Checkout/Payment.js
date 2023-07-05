import classes from "../../styles/_payment.module.scss";
import MastercardLogo from "../../media/images/mastercard.svg";
import VisaLogo from "../../media/images/visa.svg";

const Payment = () => {
  return (
    <div className={classes.container}>
      <h1>payment details</h1>
      <div className={classes.info}>
        <div className={classes.inputs}>
          <button className={classes.button} type="button">
            cash on delivery
          </button>
          <button className={classes.button} type="button">
            <MastercardLogo className={classes.svg} />
          </button>
          <button className={classes.button} type="button">
            <VisaLogo className={classes.svg} />
          </button>
        </div>
        <div className={classes.inputs}>
          <div className={classes.inputContainer}>
            <label className={classes.label}>name on card</label>
            <input className={classes.input} type="text" />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>card number</label>
            <input className={classes.input} type="number" />
          </div>
        </div>
        <div className={classes.inputs}>
          <div className={classes.inputContainer}>
            <label className={classes.label}>expiry date</label>
            <input className={classes.input} type="number" />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>CVV / CVC</label>
            <input className={classes.input} type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
