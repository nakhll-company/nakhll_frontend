import React from "react";
import Image from "next/image";

// styles
import styles from "../../../styles/pages/cart/faile/faile.module.scss";

const faile = () => {
  
  return (
    <>
      

      <div className={styles.container} >
        <div className={styles.content} >
          <Image
            src="/image/faile.webp"
            alt="Picture of the author"
            width={400}
            height={400}
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
          />
          <h3 className={styles.text}>پرداخت ناموفق.</h3>
          
        </div>
      </div>
    </>
  );
};

export default faile;
