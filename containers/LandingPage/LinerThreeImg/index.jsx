import React from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";

import styles from "./LinerThreeImg.module.scss";

function LinerThreeImg({}) {
  return (
    <>
      <div className={styles.topImage}>
        <img src="/image/slide/slidB.jpg" alt="" />
      </div>
      <aside className={styles.section}>
        <a
          href=""
          data-observed="0"
          target="_blank"
          
          title="خرید بیشتر، سود بیشتر"
          className={styles.one}
        >
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/8d925b4e17718129b798977572737220ca424b42_1631900612.jpg?x-oss-process=image/quality,q_80"
            loading="lazy"
            alt="خرید بیشتر، سود بیشتر"
          />
        </a>
        <a
          href=""
          data-observed="0"
          target="_blank"
          
          title="پارتنرشیپ - گلرنگ"
          className={styles.two}
        >
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4dd9049df412b548053a07d94fb0e655b3b8be98_1632921627.jpg?x-oss-process=image/quality,q_80"
            loading="lazy"
            alt="پارتنرشیپ - گلرنگ"
          />
        </a>
      </aside>
    </>
  );
}

export default LinerThreeImg;
