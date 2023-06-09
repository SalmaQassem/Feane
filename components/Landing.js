import classes from "../styles/_landing.module.scss";
import StyledContainer from "./UI/StyledContainer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./UI/Button";
const responsive = {
  desktop: {
    breakpoint: {
      max: 5000,
      min: 1024,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 480,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
  },
};
const landingItems = [
  {
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
    id: "L1",
    title: "fast food restaurant",
  },
  {
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
    id: "L2",
    title: "fast food restaurant",
  },
  {
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
    id: "L3",
    title: "fast food restaurant",
  },
];
const Landing = () => {
  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <li
        className={
          active ? `${classes.dot}  ${classes.active}` : `${classes.dot}`
        }
        aria-label="dot"
        onClick={() => onClick()}
      ></li>
    );
  };
  return (
    <section className={classes.landing}>
      <StyledContainer>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className=""
          containerClass="container"
          customDot={<CustomDot />}
          dotListClass={classes.dots}
          draggable={false}
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {landingItems.map((item) => {
            return (
              <div className={classes.text} key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button
                  href="/"
                  className={classes.button}
                  aria-label="Menu Page"
                >
                  order now
                </Button>
              </div>
            );
          })}
        </Carousel>
      </StyledContainer>
    </section>
  );
};

export default Landing;
