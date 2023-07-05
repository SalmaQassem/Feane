import Background from "../Background";
import Cart from "../Cart/Cart";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RootLayout = (props) => {
  return (
    <>
      <Background class="sub">
        {/*<ProfileProvider>*/}
        <NavBar />
        {/*</ProfileProvider>*/}
      </Background>
      <Cart />
      {props.children}
      <Footer />
    </>
  );
};
export default RootLayout;
