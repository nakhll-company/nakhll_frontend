import React, { useState } from "react";
import Head from "next/head";

import EnfoLiner from "../../../containers/hojreh/EnfoLiner";
import HeroSlides from "../../../containers/LandingPage/HeroSlides";
import LinerOneImg from "../../../containers/LandingPage/LinerOneImg";
import LinerTwoValue from "../../../containers/LandingPage/LinerTwoValue";
import LinerThreeImg from "../../../containers/LandingPage/LinerThreeImg";
import LinerFourImgMobile from "../../../containers/LandingPage/LinerFourImgMobile";
import LinerProducts from "../../../containers/LandingPage/LinerProducts";
import LinerProductsBg from "../../../containers/LandingPage/LinerProductsBg";
import ListProductCus from "../../../containers/listProduct/listProductCus";
import ListProductShop from "../../../containers/shop/listProductCus";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { ApiReference } from "../../../Api";
import ListProductCusTest from "../../../containers/listProduct/listProductCusTest";

// fetch data
const fetchData = async (id) => {
  let all_data_for_component = [];
  let all_type_for_component = [];
  let Schema = [];
  let Api_Shop = encodeURI(`${ApiReference.shop}${id}/`);

  let response = await ApiRegister().apiRequest(
    null,
    "GET",
    Api_Shop,
    true,
    ""
  );

  if (response.status === 200) {
    if (response.data.is_landing) {
      Schema = await ApiRegister().apiRequest(
        null,
        "GET",
        `${ApiReference.schemaShop}${response.data.ID}/`,
        true,
        ""
      );
      if (Schema.status === 200) {
        for (let index = 0; index < Schema.data.length; index++) {
          let one_Component = await ApiRegister().apiRequest(
            null,
            "GET",
            Schema.data[index].data,
            true,
            ""
          );
          if (one_Component.status === 200) {
            all_type_for_component.push(Schema.data[index].component_type);
            all_data_for_component.push(one_Component.data);
          }
        }
      }
    }
    return {
      shop: response.data || [],
      SchemaIn: Schema.data || [],
      all_type_for_component,
      all_data_for_component,
    };
  } else {
    return {
      shop: response.data || [],
      SchemaIn: [],
      all_type_for_component,
      all_data_for_component,
    };
  }
};

const Shop = ({ dataShop, data }) => {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
        <title>{` حجره ${informationShop.title} | نخل`}</title>
      </Head>
      {!dataShop.shop.is_landing && (
        <>
          <EnfoLiner
            title={informationShop.title}
            name={dataShop.shop.FK_ShopManager}
            profile={informationShop.image_thumbnail_url}
          />

          {/* <ListProductShop shop_products={dataShop.shop.slug} data={data} /> */}
          <ListProductCusTest data={data}/>
        </>
      )}

      {dataShop.shop.is_landing &&
        dataShop.SchemaIn.map((turn, index) =>
          _handel_select_component(turn, index)
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
