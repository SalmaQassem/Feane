import Background from "../Background";
import NavBar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import Landing from "../Landing";
import Footer from "../Footer/Footer";

const HomeLayout = (props) => {
  return (
    <div>
      <Background>
        {/*<ProfileProvider>*/}
        <NavBar />
        {/*</ProfileProvider>*/}
        <Cart />
        <Landing />
      </Background>
      {props.children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
