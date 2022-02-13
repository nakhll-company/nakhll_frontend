// node libraries
import Link from "next/link";
import Image from "next/image";
import Confetti from "react-confetti";
import Assistent from "zaravand-assistent-number";
import React, { useEffect, useRef, useState } from "react";
// components
import ShopLayout from "../../../../components/shopLayout";
// styles
import styles from "./success.module.scss";

const _asist = new Assistent();

const Success = ({ code }) => {

  const confettiRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  return (
    <>
      <div className={styles.container} ref={confettiRef}>
        <div className={styles.content}>
          <Image
            src="/image/sucsses.webp"
            alt="Picture of the author"
            width={400}
            height={400}
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
          />
          <div className={styles.hol_cont}>
            <h3 className={styles.text}>عملیات خرید با موفقیت انجام شد.</h3>
            <h3 className={styles.tex_sub}>
              شماره سفارش : {_asist.number(`${code}`)}
            </h3>
            <Link href="/profile">
              <a className="w-50">
                <button className={`btn ${styles.btn_Buy} p-2 rounded-pill  `}>
                  پیگیری سفارش
                </button>
              </a>
            </Link>
          </div>
          <Confetti width={width} height={height} />
        </div>
      </div>
    </>
  );
};

export default Success;

// function server side
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
      code: context.query.code || null,
    },
  };
}

Success.Layout = ShopLayout;
