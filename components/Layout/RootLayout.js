import Background from "../UI/Background";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RootLayout = (props) => {
  return (
    <>
      {/*<CartProvider>*/}
      <Background class="sub">
        {/*<ProfileProvider>*/}
        <NavBar />
        {/*</ProfileProvider>*/}
      </Background>
      {/*<Cart />*/}
      {/*</CartProvider>*/}
      {props.children}
      <Footer />
    </>
  );
};
export default RootLayout;
