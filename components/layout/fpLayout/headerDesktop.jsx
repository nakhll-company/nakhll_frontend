import Image from 'next/image';
import React from 'react'
import styles from "../layout.module.scss";
import { useRouter } from "next/router";
function HeaderDesktop({slugHojreh}) {
    const router = useRouter();
  return (
    <header>
          <div className={styles.hedtop}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: "102px" }}></span>
              <h1 style={{ color: "#224d82", fontSize: "18px", margin: "0px" }}>
                داشبورد حجره
              </h1>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className={styles.icons}
                style={{
                  marginRight: "5px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/Hojreh.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  onClick={() => {
                    slugHojreh !== "" && router.push(`/shop/${slugHojreh}`);
                  }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="حجره"
                />{" "}
              </span>
              <span
                style={{
                  marginRight: "0",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/iconpro.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  onClick={() => router.push("/profile/")}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="پروفایل"
                />{" "}
              </span>
              <span
                style={{
                  marginRight: "0",
                  marginLeft: "110px",
                  cursor: "pointer",
                }}
              >
                {" "}
                <Image
                  src="/icons/Nakhll.png"
                  alt="Picture of the author"
                  layout="responsive"
                  width={60}
                  height={60}
                  onClick={() => router.push("/")}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="نخل"
                />
              </span>
            </div>
          </div>

        </header>
        
  )
}

export default HeaderDesktop