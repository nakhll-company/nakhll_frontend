// node libraries
import React from "react";
// style
import styles from "./MegaMenuMobile.module.scss";

function MegaMenuMobile({ category }) {

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
    <ul className={styles.ul}>
      {category.map((element, index) => (
        <li key={index}>
          <a
            onClick={() =>
              _handel_according(`according_${index}`, `icon_${index}`)
            }
          >
            {element.name}
            <i id={`icon_${index}`} className="fas fa-angle-down"></i>
          </a>
          <ul
            id={`according_${index}`}
            className={styles.submenu}
            style={{
              height: "0",
              overflow: "hidden",
              transition: "all 1s ease",
            }}
          >
            <li>
            </li>
            {element.childrens.length > 0 &&
              element.childrens.map((subElement, index) => (
                <li key={index}>
                  <div
                    onClick={() => {
                      location.replace(
                        `/search?q=&new_category=${subElement.id}`
                      );
                    }}
                  >
                    {subElement.name}
                  </div>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default MegaMenuMobile;

