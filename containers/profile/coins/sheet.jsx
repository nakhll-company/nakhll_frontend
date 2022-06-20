import React from "react";
import s from "./sheet.module.scss";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

function SheetCoins({ children, title = "عنوان", to = "#" }) {
  const router = useRouter();
  return (
    <div className={s.wrapper}>
      <div className={s.wrap_title}>
        <span>{title}</span>
      </div>

      {children}

      <div className={s.space}></div>
      <div
        onClick={() => {
          router.push(to);
        }}
        className={s.wrap_footer}
      >
        <span>اطلاعات بیشتر</span>
        <BiArrowBack
          style={{ marginRight: "5px", cursor: "pointer" }}
          color="#224D82"
        />
      </div>
    </div>
  );
}

export default SheetCoins;
