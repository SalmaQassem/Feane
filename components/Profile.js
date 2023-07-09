import Link from "next/link";
import classes from "../styles/_profile.module.scss";

const Profile = (props) => {
  return (
    <div
      className={
        props.state ? `${classes.profile} ${classes.opened}` : classes.profile
      }
    >
      <Link href="Login" className={classes.button}>signIn</Link>
      <Link href="" className={classes.button}>signUp</Link>
    </div>
  );
};

export default Profile;
