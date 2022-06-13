import Image from "next/image";
import React from "react";
import styles from "../layout.module.scss";
function HeaderMobile() {
  return (
    <header>
      <div className={styles.hedtop_mobile}>
        <h1>پیشخوان</h1>
        <span>
          <span
            className={styles.icons}
            style={{
              cursor: "pointer",
            }}
          >
            <Image
              src="/icons/Hojreh.png"
              alt="Picture of the author"
              width={30}
              height={30}
              onClick={() => {
                slugHojreh !== "" && router.push(`/shop/${slugHojreh}`);
              }}
              title="حجره"
            />{" "}
          </span>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            <Image
              src="/icons/iconpro.png"
              alt="Picture of the author"
              width={30}
              height={30}
              onClick={() => router.push("/profile/")}
              data-toggle="tooltip"
              data-placement="bottom"
              title="پروفایل"
            />{" "}
          </span>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            {" "}
            <Image
              src="/icons/Nakhll.png"
              alt="Picture of the author"
              width={30}
              height={30}
              onClick={() => router.push("/")}
              data-toggle="tooltip"
              data-placement="bottom"
              title="نخل"
            />
          </span>
        </span>
      </div>
    </header>
  );
}

export default HeaderMobile;
