import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// components
import ShopLayout from "../../../components/shopLayout";
// methods
import { _getListInvoice } from "../../../api/cart";

// scss
import styles from "./payment.module.scss";
import AppButton from "../../../components/AppButton";
import { errorMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";
import diviedNumber from "../../../utils/diviedNumber";

export default function Cart() {
  const router = useRouter();
  const [dataCart, setDataCart] = useState([]);
  const [listInvoice, setListInvoice] = useState([]);
  const [isLoadInvoice, setIsLoadInvoice] = useState(true);
  const [loaderButton, setLoaderButton] = useState(false);

  useEffect(() => {
    _getListInvoice(setDataCart, setListInvoice, setIsLoadInvoice);
  }, []);

  const _addCoupon = async (e) => {
    e.preventDefault();
    const valueCoupon = e.target[0].value;
    if (valueCoupon) {
      setIsLoadInvoice(true);
      try {
        const response = await authhttp.patch(`/api/v1/cart/set_coupon/`, {
          coupon: valueCoupon,
        });
        const dataCoupen = response.data;

        if (response.status === 200) {
          if (dataCoupen?.errors[0]) {
            errorMessage(dataCoupen.errors[0]);
          }

          const response = await authhttp.get(`/api/v1/cart/me/`);
          const data = await response.data;
          if (response.status === 200) {
            setDataCart(data);
            setListInvoice(data.ordered_items);

            setIsLoadInvoice(false);
          }
          setIsLoadInvoice(false);

          setIsLoadInvoice(false);
        } else {
          setIsLoadInvoice(false);
        }
      } catch (e) {
        return false;
      }
    }
  };

  // const _deleteCoupon = async (coupon) => {
  //   setIsLoadInvoice(true);
  //   const response = await authhttp.patch(`/api/v1/cart/unset_coupon/`, {
  //     coupon,
  //   });
  //   if (response.status === 200) {
  //     await _getListInvoice();
  //     setIsLoadInvoice(false);
  //   }
  // };

  const invoicePay = async () => {
    try {
      setLoaderButton(true);
      setIsLoadInvoice(true);
      const response = await authhttp.post(`/api/v1/cart/pay/`);
      if (response.status === 200) {
        const data = await response.data;
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
              {dataCart.coupon_details?.coupons &&
                dataCart.coupon_details.coupons.map(
                  ({ coupon, price }, index) => {
                    return (
                      <div
                        key={index}
                        className="border border-success bg-white font-size-9 py-2 px-2 pr-3 mt-3 rounded d-flex flex-wrap justify-content-between align-items-center"
                      >
                        <span className=" text-success ml-3">
                          کوپن <span className="mx-1">{coupon.title}</span> با
                          مبلغ{" "}
                          <span className="mx-1 fs-5">
                            {diviedNumber(price / 10)}
                          </span>{" "}
                          تومان برای شما فعال گردید.
                        </span>
                        {/* <button
                          onClick={() => _deleteCoupon({ coupon: coupon.code })}
                          className="btn btn-link text-danger btn-sm mr-auto"
                        >
                          <i className="fas fa-times"></i>
                        </button> */}
                      </div>
                    );
                  }
                )}
            </div>
            <h3 className="font-size1 text-dark mt-3">فاکتور سفارش</h3>

            <div className="mt-3 position-relative">
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
                          {diviedNumber(itemProduct.product.Price / 10)} تومان
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="font-size-sm border-bottom py-3">
                <div className="d-flex py-1">
                  <span>جمع بهای سفارش:</span>
                  <span className="mr-auto" style={{ marginRight: "auto" }}>
                    {diviedNumber(dataCart.cart_price / 10)} تومان
                  </span>
                </div>
                <div className="d-flex py-1">
                  <span>هزینه ارسال:</span>{" "}
                  <span className="mr-auto" style={{ marginRight: "auto" }}>
                    {diviedNumber(dataCart?.logistic_details?.total_price / 10)}{" "}
                    تومان
                  </span>
                </div>
                {!!dataCart?.coupon_details?.total && (
                  <div className="d-flex py-1 text-danger">
                    <span>کدتخفیف (-) :</span>
                    <span className="mr-auto" style={{ marginRight: "auto" }}>
                      {diviedNumber(dataCart?.coupon_details?.total / 10)}
                      تومان
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
                    {diviedNumber(dataCart.total_price / 10)} تومان
                  </span>
                </div>
              </div>
            </div>

            {/* inforamation */}
            <div className="mt-3 p-3 border rounded font-size-sm my-3 line-height-normal">
              <div className="mx-auto" style={{ textAlign: "center" }}>
                تمامی بسته‌های پستی به آقا/خانم
                <strong className="mx-1">
                  {" "}
                  {dataCart?.address?.receiver_full_name}
                </strong>
                به آدرس
                <strong className="font-size-8 mx-1">
                  {" "}
                  {dataCart?.address?.address}
                </strong>
                تحویل داده می‌شوند.
              </div>
              <div className="text-left line-height-1 mb-5 mb-md-0">
                <Link
                  href={`/cart/address/update/${dataCart?.address?.id}?prev=payment`}
                  className="font-size-8 link-body"
                >
                  ویرایش
                </Link>
              </div>
            </div>
            {!!dataCart?.logistic_details?.errors.length && (
              <div
                style={{
                  border: "1px solid red",
                  color: "red",
                  padding: "10px",
                }}
              >
                {dataCart?.logistic_details?.errors.map((value, index) => (
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
                  {diviedNumber(dataCart.total_price / 10)}
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
                  {diviedNumber(dataCart.total_price / 10)}
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
