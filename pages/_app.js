import "../styles/_global-styles.scss";
import { Provider } from "react-redux";
import store from "../store/redux";
//import CartProvider from "@/CartContext/CartProvider";
import HomeLayout from "../components/Layout/HomeLayout";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Root = router.route === "/" ? HomeLayout : RootLayout;
  return (
    <Provider store={store}>
      <Root>
        <Component {...pageProps} />
      </Root>
    </Provider>
  );
}

export default MyApp;
