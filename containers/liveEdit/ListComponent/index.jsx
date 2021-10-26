import React from "react";
import Sm_HeroSlides from "../../../components/SampelComponents/HeroSlides";
import Sm_LinerFourImg from "../../../components/SampelComponents/Sm_LinerFourImg";
import Sm_LinerOneImg from "../../../components/SampelComponents/Sm_LinerOneImg";
import Sm_LinerProducts from "../../../components/SampelComponents/Sm_LinerProducts";
import Sm_LinerThreeImg from "../../../components/SampelComponents/Sm_LinerThreeImg";
import Sm_LinerTwoImg from "../../../components/SampelComponents/Sm_LinerTwoImg";
import styles from "./ListComponent.module.scss";


function ListComponent(props) {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.holderItems}>
          <Sm_LinerThreeImg />
          <div className={styles.cover}></div>
        </div>
        <div className={styles.holderItems}>
          <Sm_HeroSlides />
          <div className={styles.cover}></div>
        </div>
        <div className={styles.holderItems}>
          <Sm_LinerFourImg />
          <div className={styles.cover}></div>
        </div>
        <div className={styles.holderItems}>
          <Sm_LinerProducts />
          <div className={styles.cover}></div>
        </div>
        <div className={styles.holderItems}>
          <Sm_LinerTwoImg />
          <div className={styles.cover}></div>
        </div>
        <div className={styles.holderItems}>
          <Sm_LinerOneImg />
          <div className={styles.cover}></div>
        </div>
        <div className={styles.holderItems}>
          <Sm_LinerOneImg />
          <div className={styles.cover}></div>
        </div>
        <div style={{ marginTop: "30px" }}></div>
      </div>
    </>
  );
}

export default ListComponent;
