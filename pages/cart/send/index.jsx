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
function Send() {
  const [ListItems, setListItems] = useState([]);
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
      setListItems(response.data.items);
      console.log(`response.data`, response.data);
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
                <span>روش ارسال محصول خود را انتخاب نمایید.</span>
                <span className={st.explain_price}>قیمت برحسب تومان می باشد</span>
              </div>

              {ListItems.map((el, index) => (
                <CustomAccordionSend
                  key={index}
                  title={el.shop_name}
                  item={`Send_${index}_acor`}
                  close={true}
                >
                  {[1, 1, 1, 1, 1, 1].map((ef) => (
                    <>
                      <div className={st.wrap_one_product}>
                        <div
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "5px",
                            backgroundColor: "blueviolet",
                            overflow: "hidden",
                          }}
                          className=""
                        >
                          <Image
                            src={el.image}
                            layout="responsive"
                            height={50}
                            width={50}
                            alt=""
                          />
                        </div>
                        <div className={st.select_way}>
                          <select
                            id="select-shop"
                            // onChange={(a) => {
                            //   setselectShop(a.target.value);
                            //   setSlugHojreh(a.target.value);
                            //   getActiveHojreh(a.target.value);
                            //   ForHeader(a);
                            // }}
                          >
                            <option key="ddd" value="dddd">
                              one
                            </option>
                            <option key="ddd" value="dddd">
                              one
                            </option>
                            <option key="ddd" value="dddd">
                              one
                            </option>
                            <option key="ddd" value="dddd">
                              one
                            </option>
                          </select>
                        </div>
                        <div className={st.price}>
                          <Number num="2500000" />
                        </div>
                      </div>
                      <div className={st.liner}></div>
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
