import classes from "../styles/_offers.module.scss";
import StyledContainer from "./UI/StyledContainer";
import Image from "next/image";
import Button from "./UI/Button";
import { FaShoppingCart } from "react-icons/fa";

const Offers = (props) => {
  return (
    <section className={classes.offers}>
      <StyledContainer>
        <div className={classes.offersItems}>
          {props.data.map((item) => {
            return (
              <div className={classes.item} key={item.id}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.img}
                    src={item.imageUrl}
                    alt="offer"
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>
                <div className={classes.description}>
                  <h2 className={classes.h2}>{item.title}</h2>
                  <h3 className={classes.h3}>
                    <span className={classes.percentage}>
                      {`${item.percentage}%`}
                      <span className={classes.off}> off</span>
                    </span>
                  </h3>
                  <Button
                    href="/Menu"
                    aria-label="Menu Page"
                    className={classes.button}
                  >
                    order now
                    <span className={classes.icon}>
                      <FaShoppingCart />
                    </span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </StyledContainer>
    </section>
  );
};
export default Offers;
