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
        <Script strategy="lazyOnload">
          {`!function (t, e, n) { t.yektanetAnalyticsObject = n, t[n] = t[n] || function () { t[n].q.push(arguments) }, t[n].q = t[n].q || []; var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(), c = e.getElementsByTagName("script")[0], s = e.createElement("script"); s.id = "ua-script-7s8fh5Vc"; s.dataset.analyticsobject = n; s.async = 1; s.type = "text/javascript"; s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/7s8fh5Vc/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c) }(window, document, "yektanet"); `}
        </Script>
        <Script strategy="lazyOnload">{`!function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,localStorage.getItem("rayToken")?t.src="https://app.raychat.io/scripts/js/"+o+"?rid="+localStorage.getItem("rayToken")+"&href="+window.location.href:t.src="https://app.raychat.io/scripts/js/"+o+"?href="+window.location.href;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=document,a=window,o="1b3710ed-495e-4794-bbc7-842af6728c48";"complete"==e.readyState?t():a.attachEvent?a.attachEvent("onload",t):a.addEventListener("load",t,!1)}();`}</Script>
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
        <Script strategy="lazyOnload">{`!function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,localStorage.getItem("rayToken")?t.src="https://app.raychat.io/scripts/js/"+o+"?rid="+localStorage.getItem("rayToken")+"&href="+window.location.href:t.src="https://app.raychat.io/scripts/js/"+o+"?href="+window.location.href;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=document,a=window,o="1b3710ed-495e-4794-bbc7-842af6728c48";"complete"==e.readyState?t():a.attachEvent?a.attachEvent("onload",t):a.addEventListener("load",t,!1)}();`}</Script>
        <Script strategy="lazyOnload">
          {`!function (t, e, n) { t.yektanetAnalyticsObject = n, t[n] = t[n] || function () { t[n].q.push(arguments) }, t[n].q = t[n].q || []; var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(), c = e.getElementsByTagName("script")[0], s = e.createElement("script"); s.id = "ua-script-7s8fh5Vc"; s.dataset.analyticsobject = n; s.async = 1; s.type = "text/javascript"; s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/7s8fh5Vc/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c) }(window, document, "yektanet"); `}
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
