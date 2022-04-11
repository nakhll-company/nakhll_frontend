// node libraries
import Script from "next/script";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { Store } from "../redux/store";
import { Provider } from "react-redux";
// method
import SEO from "../next-seo.config";
import { refreshToken } from "../api/auth/refreshToken";
// components
import General from "../components/utils/General";
import MyLayout from "../components/layout/Layout";
// styles
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/General/font-awesome/css/font-awesome.css";

function MyApp({ Component, pageProps }) {
  const REFRESH_TOKEN_TIMEOUT = 300000;
  const Layout = Component.Layout || MyLayout;

  
 

  return (
    <>
      <DefaultSeo {...SEO} />
      <General />
      <Script id="testChat" strategy="lazyOnload" type="text/javascript">
        {`!function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`}
      </Script>
      <Provider store={Store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
