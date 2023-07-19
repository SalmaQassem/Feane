import Link from "next/link";
import classes from "../styles/_profile.module.scss";
import { useSession, signOut } from "next-auth/react";

const Profile = (props) => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div
        className={
          props.state ? `${classes.profile} ${classes.opened}` : classes.profile
        }
      >
        <Link href="Login" className={classes.button}>
          login
        </Link>
        <Link href="SignUp" className={classes.button}>
          signUp
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className={
          props.state
            ? `${classes.profile} ${classes.info} ${classes.opened}`
            : classes.profile
        }
      >
        <p className={classes.email}>{session.user.email}</p>
        <button
          onClick={() => {
            signOut();
          }}
          className={classes.button}
        >
          signOut
        </button>
      </div>
    );
  }
};

export default Profile;
