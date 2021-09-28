import React from "react";
import styles from "./header2.module.scss";
import Head from "next/head";
import Image from "next/image";
function Header2(props) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossorigin="anonymous"
        ></script>
      </Head>
      <header>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/image/LOGO_500.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <h1>بازار نخل</h1>
          </div>

          <div className={styles.search}>
            <input type="text" placeholder=" جست و جو در بازار نخل" />
            <i className="fas fa-search"></i>
          </div>
          <div className={styles.icons}>
            <i className={`fas fa-user-circle ${styles.icon}`}></i>
            <i className={`fab fa-opencart ${styles.icon}`}></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header2;
