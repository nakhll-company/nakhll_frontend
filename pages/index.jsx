import React, { useEffect, useState } from "react";

import Head from "next/head";
import HeroSlides from "../containers/LandingPage/HeroSlides";
import LinerProducts from "../containers/LandingPage/LinerProducts";
import LinearImages from "../containers/LandingPage/LinerImages";

import LinerProductsBg from "../containers/LandingPage/LinerProductsBg";
import { ApiRegister } from "../services/apiRegister/ApiRegister";
import SuggestedValue from "../containers/LandingPage/SuggestedValue";
import LinerTwoImg from "../containers/LandingPage/LinerTwoImg";
import LinerThreeImg from "../containers/LandingPage/LinerThreeImg";
import HolderIcon from "../components/holder_icon";
import LinerOneImg from "../containers/LandingPage/LinerOneImg";
import LinerFourImgMobile from "../containers/LandingPage/LinerFourImgMobile";

const index = () => {
  const [Schema, setSchema] = useState([]);

  const Sample = {
    1: "اسلایدر تکی",
    2: "بنر تک عکسی",
    3: " بنر 2تایی در یک ردیف",
    4: " (یکی بالا دوتا پایین)بنر ۳ تایی",
    5: " بنر چهارتایی چهارتا کنار هم",
    6: " ردیف محصولات",
    7: " ردیف شگفت انگیزا",
  };

  const _Call_Api_Schema = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `http://51.89.107.174:8000/api/v1/landing/schema/`,
        true,
        {}
      );
      if (response.status === 200) {
        setSchema(response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  };

  const _handel_select_component = (type) => {
    switch (type.component_type) {
      case 1:
        return <HeroSlides nextApi_HeroSlides={type.data} />;
        break;
      case 2:
        return <LinerOneImg nextApi_LinerOneImg={type.data} />;
        break;
      case 3:
        return <LinerTwoImg nextApi_LinerTwoImg={type.data} />;
        break;
      case 4:
        return <LinerThreeImg nextApi_LinerThreeImg={type.data} />;
        break;
      case 5:
        return <LinerFourImgMobile nextApi_LinerFourImgMobile={type.data} />;
        break;
      case 6:
        return (
          <LinerProducts
            title={type.title}
            subTitle={type.subtitle}
            nextApi={type.data}
            url={type.url}
          />
        );
        break;
      case 7:
        return (
          <LinerProductsBg
            subTitle_LinerProductsBg={type.subtitle}
            nextApi_LinerProductsBg={type.data}
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

  useEffect(() => {
    _Call_Api_Schema();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>
      {Schema.length > 0 &&
        Schema.map((turn) => _handel_select_component(turn))}
      <SuggestedValue />
      ‌‌
    </>
  );
};

export default index;
