import React from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import LinearProduct from "../../components/LinearProduct";
import LineShopCart from "../../components/LineShopCart";
import LineTwoBanner from "../../components/LineTwoBanner";
import Footer from "../../components/shopLayout/footer";
import BlogNakhl from "../../containers/nakhlPage/blogNakhl";
import ValuesPart from "../../containers/nakhlPage/valuesPart";
import { dataLanding } from "../../utils/dataLanding";
function NewLanding() {
  const { dataBlog } = dataLanding;
  return (
    <>
      <ValuesPart />
      <LinearProduct />
      <LineTwoBanner />

      <LineShopCart title="برترین حجره ها" />
      <LinearProduct />

      <LineTwoBanner />
      <LinearProduct />
      <BlogNakhl dataBlog={dataBlog} />
      <Footer />
    </>
  );
}

export default NewLanding;
NewLanding.Layout = EmptyLayout;
