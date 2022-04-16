import React from "react";
import styles from "./customAccordion.module.scss";
export const CustomAccordion = ({ children, title, item, callApi }) => {
  const _handel_according = (accord, icon) => {
    let element = document.getElementById(accord);
    if (element.style.height == "0px") {
      element.style.height = "unset";
      document.getElementById(icon).className = "fas fa-angle-up";
    } else {
      element.style.height = "0";
      element.style.overflow = "hidden";
      
      document.getElementById(icon).className = "fas fa-angle-down";
    }
  };
  return (
    <>
      <div
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
                padding: "11px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={() => {
                _handel_according(`according_${item}`, `icon_${item}`);
                {
                  callApi && callApi();
                }
              }}
            >
              <span style={{ marginLeft: "auto" }}> {title}</span>
              <i id={`icon_${item}`} className="fas fa-angle-down"></i>
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
        </div>
      </div>
    </>
  );
};

export default CustomAccordion;
