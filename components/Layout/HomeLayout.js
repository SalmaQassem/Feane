import Background from "../UI/Background";
import NavBar from "../Navbar/Navbar";
import Landing from "../Landing";
import Footer from "../Footer/Footer";

const HomeLayout = (props) => {
  return (
    <>
      {/*<CartProvider>*/}
      <Background>
        {/*<ProfileProvider>*/}
        <NavBar />
        {/*</ProfileProvider>*/}
        {/*<Cart />*/}
        <Landing />
      </Background>
      {/*</CartProvider>*/}
      {props.children}
      <Footer />
    </>
  );
};

export default HomeLayout;
