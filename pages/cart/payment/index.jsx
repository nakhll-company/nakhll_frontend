import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// components
import ShopLayout from "../../../components/shopLayout";
// methods
import { _getListInvoice } from "../../../api/cart";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// scss
import styles from "./payment.module.scss";
import AppButton from "../../../components/AppButton";

const _asist = new Assistent();

export default function Cart() {
  const router = useRouter();
  const [msgCoupon, setMsgCoupon] = useState([]);
  const [cartPrice, setCartPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [listInvoice, setListInvoice] = useState([]);
  const [resultCoupon, setResultCoupon] = useState(null);
  const [isLoadInvoice, setIsLoadInvoice] = useState(true);
  const [logisticPrice, setLogisticPrice] = useState(null);
  const [logisticErrors, setLogisticErrors] = useState([]);
  const [addressReceiver, setAddressReceiver] = useState({});
  const [loaderButton, setLoaderButton] = useState(false);

  useEffect(() => {
    _getListInvoice(
      setMsgCoupon,
      setListInvoice,
      setLogisticPrice,
      setTotalPrice,
      setCartPrice,
      setAddressReceiver,
      setResultCoupon,
      setLogisticErrors,
      setIsLoadInvoice
    );
  }, []);

  const _addCoupon = async (e) => {
    e.preventDefault();
    let valueCoupon = e.target[0].value;
    if (valueCoupon) {
      setIsLoadInvoice(true);
      try {
        let response = await ApiRegister().apiRequest(
          { coupon: valueCoupon },
          "PATCH",
          `/api/v1/cart/set_coupon/`,
          true,
          {}
        );
        let data = response.data;
        if (response.status === 200) {
          if (data.result) {
            let response = await ApiRegister().apiRequest(
              null,
              "GET",
              `/api/v1/cart/me/`,
              true,
              {}
            );
            let data = await response.data;
            if (response.status === 200) {
              setListInvoice(data.ordered_items);
              setLogisticPrice(data.logistic_details.total_price);
              setTotalPrice(data.total_price);
              setCartPrice(data.cart_price);
              setAddressReceiver(data.address);
              setResultCoupon(0); // data.coupons_total_price
              setMsgCoupon([]); // data.coupon_usages
              setLogisticErrors(data.logistic_details.errors);
              setIsLoadInvoice(false);
            }
            setIsLoadInvoice(false);
          } else {
            setIsLoadInvoice(false);
          }
        } else {
          setIsLoadInvoice(false);
        }
      } catch (e) {
        return false;
      }
    }
  };

  const _deleteCoupon = async (coupon) => {
    setIsLoadInvoice(true);
    let response = await ApiRegister().apiRequest(
      { coupon },
      "PATCH",
      `/api/v1/cart/unset_coupon/`,
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
      setLoaderButton(true);
      setIsLoadInvoice(true);
      let response = await ApiRegister().apiRequest(
        null,
        "POST",
        `/api/v1/cart/pay/`,
        true,
        {}
      );
      if (response.status === 200) {
        let data = await response.data;
        await router.push(data.url);
        setLoaderButton(false);
      } else {
        setLoaderButton(false);
        setIsLoadInvoice(false);
      }
    } catch (error) {
      setLoaderButton(false);
      setIsLoadInvoice(false);
      return false;
    }
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
            <Link href={`/cart/send`}>
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
                        از حجره {itemProduct.product.FK_Shop.title}
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className={`${styles.picItemInvoice}`}>
                          <Link
                            href={`/shop/${itemProduct.product.FK_Shop.slug}/product/${itemProduct.product.Slug}`}
                          >
                            <a>
                              <Image
                                src={itemProduct.product.Image_medium_url}
                                width={100}
                                height={100}
                                alt={itemProduct.product.Title}
                              />
                            </a>
                          </Link>
                        </div>
                        <div
                          className="mr-3"
                          style={{ minWidth: "1%", marginRight: "1rem" }}
                        >
                          <Link
                            href={`/shop/${itemProduct.product.FK_Shop.slug}/product/${itemProduct.product.Slug}`}
                          >
                            <a className="link-body">
                              {itemProduct.product.Title}
                            </a>
                          </Link>
                          <div className="mt-2">{itemProduct.count} عدد</div>
                        </div>
                        <div
                          className="mr-auto"
                          style={{ marginRight: "auto" }}
                        >
                          {_asist.PSeparator(itemProduct.product.Price / 10)}{" "}
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
                    {_asist.PSeparator(cartPrice / 10)} تومان
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
                    {_asist.PSeparator(totalPrice / 10)} تومان
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
                  href={`/cart/address/update/${addressReceiver.id}?prev=payment`}
                  className="font-size-8 link-body"
                >
                  ویرایش
                </Link>
              </div>
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
                  {_asist.PSeparator(totalPrice / 10)}
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
                  {_asist.PSeparator(totalPrice / 10)}
                </strong>
                تومان
              </div>

              <AppButton
                loader={loaderButton}
                onClick={invoicePay}
                title="پرداخت آنلاین"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cart.Layout = ShopLayout;
