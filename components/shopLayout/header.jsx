// node libraries
import React from "react";
// import { connect } from 'react-redux';
import Link from "next/link";
import Image from "next/image";
// methods
// import { mapState } from './methods/mapState';
// scss
import styles from "../../styles/components/shopLayout/header.module.scss";

const Header = ({ count }) => {
  return (
    <div style={{ display: "none" }} className={`${styles.header} row`}>
      <div className={`col-2 ${styles.logo}`}>
        <Image src="/header/logo.jpg" alt="logo" width="200" height="50" />
      </div>
      <div className={`col-7 d-flex flex-column ${styles.searchBar}`}>
        <div className={`${styles.links}`}>
          <Link href="/">نخل شما</Link>
          <Link href="/">فروش ویژه</Link>
          <Link href="/">پیشنهادهای شگفت انگیز</Link>
          <Link href="/">سوالات متداول</Link>
          <Link href="/">بخش پشتیبانی</Link>
        </div>
        <div className={`${styles.wrapperSearch}`}>
          <div className={`${styles.search}`}>
            <input
              id="search"
              type="text"
              placeholder="جستجو در کالاها"
              onKeyPress={(event) => {
                if (event.code === "NumpadEnter") {
                  document.querySelector("button[type=button]").click();
                }
              }}
            />
            <button
              type="button"
              onClick={() => {
                let inputSearch = document.getElementById("search").value;
                
              }}
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
      <div className={`col-1 ${styles.user}`}>
        <Image src="/header/user.png" alt="user" width="50" height="50" />
        <div className="d-flex flex-column">
          <Link href="/">ورود</Link>
          <Link href="/">عضویت</Link>
        </div>
      </div>
      <div className={`${styles.divider}`}></div>
      <div className={`col-1 ${styles.bag}`}>
        <Image src="/header/bag.png" alt="bag" width="50" height="50" />
        <span>{count}</span>
      </div>
    </div>
  );
};
// export
export default Header;
