import React, { useState } from "react";

import Head from "next/head";

import EnfoLiner from "../../containers/hojreh/EnfoLiner";
import HeroSlides from "../../containers/LandingPage/HeroSlides";
import LinerOneImg from "../../containers/LandingPage/LinerOneImg";
import LinerTwoValue from "../../containers/LandingPage/LinerTwoValue";
import LinerThreeImg from "../../containers/LandingPage/LinerThreeImg";
import LinerFourImgMobile from "../../containers/LandingPage/LinerFourImgMobile";
import LinerProducts from "../../containers/LandingPage/LinerProducts";
import LinerProductsBg from "../../containers/LandingPage/LinerProductsBg";
import ListProductCus from "../../containers/listProduct/listProductCus";

import { getSchemaList } from "../../api/hojreh";

const Hojreh = ({ dataShop, data }) => {
  const [informationShop, setInformationShop] = useState(dataShop.shop);
  const _handel_select_component = (type, index) => {
    switch (type.component_type) {
      case 1:
        return (
          <HeroSlides dataHeroSlides={dataShop.all_data_for_component[index]} />
        );
        break;
      case 2:
        return (
          <LinerOneImg
            dataLinerOneImg={dataShop.all_data_for_component[index]}
          />
        );
        break;
      case 3:
        return (
          <>
            <LinerTwoValue
              dataLinerTwoValue={dataShop.all_data_for_component[index]}
            />
          </>
        );
        break;
      case 4:
        return (
          <LinerThreeImg
            dataLinerThreeImg={dataShop.all_data_for_component[index]}
          />
        );
        break;
      case 5:
        return (
          <LinerFourImgMobile
            dataLinerFourImgMobile={dataShop.all_data_for_component[index]}
          />
        );
        break;
      case 6:
        return (
          <LinerProducts
            title={type.title}
            subTitle={type.subtitle}
            dataLinerProducts={dataShop.all_data_for_component[index]}
            url={type.url}
          />
        );
        break;
      case 7:
        return (
          <LinerProductsBg
            subTitle_LinerProductsBg={type.subtitle}
            dataLinerProductsBg={type.data}
            url_LinerProductsBg={type.url}
            num={4}
            xl={3}
          />
        );
        break;
      default:
        null;
    }
  };
  return (
    <>
      <Head>
        <title>{informationShop.title}</title>
      </Head>
      {!dataShop.shop.is_landing && (
        <>
          <EnfoLiner
            title={informationShop.title}
            name={dataShop.shop.FK_ShopManager}
            profile={informationShop.image_thumbnail_url}
          />
          <ListProductCus shop_products={dataShop.shop.slug} data={data} />
          {/* <ListProduct shop_products={dataShop.shop.slug} /> */}
        </>
      )}

      {dataShop.shop.is_landing &&
        dataShop.SchemaIn.map((turn, index) =>
          _handel_select_component(turn, index)
        )}
    </>
  );
};

export default Hojreh;

// function server side
export async function getServerSideProps(context) {
  const dataShop = await getSchemaList(context.query.shop);

  return {
    props: {
      data: context.query,
      dataShop,
    },
  };
}
