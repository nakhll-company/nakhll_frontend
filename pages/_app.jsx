// node libraries
import Script from "next/script";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { Store } from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

// method
import SEO from "../next-seo.config";
import { chageIconChatPosition } from "../utils/changeIconChatPosition";
// components
import General from "../components/utils/General";
import MyLayout from "../components/layout/Layout";
// styles
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#ffab00",
  className: "z-50",
  delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.Layout || MyLayout;

  useEffect(() => {
    chageIconChatPosition();
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <General />
      {/* <Script id="testChat" strategy="lazyOnload" type="text/javascript">
        {`!function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`}
      </Script> */}
      <Script
        id="testChatNew"
        strategy="afterInteractive"
        src={`//js-na1.hs-scripts.com/21759198.js`}
      />

      <Provider store={Store}>
        <Layout>
          <Component key={router.asPath} {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
