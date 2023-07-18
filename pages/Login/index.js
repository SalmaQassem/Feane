import classes from "../../styles/_login.module.scss";
import StyledContainer from "@/components/UI/StyledContainer";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import Link from "next/link";
import MainButton from "@/components/UI/MainButton";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const status = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: "/",
    });
    if (status.ok) {
      router.push(status.url);
    }
  };
  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  if (!session) {
    return (
      <section>
        <StyledContainer>
          <div className={classes.loginContainer}>
            <div className={classes.head}>
              <h1>welcome back!</h1>
              <p>Login to continue</p>
            </div>
            <form className={classes.form} onSubmit={formSubmitHandler}>
              <div className={classes.inputs}>
                <div className={classes.input}>
                  <div className={classes.icon}>
                    <FaUser />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter email"
                    value={email}
                    onChange={changeEmailHandler}
                  ></input>
                </div>
                <div className={classes.input}>
                  <div className={classes.icon}>
                    <FaUnlockAlt />
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                    value={password}
                    onChange={changePasswordHandler}
                  ></input>
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
  } else {
    return <p>already logged in</p>;
  }
};

export default Login;
