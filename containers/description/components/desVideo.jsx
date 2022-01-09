import Image from "next/image";

import st from "./desVideo.module.scss";

function DesVideo() {
  return (
    <>
      <div className={st.wrap}>
        <div className={`${st.content} container`}>
          <div className={st.title}>
            <div className="">
              <h1>بازار اجتماعی نخل</h1>
              <span>یک بستر آنلاین برای </span>
              <span>رشد کسب و کارهای کوچک </span>
              <span>جهت </span>
              <span>فروش اینترنی</span>
              <span>است.</span>
            </div>
            <div className="">
              <button>حجره خودتو بساز</button>
            </div>
          </div>
          <div className={st.video}>s</div>
        </div>
        <div className={st.edge}>
          <Image
            layout="responsive"
            width={300}
            height={100}
            src="/image/description/moj.svg"
          />
        </div>
      </div>
    </>
  );
}

export default DesVideo;
