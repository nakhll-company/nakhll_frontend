import React from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import LineShopCart from "../../components/LineShopCart";
import LineTwoBanner from "../../components/LineTwoBanner";

function NewLanding() {
  return (
    <>
      <LineShopCart title="برترین حجره ها" />
      <LineTwoBanner />
    </>
  );
}

export default NewLanding;
NewLanding.Layout = EmptyLayout;
