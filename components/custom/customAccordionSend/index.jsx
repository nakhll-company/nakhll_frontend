// node libraries
import React from "react";
import Image from "next/image";
// methods
import Number from "../../number";
// style
import styles from "./customAccordionSend.module.scss";

export const CustomAccordionSend = ({
  children,
  title,
  item,
  logisticUnits,
  logisticPrice,
  unitType,
}) => {
  const allMiniPic = Object.values(logisticUnits);

  const handelAccording = (accord, icon, images) => {
    const element = document.getElementById(accord);
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
          background: "#224E821A",

          padding: ".4rem !important",

          borderRadius: "1.2rem",
          margin: "1rem 0",
        }}
      >
        <div style={{ border: "none" }}>
          <h2 style={{ padding: "15px 15px 0px 15px" }}>
            <button
              className={styles.header}
              style={{
                padding: "11px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={() => {
                handelAccording(
                  `according_${item}`,
                  `icon_${item}`,
                  `pic_${item}`
                );
              }}
            >
              <div style={{ width: "100%" }}>
                <span
                  style={{
                    textAlign: "right",
                    marginBottom: "16px",
                    display: "block",
                  }}
                >
                  {" "}
                  {title}
                </span>

                <div id={`pic_${item}`} className={styles.wrap_mini_pic}>
                  {allMiniPic?.map((el, index) => (
                    <div style={{ display: "flex" }} key={index}>
                      {el.products.map((elIn, indexIn) => (
                        <div key={indexIn} className={styles.mini_pic}>
                          <Image
                            src={elIn.image}
                            layout="fixed"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
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
          <div style={{ padding: "0px 15px" }}>
            <div className={styles.liner}></div>
          </div>
          <div className={styles.footer}>
            <div>
              <span style={{ color: "#000" }}>مجموع هزینه ارسال:</span>
            </div>
            <div>
              <span style={{ color: "#224E82", fontWeight: "bold" }}>
                {unitType == "pad" ? (
                  "پسکرایه"
                ) : logisticPrice == 0 ? (
                  "رایگان"
                ) : (
                  <>
                    <Number num={`${logisticPrice / 10}`} />

                    <span> تومان</span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAccordionSend;
