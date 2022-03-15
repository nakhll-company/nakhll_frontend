import React from "react";
import s from "./ButtonLanding.module.scss";
function ButtonLanding({ title = "نام کلید" }) {
  return <button className={s.button}>{title}</button>;
}

export default ButtonLanding;
