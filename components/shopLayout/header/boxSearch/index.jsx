import { useEffect, useState } from "react";
import { ApiReference } from "../../../../Api";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import { useRouter } from "next/router";
import styles from "./boxSearch.module.scss";

function BoxSearch({ list }) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.headHojreh}>حجره های نخل</div>
        {list.map((el, index) => (
          <div
            key={index}
            className={styles.itemHojreh}
            onClick={() => {
              location.replace(`/shop/${el.slug}`);
            }}
          >
            <span>حجره </span>
            <span className={styles.nameHojreh}>{el.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default BoxSearch;
