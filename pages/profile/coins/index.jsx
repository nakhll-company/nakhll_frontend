import React from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import Progress from "../../../containers/profile/coins/progress";
import SheetCoins from "../../../containers/profile/coins/sheet";
import s from "./coins.module.scss";

function CoinsPage() {
  return (
    <>
      <div className={s.wrapper}>
        <SheetCoins title="لینک دعوتت اینجاست">
          <div className="">
            <div className={s.wrap_explain}>
              <span>
                باهاش میتونی هر کسی که میخوای رو
                <br />
                به نخل دعوت کنی و سکه بگیری
              </span>
            </div>
            <div className={s.wrap_copy}>
              <div className={s.copy}>
                <button>کپی </button>
                <span>https://nakhll.com/?axcs483kids3</span>
              </div>
            </div>
          </div>
        </SheetCoins>
        <SheetCoins title="انبار سکه">
          <div className={s.wrap_coin}>
            <div className={s.wrap_summary}>
              <span>سکه های جمع آوری شده‌:8</span>
              <span>سکه های استفاده شده : 5</span>
            </div>
            <Progress />
            <Progress />
          </div>
        </SheetCoins>
      </div>
    </>
  );
}

export default CoinsPage;
CoinsPage.Layout = ProfileLayout;
