import classes from "../styles/_offers.module.scss";
import StyledContainer from "./UI/StyledContainer";
import Image from "next/image";
import Button from "./UI/Button";
import { FaShoppingCart } from "react-icons/fa";
//import { useSelector } from "react-redux";
import offer1 from "../media/images/o1.webp";
import offer2 from "../media/images/o2.webp";

const offers = [
  {
    id: "o1",
    imageUrl: offer1,
    percentage: 20,
    title: "tasty thursdays",
  },
  {
    id: "o2",
    imageUrl: offer2,
    percentage: 15,
    title: "pizza days",
  },
];
const Offers = () => {
  //const offers = useSelector((state) => state.offers.items);
  return (
    <section className={classes.offers}>
      <StyledContainer>
        <div className={classes.offersItems}>
          {offers.map((item) => {
            return (
              <div className={classes.item} key={item.id}>
                <div className={classes.imageContainer}>
                  <Image src={item.imageUrl} alt="offer" loading="lazy" />
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
