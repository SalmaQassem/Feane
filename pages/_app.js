import "../styles/_global-styles.scss";
import CartProvider from "@/context/cartContext/cartProvider";
import HomeLayout from "../components/Layout/HomeLayout";
import RootLayout from "../components/Layout/RootLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Root = router.route === "/" ? HomeLayout : RootLayout;
  return (
    <CartProvider>
      <Root>
        <Component {...pageProps} />
      </Root>
    </CartProvider>
  );
}

export default MyApp;
