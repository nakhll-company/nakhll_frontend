import { useRouter } from "next/router";
import React from "react";
import s from "./ButtonLanding.module.scss";
function ButtonLanding({ title = "نام کلید" }) {
  const router = useRouter();
  return (
    <button className={s.button} onClick={() => router.push("/description")}>
      {title}
    </button>
  );
}

export default ButtonLanding;
