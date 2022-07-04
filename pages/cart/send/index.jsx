import React from "react";
// node libraries
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
// components
import Number from "../../../components/number";
import ShopLayout from "../../../components/shopLayout";
import CustomAccordionSend from "../../../components/custom/customAccordionSend";
// methods
import { getSendWayList } from "../../../api/cart";
// style
import st from "./send.module.scss";
import AppButton from "../../../components/AppButton";

function Send() {
  const router = useRouter();
  const [invoice, setInvoice] = useState({});
  const [ListItems, setListItems] = useState([]);
  const [loaderButton, setLoaderButton] = useState(false);

  useEffect(() => {
    getSendWayList(setListItems, setInvoice);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={`col-12 col-lg-5 ${st.wrapper}`}>
        <header className={st.header}>
          <Link href={`/cart/address`}>
            <a className={st.header_back_link}>
              <i className="fas fa-arrow-right px-2"></i>
              بازگشت
            </a>
          </Link>
          <h2 className={st.header_title}>انتخاب روش ارسال</h2>
        </header>
        <section className={st.body_address}>
          <div className={st.address_head}>
            <span>روش ارسال محصولات :</span>
            <span className={st.explain_price}>
              مجموع هزینه :<span> </span>
              <span>
                <Number
                  num={
                    invoice.logistic_details &&
                    invoice.logistic_details.total_price / 10
                  }
                />
              </span>
              <span> تومان </span>
            </span>
          </div>
          {ListItems.map((el, index) => (
            <Fragment key={index}>
              <CustomAccordionSend
                title={` حجره ${el.shop_name}`}
                item={`Send_${index}_acor`}
                close={true}
                logisticPrice={el.price}
                unitType={el.logistic_units[0].unit_type}
                logisticUnits={el.logistic_units}
              >
                {Object.values(el.logistic_units).map((ef, index) => (
                  <Fragment key={index}>
                    <div style={{ background: "#fff", padding: "10px 15px" }}>
                      <div style={{ marginTop: "20px" }}>
                        <span style={{ color: "#000" }}>روش : </span>
                        <span style={{ color: "#224E82", fontWeight: "bold" }}>
                          {ef.unit_name}
                        </span>
                      </div>
                      <div className={st.liner}></div>
                      <div className={st.wrap_one_product}>
                        {ef.products.map((product, index) => (
                          <div
                            style={{
                              height: "60px",
                              width: "60px",
                              borderRadius: "5px",
                              overflow: "hidden",
                              marginLeft: "15px",
                            }}
                            key={index}
                          >
                            <Image
                              src={product.image}
                              layout="responsive"
                              height={60}
                              width={60}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </CustomAccordionSend>
            </Fragment>
          ))}

          <AppButton
            loader={loaderButton}
            title="ادامه"
            onClick={() => {
              setLoaderButton(true);
              router.push(`/cart/payment`);
            }}
          />
        </section>
      </div>
    </>
  );
}

export default Send;

Send.Layout = ShopLayout;
