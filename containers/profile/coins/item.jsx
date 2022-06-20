import React from "react";
import s from "./item.module.scss";
function Item({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}

export default Item;
