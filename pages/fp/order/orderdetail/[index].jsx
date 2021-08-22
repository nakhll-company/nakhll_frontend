// node libraries
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
// methods
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
// components
import MyLayout from "../../../../components/layout/Layout";
import useViewport from "../../../../components/viewPort";
// sass
import styles from "../../../../styles/pages/order/orderdetail.module.scss";

// FORM
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import OrderDetailDesktop from "../../../../containers/orderdetail/desktop";
import OrderDetailMobile from "../../../../containers/orderdetail/mobile";
import { toast } from "react-toastify";
// for persian number
import Assistent from "zaravand-assistent-number";

const _asist = new Assistent();
export const getServerSideProps = ({ params }) => {
  // fetch
  return {
    props: {
      id: params.index,
    },
  };
};

// details: "Wait for other shops to confirm"
// POST:
// {
//     "barcode": "BARCODE_HERE"
// }
function HomePage({ id }) {
  const [IsLoading, setIsLoading] = useState(false);
  const [showMessage, setshowMessage] = useState(0);
  const VALIDATION_SCHEMA = yup.object().shape({
    codeRahgiri: yup
      .number()
      .typeError("فقط عدد مجاز است.")
      .required("کد رهگیری الزامی می باشد."),
  });
  const { width } = useViewport();
  const breakpoint = 620;

  const [data, setdata] = useState({});
  const [isShow, setisShow] = useState(false);
  const [btnOk, setbtnOk] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [configOrder, setconfigOrder] = useState(false);
  const [codeRahgiri, setcodeRahgiri] = useState("");

  useEffect(() => {
    const _handleRequestApi = async (id) => {
      let params = { factor_id: id };
      let loadData = null;
      let dataUrl = "/app/api/v1/get-factor-details/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );
      if (response.status === 200) {
        setdata(response.data);
      }
      setisShow(true);
    };
    _handleRequestApi(id);
  }, []);

  const confirmedFactor = () => {
    const _handleRequestApi = async (id) => {
      let params = {};
      let loadData = null;
      let dataUrl = `/app/api/v1/factor/change-status/confirmed/${id}/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "PUT",
        dataUrl,
        true,
        params
      );
      if (response.status === 200) {
        setconfigOrder(response.data);
      }
      setisShow(true);
      setbtnOk(!btnOk);

      if (response.status === 200) {
        setconfigOrder(true);
      }
    };
    _handleRequestApi(id);
  };

  const SendRahgiriCode = () => {
    const sendData = {
      barcode: codeRahgiri,
    };
    const _handleRequestApi = async (id) => {
      let params = {};
      let loadData = sendData;
      let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "POST",
        dataUrl,
        true,
        params
      );
      // setconfigOrder(response);
      // setisShow(true);
      // setbtnOk(!btnOk);

      // if (response.details === "Done") {
      //   setconfigOrder(true);
      // }
    };
    _handleRequestApi(id);
  };

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
                      <h3
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        {data.order_status === "2" && "در انتظار تحویل به پست"}
                        {data.order_status === "3" &&
                          btnOk &&
                          "در انتظار تایید"}
                        {data.order_status === "3" &&
                          !btnOk &&
                          "در انتظار تحویل به پست"}

                        {data.order_status === "5" && "سفارش ارسال شده است"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={styles.contentD}>
                  <div className={styles.order_status_allD}>
                    {/* تایید سفارش */}

                    <div className={styles.order_status_oneLevel}>
                      {/* منتظر بررسی */}
                      {data.order_status === "3" && btnOk && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "3" && !btnOk && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {/* سفارش در حال اماده سازی */}
                      {data.order_status === "2" && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {/* سفارش ارسال شده است */}
                      {data.order_status === "5" && (
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
                        {/* <h4  style={{ fontSize: "14px" }} style={{ color: "#000" }}>22 ساعت 10 دقیقه</h4> */}
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
                      {data.order_status === "2" && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "3" && btnOk && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "3" && !btnOk && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "5" && (
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
                          تحویل مرسوله به پست
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
                      {data.order_status === "0" ? (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      ) : (
                        <div className={styles.place_icon}>
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
                        {/* <h4  style={{ fontSize: "14px" }} style={{ color: "#000" }}>29/04/1400</h4> */}
                      </div>
                    </div>
                  </div>

                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@‌  Buttons  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

                  {/*  منتظر بررسی */}
                  {data.order_status === "3" && btnOk && (
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

                  {data.order_status === "3" && !btnOk && (
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
                          const _handleRequestApi = async (id) => {
                            try {
                              let params = {};
                              let loadData = sendData;
                              let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
                              let response = await ApiRegister().apiRequest(
                                loadData,
                                "POST",
                                dataUrl,
                                true,
                                params
                              );
                              // setconfigOrder(response);
                              // setisShow(true);
                              // setbtnOk(!btnOk);

                              // if (response.details === "Done") {
                              //   setconfigOrder(true);
                              // }

                              if (response.status === 200) {
                                setshowMessage(1);
                                setIsLoading(false);
                              }
                            } catch (e) {
                              let masage = e.response.data.barcode[0];
                              {
                                masage &&
                                  toast.error(masage, {
                                    position: "top-center",
                                    closeOnClick: true,
                                  });
                              }

                              setshowMessage(2);
                              setIsLoading(false);
                            }
                          };

                          _handleRequestApi(id);
                        }}
                      >
                        {({ values, errors, touched }) => (
                          <Form>
                            <div className={styles.ButtonsGridD}>
                              <div className={styles.order_statusD_code}>
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
                                        fontSize: "15px",
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

                  {/* سفارش در حال اماده سازی */}
                  {data.order_status === "2" && (
                    <>
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          codeRahgiri: "",
                        }}
                        validationSchema={VALIDATION_SCHEMA}
                        onSubmit={async (data) => {
                          const sendData = {
                            barcode: data.codeRahgiri,
                          };
                          const _handleRequestApi = async (id) => {
                            try {
                              let params = {};
                              let loadData = sendData;
                              let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
                              let response = await ApiRegister().apiRequest(
                                loadData,
                                "POST",
                                dataUrl,
                                true,
                                params
                              );

                              if (response.status === 200) {
                                setshowMessage(1);
                                setIsLoading(false);
                              }
                            } catch (e) {
                              setshowMessage(2);
                              setIsLoading(false);
                            }
                          };
                          _handleRequestApi(id);
                        }}
                      >
                        {({ values, errors, touched }) => (
                          <Form>
                            <div className={styles.ButtonsGridD}>
                              <div className={styles.order_statusD_code}>
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
                                      در حال بروزرسانی ...
                                    </h3>
                                  </div>
                                )}
                                {showMessage == 1 && (
                                  <div>
                                    <h3
                                      style={{
                                        marginTop: "15px",
                                        color: "green",
                                        fontSize: "14px",
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

                  {/* سفارش تحویل داده شده است */}
                  {data.order_status === "0"}

                  {/* Buttons 2 */}
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
                    <h4 style={{ fontSize: "14px" }}> نام مشتری</h4>
                    <h3 style={{ marginTop: "5px", fontSize: "15px" }}>
                      {`${data.profile && data.profile.user.first_name}  ${
                        data.profile && data.profile.user.last_name
                      }`}
                    </h3>
                  </div>
                  {/* <div className={styles.post_informationD_content}>
      <h4> style={{ fontSize: "14px" }} نام گیرنده</h4>
      <h3 className={styles.post_information_h3}>محمدرضا محمودی</h3>
    </div> */}
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> موبایل :</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {_asist.number(data.profile.mobile_number)}
                    </h3>
                  </div>
                  <div></div>
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> آدرس</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {_asist.number(
                        `${data.state} |  ${data.big_city}  |  ${data.address}`
                      )}
                    </h3>
                  </div>
                  <div className={styles.post_informationD_content}>
                    <h4 style={{ fontSize: "14px" }}> کد پستی</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {_asist.number(data.zip_code)}
                    </h3>
                  </div>
                  {/* <div className={styles.post_informationD_content}>
      <h4> style={{ fontSize: "14px" }} پلاک -واحد</h4>
      <h3 className={styles.post_information_h3}>23</h3>
    </div> */}
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
                    <h4 style={{ fontSize: "14px" }}> تاریخ ثبت سفارش</h4>
                    <h4 style={{ direction: "ltr", fontSize: "14px" }}>
                      {_asist.number(data.jalali_order_date)}
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
      <h4> style={{ fontSize: "14px" }} مهلت ارسال کالا</h4>
      <h4> style={{ fontSize: "14px" }} 1400/04/22</h4>
    </div> */}
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px" }}> روش ارسال</h4>
                    <h4 style={{ fontSize: "14px" }}> پست پیشتاز</h4>
                  </div>
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px" }}>
                      {" "}
                      هزینه ارسال پرداخت شده
                    </h4>
                    <h4 style={{ fontSize: "14px" }}>
                      {" "}
                      {_asist.PSeparator(data.post_price / 10)}
                      <span style={{ marginRight: "10px" }}>هزار تومان</span>
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
      <h4> style={{ fontSize: "14px" }} کد رهگیری</h4>
      <h4> style={{ fontSize: "14px" }} 029860006300331500076119</h4>
    </div> */}
                </div>
              </div>

              {/* کالاهای خریداری شده */}
              {/* TODO here work */}
              {/* <div style={{ fontSize: "20px" }}>
      <BootstrapTable
        keyField="id"
        data={datai}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div> */}
              <div className={styles.purchased_good}>
                <h1
                  style={{ fontSize: "18px", margin: "0px" }}
                  className={styles.header}
                >
                  کالاهای خریداری شده
                </h1>
                <hr />
                {data.factor_post &&
                  data.factor_post.map((e, index) => {
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
                              src={e.product.image_thumbnail_url}
                              alt="Picture of the author"
                              // layout="fill"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className={styles.row}>
                            <h3
                              style={{ marginRight: "15px", fontSize: "15px" }}
                            >
                              {_asist.number(e.product.title)}
                            </h3>
                          </div>

                          <div style={{ width: "40px" }}>
                            <h4 style={{ color: "#364254", fontSize: "14px" }}>
                              {_asist.number(e.product_count)}
                              <span style={{ marginRight: "10px" }}>عدد</span>
                            </h4>
                          </div>
                          <div style={{ width: "94px", display: "flex" }}>
                            <h4 style={{ color: "#364254", fontSize: "14px" }}>
                              {_asist.PSeparator(e.product.price / 10)}{" "}
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
                              <h4 style={{ fontSize: "14px" }}>
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
                                {_asist.PSeparator(e.get_total_item_price / 10)}
                                +{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                            {/* <div className={styles.good_three_content}>
            <h4> style={{ fontSize: "14px" }}  هزینه ارسال</h4>
            <h4  style={{ fontSize: "14px" }} style={{ color: "#089319", fontWeight: "bold" }}>
              12.000+{" "}
              <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div> */}
                            {e.product.old_price !== 0 && (
                              <>
                                <div
                                  className={styles.good_three_content}
                                  style={{ marginBottom: "30px" }}
                                >
                                  <h4 style={{ fontSize: "14px" }}>
                                    {" "}
                                    تخفیف محصول
                                  </h4>
                                  <h4
                                    style={{
                                      color: "#D14343",
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {_asist.PSeparator(
                                      (e.product.old_price - e.product.price) /
                                        10
                                    )}
                                    -{" "}
                                    <span style={{ color: "#5E7488" }}>
                                      تومان
                                    </span>
                                  </h4>
                                </div>
                              </>
                            )}
                            {/* <div
            className={styles.good_three_content}
            style={{ marginBottom: "30px" }}
          >
            <h4> style={{ fontSize: "14px" }} تخفیف ارسال</h4>
            <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
              200,000-{" "}
              <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div> */}
                            {/* <div
            className={styles.good_three_content}
            style={{ marginBottom: "30px" }}
          >
            <h4> style={{ fontSize: "14px" }} استرداد</h4>
            <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
              0- <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div> */}
                            {/* <div
            className={styles.good_three_content}
            style={{ marginBottom: "30px" }}
          >
            <h4> style={{ fontSize: "14px" }} کارمزد</h4>
            <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
              370,656-{" "}
              <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div> */}
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
                    <h4 style={{ fontSize: "14px" }}> مجموع قیمت محصولات</h4>
                    <h4
                      style={{
                        color: "#089319",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {_asist.PSeparator(data.total_user_price / 10)}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4>
                  </div>
                  <div className={styles.final_invoice_content}>
                    {/* <h4> style={{ fontSize: "14px" }} مجموع هزینه ارسال</h4>
                    <h4  style={{ fontSize: "14px" }} style={{ color: "#089319", fontWeight: "bold" }}>
                      {data.post_details && data.post_details.post_price / 10}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4> */}
                  </div>
                  {/* <div
          className={styles.final_invoice_content}
          style={{ marginBottom: "30px" }}
        >
          <h4> style={{ fontSize: "14px" }} کارمزد</h4>
          <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
            12.000- <span style={{ color: "#5E7488" }}>تومان</span>
          </h4>
        </div> */}
                </div>
                <hr />
                {/* <div className={styles.final_invoice_content_sub}>
        <h3 style={{ color: "#364254" }}>مبلغ قابل تسویه</h3>
        <h4  style={{ fontSize: "14px" }} style={{ color: "#089319", fontWeight: "bold" }}>
          12.000+ <span style={{ color: "#5E7488" }}>تومان</span>
        </h4>
      </div> */}
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
                        {data.order_status === "2" && "در انتظار تحویل به پست"}
                        {data.order_status === "3" &&
                          btnOk &&
                          "در انتظار تایید"}
                        {data.order_status === "3" &&
                          !btnOk &&
                          "در انتظار تحویل به پست"}

                        {data.order_status === "5" && "سفارش ارسال شده است"}
                      </h3>
                    </div>
                  </div>
                  <div className={styles.order_status_all}>
                    {/* تایید سفارش */}

                    <div className={styles.order_status_oneLevel}>
                      {/* منتظر بررسی */}
                      {data.order_status === "3" && btnOk && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "3" && !btnOk && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {/* سفارش در حال اماده سازی */}
                      {data.order_status === "2" && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {/* سفارش ارسال شده است */}
                      {data.order_status === "5" && (
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
                      {data.order_status === "2" && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "3" && btnOk && (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "3" && !btnOk && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-truck "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "5" && (
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
                          تحویل مرسوله به پست
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
                      {data.order_status === "0" ? (
                        <div className={styles.place_icon}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-box"
                          ></span>
                        </div>
                      ) : (
                        <div className={styles.place_icon}>
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
                  {data.order_status === "3" && btnOk && (
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

                  {data.order_status === "3" && !btnOk && (
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
                          const _handleRequestApi = async (id) => {
                            try {
                              let params = {};
                              let loadData = sendData;
                              let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
                              let response = await ApiRegister().apiRequest(
                                loadData,
                                "POST",
                                dataUrl,
                                true,
                                params
                              );
                              // setconfigOrder(response);
                              // setisShow(true);
                              // setbtnOk(!btnOk);

                              // if (response.details === "Done") {
                              //   setconfigOrder(true);
                              // }

                              if (response.status === 200) {
                                setshowMessage(1);
                                setIsLoading(false);
                                setbtnOk(!btnOk);
                              }
                            } catch (err) {
                              let masage = err.response.data.barcode[0];
                              {
                                masage &&
                                  toast.error(masage, {
                                    position: "top-center",
                                    closeOnClick: true,
                                  });
                              }
                              setshowMessage(2);
                              setIsLoading(false);
                            }
                          };
                          _handleRequestApi(id);
                        }}
                      >
                        {({ values, errors, touched }) => (
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

                  {/* سفارش در حال اماده سازی */}
                  {data.order_status === "2" && (
                    <>
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          codeRahgiri: "",
                        }}
                        validationSchema={VALIDATION_SCHEMA}
                        onSubmit={async (data) => {
                          const sendData = {
                            barcode: data.codeRahgiri,
                          };
                          const _handleRequestApi = async (id) => {
                            try {
                              let params = {};
                              let loadData = sendData;
                              let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
                              let response = await ApiRegister().apiRequest(
                                loadData,
                                "POST",
                                dataUrl,
                                true,
                                params
                              );

                              if (response.status === 200) {
                                setshowMessage(1);
                                setIsLoading(false);
                              }
                            } catch (err) {
                              setshowMessage(2);
                              setIsLoading(false);
                            }
                          };
                          _handleRequestApi(id);
                        }}
                      >
                        {({ values, errors, touched }) => (
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
                                      در حال بروزرسانی ...
                                    </h3>
                                  </div>
                                )}
                                {showMessage == 1 && (
                                  <div>
                                    <h3
                                      style={{
                                        marginTop: "15px",
                                        color: "green",
                                        fontSize: "14px",
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

                  {/* سفارش تحویل داده شده است */}
                  {data.order_status === "0"}

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
                    <h4 style={{ fontSize: "14px" }}>نام مشتری</h4>
                    <h3 style={{ marginTop: "5px", fontSize: "15px" }}>
                      {`${data.profile.user.first_name}  ${data.profile.user.last_name}`}
                    </h3>
                  </div>
                  {/* <div className={styles.post_information_content}>
      <h4> style={{ fontSize: "14px" }} نام گیرنده</h4>
      <h3 className={styles.post_information_h3}>محمدرضا محمودی</h3>
    </div> */}
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> موبایل :</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {_asist.number(data.profile.mobile_number)}
                    </h3>
                  </div>
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> آدرس</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {_asist.number(
                        `${data.state} |  ${data.big_city}  |  ${data.address}`
                      )}
                    </h3>
                  </div>
                  <div className={styles.post_information_content}>
                    <h4 style={{ fontSize: "14px" }}> کد پستی</h4>
                    <h3
                      style={{ fontSize: "15px" }}
                      className={styles.post_information_h3}
                    >
                      {_asist.number(data.zip_code)}
                    </h3>
                  </div>
                  {/* <div className={styles.post_information_content}>
      <h4> style={{ fontSize: "14px" }} پلاک -واحد</h4>
      <h3 className={styles.post_information_h3}>23</h3>
    </div> */}
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
                      {_asist.number(data.jalali_order_date)}
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
      <h4> style={{ fontSize: "14px" }} مهلت ارسال کالا</h4>
      <h4> style={{ fontSize: "14px" }} 1400/04/22</h4>
    </div> */}
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px" }}> روش ارسال</h4>
                    <h4 style={{ fontSize: "14px" }}> پست پیشتاز</h4>
                  </div>
                  <div className={styles.post_details_content}>
                    <h4 style={{ fontSize: "14px" }}>
                      {" "}
                      هزینه ارسال پرداخت شده
                    </h4>
                    <h4 style={{ fontSize: "14px" }}>
                      {" "}
                      {_asist.PSeparator(data.post_price / 10)}{" "}
                      <span> تومان</span>
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
      <h4> style={{ fontSize: "14px" }} کد رهگیری</h4>
      <h4> style={{ fontSize: "14px" }} 029860006300331500076119</h4>
    </div> */}
                </div>
              </div>

              {/* کالاهای خریداری شده */}
              {true && (
                <div className={styles.purchased_good}>
                  <h1
                    style={{ fontSize: "18px", margin: "0px" }}
                    className={styles.header}
                  >
                    کالاهای خریداری شده
                  </h1>
                  <hr />

                  {data.factor_post.map((e, index) => {
                    return (
                      <div
                        key={index}
                        className={styles.purchased_good_content}
                      >
                        <div className={styles.purchased_good_one}>
                          <Image
                            src={`${e.product.image_thumbnail_url}`}
                            width={45}
                            height={45}
                          />
                          <h3 style={{ marginRight: "15px", fontSize: "15px" }}>
                            {_asist.number(e.product.title)}
                          </h3>
                        </div>
                        <div
                          className={styles.purchased_good_two}
                          style={{ marginTop: "16px" }}
                        >
                          <div style={{ display: "flex" }}>
                            <h4 style={{ fontSize: "14px" }}>قیمت :</h4>
                            <h4 style={{ color: "#364254", fontSize: "14px" }}>
                              {_asist.PSeparator(e.product.price / 10)}{" "}
                              <span style={{ color: "#5E7488" }}>تومان</span>
                            </h4>
                          </div>
                          <div>
                            <h4 style={{ color: "#364254", fontSize: "14px" }}>
                              {_asist.number(e.product_count)} <span>عدد</span>
                            </h4>
                          </div>
                        </div>
                        {isOpen && (
                          <div className={styles.purchased_good_three}>
                            <div className={styles.good_three_content}>
                              <h4 style={{ fontSize: "14px" }}>
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
                                {_asist.PSeparator(e.get_total_item_price / 10)}
                                +{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                            {/* <div className={styles.good_three_content}>
              <h4> style={{ fontSize: "14px" }}  هزینه ارسال</h4>
              <h4  style={{ fontSize: "14px" }} style={{ color: "#089319", fontWeight: "bold" }}>
                12.000+{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                            {e.product.old_price !== 0 && (
                              <div
                                className={styles.good_three_content}
                                style={{ marginBottom: "30px" }}
                              >
                                <h4 style={{ fontSize: "14px" }}>
                                  {" "}
                                  تخفیف محصول
                                </h4>
                                <h4
                                  style={{
                                    color: "#D14343",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                  }}
                                >
                                  {_asist.PSeparator(
                                    (e.product.old_price - e.product.price) / 10
                                  )}
                                  <span style={{ color: "#5E7488" }}>
                                    تومان
                                  </span>
                                </h4>
                              </div>
                            )}
                            {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4> style={{ fontSize: "14px" }} تخفیف ارسال</h4>
              <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
                200,000-{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                            {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4> style={{ fontSize: "14px" }} استرداد</h4>
              <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
                0- <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                            {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4> style={{ fontSize: "14px" }} کارمزد</h4>
              <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
                370,656-{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
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
                    );
                  })}
                </div>
              )}

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
                    <h4 style={{ fontSize: "14px" }}> مجموع قیمت محصولات</h4>
                    <h4
                      style={{
                        color: "#089319",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {_asist.PSeparator(data.total_user_price / 10)}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4>
                  </div>
                  <div className={styles.final_invoice_content}>
                    {/* <h4> style={{ fontSize: "14px" }} مجموع هزینه ارسال</h4>
                    <h4  style={{ fontSize: "14px" }} style={{ color: "#089319", fontWeight: "bold" }}>
                      {data.post_details.post_price}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4> */}
                  </div>
                  {/* <div
          className={styles.final_invoice_content}
          style={{ marginBottom: "30px" }}
        >
          <h4> style={{ fontSize: "14px" }} کارمزد</h4>
          <h4  style={{ fontSize: "14px" }} style={{ color: "#D14343", fontWeight: "bold" }}>
            12.000- <span style={{ color: "#5E7488" }}>تومان</span>
          </h4>
        </div> */}
                </div>
                <hr />
                {/* <div className={styles.final_invoice_content_sub}>
        <h3 style={{ color: "#364254" }}>مبلغ قابل تسویه</h3>
        <h4  style={{ fontSize: "14px" }} style={{ color: "#089319", fontWeight: "bold" }}>
          12.000+ <span style={{ color: "#5E7488" }}>تومان</span>
        </h4>
      </div> */}
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
