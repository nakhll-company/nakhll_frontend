// node libraries
import React, { useEffect, useState } from "react";
// methods
import useViewport from "../../../components/viewPort";
import { numberOfCategory } from "./methods/checkUserScreen";
// style
import styles from "./MegaMenuDesktop.module.scss";
import { useRouter } from "next/router";

function MegaMenuDesktop({ category }) {
  const router = useRouter();
  const { width } = useViewport();
  const [numberOfCategories, setNumberOfCategories] = useState();

  useEffect(() => {
    numberOfCategory(width, setNumberOfCategories);
  }, [width]);

  return (
    <ul className={styles.nav_list}>
      {category &&
        category.slice(0, numberOfCategories).map((element, index) => (
          <li
            key={index}
            className={styles.nav_item}
            style={{ position: "relative", display: "inline-block" }}
          >
            <div style={{ margin: "0 5px" }} className={styles.nav_item_link}>
              <span style={{ display: "inline-block" }}>{element.name}</span>
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
                            onClick={() => {
                              router.push(
                                `/search?q=&category=${subElement.id}`
                              );
                            }}
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
