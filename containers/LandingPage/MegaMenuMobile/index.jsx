// node libraries
import React from "react";
import Head from "next/head";
// methods
import { handelAccording } from "./methods/handelAccording";
// style
import styles from "./MegaMenuMobile.module.scss";
import { useRouter } from "next/router";

function MegaMenuMobile({ category }) {
  const router = useRouter();
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
                  handelAccording(`according_${index}`, `icon_${index}`)
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
                          router.push(`/search?q=&category=${subElement.id}`);
                          document.getElementById("SlideMenu").style.right =
                            "-100%";
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
