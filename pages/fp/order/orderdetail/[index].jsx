// node libraries
import React from "react";
import * as yup from "yup";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import { Fragment, useEffect, useState } from "react";
// components
import useViewport from "../../../../components/viewPort";
import MyLayout from "../../../../components/layout/Layout";
// methods
import { authhttp } from "../../../../services/callApi/api";
import { diviedNumber } from "../../../../utils/diviedNumber";
import { successMessage } from "../../../../utils/toastifyMessage";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
// sass
import styles from "../../../../styles/pages/order/orderdetail.module.scss";

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
                        jsonAddress.receiver_mobile_number}
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
                      {data.address_json && jsonAddress.zip_code}
                    </h3>
                  </div>
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> کد رهگیری</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.items.length > 0 && data.items[0].barcode}
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
                      {data.created_date_jalali}
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
                      <>
                        <div className="m-1">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-bold text-purple-900 bg-purple-100 rounded-lg text-md hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <div className="flex grow m-[30px] justify-between items-center">
                                    <h3 className="font-bold ">{index + 1}</h3>
                                    <div className="block w-16 h-16 rounded-md shadow-md">
                                      <Image
                                        src={e.image_thumbnail || "/"}
                                        alt="Picture of the author"
                                        className="rounded-md "
                                        layout="responsive"
                                        width={50}
                                        height={50}
                                      />
                                    </div>
                                    <div className="w-[235px]">
                                      <h3 className="mr-4 ">{e.name}</h3>
                                    </div>
                                    <div className="w-10">
                                      <h4 className="font-bold text-gray-800">
                                        {e.count}
                                        <span className="mr-1 text-sm ">
                                          عدد
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="flex w-24">
                                      <h4>
                                        {diviedNumber(
                                          e.price_with_discount / 10
                                        )}{" "}
                                        <span className="mr-1 text-xs">
                                          تومان
                                        </span>
                                      </h4>
                                    </div>
                                  </div>
                                  <ChevronUpIcon
                                    className={`transition duration-300 ease-out    ${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-purple-500 my-auto`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 font-bold leading-10 text-gray-700 text-md">
                                  <div>
                                    <div className="flex justify-between mt-6">
                                      <h4 className="text-base font-bold">
                                        {" "}
                                        مجموع هزینه محصول
                                      </h4>
                                      <h4 className="text-[#089319] font-bold text-base">
                                        {diviedNumber(
                                          e.price_with_discount / 10
                                        )}
                                        +{" "}
                                        <span className="text-gray-600 text-[14px] mr-1">
                                          تومان
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="flex justify-between mt-6 mb-6">
                                      <h4 className="text-base font-bold">
                                        {" "}
                                        تخفیف محصول
                                      </h4>
                                      <h4 className="text-[#D14343] font-bold text-base">
                                        {diviedNumber(
                                          (e.price_without_discount -
                                            e.price_with_discount) /
                                            10
                                        )}

                                        <span className="text-gray-600 text-[14px] mr-1">
                                          تومان
                                        </span>
                                      </h4>
                                    </div>
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </>
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
                      {diviedNumber(data.final_price / 10)}+{" "}
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
                        diviedNumber(jsonAddress.receiver_mobile_number)}
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
                      {data.address_json && jsonAddress.zip_code}
                    </h3>
                  </div>
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> کد رهگیری</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {data.items.length > 0 && data.items[0].barcode}
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
                      {data.created_date_jalali}
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
                      <>
                        <div className="m-1">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex justify-between w-full p-1 font-bold text-purple-900 bg-purple-100 rounded-lg text-md hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <div className="flex grow m-[15px] justify-between items-center">
                                    <h3 className="ml-1 font-bold ">
                                      {index + 1}
                                    </h3>
                                    <div className="block w-16 h-16 rounded-md shadow-md">
                                      <Image
                                        src={e.image_thumbnail || "/"}
                                        alt="Picture of the author"
                                        className="rounded-md "
                                        layout="responsive"
                                        width={50}
                                        height={50}
                                      />
                                    </div>
                                    <div className="w-[235px]">
                                      <h3 className="mr-4 ">{e.name}</h3>
                                    </div>
                                    <div className="w-10">
                                      <h4 className="font-bold text-gray-800">
                                        {e.count}
                                        <span className="mr-1 text-sm ">
                                          عدد
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="flex w-24">
                                      <h4>
                                        {diviedNumber(
                                          e.price_with_discount / 10
                                        )}{" "}
                                        <span className="mr-1 text-xs">
                                          تومان
                                        </span>
                                      </h4>
                                    </div>
                                  </div>
                                  <ChevronUpIcon
                                    className={`transition duration-300 ease-out    ${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-purple-500 my-auto`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 font-bold leading-10 text-gray-700 text-md">
                                  <div>
                                    <div className="flex justify-between mt-6">
                                      <h4 className="text-base font-bold">
                                        {" "}
                                        مجموع هزینه محصول
                                      </h4>
                                      <h4 className="text-[#089319] font-bold text-base">
                                        {diviedNumber(
                                          e.price_with_discount / 10
                                        )}
                                        +{" "}
                                        <span className="text-gray-600 text-[14px] mr-1">
                                          تومان
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="flex justify-between mt-6 mb-6">
                                      <h4 className="text-base font-bold">
                                        {" "}
                                        تخفیف محصول
                                      </h4>
                                      <h4 className="text-[#D14343] font-bold text-base">
                                        {diviedNumber(
                                          (e.price_without_discount -
                                            e.price_with_discount) /
                                            10
                                        )}

                                        <span className="text-gray-600 text-[14px] mr-1">
                                          تومان
                                        </span>
                                      </h4>
                                    </div>
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </>
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
                      {diviedNumber(data.final_price / 10)}+{" "}
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
