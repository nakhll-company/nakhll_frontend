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
            <input  type="text" placeholder="جست و جو" />
          </div>
          
        </div>
      </header>
    </>
  );
}

export default Header2;
