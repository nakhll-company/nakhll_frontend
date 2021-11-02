import React from "react";

import Sm_HeroSlides_Fix from "../../../components/SampelFixed/HeroSlides";
import Sm_LinerFourImg_Fix from "../../../components/SampelFixed/Sm_LinerFourImg";
import Sm_LinerOneImg_Fix from "../../../components/SampelFixed/Sm_LinerOneImg";
import Sm_LinerProducts_Fix from "../../../components/SampelFixed/Sm_LinerProducts";
import Sm_LinerThreeImg_Fix from "../../../components/SampelFixed/Sm_LinerThreeImg";
import Sm_LinerTwoImg_Fix from "../../../components/SampelFixed/Sm_LinerTwoImg";

import styles from "./ListComponent.module.scss";

function ListComponent({ _handel_add_component }) {
  return (
    <>
      <div className={styles.parent}>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(1)}
        >
          <Sm_HeroSlides_Fix />
          {/* <span>کامپوننت اسلایدر</span> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(2)}
        >
          <Sm_LinerOneImg_Fix />
          {/* <span>بنر تکی</span> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(3)}
        >
          <Sm_LinerTwoImg_Fix />
          {/* <span>بنر دوتایی</span> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(4)}
        >
          <Sm_LinerThreeImg_Fix />
          {/* <span>بنر سه تایی</span> */}
          <div className={styles.cover}></div>
        </div>

        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(5)}
        >
          {/* <span style={{ color: "red" }}>بنر چهارتایی</span> */}
          <Sm_LinerFourImg_Fix />
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(6)}
        >
          <Sm_LinerProducts_Fix />
          {/* <span>لیست</span> */}
          <div className={styles.cover}></div>
        </div>

        <div style={{ marginTop: "30px" }}></div>
      </div>
    </>
  );
}

export default ListComponent;
