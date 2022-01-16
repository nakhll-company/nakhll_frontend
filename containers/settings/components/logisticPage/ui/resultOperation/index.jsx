import Image from "next/image";
import { useEffect } from "react";
import st from "./resultOperation.module.scss";
function ResultOperation({ pageController }) {
  useEffect(() => {
    setTimeout(() => {
      pageController(1, 1);
    }, 2000);
  }, []);
  return (
    <>
      <div className={st.wrapper}>
        <div className={st.wrappIcon} onClick={() => pageController(1, 1)}>
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
            src="/icons/settings/success.svg"
            alt="success"
          />
        </div>
        <div className={st.wrapText}>
          <span>درخواست شما با موفقیت ثبت شد .</span>
        </div>
      </div>
    </>
  );
}

export default ResultOperation;
