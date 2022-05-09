// node libraries
import React from "react";
import Head from "next/head";
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
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <ul className={styles.ul}>
        {Array.isArray(category) &&
          category.map((element, index) => (
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
                <li></li>
                {element.childrens.length > 0 &&
                  element.childrens.map((subElement, index) => (
                    <li key={index}>
                      <div
                        onClick={() => {
                          location.replace(
                            `/search?q=&category=${subElement.id}`
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
    </>
  );
}

export default MegaMenuMobile;
