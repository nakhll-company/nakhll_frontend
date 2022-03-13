import React from "react";
import s from "./ButtonLanding.module.scss";
function ButtonLanding({ title = "نام کلید" }) {
  return (
    <div>
      <button className={s.button}>{title}</button>
    </div>
  );
}

export default ButtonLanding;
