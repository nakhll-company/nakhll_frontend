import React, { useEffect, useState } from "react";
import { ApiReference } from "../../Api";
import HeroSlides from "../../containers/LandingPage/HeroSlides";
import LinerFourImgMobile from "../../containers/LandingPage/LinerFourImgMobile";
import LinerOneImg from "../../containers/LandingPage/LinerOneImg";
import LinerProducts from "../../containers/LandingPage/LinerProducts";
import LinerThreeImg from "../../containers/LandingPage/LinerThreeImg";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import LinerTwoImgSm from "../../containers/LandingPage/LinerTwoImgSm";
import ShopLayout from "../../components/shopLayout";
import AboutMe from "../../containers/LandingPage/AboutMe";
import VipProducts from "../../containers/LandingPage/VipProducts";
import Video from "../../containers/LandingPage/Video";
import LinearShopsCart from "../../containers/LandingPage/linearShopsCart";
function ShowLanding({ idLanding }) {
  let getDataLanding = `${ApiReference.landing.getLanding.url}${idLanding[0]}/${idLanding[1]}`;
  const [dataLanding, setDataLanding] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        getDataLanding,
        true,
        ""
      );
      if (response.status == 200) {
        setDataLanding(JSON.parse(response.data.page_data));
      }
    }
    fetchData();
  }, []);

  const _handel_select_component = (data, index) => {
    const handeler = {
      1: <HeroSlides dataHeroSlides={data.data} />,
      2: <LinerOneImg dataLinerOneImg={data.data} />,
      3: <LinerTwoImgSm dataLinerTwoValue={data.data} />,
      4: <LinerThreeImg dataLinerThreeImg={data.data} />,
      5: <LinerFourImgMobile dataLinerFourImgMobile={data.data} />,
      6: (
        <LinerProducts
          title={data.data[0].titleComponent}
          color={data.data[0].color}
          subTitle={data.data[0].subTitle}
          dataLinerProducts={data.data[0].products}
          url={data.data[0].url}
        />
      ),
      // 7:<LinerProductsBg
      // //         subTitle_LinerProductsBg={type.subtitle}
      // //         dataLinerProductsBg={type.data}
      // //         url_LinerProductsBg={type.url}
      // //         num={4}
      // //         xl={3}
      // //       />
      8: <AboutMe text={data.data[0].text} />,
      9: <VipProducts dataLinerProducts={data.data[0].products} />,
      10: <LinearShopsCart part={1} />,
      11: <Video data={data} />,
      13: <LinearShopsCart part={2} />,
    };

    return handeler[data.type] ? handeler[data.type] : null;
  };

  return (
    <>
      {dataLanding.map((data, index) => _handel_select_component(data, index))}
    </>
  );
}

export default ShowLanding;

// function server side
export async function getServerSideProps(context) {
  const idLanding = context.params.id;

  return {
    props: { idLanding },
  };
}

ShowLanding.Layout = ShopLayout;
