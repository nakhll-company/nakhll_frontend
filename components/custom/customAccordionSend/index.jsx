import React, { useState } from "react";
import styles from "./customAccordionSend.module.scss";
import Image from "next/image";
import Number from "../../number";

export const CustomAccordionSend = ({
  children,
  title,
  item,
  logistic_units,
  callApi,
  logistic_price,
}) => {
  const [allMiniPic, setAllMiniPic] = useState(Object.values(logistic_units));

  console.log(`logistic_units`, Object.values(logistic_units));
  const _handel_according = (accord, icon, images) => {
    let element = document.getElementById(accord);
    if (element.style.height == "0px") {
      element.style.height = "unset";
      document.getElementById(images).style.height = "0";
      document.getElementById(images).style.overflow = "hidden";
      document.getElementById(icon).className = "fas fa-angle-down";
    } else {
      element.style.height = "0";
      element.style.overflow = "hidden";
      document.getElementById(images).style.height = "unset";

      document.getElementById(icon).className = "fas fa-angle-up";
    }
  };
  return (
    <>
      <div
        className={styles.wraper}
        style={{
          background: "#fff",
          padding: ".4rem !important",

          borderRadius: "1.2rem",
          margin: "1rem 0",
        }}
      >
        <div style={{ border: "none" }}>
          <h2>
            <button
              className={styles.header}
              style={{
                padding: "11px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={() => {
                _handel_according(
                  `according_${item}`,
                  `icon_${item}`,
                  `pic_${item}`
                );
              }}
            >
              <div>
                <span
                  style={{
                    textAlign: "right",
                    marginBottom: "9px",
                    display: "block",
                  }}
                >
                  {" "}
                  {title}
                </span>

                <div id={`pic_${item}`} className={styles.wrap_mini_pic}>
                  {allMiniPic?.map((el, index) => (
                    <div key={index} className={styles.mini_pic}>
                      {el.products.map((elIn, indexIn) => (
                        <Image
                          src={elIn.image}
                          layout="fixed"
                          width={30}
                          height={30}
                          alt=""
                          key={indexIn}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <i id={`icon_${item}`} className="fas fa-angle-up"></i>
            </button>
          </h2>
          <div>
            <div
              id={`according_${item}`}
              style={{
                transition: "all 1s ease-out",
                height: "0",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {children}
            </div>
          </div>
          <div className={styles.liner}></div>
          <div className={styles.footer}>
            <div className="">
              <span>توضیحات برای ارسال و رایگان شدن سبد حجره</span>
            </div>
            <div className="">
              <span>
                <Number num={logistic_price} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAccordionSend;
