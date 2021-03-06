import Image from "next/image";

import React from "react";
import s from "./blogNakhl.module.scss";
import ButtonLanding from "./ButtonLanding";

function BlogNakhl({ dataBlog }) {
  return (
    <div className={s.container}>
      <div className={s.partImages}>
        <div
          onClick={() => {
            window.open(dataBlog[0].url, "_blank");
          }}
          style={{ marginLeft: "5px" }}
          className={s.imageContainer}
        >
          <Image
            className={s.image}
            src={dataBlog[0].img}
            layout="responsive"
            height={100}
            width={200}
            alt=""
          />
          <div className={s.textImage}>
            <span>{dataBlog[0].title}</span>
          </div>
        </div>
        <div
          onClick={() => {
            window.open(dataBlog[1].url, "_blank");
          }}
          style={{ marginRight: "5px" }}
          className={`${s.imageContainer} ${s.imagDesktop}`}
        >
          <Image
            className={s.image}
            src={dataBlog[1].img}
            layout="responsive"
            height={100}
            width={200}
            alt=""
          />
          <div className={s.textImage}>
            <span>{dataBlog[1].title}</span>
          </div>
        </div>
      </div>

      <div className={s.titleContainer}>
        <h2>نخل مرکز رشد کسب و کارهای کوچک</h2>
      </div>
      <div className={s.emailPart}>
        <div className={s.inputEmailContainer}>
          <input className={s.input} placeholder="شماره تماس / ایمیل" />
          <ButtonLanding title="ارسال" />
        </div>

        <div className={s.information}>
          <span>
            برای آگاهی از دوره های آموزشی شماره تماس یا ایمیل خود را وارد کنید.
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogNakhl;
