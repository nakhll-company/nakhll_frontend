// node libraries
import { Provider } from "react-redux";
import { useEffect } from "react";

import Script from "next/script";
import { useRouter } from "next/router";
import { Store } from "../redux/store";
import { hotjar } from "react-hotjar";

// components
import MyLayout from "../components/layout/Layout";
import ShopLayout from "../components/shopLayout";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// scss
import "../styles/globals.scss";

// font-awesome
import "../styles/General/font-awesome/css/font-awesome.css";
import General from "../components/utils/General";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.startsWith("/fp")) {
    return (
      <>
        <General />
        <Provider store={Store}>
          <MyLayout>
            <Component {...pageProps} />
          </MyLayout>
        </Provider>
      </>
    );
  } else if (
    router.pathname.startsWith("/liveEdit") ||
    router.pathname.startsWith("/game")
  ) {
    return (
      <>
        <General />
        <Provider store={Store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  } else {
    return (
      <>
        <General />
        <Provider store={Store}>
          <ShopLayout>
            <Component {...pageProps} />
          </ShopLayout>
        </Provider>
      </>
    );
  }
}

export default MyApp;
