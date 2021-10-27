import React from "react";
import Sm_HeroSlides from "../../../components/SampelComponents/HeroSlides";
import Sm_LinerFourImg from "../../../components/SampelComponents/Sm_LinerFourImg";
import Sm_LinerOneImg from "../../../components/SampelComponents/Sm_LinerOneImg";
import Sm_LinerProducts from "../../../components/SampelComponents/Sm_LinerProducts";
import Sm_LinerThreeImg from "../../../components/SampelComponents/Sm_LinerThreeImg";
import Sm_LinerTwoImg from "../../../components/SampelComponents/Sm_LinerTwoImg";
import styles from "./ListComponent.module.scss";

function ListComponent({ _handel_add_component }) {
  return (
    <>
      <div className={styles.parent}>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(<Sm_HeroSlides />,  1)}
        >
          <Sm_HeroSlides />
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(<Sm_LinerOneImg />,  2)}
        >
          <Sm_LinerOneImg />
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(<Sm_LinerTwoImg />,  3)}
        >
          <Sm_LinerTwoImg />
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() =>
            _handel_add_component(<Sm_LinerThreeImg />, 4)
          }
        >
          <Sm_LinerThreeImg />
          <div className={styles.cover}></div>
        </div>

        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(<Sm_LinerFourImg />,  5)}
        >
          <Sm_LinerFourImg />
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() =>
            _handel_add_component(<Sm_LinerProducts />,  6)
          }
        >
          <Sm_LinerProducts />
          <div className={styles.cover}></div>
        </div>

        <div style={{ marginTop: "30px" }}></div>
      </div>
    </>
  );
}

export default ListComponent;
