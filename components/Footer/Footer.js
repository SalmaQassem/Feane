import classes from "../../styles/_footer.module.scss";
import StyledContainer from "../UI/StyledContainer";
import ContactUs from "./ContactUs";
import Social from "./Social";
import Opening from "./Opening";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <StyledContainer>
        <div className={classes.box}>
          <div className={classes.item}>
            <ContactUs />
          </div>
          <div className={classes.item}>
            <Social />
          </div>
          <div className={classes.item}>
            <Opening />
          </div>
        </div>
        <div className={classes.info}>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved By Free Html
            Templates
          </p>
          <p>&copy; Distributed By ThemeWagon</p>
        </div>
      </StyledContainer>
    </section>
  );
};

export default Footer;
