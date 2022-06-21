import React from "react";
import { useRouter } from "next/router";
import ProfileLayout from "../../../../components/layout/ProfileLayout";
import { AiOutlineArrowRight } from "react-icons/ai";
import s from "./warehouse.module.scss";
import Item from "../../../../containers/profile/coins/item";
import Progress from "../../../../containers/profile/coins/progress";
function WareHouse() {
  const router = useRouter();
  return (
    <div className={s.wrapper}>
      <div className={s.wrap_header}>
        <div className={s.back_btn}>
          <div onClick={() => router.back()}>
            <AiOutlineArrowRight
              size={20}
              color="#224D82"
              style={{ marginLeft: "5px" }}
            />
            بازگشت
          </div>
        </div>
        <div className={s.title}>انبار سکه</div>
      </div>
      <Item>
        <div className={s.center}>
          <span>سکه های جمع آوری شده :8</span>
        </div>
        <div className={s.center}>
          <span>ثبت نام 10 نفر از کسانی که دعوت کردید :‌2 سکه</span>
          <br />
          <span>3 خرید بالا 200 هزار تومان : 6 سکه</span>
        </div>
      </Item>
      <div className={s.hr}></div>
      <Item>
        <div className={s.center}>
          <span>سکه های استفاده شده :8</span>
        </div>
        <div className={s.center}>
          <span>از ۵ سکه در سفارش شماره ۸۰۸۶ استفاده شده است.</span>
          <br />
        </div>
      </Item>
      <div className={s.hr}></div>

      <Item>
        <Progress precent="90" coinsObtained="1" />
        <div className={s.center}>
          <span>۱۸ نفر با لینک دعوت شما از نخل بازدید کرده اند.</span>
        </div>
      </Item>
      <div className={s.hr}></div>

      <Item>
        <Progress precent="40" coinsObtained="2" title="ثبت نام" />
        <div className={s.center}>
          <span>
            ۴ نفر از افرادی که دعوت کرده اید در سایت ثبت نام کرده اند.
          </span>
        </div>
      </Item>
    </div>
  );
}

export default WareHouse;
WareHouse.Layout = ProfileLayout;
