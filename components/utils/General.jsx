// node libraries
import Script from "next/script";
import { hotjar } from "react-hotjar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
// methods
import { pageview } from "../../utils/googleAnalytics";

function General() {
  const router = useRouter();

  useEffect(() => {
    hotjar.initialize(2447146, 6);
    const tagManagerArgs = {
      gtmId: "GTM-MNQT35X",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
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
      <Script id="sanjaghWebSite" strategy="lazyOnload">
        {`var h=document.getElementsByTagName("head")[0],s=document.createElement("script");s.async=!0,s.defer=!0,s.type="text/javascript",d=new Date,s.src="https://cdn.sanjagh.com/assets/sdk/www.nakhll.com/client.js?t="+d.getFullYear().toString()+d.getMonth()+d.getDate()+d.getHours(),h.appendChild(s);`}
      </Script>
    </>
  );
}

export default General;
