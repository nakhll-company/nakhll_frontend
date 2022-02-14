import React, { useEffect, useRef } from "react";
import Image from "next/image";
import lottie from "lottie-web";
import EmptyLayout from "../../components/layout/EmptyLayout";
import s from "./update.module.scss";
function Update() {
  const updatElement = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: updatElement.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/update.json"),
    });
  }, []);
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <Image
          src="/icons/Nakhll.png"
          layout="responsive"
          width={100}
          height={100}
          alt="nakhll"
        />
      </div>
      <div ref={updatElement} className={s.update_element}></div>
      <div className={s.update_text}>در حال به روز رسانی...</div>
    </div>
  );
}

export default Update;

Update.Layout = EmptyLayout;
