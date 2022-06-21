import React, { useState } from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import Progress from "../../../containers/profile/coins/progress";
import SheetCoins from "../../../containers/profile/coins/sheet";
import s from "./coins.module.scss";

function CoinsPage() {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = () => {
    setCopy(true);
    window.navigator.clipboard.writeText("https://nakhll.com/?axcs483kids3");
    setTimeout(() => {
      setCopy(false);
    }, 8000);
  };
  return (
    <>
      <div className={s.wrapper}>
        <SheetCoins title="لینک دعوتت اینجاست" to="coins/warehouse">
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
                <button onClick={() => copyToClipboard()}>
                  {copy ? "کپی شد !" : "کپی"}{" "}
                </button>
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
            <Progress precent="90" coinsObtained="1" />
            <Progress precent="40" coinsObtained="1" title="ثبت نام" />
          </div>
        </SheetCoins>
      </div>
    </>
  );
}

export default CoinsPage;
CoinsPage.Layout = ProfileLayout;
