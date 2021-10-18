import React from "react";

import styles from "./view.module.scss";
function index(props) {
  return (
    <div className={styles.hol}>
      <div className={styles.container}>
        <h2>نظر سنجی خدمات</h2>
        <div className={styles.skills}>
          <h3 className={styles.name}>ارسال به موقع</h3>
          <div className={styles.rating}>
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
            <input type="radio" name="arive" />
          </div>
        </div>

        <div  className={styles.skills}>
          <h3 className={styles.name}> بسته بندی</h3>
          <div  className={styles.rating}>
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
            <input type="radio" name="box" />
          </div>
        </div>

        <div  className={styles.skills}>
          <h3 className={styles.name}>پشتیبانی</h3>
          <div className={styles.rating}>
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
            <input type="radio" name="posht" />
          </div>
        </div>

        <div className={styles.skills}>
          <h3 className={styles.name}>رضایت از خرید</h3>
          <div className={styles.rating}>
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
            <input type="radio" name="os" />
          </div>
        </div>
      </div>
    </div>

   
  );
}

export default index;
