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

function Send() {

  const router = useRouter();
  const { invoice_id } = router.query;
  const [invoice, setInvoice] = useState({});
  const [ListItems, setListItems] = useState([]);

  useEffect(() => {
    invoice_id && getSendWayList(invoice_id, setListItems, setInvoice);
  }, [invoice_id]);

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
          <Link href={`/cart/address?invoice_id=${invoice_id}`}>
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
                <Number num={invoice.logistic_price / 10} />
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
                logistic_price={el.price}
                unit_type={el.logistic_units[0].unit_type}
                logistic_units={el.logistic_units}
              >
                {Object.values(el.logistic_units).map((ef, index) => (
                  <Fragment key={index}>
                    <div
                      style={{ background: "#fff", padding: "10px 15px" }}
                    >
                      <div style={{ marginTop: "20px" }}>
                        <span style={{ color: "#000" }}>روش : </span>
                        <span
                          style={{ color: "#224E82", fontWeight: "bold" }}
                        >
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
                            className=""
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
          <button
            onClick={() =>
              router.push(`/cart/payment?invoice_id=${invoice_id}`)
            }
            className={`${st.button_submit} w-100`}
          >
            ادامه
          </button>
        </section>
      </div>
    </>
  );
}

export default Send;

Send.Layout = ShopLayout;
