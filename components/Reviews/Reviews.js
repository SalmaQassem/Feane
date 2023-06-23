import classes from "../../styles/_reviews.module.scss";
import StyledContainer from "../UI/StyledContainer";
import Header from "../UI/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewItem from "./ReviewItem";
import AddButton from "../UI/AddButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 480 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const Reviews = (props) => {
  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={classes.sliderButtons}>
        <AddButton
          className={classes.leftButton}
          aria-label="add"
          onClick={() => previous()}
        >
          <FaChevronLeft />
        </AddButton>
        <AddButton
          className={classes.rightButton}
          aria-label="add"
          onClick={() => goToSlide(currentSlide + 1)}
        >
          <FaChevronRight />
        </AddButton>
      </div>
    );
  };
  return (
    <section className={classes.reviews}>
      <StyledContainer>
        <div className={classes.header}>
          <Header>what says our customers</Header>
        </div>
        <Carousel
          responsive={responsive}
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside
          infinite
          autoPlay
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          draggable
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
        >
          {props.data.map((item) => {
            return <ReviewItem item={item} key={item.id} />;
          })}
        </Carousel>
      </StyledContainer>
    </section>
  );
};

export default Reviews;
