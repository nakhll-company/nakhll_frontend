import Image from "next/image";
import React from "react";
import s from "./blogNakhl.module.scss";
function BlogNakhl() {
  return (
    <div className={s.container}>
      <div className={s.partImages}>
        <div className={s.postContainer}>
          <div className="">
            <Image
              src="/image/slideNakhl.jpg"
              layout="fixed"
              height={100}
              width={300}
            />
          </div>
          <div className="">
            <Image
              src="/image/slideNakhl.jpg"
              layout="fixed"
              height={100}
              width={300}
            />
          </div>
        </div>
      </div>

      <div className={s.part}>
        <h2>نخل مرکز رشد کسب و کارهای کوچک</h2>
      </div>
      <div className={s.part}>
        <input placeholder="شماره تماس/ایمیل" />
        <div className="">
          <span>
            برای آگاهی از دوره های آموزشی شماره تماس یا ایمیل خود را وارد کنید.
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogNakhl;
