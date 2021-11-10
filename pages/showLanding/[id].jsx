import React, { useEffect, useState } from "react";
import { ApiReference } from "../../Api";
import HeroSlides from "../../containers/LandingPage/HeroSlides";
import LinerFourImgMobile from "../../containers/LandingPage/LinerFourImgMobile";
import LinerOneImg from "../../containers/LandingPage/LinerOneImg";
import LinerProducts from "../../containers/LandingPage/LinerProducts";
import LinerThreeImg from "../../containers/LandingPage/LinerThreeImg";
import LinerTwoValue from "../../containers/LandingPage/LinerTwoValue";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { useRouter } from "next/router";
function index({ idLanding }) {
  let getDataLanding = `${ApiReference.landing.getLanding.url}${idLanding}/`;

  const [dataLanding, setDataLanding] = useState([]);

  useEffect(async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      getDataLanding,
      true,
      ""
    );
    if (response.status == 200) {
      console.log(`response`, response.data.page_data);
      setDataLanding(JSON.parse(response.data.page_data));
    }
  }, []);
  const _handel_select_component = (data, index) => {
    console.log(`data1`, data);
    switch (data.type) {
      case 1:
        return <HeroSlides dataHeroSlides={data.data} />;
        break;
      case 2:
        return <LinerOneImg dataLinerOneImg={data.data} />;
        break;
      case 3:
        return (
          <>
            <LinerTwoValue dataLinerTwoValue={data.data} />
          </>
        );
        break;
      case 4:
        return <LinerThreeImg dataLinerThreeImg={data.data} />;
        break;
      case 5:
        return <LinerFourImgMobile dataLinerFourImgMobile={data.data} />;
        break;
      case 6:
        return (
          <LinerProducts
            title={data.data[0].title}
            color={data.data[0].color}
            subTitle={data.data[0].subTitle}
            dataLinerProducts={data.data[0].products}
            url={data.data[0].url}
          />
        );
        break;
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
  useEffect(() => {
    console.log(`mii`, dataLanding);
  }, [dataLanding]);

  return (
    <>
      {dataLanding.map((data, index) => _handel_select_component(data, index))}
    </>
  );
}

export default index;

// function server side
export async function getServerSideProps(context) {
  const idLanding = context.params.id;

  return {
    props: { idLanding },
  };
}
