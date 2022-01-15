import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Enfo.module.scss";

function EnfoLiner({ data, title, profile, name }) {
  console.log("data :>> ", data);
  let campBadge = (
    <>
      <div
        className={styles._product_card_camp_badge}
        type="button"
        style={{ bottom: "30px", left: "30px" }}
      >
        <Link href="/shop/نوبت-مامانه/">
          <a style={{ width: "100px", height: "100px" }}>
            <Image
              layout="fixed"
              height={100}
              width={100}
              src="/image/mahsol.svg"
              alt="camp"
            />
          </a>
        </Link>
      </div>
    </>
  );
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
          {data.shop.in_campaign && campBadge}
          <div className="">
            <img
              className={styles.imgslid}
              src="/image/back.jpg"
              alt="background"
            />
          </div>
          <div className={`${styles.profile} d-none d-md-flex `}>
            <img className={styles.img_profile} src={profile} alt={title} />

            <div className={styles.information}>
              <h1>{title}</h1>
              <h5>{`${name ? name.first_name : ""}  ${
                name ? name.last_name : ""
              }`}</h5>
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
