import React, { useEffect, useState } from "react";
import { ApiReference } from "../../Api";
import HeroSlides from "../../containers/LandingPage/HeroSlides";
import LinerFourImgMobile from "../../containers/LandingPage/LinerFourImgMobile";
import LinerOneImg from "../../containers/LandingPage/LinerOneImg";
import LinerProducts from "../../containers/LandingPage/LinerProducts";
import LinerThreeImg from "../../containers/LandingPage/LinerThreeImg";
import LinerTwoValue from "../../containers/LandingPage/LinerTwoValue";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
function index(props) {
  let getDataLanding = `${ApiReference.landing.getLanding.url}4/`;
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
      // case 6:
      //   return (
      //     <LinerProducts
      //       title={data.data.title}
      //       // subTitle={type.subtitle}
      //       dataLinerProducts={data.data}
      //       url={data.data.url}
      //     />
      //   );
      //   break;
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
    console.log(`dataLanding`, dataLanding);
  }, [dataLanding]);

  return (
    <>
      {dataLanding.map((data, index) => _handel_select_component(data, index))}
    </>
  );
}

export default index;
