import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// scss
import styles from "../../../styles/pages/cart/payment/payment.module.scss";
// methods
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import ShopLayout from "../../../components/shopLayout";

const _asist = new Assistent();

export default function Cart() {
  const router = useRouter();
  const { invoice_id } = router.query;

  const [msgCoupon, setMsgCoupon] = useState([]);
  const [isLoadInvoice, setIsLoadInvoice] = useState(true);
  const [listInvoice, setListInvoice] = useState([]);
  const [logisticPrice, setLogisticPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const [addressReceiver, setAddressReceiver] = useState({});
  const [resultCoupon, setResultCoupon] = useState(null);
  const [logisticErrors, setLogisticErrors] = useState([]);

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
      setListInvoice(data.items);
      setLogisticPrice(data.logistic_price);
      setTotalPrice(data.invoice_price_with_discount);
      setFinalPrice(data.final_price);
      setAddressReceiver(data.address);
      setResultCoupon(data.coupons_total_price);
      setMsgCoupon(data.coupon_usages);
      setLogisticErrors(data.logistic_errors);
      setIsLoadInvoice(false);
    }
  };

  const _addCoupon = async (e) => {
    e.preventDefault();
    let valueCoupon = e.target[0].value;
    if (valueCoupon) {
      setIsLoadInvoice(true);
      try {
        let response = await ApiRegister().apiRequest(
          { coupon: valueCoupon },
          "PATCH",
          `/accounting_new/api/invoice/${invoice_id}/set_coupon/`,
          true,
          {}
        );
        let data = response.data;
        if (response.status === 200) {
          if (data.result) {
            await _getListInvoice();
            setIsLoadInvoice(false);
          } else {
            setIsLoadInvoice(false);
          }
          // setIsLoadInvoice(false);
        } else {
          setIsLoadInvoice(false);
        }
      } catch (e) {}
    }
  };

  const _deleteCoupon = async (coupon) => {
    setIsLoadInvoice(true);
    let response = await ApiRegister().apiRequest(
      { coupon },
      "PATCH",
      `/accounting_new/api/invoice/${invoice_id}/unset_coupon/`,
      true,
      {}
    );
    if (response.status === 200) {
      await _getListInvoice();
      setIsLoadInvoice(false);
    }
  };

  const invoicePay = async () => {
    try {
      setIsLoadInvoice(true);
      let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/accounting_new/api/invoice/${invoice_id}/pay/`,
        true,
        {}
      );
      if (response.status === 200) {
        let data = await response.data;
        await router.push(data.url);
      }
    } catch (error) {}
  };

  return (
    <div className={styles.steps_wrapper}>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
      </Head>

      <div className="col-12 col-lg-5 px-0 mb-3">
        <div className="box box-sm bg-white" style={{ minHeight: "14rem" }}>
          <div
            className="cart-head d-flex align-items-center py-3 px-3 text-right mb-0 bg-gray-100"
            style={{ borderRadius: "5px 5px 0px 0px" }}
          >
            <Link href={`/cart/send?invoice_id=${invoice_id}`}>
              <a
                className="font-size-8 text-muted"
                style={{ flexBasis: "43.33%" }}
              >
                <i
                  className="bi fas fa-arrow-right"
                  style={{ marginLeft: "10px", fontSize: "12.8px" }}
                ></i>
                بازگشت
              </a>
            </Link>

            <h2
              style={{
                fontSize: "20px",
                marginBottom: "0.5rem",
                fontWeight: "500",
                lineHeight: "1.7",
              }}
              className="font-weight-bold  m-0"
            >
              {" "}
              پرداخت{" "}
            </h2>
          </div>
          <div className={styles.steps_body}>
            {/* کد تخفیف */}
            <div>
              <h3
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  lineHeight: "1.7",
                }}
                className="font-size1 text-dark"
              >
                کد تخفیف
              </h3>
              <form
                style={{ borderRadius: "5px" }}
                className={`input-group ${styles.input_group__box}`}
                onSubmit={(e) => _addCoupon(e)}
              >
                <input
                  type="text"
                  name="coupon-code"
                  placeholder="اگر کد تخفیف دارید، وارد کنید"
                  className={`form-control ${styles.boxShadowNot}`}
                />

                <div className="input-group-append">
                  <button
                    type="submit"
                    className={`btn rounded-pill px-3 ${styles.btnCheckCoupon}`}
                    style={{
                      backgroundColor: "rgb(27,62,104)",
                      color: "#fff",
                    }}
                  >
                    بررسی
                  </button>
                </div>
                <div className={`${styles.input_group_bg} rounded-pill`}></div>
              </form>
              {msgCoupon &&
                msgCoupon.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-success bg-white font-size-9 py-2 pr-3 mt-3 rounded d-flex flex-wrap justify-content-between align-items-center"
                    >
                      <span className=" text-success ml-3">
                        کوپن شما با مبلغ {item.price_applied / 10} تومان برای
                        شما فعال گردید.
                      </span>
                      {/* <strong className="text-success ml-3">61,000 تومان</strong> */}
                      <button
                        onClick={() => _deleteCoupon(item.coupon)}
                        className="btn btn-link text-danger btn-sm mr-auto"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  );
                })}
            </div>

            {/* استفاده از اعتبار*/}
            {/* <div className="mt-3">
                            <div className="use-credit-box">
                                <div className="toggle-btn">
                                    <label data-v-25adc6c0 className="vue-js-switch">
                                        <input data-v-25adc6c0 type="checkbox" className="v-switch-input" style={{ opacity: 0, position: "absolute", width: "1px", height: "1px" }} />
                                        <div
                                            data-v-25adc6c0
                                            className="v-switch-core"
                                            style={{
                                                width: 45,
                                                height: 25,
                                                backgroundColor: "rgb(191, 203, 217)",
                                                borderRadius: 13
                                            }}
                                        >
                                            <div
                                                data-v-25adc6c0
                                                className="v-switch-button"
                                                style={{
                                                    width: 19,
                                                    height: 19,
                                                    transition: "transform 300ms ease 0s",
                                                    transform: "translate3d(3px, 3px, 0px)",
                                                    background: "rgb(255, 255, 255)"
                                                }}
                                            />
                                        </div>
                                    </label>
                                    <span className="toggle-btn-text pointer">استفاده از اعتبار</span>
                                </div>
                                <span className="text-success mr-auto">اعتبار شما 11,000 تومان</span>
                            </div>
                        </div> */}

            <h3
              style={{
                marginBottom: "0.5rem",
                fontWeight: "500",
                lineHeight: "1.7",
              }}
              className="font-size1 text-dark mt-3"
            >
              فاکتور سفارش
            </h3>

            <div className="mt-3 position-relative">
              {/**/}
              {isLoadInvoice && (
                <div className={styles.loading_box}>
                  <div
                    className={`${styles.spinner} ${styles.spinner__tiny}`}
                  ></div>
                </div>
              )}
              {listInvoice.length > 0 &&
                listInvoice.map((itemProduct, index) => {
                  return (
                    <div
                      key={index}
                      className="font-size-sm border-bottom pb-3 mt-3"
                    >
                      <div className="title font-weight-500">
                        از حجره {itemProduct.shop_name}
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className={`${styles.picItemInvoice}`}>
                          <Link
                            href={`/shop/${itemProduct.shop_slug}/product/${itemProduct.slug}`}
                          >
                            <a>
                              <img
                                src={itemProduct.image}
                                alt={itemProduct.name}
                              />
                            </a>
                          </Link>
                        </div>
                        <div
                          className="mr-3"
                          style={{ minWidth: "1%", marginRight: "1rem" }}
                        >
                          <Link
                            href={`/shop/${itemProduct.shop_slug}//product/${itemProduct.slug}`}
                          >
                            <a className="link-body">{itemProduct.name}</a>
                          </Link>
                          <div className="mt-2">{itemProduct.count}عدد</div>
                        </div>
                        <div
                          className="mr-auto"
                          style={{ marginRight: "auto" }}
                        >
                          {_asist.PSeparator(
                            itemProduct.price_without_discount / 10
                          )}{" "}
                          تومان
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="font-size-sm border-bottom py-3">
                <div className="d-flex py-1">
                  <span>جمع بهای سفارش:</span>
                  <span className="mr-auto" style={{ marginRight: "auto" }}>
                    {_asist.PSeparator(totalPrice / 10)} تومان
                  </span>
                </div>
                <div className="d-flex py-1">
                  <span>هزینه ارسال:</span>{" "}
                  <span className="mr-auto" style={{ marginRight: "auto" }}>
                    {_asist.PSeparator(logisticPrice / 10)} تومان
                  </span>
                </div>
                {resultCoupon !== 0 && (
                  <div className="d-flex py-1 text-danger">
                    <span>تخفیف قیمت محصولات (-) :</span>
                    <span className="mr-auto" style={{ marginRight: "auto" }}>
                      {_asist.PSeparator(resultCoupon / 10)} تومان
                    </span>
                  </div>
                )}
                {/**/} {/**/}
                <div className="d-flex py-1 font-weight-500 ">
                  <span style={{ color: "rgb(27,62,104)" }}>
                    مبلغ قابل پرداخت:
                  </span>
                  <span
                    className="mr-auto"
                    style={{ color: "rgb(27,62,104)", marginRight: "auto" }}
                  >
                    {_asist.PSeparator(finalPrice / 10)} تومان
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 p-3 border rounded font-size-sm my-3 line-height-normal">
              <div className="mx-auto" style={{ textAlign: "center" }}>
                تمامی بسته‌های پستی به آقا/خانم
                <strong>
                  {" "}
                  {addressReceiver && addressReceiver.receiver_full_name}{" "}
                </strong>
                به آدرس
                <strong className="font-size-8">
                  {" "}
                  {addressReceiver && addressReceiver.address}{" "}
                </strong>
                تحویل داده می‌شوند.
              </div>
              <div className="text-left line-height-1 mb-5 mb-md-0">
                <Link
                  href={`/cart/address/update/${addressReceiver.id}?prev=payment&invoice_id=${invoice_id}`}
                  className="font-size-8 link-body"
                >
                  ویرایش
                </Link>
              </div>

              {/* <div className="toggle-btn mt-2">
                                <label data-v-25adc6c0 className="vue-js-switch toggled">
                                    <input data-v-25adc6c0 type="checkbox" className="v-switch-input" style={{ opacity: 0, position: "absolute", width: "1px", height: "1px" }} />
                                    <div
                                        data-v-25adc6c0
                                        className="v-switch-core"
                                        style={{
                                            width: 45,
                                            height: 25,
                                            backgroundColor: "rgb(0, 96, 96)",
                                            borderRadius: 13
                                        }}
                                    >
                                        <div
                                            data-v-25adc6c0
                                            className="v-switch-button"
                                            style={{
                                                width: 19,
                                                height: 19,
                                                transition: "transform 300ms ease 0s",
                                                transform: "translate3d(23px, 3px, 0px)",
                                                background: "rgb(255, 255, 255)"
                                            }}
                                        />
                                    </div>
                                </label>
                                <span className="toggle-btn-text pointer">
                                    ارسال شماره من به حجره دار
                                    <div className="text-secondary font-size-9 d-block d-lg-inline-block mr-lg-2">
                                        (برای هماهنگی دریافت سفارش)
                                    </div>
                                </span>
                            </div> */}
            </div>
            {logisticErrors.length > 0 && (
              <div
                style={{
                  border: "1px solid red",
                  color: "red",
                  padding: "10px",
                }}
              >
                {logisticErrors.map((value, index) => (
                  <p key={index}> {value} در محدوده ارسال شما قرار ندارد</p>
                ))}
              </div>
            )}
            <div className="d-none d-md-flex justify-content-between mt-4">
              <span
                className="font-size1  font-weight-bold"
                style={{ color: "rgb(27,62,104)" }}
              >
                مبلغ قابل‌پرداخت:
              </span>
              <span className=" font-size1" style={{ color: "rgb(27,62,104)" }}>
                <strong className="payableAmount splitNumber font-size1-2">
                  {_asist.PSeparator(finalPrice / 10)}
                </strong>
                تومان
              </span>
            </div>

            <div className={`${styles.buttonPayment} mt-3`}>
              <div className="d-md-none mb-2 font-size-sm text-success d-flex">
                <span
                  className="font-weight-bold"
                  style={{ color: "rgb(27,62,104)" }}
                >
                  مبلغ قابل‌پرداخت:
                </span>
                <strong
                  className="mr-auto ml-1"
                  style={{ color: "rgb(27,62,104)" }}
                >
                  {_asist.PSeparator(finalPrice / 10)}
                </strong>
                تومان
              </div>
              <button
                style={{ backgroundColor: "rgb(27,62,104)", color: "#fff" }}
                className={`${styles.cart_button} btn w-100 d-flex justify-content-between align-items-center px-4`}
                onClick={invoicePay}
              >
                <span className="d-inline-block w-100 text-center font-size1">
                  پرداخت آنلاین
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cart.Layout = ShopLayout;
