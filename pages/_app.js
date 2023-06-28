import "../styles/_global-styles.scss";
import Providers from "../store/Provider";
import HomeLayout from "../components/Layout/HomeLayout";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Root = router.route === "/" ? HomeLayout : RootLayout;
  return (
    <Providers>
      <Root>
        <Component {...pageProps} />
      </Root>
    </Providers>
  );
}

export default MyApp;
