// node libraries
import React, { useEffect, useState } from "react";
// components
import ShopLayout from "../../../components/shopLayout";
import Video from "../../../containers/LandingPage/Video";
import AboutMe from "../../../containers/LandingPage/AboutMe";
import HeroSlides from "../../../containers/LandingPage/HeroSlides";
import VipProducts from "../../../containers/LandingPage/VipProducts";
import LinerOneImg from "../../../containers/LandingPage/LinerOneImg";
import LinerTwoImgSm from "../../../containers/LandingPage/LinerTwoImgSm";
import LinerThreeImg from "../../../containers/LandingPage/LinerThreeImg";
import LinerProducts from "../../../containers/LandingPage/LinerProducts";
import LinearShopsCart from "../../../containers/LandingPage/linearShopsCart";
import LinerFourImgMobile from "../../../containers/LandingPage/LinerFourImgMobile";
// methods
import { ApiReference } from "../../../api/Api";
import { authhttp } from "../../../services/callApi/api";

function Preview({ idLanding }) {
  const [dataLanding, setDataLanding] = useState([]);
  const getDataLanding = `${ApiReference.landing.getLanding.url}${idLanding[0]}/${idLanding[1]}/`;

  useEffect(() => {
    async function fetchData() {
      const response = await authhttp.get(getDataLanding);
      if (response.status == 200) {
        setDataLanding(JSON.parse(response.data.page_data));
      }
    }
    fetchData();
  }, [getDataLanding]);

  const _handel_select_component = (data) => {
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

export default Preview;

// function server side
export async function getServerSideProps(context) {
  const idLanding = context.params.id;

  return {
    props: { idLanding },
  };
}

Preview.Layout = ShopLayout;
