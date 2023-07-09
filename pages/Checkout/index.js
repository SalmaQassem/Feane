import classes from "../../styles/_checkout.module.scss";
import { useState } from "react";
import StyledContainer from "../../components/UI/StyledContainer";
import StepsBar from "../../components/Checkout/StepsBar";
import MainButton from "../../components/UI/MainButton";
import Coupon from "../../components/Checkout/Coupon";
import Shipping from "../../components/Checkout/Shipping";
import PersonalDetails from "../../components/Checkout/PersonalDetails";
import Prices from "../../components/Checkout/Prices";
import Payment from "../../components/Checkout/Payment";
import ConfirmPage from "../../components/Checkout/ConfirmPage";

const Checkout = () => {
  const [steps, setSteps] = useState(1);

  const clickNextHandler = () => {
    setSteps((prevState) => {
      return prevState + 1;
    });
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("confirm");
  };
  return (
    <section className={classes.checkout}>
      <StyledContainer>
        <StepsBar progress={steps} />
        <form className={classes.form}>
          <div className={classes.body}>
            {steps === 1 && <Shipping />}
            {steps === 2 && <PersonalDetails />}
            {steps === 3 && <Payment />}
            {steps === 4 && <ConfirmPage />}
            <div className={classes.summary}>
              <div className={classes.header}>
                <h2>order summary</h2>
                <p>The total cost includes the tax and the shipping charge.</p>
              </div>
              <Coupon />
              <Prices />
            </div>
          </div>
          <MainButton
            className={classes.submit}
            type="button"
            onClick={steps < 4 ? clickNextHandler : submitFormHandler}
          >
            {steps < 4 ? "next step" : "confirm"}
          </MainButton>
        </form>
      </StyledContainer>
    </section>
  );
};

export default Checkout;
