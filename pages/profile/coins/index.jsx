import React from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import SheetCoins from "../../../containers/profile/coins/sheet";
import s from "./coins.module.scss";

function CoinsPage() {
  return (
    <>
      <div className={s.wrapper}>
        <SheetCoins title="لینک دعوتت اینجاست"></SheetCoins>
        <SheetCoins title="انبار سکه"></SheetCoins>
      </div>
    </>
  );
}

export default CoinsPage;
CoinsPage.Layout = ProfileLayout;
