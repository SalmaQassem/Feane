import classes from "../../styles/_about.module.scss";
import Head from "next/head";
import StyledContainer from "../../components/UI/StyledContainer";
import Header from "../../components/UI/Header";
import Button from "../../components/UI/Button";
import Image from "next/image";
import AboutImg from "../../media/images/about-img.webp";

const About = () => {
  return (
    <>
      <Head>
        <title>Feane</title>
        <meta
          name="description"
          content="Food Ordering Web site created using next js"
        />
      </Head>
      <section className={classes.about}>
        <StyledContainer>
          <div className={classes.box}>
            <div className={classes.imagerContainer}>
              <Image src={AboutImg} alt="about_img" loading="lazy" />
            </div>
            <div className={classes.text}>
              <Header>we are feane</Header>
              <p className={classes.p}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </p>
              <Button
                href="About"
                aria-label="About Page"
                className={classes.a}
              >
                read more
              </Button>
            </div>
          </div>
        </StyledContainer>
      </section>
    </>
  );
};
export default About;
