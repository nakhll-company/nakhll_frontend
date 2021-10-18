import React from "react";

import HeroSlides from "../containers/LandingPage/HeroSlides";
import LinerFourImgMobile from "../containers/LandingPage/LinerFourImgMobile";
import LinerOneImg from "../containers/LandingPage/LinerOneImg";
import LinerProducts from "../containers/LandingPage/LinerProducts";
import LinerProductsBg from "../containers/LandingPage/LinerProductsBg";
import LinerThreeImg from "../containers/LandingPage/LinerThreeImg";
import LinerTwoValue from "../containers/LandingPage/LinerTwoValue";
import { ApiRegister } from "../services/apiRegister/ApiRegister";
import { ApiReference } from "../Api";
// fetch data
const fetchData = async () => {
  let all_data_for_component = [];
  let all_type_for_component = [];
  let urlSchema = encodeURI(ApiReference.Landing_Page);

  let Schema = await ApiRegister().apiRequest(null, "GET", urlSchema, true, "");

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

    return {
      SchemaIn: Schema.data,
      all_type_for_component,
      all_data_for_component,
    };
  } else {
    return null;
  }
};

const index = ({ data }) => {
  const Sample = {
    1: "اسلایدر تکی",
    2: "بنر تک عکسی",
    3: " بنر 2تایی در یک ردیف",
    4: " (یکی بالا دوتا پایین)بنر ۳ تایی",
    5: " بنر چهارتایی چهارتا کنار هم",
    6: " ردیف محصولات",
    7: " ردیف شگفت انگیزا",
  };

  const _handel_select_component = (type, index) => {
    switch (type.component_type) {
      case 1:
        return (
          <HeroSlides dataHeroSlides={data.all_data_for_component[index]} />
        );
        break;
      case 2:
        return (
          <LinerOneImg dataLinerOneImg={data.all_data_for_component[index]} />
        );
        break;
      case 3:
        return (
          <>
            <LinerTwoValue
              dataLinerTwoValue={data.all_data_for_component[index]}
            />
          </>
        );
        break;
      case 4:
        return (
          <LinerThreeImg
            dataLinerThreeImg={data.all_data_for_component[index]}
          />
        );
        break;
      case 5:
        return (
          <LinerFourImgMobile
            dataLinerFourImgMobile={data.all_data_for_component[index]}
          />
        );
        break;
      case 6:
        return (
          <LinerProducts
            title={type.title}
            subTitle={type.subtitle}
            dataLinerProducts={data.all_data_for_component[index]}
            url={type.url}
            color={data.SchemaIn[index].background_color}
          />
        );
        break;
      case 7:
        return (
          <LinerProductsBg
            subTitle_LinerProductsBg={type.subtitle}
            dataLinerProductsBg={type.data}
            url_LinerProductsBg={type.url}
            color={data.SchemaIn[index].background_color}
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
      {data.SchemaIn.length > 0 &&
        data.SchemaIn.map((turn, index) =>
          _handel_select_component(turn, index)
        )}
      ‌‌
    </>
  );
};

export default index;

// function server side
export async function getServerSideProps(context) {
  const data = await fetchData();
  return {
    props: { data },
  };
}
