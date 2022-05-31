// node libraries
import React from "react";
import Image from "next/image";
// style
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <Image
          src="/image/LOGO_500.png"
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <h3
        className={styles.nameLoding}
        style={{
          fontSize: "15px",
          color: "hsl(211deg 100% 50%)",
        }}
      >
        {" "}
        در حال بروزرسانی ...
      </h3>
    </div>
  );
};
// export
export default Loading;
