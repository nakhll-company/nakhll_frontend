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
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2447146, 6);
  }, []);
  const router = useRouter();

  if (router.pathname.startsWith("/fp")) {
    return (
      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`}
        </Script>
        <Provider store={Store}>
          <MyLayout>
            <Component {...pageProps} />
          </MyLayout>
        </Provider>
      </>
    );
  } else {
    return (
      <>
        <Script
          strategy="lazyOnload"
          src={"https://www.googletagmanager.com/gtag/js?id=G-Z8E2Z09JDT"}
        />
        <Script strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z8E2Z09JDT');`}
        </Script>
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
