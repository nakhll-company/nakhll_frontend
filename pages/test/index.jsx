import React from "react";

import BlogNakhl from "../../containers/nakhlPage/blogNakhl";
import EmptyLayout from "../../components/layout/EmptyLayout";
import HeroSlider from "../../containers/nakhlPage/heroSlider";
import NakhlLinerProducts from "../../containers/nakhlPage/LinerProducts";
import LinerProductsBgLanding from "../../containers/nakhlPage/LinerProductsBg";
import Selers from "../../containers/nakhlPage/selers";
import SliderNakhl from "../../containers/nakhlPage/sliderNakhl";
import ValuesPart from "../../containers/nakhlPage/valuesPart";
import Footer from "../../components/shopLayout/footer";
import { dataLanding } from "../../public/dataLanding/dataLanding";

function Test() {
  const { linearsProduct, dataBlog, dataSliders, dataAmazingDiscounts } =
    dataLanding;
  return (
    <div>
      <HeroSlider />
      <ValuesPart />
      <Selers />
      <LinerProductsBgLanding
        dataLinerProductsBg={dataAmazingDiscounts.products}
        url_LinerProductsBg={dataAmazingDiscounts.url}
      />

      <SliderNakhl dataSliders={dataSliders} />

      <NakhlLinerProducts
        dataLinerProducts={linearsProduct[0].products}
        title={linearsProduct[0].title}
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

export default Test;
Test.Layout = EmptyLayout;
