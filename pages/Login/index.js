import classes from "../../styles/_login.module.scss";
import StyledContainer from "@/components/UI/StyledContainer";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import Link from "next/link";
import MainButton from "@/components/UI/MainButton";
const Login = () => {
  return (
    <section>
      <StyledContainer>
        <div className={classes.loginContainer}>
          <div className={classes.head}>
            <h1>welcome back!</h1>
            <p>Login to continue</p>
          </div>
          <form className={classes.form}>
            <div className={classes.inputs}>
              <div className={classes.input}>
                <div className={classes.icon}>
                  <FaUser />
                </div>
                <input type="email" placeholder="enter email"></input>
              </div>
              <div className={classes.input}>
                <div className={classes.icon}>
                  <FaUnlockAlt />
                </div>
                <input type="password" placeholder="enter password"></input>
              </div>
            </div>
            <div className={classes.submit}>
              <MainButton type="submit">login</MainButton>
              <Link href="/">forget password?</Link>
            </div>
          </form>
          <div className={classes.signup}>
            <p>Don't have an account?</p>
            <Link href="/">sign up</Link>
          </div>
        </div>
      </StyledContainer>
    </section>
  );
};

export default Login;
