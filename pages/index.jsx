// node libraries
import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import dynamic from 'next/dynamic';
// components
import ShopLayout from "../components/shopLayout";
import LinerOneImg from "../containers/LandingPage/LinerOneImg";
import LinerProducts from "../containers/LandingPage/LinerProducts";
import LinerThreeImg from "../containers/LandingPage/LinerThreeImg";
import LinerTwoValue from "../containers/LandingPage/LinerTwoValue";
import LinerProductsBg from "../containers/LandingPage/LinerProductsBg";
import LinerFourImgMobile from "../containers/LandingPage/LinerFourImgMobile";
const DynamicHeroSlides = dynamic(() => import('../containers/LandingPage/HeroSlides'))
// methods
import { ApiReference } from "../api/Api";
import { ApiRegister } from "../services/apiRegister/ApiRegister";

// fetch data
const fetchData = async () => {
  let all_data_for_component = [];
  let all_type_for_component = [];
  let urlSchema = encodeURI(ApiReference.Landing_Page);

  let Schema = await ApiRegister().apiRequest(
    null,
    "GET",
    urlSchema,
    false,
    ""
  );

  if (Schema.status === 200) {
    for (let index = 0; index < Schema.data.length; index++) {
      let one_Component = await ApiRegister().apiRequest(
        null,
        "GET",
        Schema.data[index].data,
        false,
        ""
      );
      if (one_Component.status === 200) {
        all_type_for_component.push(Schema.data[index].component_type);
        all_data_for_component.push(one_Component.data);
      }
    }

    return {
      SchemaIn: Schema.data,
      all_type_for_component,
      all_data_for_component,
    };
  } else {
    return null;
  }
};

const HomePage = ({ data }) => {
  // const Sample = {
  //   1: "اسلایدر تکی",
  //   2: "بنر تک عکسی",
  //   3: " بنر 2تایی در یک ردیف",
  //   4: " (یکی بالا دوتا پایین)بنر ۳ تایی",
  //   5: " بنر چهارتایی چهارتا کنار هم",
  //   6: " ردیف محصولات",
  //   7: " ردیف شگفت انگیزا",
  // };

  const _handel_select_component = (type, index) => {
    switch (type.component_type) {
      case 1:
        return (
          <DynamicHeroSlides
            key={index}
            dataHeroSlides={data.all_data_for_component[index]}
          />
        );
      case 2:
        return (
          <LinerOneImg
            key={index}
            dataLinerOneImg={data.all_data_for_component[index]}
          />
        );
      case 3:
        return (
          <>
            <LinerTwoValue
              key={index}
              dataLinerTwoValue={data.all_data_for_component[index]}
            />
          </>
        );
      case 4:
        return (
          <LinerThreeImg
            key={index}
            dataLinerThreeImg={data.all_data_for_component[index]}
          />
        );
      case 5:
        return (
          <LinerFourImgMobile
            key={index}
            dataLinerFourImgMobile={data.all_data_for_component[index]}
          />
        );
      case 6:
        return (
          <LinerProducts
            key={index}
            title={type.title}
            subTitle={type.subtitle}
            dataLinerProducts={data.all_data_for_component[index]}
            url={type.url}
            color={data.SchemaIn[index].background_color}
          />
        );
      case 7:
        return (
          <LinerProductsBg
            key={index}
            subTitle_LinerProductsBg={type.subtitle}
            dataLinerProductsBg={type.data}
            url_LinerProductsBg={type.url}
            color={data.SchemaIn[index].background_color}
            num={4}
            xl={3}
          />
        );
      default:
        null;
    }
  };

  const SEO = {
    title: "بازار اجتماعی نخل",
    description:
      "نخل سرزمینی است برای یادآوری سنت‌های اصیل ایرانی‌مان، برای شکوفایی استعدادها و بهتر دیده‌شدن‌تان، کالاها و خدمات خود را در سرزمین نخل به اشتراک بگذارید. اینجا راهی برای پیشبرد هدف‌هایتان وجود دارد.",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content=" نخل به وسعت یک سرزمین،بازار نخل،نخل،بازار اجتماعی نخل،بازار آنلاین نخل"
        />
        <link rel="canonical" href="https://nakhll.com/" />
      </Head>
      {data.SchemaIn.length > 0 &&
        data.SchemaIn.map((turn, index) =>
          _handel_select_component(turn, index)
        )}
    </>
  );
};

export default HomePage;

// function server side
export async function getServerSideProps() {
  const data = await fetchData();

  return {
    props: { data },
  };
}

HomePage.Layout = ShopLayout;
