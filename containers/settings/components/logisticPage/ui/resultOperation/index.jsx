// node libraries
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
// style
import st from "./resultOperation.module.scss";

function ResultOperation({ pageController, type = "success", resetStates }) {
  useEffect(() => {
    setTimeout(() => {
      resetStates();
      pageController(1, 1);
    }, 2000);
  }, [pageController, resetStates]);

  return (
    <>
      <div className={st.wrapper}>
        <div className={st.wrappIcon}>
          <Image
            layout="fixed"
            height={18}
            width={18}
            src="/icons/settings/close.svg"
            alt="close"
          />
        </div>
        <div className={st.wrapImage}>
          <Image
            layout="fixed"
            height={80}
            width={80}
            src={
              type == "success"
                ? "/icons/settings/success.svg"
                : "/icons/settings/error.svg"
            }
            alt="success"
          />
        </div>
        <div className={st.wrapText}>
          {type == "success" ? (
            <span>درخواست شما با موفقیت ثبت شد .</span>
          ) : (
            <span>واحد ارسال ثبت نشد !</span>
          )}
        </div>
      </div>
    </>
  );
}

export default ResultOperation;
