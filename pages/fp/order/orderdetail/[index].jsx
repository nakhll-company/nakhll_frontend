import React from "react";
// node libraries
import * as yup from "yup";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import Assistent from "zaravand-assistent-number";
import { Fragment, useEffect, useState } from "react";
// components
import useViewport from "../../../../components/viewPort";
import MyLayout from "../../../../components/layout/Layout";
// methods
import { successMessage } from "../../../../utils/toastifyMessage";
// sass
import styles from "../../../../styles/pages/order/orderdetail.module.scss";
import { authhttp } from "../../../../services/callApi/api";

const _asist = new Assistent();

export const getServerSideProps = ({ params }) => {
  // fetch
  return {
    props: {
      id: params.index,
    },
  };
};

function HomePage({ id }) {
  const VALIDATION_SCHEMA = yup.object().shape({
    codeRahgiri: yup
      .number()
      .typeError("فقط عدد مجاز است.")
      .required("کد رهگیری الزامی می باشد."),
  });
  const breakpoint = 620;
  const { width } = useViewport();
  const [data, setdata] = useState({});
  const [isShow, setisShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [showMessage, setshowMessage] = useState(0);

  const _handleRequestApi = async (id) => {
    const response = await authhttp.get("/api/v1/get-factor-details/", {
      params: {
        factor_id: id,
      },
    });
    if (response.status === 200) {
      setdata(response.data);
    }
    setisShow(true);
  };

  const confirmedFactor = async () => {
    const response = await authhttp.put(
      `/api/v1/factor/change-status/confirmed/${id}/`
    );
    setisShow(true);
    if (response.status === 200) {
      _handleRequestApi(id);
      successMessage("سفارش با موفقیت تایید شد");
    }
  };

  useEffect(() => {
    _handleRequestApi(id);
  }, [id]);

  let jsonAddress = data.address_json || "{}";
  jsonAddress = JSON.parse(jsonAddress);

  return (
    <>
      {isShow && (
        <>
          {width >= breakpoint ? (
            // showMessage, setshowMessage
            <div className={styles.wrapper}>
              {/* وضعیت سفارش */}
              <div className={styles.order_statusD}>
                <div className={styles.order_statusD_first}>
                  <h3 style={{ display: "inline-block", fontSize: "15px" }}>
                    وضعیت سفارش
                  </h3>
                  <div className={styles.title_status_patD}>
                    <div className={styles.title_status}>
                      <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>
                        {data.status === "wait_store_approv" &&
                          "در انتظار تأیید فروشگاه"}
                        {data.status === "preparing_product" &&
                          "در حال آماده سازی"}
                        {data.status === "wait_customer_approv" &&
                          "در انتظار تأیید مشتری"}
                        {data.status === "wait_store_checkout" &&
                          "در انتظار تسویه با فروشگاه"}
                        {data.status === "completed" && "تکمیل شده"}
                        {data.status === "canceled" && "لغو شده"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={styles.contentD}>
                  <div className={styles.order_status_allD}>
                    {/* تایید سفارش */}
                    <div className={styles.order_status_oneLevel}>
                      {/* منتظر بررسی */}
                      {(data.status === "wait_store_approv" ||
                        data.status === "canceled") && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {(data.status === "preparing_product" ||
                        data.status === "completed") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {(data.status === "wait_customer_approv" ||
                        data.status === "wait_store_checkout") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4 style={{ fontSize: "14px", margin: "0px" }}>
                          {" "}
                          تایید سفارش
                        </h4>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "19px",
                        height: "0px",
                        border: "2px solid #E0E6E9",
                        marginLeft: "15px",
                        marginRight: "15px",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    ></div>
                    {/* تحویل مرسوله به پست */}
                    <div className={styles.order_status_oneLevel}>
                      {(data.status === "wait_store_approv" ||
                        data.status === "canceled") && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.status === "preparing_product" && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {(data.status === "completed" ||
                        data.status === "wait_customer_approv" ||
                        data.status === "wait_store_checkout") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4 style={{ fontSize: "14px", margin: "0px" }}>
                          {" "}
                          تحویل سفارش به پست
                        </h4>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "19px",
                        height: "0px",
                        border: "2px solid #E0E6E9",
                        marginLeft: "15px",
                        marginRight: "15px",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    ></div>
                    {/* تایید مشتری */}
                    <div className={styles.order_status_oneLevel}>
                      {(data.status === "wait_store_approv" ||
                        data.status === "canceled" ||
                        data.status === "preparing_product") && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      )}
                      {data.status === "wait_customer_approv" && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      )}
                      {(data.status === "completed" ||
                        data.status === "wait_store_checkout") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      )}
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4 style={{ fontSize: "14px", margin: "0px" }}>
                          {" "}
                          تایید مشتری
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@‌  Buttons  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                  {/*  منتظر بررسی */}
                  {data.status === "wait_store_approv" && (
                    <div className={styles.order_statusD_button}>
                      <button
                        onClick={() => {
                          confirmedFactor();
                        }}
                        className={`${styles.btn} ${styles.btnSubmit}`}
                      >
                        <h3 style={{ fontSize: "15px" }}>تایید</h3>
                      </button>
                      <button className={`${styles.btn} ${styles.btnProblem}`}>
                        <h3 style={{ fontSize: "12px" }}>ثبت مشکل</h3>
                      </button>
                    </div>
                  )}
                  {data.status === "preparing_product" && (
                    <>
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          codeRahgiri: "",
                        }}
                        validationSchema={VALIDATION_SCHEMA}
                        onSubmit={async (data) => {
                          setshowMessage(0);
                          setIsLoading(true);
                          const sendData = {
                            barcode: data.codeRahgiri,
                          };
                          try {
                            const response = await authhttp.post(
                              `/api/v1/factor/change-status/sent/${id}/`,
                              sendData
                            );
                            if (response.status === 200) {
                              setshowMessage(1);
                              setIsLoading(false);
                              _handleRequestApi(id);
                            }
                          } catch (e) {
                            setshowMessage(2);
                            setIsLoading(false);
                          }
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form>
                            <div className={styles.ButtonsGridD}>
                              <div className={styles.order_statusD_code}>
                                <Field
                                  className={styles.btn_code}
                                  type="input"
                                  name="codeRahgiri"
                                  placeholder="کد رهگیری سفارش"
                                />
                              </div>
                              <div>
                                {" "}
                                {touched.codeRahgiri && errors.codeRahgiri ? (
                                  <small className={styles.error}>
                                    {errors.codeRahgiri}
                                  </small>
                                ) : null}
                                {IsLoading && (
                                  <div
                                    style={{
                                      marginTop: "15px",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div className={styles.loader}>
                                      <Image
                                        src="/image/LOGO_500.png"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                      />
                                    </div>
                                    <h3
                                      className={styles.nameLoding}
                                      style={{
                                        fontSize: "15px",
                                        color: "hsl(211deg 100% 50%)",
                                      }}
                                    >
                                      {" "}
                                      در حال ثبت ...
                                    </h3>
                                  </div>
                                )}
                                {showMessage == 1 && (
                                  <div>
                                    <h3
                                      style={{
                                        fontSize: "14px",
                                        marginTop: "15px",
                                        color: "green",
                                      }}
                                    >
                                      به روز رسانی با موفقیت انجام شد.
                                    </h3>
                                  </div>
                                )}
                                {showMessage == 2 && (
                                  <div>
                                    <h3
                                      style={{
                                        marginTop: "15px",
                                        color: "red",
                                        fontSize: "15px",
                                      }}
                                    >
                                      عملیات به روز رسانی موفقیت آمیز نبود.لطفا
                                      باری دیگر اقدام کنید.
                                    </h3>
                                  </div>
                                )}
                              </div>
                              <div className={styles.order_statusDcod_button}>
                                <button
                                  style={{ cursor: "pointer" }}
                                  className={`${styles.btn} ${styles.btnSubmit}`}
                                  type="submit"
                                >
                                  <h3 style={{ fontSize: "12px" }}>
                                    ثبت کد رهگیری
                                  </h3>
                                </button>
                                <button
                                  className={`${styles.btn} ${styles.btnProblem}`}
                                >
                                  <h3 style={{ fontSize: "12px" }}>ثبت مشکل</h3>
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </>
                  )}

                  {data.order_status === "5" && (
                    <>
                      <div className={styles.ButtonsGridDFinal}>
                        <div className={styles.order_statusD_code}>
                          <input
                            disabled
                            className={styles.btn_code}
                            type="number"
                            style={{ fontSize: "14px" }}
                            placeholder="کد رهگیری ثبت گردید"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* اطلاعات ارسال */}
              <div className={styles.post_informationD}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  اطلاعات ارسال
                </h1>
                <hr />
                <div className={styles.contentinfD}>
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
                      نام مشتری
                    </h4>
                    <h3 style={{ marginTop: "5px", fontSize: "15px" }}>
                      {(data.items.length > 0 && data.items[0].buyer) ||
                        (data.address_json && jsonAddress.receiver_full_name)}
                    </h3>
                  </div>
                  {/* <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> موبایل :</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.address_json &&
                        _asist.number(jsonAddress.receiver_mobile_number)}
                    </h3>
                  </div> */}
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> آدرس</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.address_json &&
                        `${jsonAddress.state}   |    ${jsonAddress.big_city}   |   ${jsonAddress.address}`}
                    </h3>
                  </div>
                  <div></div>
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> کد پستی</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.address_json && _asist.number(jsonAddress.zip_code)}
                    </h3>
                  </div>
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> کد رهگیری</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.items.length > 0 &&
                        _asist.number(data.items[0].barcode)}
                    </h3>
                  </div>
                </div>
              </div>
              {/* جزییات سفارش */}
              <div className={styles.post_details}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  {" "}
                  جزییات سفارش وارسال
                </h1>
                <hr />
                <div className={styles.contentpostD}>
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {" "}
                      تاریخ ثبت سفارش
                    </h4>
                    <h4 style={{ direction: "ltr", fontSize: "14px" }}>
                      {_asist.number(data.created_date_jalali)}
                    </h4>
                  </div>
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {" "}
                      روش ارسال
                    </h4>
                    <h4 style={{ fontSize: "14px" }}> پست پیشتاز</h4>
                  </div>
                </div>
              </div>
              <div className={styles.purchased_good}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  کالاهای خریداری شده
                </h1>
                <hr />
                {data.items.length > 0 &&
                  data.items.map((e, index) => {
                    return (
                      <Fragment key={index}>
                        <div className={styles.purchased_good_contentD}>
                          <h3 style={{ fontSize: "15px" }}>
                            {_asist.number(index + 1)}
                          </h3>
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                            }}
                          >
                            <Image
                              src={e.image_thumbnail || "/"}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className={styles.row}>
                            <h3
                              style={{ marginRight: "15px", fontSize: "15px" }}
                            >
                              {e.name}
                            </h3>
                          </div>

                          <div style={{ width: "40px" }}>
                            <h4 style={{ color: "#364254", fontSize: "14px" }}>
                              {_asist.number(e.count)}
                              <span style={{ marginRight: "10px" }}>عدد</span>
                            </h4>
                          </div>
                          <div style={{ width: "94px", display: "flex" }}>
                            <h4 style={{ color: "#364254", fontSize: "14px" }}>
                              {_asist.PSeparator(e.price_with_discount / 10)}{" "}
                              <span style={{ color: "#5E7488" }}>تومان</span>
                            </h4>
                          </div>

                          <div className={styles.good_four}>
                            <button
                              className={styles.btn}
                              onClick={() => setIsOpen(!isOpen)}
                            >
                              {isOpen ? (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <h3 style={{ fontSize: "15px" }}>
                                      جزییات کمتر
                                    </h3>
                                    <span
                                      style={{
                                        fontSize: "16px",
                                        marginRight: "10px",
                                      }}
                                      className="fas fa-chevron-up"
                                    ></span>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <h3 style={{ fontSize: "15px" }}>
                                      جزییات بیشتر
                                    </h3>
                                    <span
                                      style={{
                                        fontSize: "16px",
                                        marginRight: "10px",
                                      }}
                                      className="fas fa-chevron-down"
                                    ></span>
                                  </div>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                        <div className={styles.lineTable}></div>
                        {isOpen && (
                          <div
                            id={index + 1}
                            className={styles.purchased_good_threeD}
                          >
                            <div className={styles.good_three_content}>
                              <h4
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                              >
                                {" "}
                                مجموع هزینه محصول
                              </h4>
                              <h4
                                style={{
                                  color: "#089319",
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                }}
                              >
                                {_asist.PSeparator(e.price_with_discount / 10)}+{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                            <div
                              className={styles.good_three_content}
                              style={{ marginBottom: "30px" }}
                            >
                              <h4 style={{ fontSize: "14px" }}> تخفیف محصول</h4>
                              <h4
                                style={{
                                  color: "#D14343",
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                }}
                              >
                                {_asist.PSeparator(
                                  (e.price_without_discount -
                                    e.price_with_discount) /
                                    10
                                )}
                                -{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                          </div>
                        )}
                      </Fragment>
                    );
                  })}
              </div>
              {/* فاکتور نهایی */}
              <div className={styles.final_invoice}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  فاکتور نهایی
                </h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.final_invoice_content}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
                      مجموع قیمت محصولات
                    </h4>
                    <h4
                      style={{
                        color: "#089319",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {_asist.PSeparator(data.final_price / 10)}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4>
                  </div>
                  <div className={styles.final_invoice_content}></div>
                </div>
                <hr />
              </div>

              <div style={{ marginTop: "80px" }}></div>
            </div>
          ) : (
            <div className={styles.wrapper}>
              {/* وضعیت سفارش */}
              <div className={styles.order_status}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  وضعیت سفارش
                </h1>
                <hr />
                <div className={styles.content}>
                  <h3
                    style={{
                      paddingTop: "20px",
                      textAlign: "center",
                      fontSize: "15px",
                    }}
                  >
                    وضعیت سفارش
                  </h3>
                  <div className={styles.title_status_pat}>
                    <div className={styles.title_status}>
                      <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>
                        {data.status === "wait_store_approv" &&
                          "در انتظار تأیید فروشگاه"}
                        {data.status === "preparing_product" &&
                          "در حال آماده سازی"}
                        {data.status === "wait_customer_approv" &&
                          "در انتظار تأیید مشتری"}
                        {data.status === "wait_store_checkout" &&
                          "در انتظار تسویه با فروشگاه"}
                        {data.status === "completed" && "تکمیل شده"}
                        {data.status === "canceled" && "لغو شده"}
                      </h3>
                    </div>
                  </div>
                  <div className={styles.order_status_all}>
                    {/* تایید سفارش */}
                    <div className={styles.order_status_oneLevel}>
                      {/* منتظر بررسی */}
                      {(data.status === "wait_store_approv" ||
                        data.status === "canceled") && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {(data.status === "preparing_product" ||
                        data.status === "completed") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {(data.status === "wait_customer_approv" ||
                        data.status === "wait_store_checkout") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4 style={{ fontSize: "14px", margin: "0px" }}>
                          {" "}
                          تایید سفارش
                        </h4>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "1px",
                        height: "20px",
                        border: "1px solid #E0E6E9",
                        marginTop: "8px",
                        marginBottom: "8px",
                        marginRight: "20px",
                      }}
                    ></div>
                    {/* تحویل مرسوله به پست */}
                    <div className={styles.order_status_oneLevel}>
                      {(data.status === "wait_store_approv" ||
                        data.status === "canceled") && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.status === "preparing_product" && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {(data.status === "completed" ||
                        data.status === "wait_customer_approv" ||
                        data.status === "wait_store_checkout") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4 style={{ fontSize: "14px", margin: "0px" }}>
                          {" "}
                          تحویل سفارش به پست
                        </h4>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "1px",
                        height: "20px",
                        border: "1px solid #E0E6E9",
                        marginTop: "8px",
                        marginBottom: "8px",
                        marginRight: "20px",
                      }}
                    ></div>
                    {/* تایید مشتری */}
                    <div className={styles.order_status_oneLevel}>
                      {(data.status === "wait_store_approv" ||
                        data.status === "canceled" ||
                        data.status === "preparing_product") && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      )}
                      {data.status === "wait_customer_approv" && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      )}
                      {(data.status === "completed" ||
                        data.status === "wait_store_checkout") && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      )}
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4 style={{ fontSize: "14px", margin: "0px" }}>
                          {" "}
                          تایید مشتری
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@‌  Buttons  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                  {/*  منتظر بررسی */}
                  {data.status === "wait_store_approv" && (
                    <div className={styles.order_status_button}>
                      <button
                        onClick={() => {
                          confirmedFactor();
                        }}
                        className={`${styles.btn} ${styles.btnSubmit}`}
                      >
                        <h3 style={{ fontSize: "15px" }}>تایید</h3>
                      </button>
                      <button className={`${styles.btn} ${styles.btnProblem}`}>
                        <h3 style={{ fontSize: "15px" }}>ثبت مشکل</h3>
                      </button>
                    </div>
                  )}
                  {data.status === "preparing_product" && (
                    <>
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          codeRahgiri: "",
                        }}
                        validationSchema={VALIDATION_SCHEMA}
                        onSubmit={async (data) => {
                          setshowMessage(0);
                          setIsLoading(true);
                          const sendData = {
                            barcode: data.codeRahgiri,
                          };
                          try {
                            const response = await authhttp.post(
                              `/api/v1/factor/change-status/sent/${id}/`,
                              sendData
                            );

                            if (response.status === 200) {
                              setshowMessage(1);
                              setIsLoading(false);
                              _handleRequestApi(id);
                            }
                          } catch (err) {
                            setshowMessage(2);
                            setIsLoading(false);
                          }
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form>
                            <div className={styles.ButtonsGrid}>
                              <div className={styles.order_status_code}>
                                <Field
                                  className={styles.btn_code}
                                  type="input"
                                  name="codeRahgiri"
                                  placeholder="کد رهگیری مرسوله"
                                />
                              </div>
                              <div>
                                {" "}
                                {touched.codeRahgiri && errors.codeRahgiri ? (
                                  <small className={styles.error}>
                                    {errors.codeRahgiri}
                                  </small>
                                ) : null}
                                {IsLoading && (
                                  <div
                                    style={{
                                      marginTop: "15px",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div className={styles.loader}>
                                      <Image
                                        src="/image/LOGO_500.png"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                      />
                                    </div>
                                    <h3
                                      className={styles.nameLoding}
                                      style={{
                                        fontSize: "15px",
                                        color: "hsl(211deg 100% 50%)",
                                      }}
                                    >
                                      {" "}
                                      در حال ثبت ...
                                    </h3>
                                  </div>
                                )}
                                {showMessage == 1 && (
                                  <div>
                                    <h3
                                      style={{
                                        fontSize: "14px",
                                        marginTop: "15px",
                                        color: "green",
                                      }}
                                    >
                                      به روز رسانی با موفقیت انجام شد.
                                    </h3>
                                  </div>
                                )}
                                {showMessage == 2 && (
                                  <div>
                                    <h3
                                      style={{
                                        marginTop: "15px",
                                        color: "red",
                                        fontSize: "15px",
                                      }}
                                    >
                                      عملیات به روز رسانی موفقیت آمیز نبود.لطفا
                                      باری دیگر اقدام کنید.
                                    </h3>
                                  </div>
                                )}
                              </div>
                              <div className={styles.order_statusDcod_button}>
                                <button
                                  style={{ cursor: "pointer" }}
                                  className={`${styles.btn} ${styles.btnSubmit}`}
                                  type="submit"
                                >
                                  <h3 style={{ fontSize: "12px" }}>
                                    ثبت کد رهگیری
                                  </h3>
                                </button>
                                <button
                                  className={`${styles.btn} ${styles.btnProblem}`}
                                >
                                  <h3 style={{ fontSize: "12px" }}>ثبت مشکل</h3>
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </>
                  )}

                  {data.order_status === "5" && (
                    <>
                      <div className={styles.ButtonsGridDFinal}>
                        <div className={styles.order_status_code}>
                          <input
                            disabled
                            className={styles.btn_code}
                            type="number"
                            style={{ fontSize: "14px" }}
                            placeholder="کد رهگیری ثبت گردید"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {/* Buttons 2 */}
                </div>
              </div>
              {/* اطلاعات ارسال */}
              <div className={styles.post_information}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  اطلاعات ارسال
                </h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
                      نام مشتری
                    </h4>
                    <h3 style={{ marginTop: "5px", fontSize: "15px" }}>
                      {(data.items && data.items[0].buyer) ||
                        (data.address_json && jsonAddress.receiver_full_name)}
                    </h3>
                  </div>
                  {/* <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> موبایل :</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.address_json &&
                        _asist.number(jsonAddress.receiver_mobile_number)}
                    </h3>
                  </div> */}
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> آدرس</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.address_json &&
                        `${jsonAddress.state} |  ${jsonAddress.big_city}  |  ${jsonAddress.address}`}
                    </h3>
                  </div>
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> کد پستی</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.address_json && _asist.number(jsonAddress.zip_code)}
                    </h3>
                  </div>
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> کد رهگیری</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.items.length > 0 &&
                        _asist.number(data.items[0].barcode)}
                    </h3>
                  </div>
                </div>
              </div>

              {/* جزییات سفارش */}

              <div className={styles.post_details}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  {" "}
                  جزییات سفارش وارسال
                </h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px" }}> تاریخ ثبت سفارش</h4>
                    <h4 style={{ direction: "ltr", fontSize: "14px" }}>
                      {_asist.number(data.created_date_jalali)}
                    </h4>
                  </div>
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px" }}> روش ارسال</h4>
                    <h4 style={{ fontSize: "14px" }}> پست پیشتاز</h4>
                  </div>
                </div>
              </div>
              {/* کالاهای خریداری شده */}
              <div className={styles.purchased_good}>
                <h1
                  className={styles.header}
                  style={{ fontSize: "18px", margin: "0px" }}
                >
                  کالاهای خریداری شده
                </h1>
                <hr />

                {data.items.length > 0 &&
                  data.items.map((e, index) => {
                    return (
                      <div
                        key={index}
                        className={styles.purchased_good_content}
                      >
                        <div className={styles.purchased_good_one}>
                          <Image
                            src={`${e.image_thumbnail || "/"}`}
                            width={45}
                            height={45}
                            alt=""
                          />
                          <h3
                            style={{
                              marginRight: "15px",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            {_asist.number(e.name)}
                          </h3>
                        </div>
                        <div
                          className={styles.purchased_good_two}
                          style={{ marginTop: "16px" }}
                        >
                          <div style={{ display: "flex" }}>
                            <h4>قیمت :</h4>
                            <h4 style={{ color: "#364254" }}>
                              {_asist.PSeparator(e.price_with_discount / 10)}{" "}
                              <span style={{ color: "#5E7488" }}>تومان</span>
                            </h4>
                          </div>
                          <div>
                            <h4 style={{ color: "#364254" }}>
                              {_asist.number(e.count)}{" "}
                              <span style={{ fontSize: "14px" }}>عدد</span>
                            </h4>
                          </div>
                        </div>
                        {isOpen && (
                          <div className={styles.purchased_good_three}>
                            <div className={styles.good_three_content}>
                              <h4
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                              >
                                مجموع هزینه محصول
                              </h4>
                              <h4
                                style={{ color: "#089319", fontWeight: "bold" }}
                              >
                                {_asist.PSeparator(e.price_with_discount / 10)}+{" "}
                                <span
                                  style={{ color: "#5E7488", fontSize: "14px" }}
                                >
                                  تومان
                                </span>
                              </h4>
                            </div>
                            <div
                              className={styles.good_three_content}
                              style={{ marginBottom: "30px" }}
                            >
                              <h4>تخفیف محصول</h4>
                              <h4
                                style={{
                                  color: "#D14343",
                                  fontWeight: "bold",
                                }}
                              >
                                {_asist.PSeparator(
                                  (e.price_without_discount -
                                    e.price_with_discount) /
                                    10
                                )}
                                <span
                                  style={{ color: "#5E7488", fontSize: "14px" }}
                                >
                                  تومان
                                </span>
                              </h4>
                            </div>
                          </div>
                        )}
                        <div className={styles.good_four}>
                          <button
                            className={styles.btn}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {isOpen ? (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3 style={{ fontSize: "15px", margin: "0" }}>
                                    جزییات کمتر
                                  </h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-up"
                                  ></span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3 style={{ fontSize: "15px", margin: "0" }}>
                                    جزییات بیشتر
                                  </h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-down"
                                  ></span>
                                </div>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* فاکتور نهایی */}

              <div className={styles.final_invoice}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  فاکتور نهایی
                </h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.final_invoice_content}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
                      مجموع قیمت محصولات
                    </h4>
                    <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                      {_asist.PSeparator(data.final_price / 10)}+{" "}
                      <span style={{ color: "#5E7488", fontSize: "14px" }}>
                        تومان
                      </span>
                    </h4>
                  </div>
                  <div className={styles.final_invoice_content}></div>
                </div>
                <hr />
              </div>
              <div style={{ marginTop: "80px" }}></div>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default HomePage;
HomePage.Layout = MyLayout;
