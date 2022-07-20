import React from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import LinearProduct from "../../components/LinearProduct";
import LineShopCart from "../../components/LineShopCart";
import LineTwoBanner from "../../components/LineTwoBanner";

function NewLanding() {
  return (
    <>
      <LineShopCart title="برترین حجره ها" />
      <LineTwoBanner />
      <LinearProduct />
    </>
  );
}

export default NewLanding;
NewLanding.Layout = EmptyLayout;
