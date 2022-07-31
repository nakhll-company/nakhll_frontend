// node libraries
import React from "react";
// components
import Selers from "../containers/nakhlPage/selers";
import Footer from "../components/shopLayout/footer";
import BlogNakhl from "../containers/nakhlPage/blogNakhl";
import EmptyLayout from "../components/layout/EmptyLayout";
import HeroSlider from "../containers/nakhlPage/heroSlider";
import ValuesPart from "../containers/nakhlPage/valuesPart";
import SliderNakhl from "../containers/nakhlPage/sliderNakhl";
import NakhlLinerProducts from "../containers/nakhlPage/LinerProducts";
// import LinerProductsBgLanding from "../containers/nakhlPage/LinerProductsBg";
// methods
import { dataLanding } from "../utils/dataLanding";

function Landing() {
  const { linearsProduct, dataBlog, dataSliders } = dataLanding;

  return (
    <div>
      <HeroSlider />
      <ValuesPart />
      <Selers />
      {/* <LinerProductsBgLanding
        dataLinerProductsBg={dataAmazingDiscounts.products}
        urlLinerProductsBg={dataAmazingDiscounts.url}
      /> */}
      <SliderNakhl dataSliders={dataSliders} />
      <NakhlLinerProducts
        dataLinerProducts={linearsProduct[0].products}
        title={linearsProduct[0].title}
        colorTitle=" #064d80"
        url={linearsProduct[0].url}
      />
      <NakhlLinerProducts
        dataLinerProducts={linearsProduct[1].products}
        title={linearsProduct[1].title}
        colorTitle=" #064d80"
        url={linearsProduct[1].url}
      />
      <BlogNakhl dataBlog={dataBlog} />
      <Footer />
    </div>
  );
}
// export
export default Landing;
Landing.Layout = EmptyLayout;
