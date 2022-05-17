// node libraries
import React from "react";
import Image from "next/image";

// components
import ShopLayout from "../../../../components/shopLayout";
// styles
import styles from "./faile.module.scss";

const Failed = ({ code }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            src="/image/faile.webp"
            alt="Picture of the author"
            width={400}
            height={400}
          />
          <h3 className={styles.text}>پرداخت ناموفق</h3>
          <h4 className={styles.text_sub}> شماره سفارش : {`${code}`} </h4>
          <h5 className={styles.text_sub_last}>
            چنانچه طی این فرایند مبلغی از حساب شما کسر شده است ، طی 72 ساعت
            آینده به حساب شما باز خواهد گشت.
          </h5>

          <h5 className={styles.text_sub_last_Sup}>
            پشتیبانی :{" "}
            <a
              style={{ textAlign: "left", letterSpacing: "5px" }}
              href="tel://034-32476561"
              className="d-inline-block"
            >
              {`034-32476561`}
            </a>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Failed;

// function server side
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
      code: context.query.code || null,
    },
  };
}

Failed.Layout = ShopLayout;
