import React from "react";
import Link from "next/link";
import styles from "./Enfo.module.scss";

function EnfoLiner({ title, profile, name }) {
  return (
    <>
      <div className={styles.topHoj}>
        <div className={styles.liner}>
          <span>
            <Link href="/">خانه</Link>
          </span>
          <i className="fas fa-angle-left"></i>
          <span> حجره ها</span>
          <i className="fas fa-angle-left"></i>
          <span>{title}</span>
        </div>

        <div className={styles.slide}>
          <div className="">
            <img className={styles.imgslid} src="/image/back.jpg" alt="" />
          </div>
          <div className={`${styles.profile} d-none d-md-flex `}>
            <img className={styles.img_profile} src={profile} alt="" />
            <div className={styles.information}>
              <h1>{title}</h1>
              <h5>{`${name.first_name}  ${name.last_name}`}</h5>
            </div>
            {/* <i className="fas fa-share-alt-square"></i> */}
          </div>

          <div className={`${styles.profile_mobile}  d-md-none`}>
            <div className={styles.pater}>
              <img className={styles.img_profile} src={profile} alt="" />
              <div className={styles.information}>
                <div className={styles.pater_title}>
                  <h1>{title}</h1>
                </div>
                <h5>{title}</h5>
              </div>
            </div>
            {/* <i className="fas fa-share-alt-square"></i> */}
          </div>
        </div>
        <div className={styles.title}>
          <span> محصولات حجره</span>
        </div>
        <div className={styles.sub_line}></div>
      </div>
    </>
  );
}

export default EnfoLiner;
