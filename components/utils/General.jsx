import React, { useEffect } from "react";
import Script from "next/script";
import { hotjar } from "react-hotjar";
import { useRouter } from "next/router";
// import TagManager from "react-gtm-module";
import * as gtag from "../../lib/gtag";
function General(props) {
  const router = useRouter();

  useEffect(() => {
    hotjar.initialize(2655206, 6);
    // TagManager.initialize({ gtmId: "GTM-MNQT35X" });
  }, []);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* test for analytics4 */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1BKTG72HYN`}
      />
      <Script
        id="gtag-init_two"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1BKTG72HYN');
                `,
        }}
      /> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-156540827-1`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-156540827-1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script id="yektanet" strategy="lazyOnload">
        {`!function (t, e, n) {
        t.yektanetAnalyticsObject = n, t[n] = t[n] || function () {
            t[n].q.push(arguments)
        }, t[n].q = t[n].q || [];
        var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(),
            c = e.getElementsByTagName("script")[0], s = e.createElement("script");
        s.id = "ua-script-lPejcfYM"; s.dataset.analyticsobject = n;
        s.async = 1; s.type = "text/javascript";
        s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/lPejcfYM/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c)
    }(window, document, "yektanet");`}
      </Script>
    </>
  );
}

export default General;
