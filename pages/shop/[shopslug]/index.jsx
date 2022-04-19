// node libraries
import lottie from "lottie-web";
import Script from "next/script";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
// components
import ShopLayout from "../../../components/shopLayout";
import Video from "../../../containers/LandingPage/Video";
import AboutMe from "../../../containers/LandingPage/AboutMe";
import VipProducts from "../../../containers/LandingPage/VipProducts";
import LinearShopsCart from "../../../containers/LandingPage/linearShopsCart";
const DynamicEnfoLiner = dynamic(() =>
  import("../../../containers/hojreh/EnfoLiner")
);
const DynamicHeroSlides = dynamic(() =>
  import("../../../containers/LandingPage/HeroSlides")
);
const DynamicLinerOneImg = dynamic(() =>
  import("../../../containers/LandingPage/LinerOneImg")
);
const DynamicLinerTwoImgSm = dynamic(() =>
  import("../../../containers/LandingPage/LinerTwoImgSm")
);
const DynamicLinerThreeImg = dynamic(() =>
  import("../../../containers/LandingPage/LinerThreeImg")
);
const DynamicLinerProducts = dynamic(() =>
  import("../../../containers/LandingPage/LinerProducts")
);
const DynamicLinerFourImgMobile = dynamic(() =>
  import("../../../containers/LandingPage/LinerFourImgMobile")
);
const DynamicListProductCusTest = dynamic(() =>
  import("../../../containers/listProduct/listProductCusTest")
);
// methods
import { ApiReference } from "../../../api/Api";
import { http } from "../../../services/callApi/api";

// fetch data
const fetchData = async (id) => {
  let Api_Shop = encodeURI(`${ApiReference.shop}${id}/`);

  let response = await http.get(Api_Shop);

  if (response.status === 200) {
    return {
      shop: response.data || [],
    };
  }
};

const Shop = ({ dataShop, data }) => {
  const nakhlAnim = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: nakhlAnim.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/lottie/shop.json"),
    });
  }, []);
  const _handel_select_component = (data) => {
    switch (data.type) {
      case 1:
        return <DynamicHeroSlides dataHeroSlides={data.data} />;
      case 2:
        return <DynamicLinerOneImg dataLinerOneImg={data.data} />;
      case 3:
        return <DynamicLinerTwoImgSm dataLinerTwoValue={data.data} />;
      case 4:
        return <DynamicLinerThreeImg dataLinerThreeImg={data.data} />;
      case 5:
        return <DynamicLinerFourImgMobile dataLinerFourImgMobile={data.data} />;
      case 6:
        return (
          <DynamicLinerProducts
            title={data.data[0].titleComponent}
            color={data.data[0].color}
            subTitle={data.data[0].subTitle}
            dataLinerProducts={data.data[0].products}
            url={data.data[0].url}
          />
        );
      case 8:
        return <AboutMe text={data.data[0].text} />;
      case 9:
        return <VipProducts dataLinerProducts={data.data[0].products} />;
      case 10:
        return <LinearShopsCart part={1} />;
      case 13:
        return <LinearShopsCart part={2} />;
      case 11:
        return <Video data={data} />;
      default:
        null;
    }
  };
  const SEO = {
    title: `حجره ${dataShop.shop.title} | نخل`,
    description:
      dataShop.shop.Description !== ""
        ? dataShop.shop.Description
        : "نخل سرزمینی است برای یادآوری سنت‌های اصیل ایرانی‌مان، برای شکوفایی استعدادها و بهتر دیده‌شدن‌تان، کالاها و خدمات خود را در سرزمین نخل به اشتراک بگذارید. اینجا راهی برای پیشبرد هدف‌هایتان وجود دارد.",
  };

  return (
    <>
      {dataShop.shop.landing_data === null && (
        <>
          <Script id={dataShop.shop.yektanet_advertisement}>
            {`!function (t, e, n) {
        t.yektanetAnalyticsObject = n, t[n] = t[n] || function () {
            t[n].q.push(arguments)
        }, t[n].q = t[n].q || [];
        var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(),
            c = e.getElementsByTagName("script")[0], s = e.createElement("script");
        s.id = "${dataShop.shop.yektanet_advertisement}"; s.dataset.analyticsobject = n;
        s.async = 1; s.type = "text/javascript";
        s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/${dataShop.shop.yektanet_advertisement}/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c)
    }(window, document, "yektanet");`}
          </Script>
          <NextSeo {...SEO} />
          <DynamicEnfoLiner
            data={dataShop}
            title={dataShop.shop.title}
            name={dataShop.shop.FK_ShopManager}
            profile={dataShop.shop.image_thumbnail_url}
          />
          {dataShop.shop.total_products == 0 && (
            <div className="d-flex justify-content-center flex-column align-items-center">
              {" "}
              <span>
                <span style={{ fontWeight: "bold" }}>حجره تازه تاسیس :</span>
                در حال چیدمان...
              </span>
              <div style={{ width: "300px" }} ref={nakhlAnim}></div>
            </div>
          )}
          {dataShop.shop.total_products != 0 && (
            <DynamicListProductCusTest data={data} />
          )}
        </>
      )}
      {dataShop.shop.landing_data?.page_data &&
        JSON.parse(dataShop.shop.landing_data.page_data).map((data, index) =>
          _handel_select_component(data, index)
        )}
    </>
  );
};

export default Shop;

// function server side
export async function getServerSideProps(context) {
  const dataShop = await fetchData(context.query.shopslug);

  return {
    props: {
      data: context.query,
      dataShop,
    },
  };
}

Shop.Layout = ShopLayout;
