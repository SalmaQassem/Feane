import background from "../../media/images/hero-bg.webp";
import Image from "next/image";
import classes from "../../styles/_background.module.scss";

const Background = (props) => {
  return (
    <section
      className={props.class === "sub" ? classes.sub : classes.background}
    >
      <div className={classes.image}>
        <Image src={background} priority={true} alt="background"></Image>
      </div>
      {props.children}
    </section>
  );
};

export default Background;
