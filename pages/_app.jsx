// node libraries
import Script from "next/script";
import { Store } from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
// components
import ShopLayout from "../components/shopLayout";
import General from "../components/utils/General";
import MyLayout from "../components/layout/Layout";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/General/font-awesome/css/font-awesome.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.startsWith("/fp")) {
    return (
      <>
        <General />
        <Script id="testChat" strategy="lazyOnload">
          {`
       !function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
      
      `}
        </Script>
        <Provider store={Store}>
          <MyLayout>
            <Component {...pageProps} />
          </MyLayout>
        </Provider>
      </>
    );
  } else if (
    router.pathname.startsWith("/liveEdit") ||
    router.pathname.startsWith("/game") ||
    router.pathname.startsWith("/login")
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
        <Script id="testChat" strategy="lazyOnload">
          {`
       !function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
      
      `}
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
