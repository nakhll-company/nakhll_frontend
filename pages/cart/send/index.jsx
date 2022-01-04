import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Loading from "../../../components/loading";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import st from "./send.module.scss";
import { useEffect, useState } from "react";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import CustomAccordionSend from "../../../components/custom/customAccordionSend";
import Number from "../../../components/number";
import ShopLayout from "../../../components/shopLayout";
function Send() {
  const [ListItems, setListItems] = useState([]);
  const [invoice, setInvoice] = useState({});
  const router = useRouter();
  const { invoice_id } = router.query;

  useEffect(() => {
    invoice_id && _getListInvoice();
  }, [invoice_id]);

  const _getListInvoice = async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "GET",
      `/accounting_new/api/invoice/${invoice_id}/`,
      true,
      {}
    );
    let data = response.data;
    if (response.status === 200) {
      setListItems(response.data.logistic_unit_details);
      setInvoice(response.data);
    }
  };

  return (
    <>
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossOrigin="anonymous"
          />
        </Head>
        <ToastContainer />
        {false ? (
          <div className={`col-12 col-lg-5 py-5 my-2 ${st.wrapper}`}>
            <Loading />
          </div>
        ) : (
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
                <CustomAccordionSend
                  key={index}
                  title={` حجره ${el.shop_name}`}
                  item={`Send_${index}_acor`}
                  close={true}
                  logistic_price={el.price}
                  logistic_units={el.logistic_units}
                >
                  {Object.values(el.logistic_units).map((ef) => (
                    <>
                      <div style={{ background: "#fff", padding: "10px 15px" }}>
                        <div style={{ marginTop: "20px" }}>
                          <span style={{ color: "#000" }}>روش : </span>
                          <span
                            style={{ color: "#224E82", fontWeight: "bold" }}
                          >
                            {ef.name}
                          </span>
                        </div>
                        <div className={st.liner}></div>
                        <div className={st.wrap_one_product}>
                          {ef.products.map((product, index) => (
                            <>
                              <div
                                style={{
                                  height: "60px",
                                  width: "60px",
                                  borderRadius: "5px",

                                  overflow: "hidden",
                                  marginLeft: "15px",
                                }}
                                className=""
                              >
                                <Image
                                  src={product.image}
                                  layout="responsive"
                                  height={60}
                                  width={60}
                                  alt=""
                                />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}

                  {/* <div className={st.liner}></div> */}
                </CustomAccordionSend>
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
        )}
      </>
    </>
  );
}

export default Send;

Send.Layout = ShopLayout;
