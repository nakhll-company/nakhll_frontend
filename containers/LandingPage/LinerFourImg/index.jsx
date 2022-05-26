import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LinerFourImg.module.scss";

function LinerFourImg() {
  return (
    <>
      <article className={styles.section_desktop}>
        <div className={styles.section_desktop_hol}>
          <div className={styles.inner}></div>
          <aside className={styles.container}>
            <Link href="https://www.digikala.com/landings/pakvash/?&amp;promo_name=%D8%AE%D8%B1%DB%8C%D8%AF+%D8%A8%DB%8C%D8%B4%D8%AA%D8%B1%D8%8C+%D8%B3%D9%88%D8%AF+%D8%A8%DB%8C%D8%B4%D8%AA%D8%B1&amp;promo_position=home_top&amp;promo_creative=82998&amp;bCode=82998">
              <a title="خرید بیشتر، سود بیشتر">
                <div className="c-adplacement__sponsored_box">
                  <Image
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/8d925b4e17718129b798977572737220ca424b42_1631900612.jpg?x-oss-process=image/quality,q_80"
                    alt="خرید بیشتر، سود بیشتر"
                    loading="lazy"
                    layout="fill"
                  />
                </div>
              </a>
            </Link>
            <Link href="https://www.digikala.com/product-list/plp_8906037/?&amp;promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE+-+%DA%AF%D9%84%D8%B1%D9%86%DA%AF&amp;promo_position=home_top&amp;promo_creative=84058&amp;bCode=84058">
              <a
                className="c-adplacement__item js-banner-impression-adro"
                target="_blank"
                title="پارتنرشیپ - گلرنگ"
              >
                <div className="c-adplacement__sponsored_box">
                  <Image
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4dd9049df412b548053a07d94fb0e655b3b8be98_1632921627.jpg?x-oss-process=image/quality,q_80"
                    alt="پارتنرشیپ - گلرنگ"
                    loading="lazy"
                    layout="fill"
                  />
                </div>
              </a>
            </Link>
            <Link href="https://www.digikala.com/ahmadtea-brand/tea/?&amp;promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE+-+%DA%86%D8%A7%DB%8C+%D8%A7%D8%AD%D9%85%D8%AF&amp;promo_position=home_top&amp;promo_creative=84044&amp;bCode=84044">
              <a
                className="c-adplacement__item js-banner-impression-adro"
                target="_blank"
                title="پارتنرشیپ - چای احمد"
              >
                <div className="c-adplacement__sponsored_box">
                  <Image
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1c0d7ffe6730878cb4299b8d60d84a49c328b3c3_1632918979.jpg?x-oss-process=image/quality,q_80"
                    alt="پارتنرشیپ - چای احمد"
                    loading="lazy"
                    layout="fill"
                  />
                </div>
              </a>
            </Link>
            <Link href="https://www.digikala.com/search/category-body-shampoo/ave/?has_selling_stock=1&amp;pageno=1&amp;sortby=1&amp;promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE+-+%D8%A7%D9%88%D9%87&amp;promo_position=home_top&amp;promo_creative=84051&amp;bCode=84051">
              <a
                className="c-adplacement__item js-banner-impression-adro"
                target="_blank"
                title="پارتنرشیپ - اوه"
              >
                <div className="c-adplacement__sponsored_box">
                  <Image
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d237e59558cd21b3c31787a476b4034396c52ac3_1632920799.jpg?x-oss-process=image/quality,q_80"
                    alt="پارتنرشیپ - اوه"
                    loading="lazy"
                    layout="fill"
                  />
                </div>
              </a>
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}

export default LinerFourImg;
