// node libraries
import { useEffect } from "react";
import Script from "next/script";
import { Store } from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
// components
import ShopLayout from "../components/shopLayout";
import General from "../components/utils/General";
import MyLayout from "../components/layout/Layout";
// methods
import { refreshToken } from "../api/auth/refreshToken";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/General/font-awesome/css/font-awesome.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || MyLayout;
  const router = useRouter();
  return (
    <>
      <DefaultSeo {...SEO} />
      <General />
      <Script id="testChat" strategy="lazyOnload">
        {`
   !function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
  
  `}
      </Script>
      <Provider store={Store}>
        {/* <ShopLayout> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </ShopLayout> */}
      </Provider>
    </>
  );

  // if (router.pathname.startsWith("/fp")) {
  //   return (
  //     <>
  //       <DefaultSeo {...SEO} />
  //       <General />
  //       <Script id="testChat" strategy="lazyOnload">
  //         {`
  //      !function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();

  //     `}
  //       </Script>
  //       <Provider store={Store}>
  //         <MyLayout>
  //           <Component {...pageProps} />
  //         </MyLayout>
  //       </Provider>
  //     </>
  //   );
  // } else if (
  //   router.pathname.startsWith("/liveEdit") ||
  //   router.pathname.startsWith("/login")
  // ) {
  //   return (
  //     <>
  //       <DefaultSeo {...SEO} />
  //       <General />
  //       <Provider store={Store}>
  //         <Component {...pageProps} />
  //       </Provider>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <DefaultSeo {...SEO} />
  //       <General />
  //       <Script id="testChat" strategy="lazyOnload">
  //         {`
  //      !function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();

  //     `}
  //       </Script>
  //       <Provider store={Store}>
  //         <ShopLayout>
  //           <Component {...pageProps} />
  //         </ShopLayout>
  //       </Provider>
  //     </>
  //   );
  // }
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
