// node libraries
import React from "react";
// style
import styles from "./MegaMenuDesktop.module.scss";

function MegaMenuDesktop({ category }) {
  return (
    <ul className={styles.nav_list}>
      {category &&
        category.slice(0, 9).map((element, index) => (
          <li
            key={index}
            className={styles.nav_item}
            style={{ position: "relative", display: "inline-block" }}
          >
            <div className={styles.nav_item_link}>
              {element.name}
              <i className="fas fa-angle-down"></i>
            </div>
            <div
              className={`container  ${styles.nav_submenu}`}
              style={{ backgroundColor: "#fff" }}
            >
              <div className={styles.nav_cols_holder}>
                <div className={styles.nav_submenu_col}>
                  <ul className={styles.nav_submenu_cat}>
                    <li className={styles.nav_submenu_col_title}>
                      {element.childrens.length > 0 &&
                        element.childrens.map((subElement, index) => (
                          <div
                            key={index}
                            onClick={() =>
                              location.replace(
                                `/search?q=&category=${subElement.id}`
                              )
                            }
                          >
                            {subElement.name}
                            <i className="icon icon-Left"></i>
                          </div>
                        ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default MegaMenuDesktop;
