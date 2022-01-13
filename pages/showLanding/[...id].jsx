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
import RotationProducts from "../../containers/LandingPage/RotationProducts";
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
    switch (data.type) {
      case 1:
        return <HeroSlides dataHeroSlides={data.data} />;
        break;
      case 2:
        return <LinerOneImg dataLinerOneImg={data.data} />;
        break;
      case 3:
        return <LinerTwoImgSm dataLinerTwoValue={data.data} />;
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
            title={data.data[0].titleComponent}
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
      case 8:
        return <AboutMe text={data.data[0].text} />;
        break;

      case 9:
        return <VipProducts dataLinerProducts={data.data[0].products} />;
        break;

      case 10:
        // return <RotationProducts data={data.data[0].products} />;
        return <LinearShopsCart part={1} />;
        break;
      case 13:
        // return <RotationProducts data={data.data[0].products} />;
        return <LinearShopsCart part={2} />;
        break;

      case 11:
        return <Video data={data} />;
        break;
      default:
        null;
    }
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
