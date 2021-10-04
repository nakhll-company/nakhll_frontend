import React from "react";
import Image from "next/image";

// styles
import styles from "./faile.module.scss";

import Assistent from "zaravand-assistent-number";
const _asist = new Assistent();

const failed = ({ code }) => {
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
          <h3 className={styles.text}>پرداخت ناموفق.</h3>
          <h4 className={styles.text_sub}>
            {" "}
            شماره سفارش : {_asist.PSeparator(`${code}`)}{" "}
          </h4>
          <h5 className={styles.text_sub_last}>
            چنانچه طی این فرایند مبلغی از حساب شما کسر شده است ، طی{" "}
            {_asist.PSeparator(72)} ساعت آینده به حساب شما باز خواهد گشت.
          </h5>

          <h5 className={styles.text_sub_last_Sup}>
            پشتیبانی :{" "}
            <a
              style={{ textAlign: "left" }}
              href="tel://034-32476561"
              className="d-inline-block"
              style={{ letterSpacing: "5px" }}
            >
              {_asist.number(`034-32476561`)}
            </a>
          </h5>
        </div>
      </div>
    </>
  );
};

export default failed;

// function server side
export async function getServerSideProps(context) {
  console.log("context.query :>> ", context.query);
  return {
    props: {
      id: context.params.id,
      code: context.query.code || null,
    },
  };
}
