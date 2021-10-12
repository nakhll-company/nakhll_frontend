// node libraries
import { Provider } from "react-redux";
import { Store } from "../redux/store";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { useRouter } from "next/router";
// components
import MyLayout from "../components/layout/Layout";
import ShopLayout from "../components/shopLayout";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// scss
import "../styles/globals.scss";

// font-awesome

import "../styles/General/font-awesome/css/font-awesome.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2447146, 6);
  }, []);
  const router = useRouter();

  if (router.pathname.startsWith("/fp")) {
    return (
      <Provider store={Store}>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </Provider>
    );
  } else {
    return (
      <Provider store={Store}>
        <ShopLayout>
          <Component {...pageProps} />
        </ShopLayout>
      </Provider>
    );
  }
}

export default MyApp;
