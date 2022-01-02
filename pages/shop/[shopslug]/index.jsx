// node libraries
import { NextSeo } from "next-seo";
import React, { useState } from "react";
// components
import EnfoLiner from "../../../containers/hojreh/EnfoLiner";
import HeroSlides from "../../../containers/LandingPage/HeroSlides";
import LinerOneImg from "../../../containers/LandingPage/LinerOneImg";
import LinerThreeImg from "../../../containers/LandingPage/LinerThreeImg";
import LinerFourImgMobile from "../../../containers/LandingPage/LinerFourImgMobile";
import LinerProducts from "../../../containers/LandingPage/LinerProducts";
import ListProductCusTest from "../../../containers/listProduct/listProductCusTest";
// methods
import { ApiReference } from "../../../Api";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import ShopLayout from "../../../components/shopLayout";
import LinerTwoImgSm from "../../../containers/LandingPage/LinerTwoImgSm";

// fetch data
const fetchData = async (id) => {
  let Api_Shop = encodeURI(`${ApiReference.shop}${id}/`);
  let response = await ApiRegister().apiRequest(
    null,
    "GET",
    Api_Shop,
    false,
    ""
  );

  if (response.status === 200) {
    return {
      shop: response.data || [],
    };
  }
};

const Shop = ({ dataShop, data }) => {
  const [informationShop, setInformationShop] = useState(dataShop.shop);
  const _handel_select_component = (data) => {
    switch (data.type) {
      case 1:
        return <HeroSlides dataHeroSlides={data.data} />;
      case 2:
        return <LinerOneImg dataLinerOneImg={data.data} />;
      case 3:
        return <LinerTwoImgSm dataLinerTwoValue={data.data} />;
      case 4:
        return <LinerThreeImg dataLinerThreeImg={data.data} />;
      case 5:
        return <LinerFourImgMobile dataLinerFourImgMobile={data.data} />;
      case 6:
        return (
          <LinerProducts
            title={data.data[0].titleComponent}
            color={data.data[0].color}
            subTitle={data.data[0].subTitle}
            dataLinerProducts={data.data[0].products}
            url={data.data[0].url}
          />
        );
      //   case 7:
      //     return (
      //       <LinerProductsBg
      //         subTitle_LinerProductsBg={type.subtitle}
      //         dataLinerProductsBg={type.data}
      //         url_LinerProductsBg={type.url}
      //         num={4}
      //         xl={3}
      //       />
      //     );
      //     break;
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
          <NextSeo {...SEO} />
          <EnfoLiner
            title={informationShop.title}
            name={dataShop.shop.FK_ShopManager}
            profile={informationShop.image_thumbnail_url}
          />

          {/* <ListProductShop shop_products={dataShop.shop.slug} data={data} /> */}
          <ListProductCusTest data={data} />
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
